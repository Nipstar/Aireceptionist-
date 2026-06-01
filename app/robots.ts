import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Allow general crawlers and explicitly welcome major LLM crawlers.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: SITE.url + "/sitemap.xml",
    host: SITE.url,
  };
}
