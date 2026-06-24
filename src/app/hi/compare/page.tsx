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
import { comparisonCards } from "@/lib/decision-pages";

const page = hiPageCopy.compare;
const copy = getLocaleCopy("hi");

export const metadata = createLocalizedMetadata(
  "/hi/compare",
  page.metadata.title,
  page.metadata.description,
  { noIndex: true },
);

const breadcrumbSchema = buildBreadcrumbSchema(page.breadcrumb);

export default function HindiComparePage() {
  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={copy.ctas.bookProjectDemo}
        secondaryCta={{ label: page.hero.secondaryCta, href: "/hi/solutions" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.section.eyebrow}
          title={page.section.title}
          description={page.section.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {comparisonCards.map((item) => (
            <Card key={item.href} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={item.href}>{copy.ctas.viewSolutions.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
