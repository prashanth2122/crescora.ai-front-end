import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/seo";

const siteHost = new URL(siteOrigin).host;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteOrigin}/sitemap.xml`,
    host: siteHost,
  };
}
