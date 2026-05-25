const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_id",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
];

const ATTRIBUTION_STORAGE_KEY = "dr_attribution";
const EXTERNAL_ID_STORAGE_KEY = "dr_external_id";
const TARGET_KEYWORD = "Luxury Interior Design Services London";

function readJson(storage, key) {
  try {
    const raw = storage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeJson(storage, key, value) {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {}
}

function getStorage(type) {
  if (typeof window === "undefined") return null;
  try {
    return type === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

function cleanObject(object) {
  return Object.fromEntries(
    Object.entries(object).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

function getQueryAttribution() {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  return cleanObject(
    ATTRIBUTION_KEYS.reduce((acc, key) => {
      const value = params.get(key);
      if (value) acc[key] = value;
      return acc;
    }, {})
  );
}

function readStoredAttribution() {
  const storage = getStorage("session");
  return storage ? readJson(storage, ATTRIBUTION_STORAGE_KEY) : {};
}

function persistAttribution(attribution) {
  const storage = getStorage("session");
  if (storage) writeJson(storage, ATTRIBUTION_STORAGE_KEY, attribution);
  return attribution;
}

function normalizeEmail(email) {
  return email?.trim().toLowerCase() || "";
}

function normalizePhone(phone) {
  return phone?.replace(/[^\d+]/g, "") || "";
}

function splitName(name) {
  const parts = name?.trim().split(/\s+/).filter(Boolean) || [];
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" "),
  };
}

export function ensureExternalId() {
  const storage = getStorage("local");
  if (!storage) return "";

  const existing = storage.getItem(EXTERNAL_ID_STORAGE_KEY);
  if (existing) return existing;

  const generated = typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `dr-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  storage.setItem(EXTERNAL_ID_STORAGE_KEY, generated);
  return generated;
}

function getTrackingContext() {
  const attribution = persistAttribution({
    ...readStoredAttribution(),
    ...getQueryAttribution(),
  });

  return {
    ...attribution,
    externalId: ensureExternalId(),
    page_location: typeof window !== "undefined" ? window.location.href : "",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    page_title: typeof document !== "undefined" ? document.title : "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
  };
}

function buildUserData({ name, email, phone, externalId }) {
  const normalizedEmail = normalizeEmail(email);
  const normalizedPhone = normalizePhone(phone);
  const { firstName, lastName } = splitName(name);

  return {
    gtmUserData: cleanObject({
      email: normalizedEmail,
      phone_number: normalizedPhone,
      address: cleanObject({
        first_name: firstName,
        last_name: lastName,
      }),
    }),
    metaUserData: cleanObject({
      em: normalizedEmail,
      ph: normalizedPhone,
      fn: firstName.toLowerCase(),
      ln: lastName.toLowerCase(),
      external_id: externalId,
    }),
  };
}

function getAttributionFields(context) {
  return cleanObject({
    utm_source: context.utm_source,
    utm_medium: context.utm_medium,
    utm_campaign: context.utm_campaign,
    utm_id: context.utm_id,
    utm_term: context.utm_term,
    utm_content: context.utm_content,
    gclid: context.gclid,
    fbclid: context.fbclid,
    msclkid: context.msclkid,
  });
}

export function bootstrapTrackingContext() {
  if (typeof window === "undefined") return;

  const context = getTrackingContext();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "landing_page_view",
    page_type: "landing_page",
    intent_category: "transactional",
    target_keyword: TARGET_KEYWORD,
    business_name: "Dwell Rich",
    page_location: context.page_location,
    page_path: context.page_path,
    page_title: context.page_title,
    referrer: context.referrer,
    external_id: context.externalId,
    ...getAttributionFields(context),
  });
}

export function trackLeadSubmission({ name, email, phone, service, message }) {
  if (typeof window === "undefined") return;

  const context = getTrackingContext();
  const { gtmUserData, metaUserData } = buildUserData({
    name,
    email,
    phone,
    externalId: context.externalId,
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
    form_name: "contact_form",
    lead_type: "consultation_request",
    service_selected: service || "not_provided",
    page_type: "landing_page",
    intent_category: "transactional",
    target_keyword: TARGET_KEYWORD,
    page_location: context.page_location,
    page_path: context.page_path,
    page_title: context.page_title,
    referrer: context.referrer,
    external_id: context.externalId,
    message_length: message?.trim().length || 0,
    user_data: gtmUserData,
    ...getAttributionFields(context),
  });

  if (typeof window.fbq === "function") {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const matchKey = JSON.stringify(metaUserData);

    if (pixelId && matchKey !== window.__drMetaMatchKey) {
      window.fbq("init", pixelId, metaUserData);
      window.__drMetaMatchKey = matchKey;
    }

    window.fbq("track", "Lead", {
      content_name: service || "Luxury Interior Design Consultation",
      content_category: TARGET_KEYWORD,
      currency: "GBP",
      value: 1,
      page_path: context.page_path,
      page_title: context.page_title,
      external_id: context.externalId,
      ...getAttributionFields(context),
    });
  }
}
