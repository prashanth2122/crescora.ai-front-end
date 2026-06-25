import Link from "next/link";

import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { proofCards } from "@/lib/decision-pages";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, LineChart, ShieldCheck, Workflow } from "lucide-react";
import { buildAbsoluteUrl, buildItemListSchema, buildPageSchema, buildRouteSocialImagePath, createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: siteContent.proofIndex.metadata.title,
  description: siteContent.proofIndex.metadata.description,
  path: "/proof",
  imagePath: buildRouteSocialImagePath("/proof"),
});

const proofBreadcrumbs = buildBreadcrumbSchema([
  { name: "Home", href: buildAbsoluteUrl("/") },
  { name: "Proof", href: buildAbsoluteUrl("/proof") },
]);

const proofPagesSchema = buildItemListSchema(
  "FLOW proof pages",
  proofCards.map((item) => ({
    name: item.title,
    url: buildAbsoluteUrl(item.href),
    description: item.text,
  })),
);

export default function ProofPage() {
  const { hero, notice, section, comparison, includes, metrics, credibility, finalCta } = siteContent.proofIndex;
  const credibilityIcons = [Workflow, CheckCircle2, ShieldCheck, LineChart];

  return (
    <PageShell>
      <SeoJsonLd
        data={buildPageSchema({
          type: "CollectionPage",
          name: siteContent.proofIndex.metadata.title,
          description: siteContent.proofIndex.metadata.description,
          path: "/proof",
        })}
      />
      <SeoJsonLd data={proofBreadcrumbs} />
      <SeoJsonLd data={proofPagesSchema} />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        visual={
          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(244,244,245,0.96)_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">FLOW example path</p>
            <div className="mt-6 space-y-3">
              {hero.previewSteps?.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                    {step}
                  </div>
                  {index < (hero.previewSteps?.length ?? 0) - 1 ? (
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-zinc-400 sm:block" />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {hero.previewMetrics?.map((metric) => (
                <div
                  key={metric}
                  className="rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm leading-6 text-zinc-700 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>
        }
      />

      {hero.trustLine ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-full border border-zinc-200 bg-white/90 px-6 py-4 text-sm leading-7 text-zinc-700 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            {hero.trustLine}
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm leading-7 text-zinc-700">{notice}</p>
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
                    <span
                      key={tag}
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium tracking-[0.02em] text-emerald-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="link" className="mt-auto h-auto w-fit p-0 pt-6 text-zinc-950 hover:no-underline">
                  <Link href={item.href}>{item.ctaLabel ?? siteContent.ctas.openProofPage.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.9rem] border border-zinc-900/90 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:p-8">
          <SectionHeading
            eyebrow={comparison.eyebrow}
            title={comparison.title}
            description={comparison.description}
            className="max-w-4xl [&_h2]:text-white [&_p]:text-white/72 [&_p:first-child]:text-white/50"
          />
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="grid grid-cols-2 border-b border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
              <div className="px-5 py-4">Before FLOW</div>
              <div className="border-l border-white/10 px-5 py-4">After FLOW</div>
            </div>
            {comparison.rows.map((row, index) => (
              <div
                key={row.before}
                className={`grid grid-cols-2 bg-white/3 text-sm leading-7 text-white/78 ${index < comparison.rows.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <div className="px-5 py-4">{row.before}</div>
                <div className="border-l border-white/10 px-5 py-4">{row.after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={includes.eyebrow} title={includes.title} description={includes.description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {includes.items.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex h-full items-start gap-3 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-[15px] leading-7 text-zinc-700">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={metrics.eyebrow} title={metrics.title} description={metrics.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {metrics.items.map((item) => (
            <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={credibility.eyebrow} title={credibility.title} description={credibility.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {credibility.cards.map((card, index) => {
            const Icon = credibilityIcons[index % credibilityIcons.length];

            return (
              <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-lg font-semibold tracking-tight text-zinc-950">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{card.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{finalCta.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">{finalCta.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-600">{finalCta.description}</p>
              {finalCta.note ? <p className="mt-4 text-sm leading-7 text-zinc-500">{finalCta.note}</p> : null}
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
