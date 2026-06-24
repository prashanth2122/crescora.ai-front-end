import { statSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";

import { comparisonCards } from "@/lib/decision-pages";
import { revenuePages } from "@/lib/revenue-pages";
import { siteOrigin } from "@/lib/seo";

type SitemapEntry = {
  path: string;
  sourceFile: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const indexableRoutes: SitemapEntry[] = [
  { path: "/", sourceFile: "src/app/page.tsx", changeFrequency: "weekly", priority: 1 },
  { path: "/platform", sourceFile: "src/app/platform/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing", sourceFile: "src/app/pricing/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { path: "/trust", sourceFile: "src/app/trust/page.tsx", changeFrequency: "monthly", priority: 0.7 },
  { path: "/resources", sourceFile: "src/app/resources/page.tsx", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", sourceFile: "src/app/about/page.tsx", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", sourceFile: "src/app/contact/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions", sourceFile: "src/app/solutions/page.tsx", changeFrequency: "weekly", priority: 0.85 },
  { path: "/industries", sourceFile: "src/app/industries/page.tsx", changeFrequency: "weekly", priority: 0.75 },
  { path: "/industries/healthcare", sourceFile: "src/app/industries/healthcare/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/hospitals", sourceFile: "src/app/industries/hospitals/page.tsx", changeFrequency: "monthly", priority: 0.75 },
  { path: "/industries/clinics", sourceFile: "src/app/industries/clinics/page.tsx", changeFrequency: "monthly", priority: 0.75 },
  { path: "/industries/real-estate", sourceFile: "src/app/industries/real-estate/page.tsx", changeFrequency: "monthly", priority: 0.75 },
  { path: "/industries/education", sourceFile: "src/app/industries/education/page.tsx", changeFrequency: "monthly", priority: 0.75 },
  { path: "/industries/support-teams", sourceFile: "src/app/industries/support-teams/page.tsx", changeFrequency: "monthly", priority: 0.7 },
  { path: "/industries/service-businesses", sourceFile: "src/app/industries/service-businesses/page.tsx", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare", sourceFile: "src/app/compare/page.tsx", changeFrequency: "monthly", priority: 0.65 },
  { path: "/proof", sourceFile: "src/app/proof/page.tsx", changeFrequency: "monthly", priority: 0.7 },
  { path: "/proof/healthcare-front-desk-automation", sourceFile: "src/lib/decision-pages.ts", changeFrequency: "monthly", priority: 0.6 },
  { path: "/proof/real-estate-lead-operations", sourceFile: "src/lib/decision-pages.ts", changeFrequency: "monthly", priority: 0.6 },
  { path: "/proof/education-admissions-workflow", sourceFile: "src/lib/decision-pages.ts", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", sourceFile: "src/lib/privacy-policy-content.ts", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", sourceFile: "src/lib/terms-of-service-content.ts", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", sourceFile: "src/lib/cookie-policy-content.ts", changeFrequency: "yearly", priority: 0.3 },
  { path: "/acceptable-use", sourceFile: "src/lib/acceptable-use-policy-content.ts", changeFrequency: "yearly", priority: 0.3 },
  ...comparisonCards.map((card) => ({
    path: card.href,
    sourceFile: "src/lib/decision-pages.ts",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  })),
  ...revenuePages.map((page) => ({
    path: `/solutions/${page.slug}`,
    sourceFile: "src/lib/revenue-pages.ts",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  })),
];

function getFileLastModified(sourceFile: string) {
  const absolutePath = join(/* turbopackIgnore: true */ process.cwd(), sourceFile);
  return statSync(absolutePath).mtime;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((entry) => ({
    url: `${siteOrigin}${entry.path}`,
    lastModified: getFileLastModified(entry.sourceFile),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
