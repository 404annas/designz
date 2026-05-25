import { siteConfig } from "@/lib/site";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    sameAs: siteConfig.socialLinks,
    logo: `${siteConfig.url}/logo.webp`,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "UK Companies House",
      value: siteConfig.companyNumber,
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#professional-service`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    areaServed: ["London", "Dubai", "India"],
    serviceType: [
      "Luxury interior design",
      "Architectural design",
      "Turnkey build",
      "Joinery and craftsmanship",
    ],
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    department: [
      {
        "@type": "Place",
        name: "Central London Office",
        address: {
          "@type": "PostalAddress",
          ...siteConfig.additionalOffice,
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.siteName,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  const payload = [organizationSchema, professionalServiceSchema, websiteSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
