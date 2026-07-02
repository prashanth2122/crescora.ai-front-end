import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { proofCards } from "@/lib/decision-pages";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { buildAbsoluteUrl, buildItemListSchema, buildPageSchema, createExactPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

export const metadata = createExactPageMetadata({
  title: siteContent.proofIndex.metadata.title,
  description: siteContent.proofIndex.metadata.description,
  path: "/workflow-examples",
});

const breadcrumbs = buildBreadcrumbSchema([
  { name: "Home", href: buildAbsoluteUrl("/") },
  { name: "Workflow Examples", href: buildAbsoluteUrl("/workflow-examples") },
]);

const examplesSchema = buildItemListSchema(
  "Crescora AI workflow examples",
  proofCards.map((item) => ({
    name: item.title,
    url: buildAbsoluteUrl(item.href),
    description: item.text,
  })),
);

export default function WorkflowExamplesPage() {
  const { hero, notice, section, includes, metrics, credibility, finalCta } = siteContent.proofIndex;

  return (
    <PageShell>
      <SeoJsonLd
        data={buildPageSchema({
          type: "CollectionPage",
          name: siteContent.proofIndex.metadata.title,
          description: siteContent.proofIndex.metadata.description,
          path: "/workflow-examples",
        })}
      />
      <SeoJsonLd data={breadcrumbs} />
      <SeoJsonLd data={examplesSchema} />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          {notice}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {proofCards.map((item) => (
            <Card key={item.href} className="flex h-full border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex h-full flex-col p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.outcomeTags?.map((tag) => (
                    <span key={tag} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="link" className="mt-auto h-auto w-fit p-0 pt-6 text-zinc-950 hover:no-underline">
                  <Link href={item.href} className="inline-flex items-center gap-1">
                    {item.ctaLabel ?? siteContent.ctas.openProofPage.label}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{includes.eyebrow}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{includes.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{includes.description}</p>
              <ul className="mt-6 space-y-3">
                {includes.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-zinc-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{metrics.eyebrow}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{metrics.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{metrics.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {metrics.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-sm font-semibold text-zinc-950">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={credibility.eyebrow} title={credibility.title} description={credibility.description} />
        <div className="mt-10 rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{finalCta.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">{finalCta.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-600">{finalCta.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                <Link href={finalCta.primary.href}>{finalCta.primary.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6">
                <Link href={finalCta.secondary.href}>{finalCta.secondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
