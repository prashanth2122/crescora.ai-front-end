import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { createLocalizedMetadata, getLocaleCopy } from "@/lib/locales";
import { hiPageCopy } from "@/lib/page-copy/hi";
import { solutionPages } from "@/lib/seo-marketing-data";

const page = hiPageCopy.solutions;
const copy = getLocaleCopy("hi");

export const metadata = createLocalizedMetadata(
  "/hi/solutions",
  page.metadata.title,
  page.metadata.description,
);

const breadcrumbSchema = buildBreadcrumbSchema(page.breadcrumb);

export default function HindiSolutionsPage() {
  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={copy.ctas.bookProjectDemo}
        secondaryCta={{ label: page.hero.secondaryCta, href: "/hi/blog" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.section.eyebrow}
          title={page.section.title}
          description={page.section.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solutionPages.map((pageItem) => (
            <Card key={pageItem.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{pageItem.keywordTarget}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{pageItem.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{pageItem.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/solutions/${pageItem.slug}`}>{copy.pageActions.openSolutionPage}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
