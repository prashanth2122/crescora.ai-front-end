import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { siteContent } from "@/lib/site-content";
import {
  buildBreadcrumbSchema,
  getStatePrimaryIndustrySlug,
  industryBySlug,
  indiaStates,
  stateBySlug,
  seoSoftwareSchema,
} from "@/lib/india-seo-data";

type Params = Promise<{ state: string; industry: string }>;

export function generateStaticParams() {
  return indiaStates.map((state) => ({
    state: state.slug,
    industry: getStatePrimaryIndustrySlug(state.slug),
  }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { state: stateSlug, industry: industrySlug } = await params;
  const state = stateBySlug.get(stateSlug);
  const industry = industryBySlug.get(industrySlug);

  if (!state || !industry) {
    return {};
  }

  return {
    title: `${industry.title} in ${state.name} | FLOW`,
    description: `${industry.description} ${state.description}`,
    alternates: { canonical: `/india/${state.slug}/industries/${industry.slug}` },
  };
}

export default async function StateIndustryPage({ params }: { params: Params }) {
  const { state: stateSlug, industry: industrySlug } = await params;
  const state = stateBySlug.get(stateSlug);
  const industry = industryBySlug.get(industrySlug);

  if (!state || !industry) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://crescora.ai" },
    { name: "India SEO", href: "https://crescora.ai/india" },
    { name: state.name, href: `https://crescora.ai/india/${state.slug}` },
    { name: industry.name, href: `https://crescora.ai/india/${state.slug}/industries/${industry.slug}` },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoSoftwareSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={`${state.name} × industry`}
        title={`${industry.title} in ${state.name} | FLOW`}
        description={`${industry.description} This state page should be distinct, proof-led, and relevant to ${state.name}.`}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Commercial fit" title={industry.h1} description={industry.focus} />
              <div className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
                <p>State: {state.name}</p>
                <p>Keyword target: {state.keywordTarget}</p>
                <p>Industry proof angle: {industry.proof}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Why it ranks" title="Local proof prevents duplicate-thin state pages." description={state.localProof} />
              <div className="mt-6 space-y-2 text-sm leading-7 text-zinc-600">
                {state.localSeeds.map((seed) => (
                  <p key={seed}>{seed}</p>
                ))}
                <p>{state.localFaqNote}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Page focus" title={`${industry.name} search intent in ${state.name}.`} description="The page should stay focused on the specific commercial use case buyers are already searching for." />
              <p className="mt-6 text-sm leading-7 text-zinc-600">
                Use screenshots, a small workflow diagram, and local context to make the page materially different from the national industry hub.
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">CTA</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{industry.ctaLabel}</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Tie the page back to the state hub and workflow pages to reinforce the topical graph.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                  <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                  <Link href={`/india/${state.slug}`}>Back to state hub</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
