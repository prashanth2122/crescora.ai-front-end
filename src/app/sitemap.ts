import type { MetadataRoute } from "next";

import { comparisonCards } from "@/lib/decision-pages";
import { seoAllRoutes } from "@/lib/india-seo-data";
import {
  blogRoutes,
  demoFlowRoutes,
  industryLandingRoutes,
  solutionRoutes,
} from "@/lib/seo-marketing-data";
import { localizedEntryRoutes } from "@/lib/locales";

const routes = [
  "/",
  "/platform",
  "/industries",
  "/industries/healthcare",
  "/industries/real-estate",
  "/industries/education",
  "/use-cases",
  "/use-cases/whatsapp-automation",
  "/use-cases/appointment-booking-automation",
  "/use-cases/payment-follow-up-automation",
  "/use-cases/document-collection-automation",
  "/use-cases/customer-support-automation",
  "/use-cases/human-handoff-automation",
  "/pricing",
  "/trust",
  "/resources",
  "/about",
  "/contact",
  "/compare",
  "/compare/flow-vs-chatbots",
  "/compare/flow-vs-manual-whatsapp",
  "/compare/flow-vs-generic-automation",
  "/compare/flow-vs-crm-only",
  "/proof",
  "/proof/healthcare-front-desk-automation",
  "/proof/real-estate-lead-operations",
  "/proof/education-admissions-workflow",
  "/solutions",
  "/blog",
  "/hi",
  "/hi/solutions",
  "/hi/blog",
  "/hi/compare",
  "/hi/templates",
  "/hi/industries",
  "/hi/workflows",
  "/hi/india",
] as const;

const allRoutes = Array.from(
  new Set([
    ...routes,
    ...seoAllRoutes,
    ...solutionRoutes,
    ...blogRoutes,
    ...industryLandingRoutes,
    ...demoFlowRoutes,
    ...localizedEntryRoutes,
    ...comparisonCards.map((card) => card.href),
  ]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: `https://crescora.ai${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
