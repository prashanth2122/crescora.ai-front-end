import Link from "next/link";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildAbsoluteUrl, buildFaqPageSchema, buildRepresentativeImageJsonLd, buildRouteSocialImagePath, siteOrigin } from "@/lib/seo";
import type { RevenuePage } from "@/lib/revenue-pages";
import { siteContent } from "@/lib/site-content";
import type { BreadcrumbItem } from "@/lib/india-seo-data";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";

type RevenueSolutionPageProps = {
  page: RevenuePage;
  breadcrumbs: BreadcrumbItem[];
};

function ScreenshotSurface({ page, index }: { page: RevenuePage["screenshots"][number]; index: number }) {
  const shellClass =
    page.variant === "dashboard"
      ? "grid gap-4 md:grid-cols-[1.1fr_0.9fr]"
      : "grid gap-4 lg:grid-cols-[1.05fr_0.95fr]";

  return (
    <Card className="overflow-hidden border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
      <CardContent className="p-0">
        <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{page.eyebrow}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">{page.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">{page.description}</p>
        </div>
        <div className="p-6">
          <div className={shellClass}>
            <div className="rounded-[1.5rem] border border-zinc-900 bg-zinc-950 p-5 text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/50">Product View {index + 1}</p>
                  <p className="mt-2 text-lg font-semibold">{page.variant === "builder" ? "Workflow builder" : page.variant === "dashboard" ? "Operations dashboard" : "Conversation workspace"}</p>
                </div>
                <Badge className="border-white/10 bg-white/10 text-white hover:bg-white/15">Crescora AI</Badge>
              </div>
              <div className="mt-5 space-y-3">
                {page.primaryItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="border-zinc-200 bg-zinc-50 shadow-none">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Interface notes</p>
                  <div className="mt-4 space-y-3">
                    {page.secondaryItems.map((item) => (
                      <div key={item} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-zinc-200 bg-white shadow-none">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Why it matters</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{page.footer}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function buildServiceSchema(page: RevenuePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metadataDescription ?? page.description,
    serviceType: page.keywordTarget,
    provider: {
      "@type": "Organization",
      name: siteContent.site.name,
      url: siteOrigin,
    },
    url: buildAbsoluteUrl(`/solutions/${page.slug}`),
    image: buildRepresentativeImageJsonLd(buildRouteSocialImagePath(`/solutions/${page.slug}`)),
    areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates", "Singapore"],
  };
}

function buildExamplesSchema(page: RevenuePage) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${page.title} rollout examples`,
    itemListElement: page.examples.map((example, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: example.title,
      description: example.description,
    })),
  };
}

export function RevenueSolutionPage({ page, breadcrumbs }: RevenueSolutionPageProps) {
  const overviewSection = page.overviewSection ?? {
    eyebrow: "What this page covers",
    title: page.title,
    description: page.description,
  };
  const screenshotsSection = page.screenshotsSection ?? {
    eyebrow: "Product screenshots",
    title: "Show the operating surface buyers care about.",
    description: "Each panel highlights how the workflow behaves in production and what the team can actually verify.",
  };
  const implementationSection = page.implementationSection ?? {
    eyebrow: "Implementation",
    title: "A production rollout path, not a generic feature list.",
    description: "These phases keep the first deployment narrow, measurable, and safe to operate.",
  };
  const examplesSection = page.examplesSection ?? {
    eyebrow: "Examples",
    title: "Use cases and rollout patterns grounded in customer operations.",
    description: "These examples show how the same product surface is adapted to different jobs without changing the operating model.",
  };
  const proofSection = page.proofSection ?? {
    eyebrow: "Proof",
    title: "What the team verifies in the pilot.",
    description: "These are the operational signals that show whether the workflow is ready to expand.",
  };
  const outcomesSection = page.outcomesSection ?? {
    eyebrow: "Outcomes",
    title: "The business outcomes this rollout is meant to improve.",
    description: "Keep the proof anchored to measurable workflow health and customer progress.",
  };
  const faqSection = page.faqSection ?? {
    eyebrow: "FAQ",
    title: "Implementation questions buyers ask before rollout.",
    description: "The answers stay practical and product-specific instead of relying on search-result markup.",
  };
  const relatedSection = page.relatedSection ?? {
    eyebrow: "Related pages",
    title: "Move buyers to the right next decision.",
    description: "Primary solution pages should connect to proof, pricing, and decision-stage content instead of duplicating more thin keyword pages.",
  };
  const finalCta: NonNullable<RevenuePage["finalCta"]> = page.finalCta ?? {
    eyebrow: "Next step",
    title: page.ctaLabel,
    description: "Scope the first workflow, confirm the success metric, and identify the owner handoff before expanding the automation surface.",
    note: undefined,
    primaryCta: { label: "Request demo", href: page.ctaHref },
    secondaryCta: siteContent.ctas.requestScopeCall,
  };

  return (
    <>
      <SeoJsonLd data={buildServiceSchema(page)} />
      <SeoJsonLd data={buildExamplesSchema(page)} />
      <SeoJsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <SeoJsonLd data={buildFaqPageSchema(page.faq)} />

      <PageHero
        eyebrow={page.heroEyebrow ?? "Solution"}
        title={page.heroTitle}
        description={page.heroDescription}
        primaryCta={page.heroPrimaryCta ?? siteContent.ctas.bookProjectDemo}
        secondaryCta={page.heroSecondaryCta ?? siteContent.ctas.requestScopeCall}
        supportText={page.heroSupportLine}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={overviewSection.eyebrow} title={overviewSection.title} description={overviewSection.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {page.summaryCards.map((card) => (
            <Card key={card.label} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">{card.label}</p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{card.value}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={screenshotsSection.eyebrow} title={screenshotsSection.title} description={screenshotsSection.description} />
        {page.screenshots.map((screenshot, index) => (
          <ScreenshotSurface key={screenshot.title} page={screenshot} index={index} />
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={implementationSection.eyebrow} title={implementationSection.title} description={implementationSection.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {page.implementation.map((phase) => (
            <Card key={phase.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{phase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{phase.summary}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-700">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={examplesSection.eyebrow} title={examplesSection.title} description={examplesSection.description} />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {page.examples.map((example) => (
            <Card key={example.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{example.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{example.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-700">
                  {example.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        {page.examplesSupportLine ? (
          <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-600">{page.examplesSupportLine}</p>
        ) : null}
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow={proofSection.eyebrow} title={proofSection.title} description={proofSection.description} />
              <div className="mt-6 space-y-4">
                {page.proofPoints.map((point) => (
                  <div key={`${point.label}-${point.value}`} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">{point.label}</p>
                    <p className="mt-2 text-lg font-semibold text-zinc-950">{point.value}</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{point.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={outcomesSection.eyebrow}
                title={outcomesSection.title}
                description={outcomesSection.description}
                tone="inverse"
              />
              <div className="mt-6 space-y-3">
                {page.outcomes.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-white/85">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={faqSection.eyebrow} title={faqSection.title} description={faqSection.description} />
        <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              {page.faq.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="text-zinc-600">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={relatedSection.eyebrow} title={relatedSection.title} description={relatedSection.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {page.relatedLinks.map((item) => (
            <Card key={item.href} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={item.href}>{item.ctaLabel ?? "Open page"}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-950 px-6 py-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/50">{finalCta.eyebrow ?? "Next step"}</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">{finalCta.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">{finalCta.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-100">
                <Link href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Link>
              </Button>
              {finalCta.secondaryCta ? (
                <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                  <Link href={finalCta.secondaryCta.href}>{finalCta.secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>
          {finalCta.note ? <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">{finalCta.note}</p> : null}
        </div>
      </section>
    </>
  );
}
