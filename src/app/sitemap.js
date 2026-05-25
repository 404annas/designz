import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: "2026-05-25T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
