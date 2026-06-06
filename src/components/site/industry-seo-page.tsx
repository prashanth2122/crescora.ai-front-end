import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { siteContent } from "@/lib/site-content";
import { buildBreadcrumbSchema, type BreadcrumbItem, type IndustrySeo, seoSoftwareSchema } from "@/lib/india-seo-data";

type IndustrySeoPageProps = {
  industry: IndustrySeo;
  breadcrumbs: BreadcrumbItem[];
  backHref: string;
  backLabel: string;
};

export function IndustrySeoPage({ industry, breadcrumbs, backHref, backLabel }: IndustrySeoPageProps) {
  return (
    <>
      <SeoJsonLd data={seoSoftwareSchema} />
      <SeoJsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Industry"
        title={industry.title}
        description={`${industry.description} This page is built to match the commercial search intent behind ${industry.keywordTarget}.`}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Search target" title={industry.keywordTarget} description={industry.h1} />
              <p className="mt-6 text-sm leading-7 text-zinc-600">{industry.focus}</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow="Proof"
                title="Build the page around what the buyer needs to see."
                description={industry.proof}
              />
              <p className="mt-6 text-sm leading-7 text-zinc-600">
                The report recommends using state proof, workflow proof, screenshots, and local citations to avoid thin industry pages.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">CTA</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">{industry.ctaLabel}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
            Use the industry page to move from search intent into a booked conversation, then route buyers back to the right state and workflow pages.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
              <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
              <Link href={backHref}>{backLabel}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
