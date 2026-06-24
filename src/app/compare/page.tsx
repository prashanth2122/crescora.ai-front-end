import { CompareHubPageTemplate } from "@/components/site/compare-hub-page";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { compareHubPage, comparisonCards } from "@/lib/decision-pages";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { buildAbsoluteUrl, buildFaqPageSchema, buildItemListSchema, buildPageSchema, buildRouteSocialImagePath, createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: compareHubPage.metadata.title,
  description: compareHubPage.metadata.description,
  path: "/compare",
  imagePath: buildRouteSocialImagePath("/compare"),
});

const compareBreadcrumbs = buildBreadcrumbSchema([
  { name: "Home", href: buildAbsoluteUrl("/") },
  { name: "Compare", href: buildAbsoluteUrl("/compare") },
]);

const comparePagesSchema = buildItemListSchema(
  "FLOW comparison pages",
  comparisonCards.map((item) => ({
    name: item.title,
    url: buildAbsoluteUrl(item.href),
    description: item.text,
  })),
);

const compareFaqSchema = buildFaqPageSchema(compareHubPage.faq.items);

export default function ComparePage() {
  return (
    <>
      <SeoJsonLd
        data={buildPageSchema({
          type: "CollectionPage",
          name: compareHubPage.metadata.title,
          description: compareHubPage.metadata.description,
          path: "/compare",
        })}
      />
      <SeoJsonLd data={compareBreadcrumbs} />
      <SeoJsonLd data={comparePagesSchema} />
      <SeoJsonLd data={compareFaqSchema} />
      <CompareHubPageTemplate page={compareHubPage} />
    </>
  );
}
