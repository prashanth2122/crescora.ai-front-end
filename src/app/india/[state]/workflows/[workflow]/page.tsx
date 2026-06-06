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
  indiaStates,
  stateBySlug,
  workflowBySlug,
  seoSoftwareSchema,
} from "@/lib/india-seo-data";

type Params = Promise<{ state: string; workflow: string }>;

export function generateStaticParams() {
  return indiaStates.flatMap((state) =>
    state.workflowSlugs.map((workflow) => ({ state: state.slug, workflow })),
  );
}

export async function generateMetadata({ params }: { params: Params }) {
  const { state: stateSlug, workflow: workflowSlug } = await params;
  const state = stateBySlug.get(stateSlug);
  const workflow = workflowBySlug.get(workflowSlug);

  if (!state || !workflow) {
    return {};
  }

  return {
    title: `${workflow.title} in ${state.name} | FLOW`,
    description: `${workflow.keywordTarget} for ${state.name}. ${state.description}`,
    alternates: { canonical: `/india/${state.slug}/workflows/${workflow.slug}` },
  };
}

export default async function StateWorkflowPage({ params }: { params: Params }) {
  const { state: stateSlug, workflow: workflowSlug } = await params;
  const state = stateBySlug.get(stateSlug);
  const workflow = workflowBySlug.get(workflowSlug);

  if (!state || !workflow) {
    notFound();
  }

  const primaryIndustrySlug = getStatePrimaryIndustrySlug(state.slug);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://crescora.ai" },
    { name: "India SEO", href: "https://crescora.ai/india" },
    { name: state.name, href: `https://crescora.ai/india/${state.slug}` },
    { name: workflow.title, href: `https://crescora.ai/india/${state.slug}/workflows/${workflow.slug}` },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoSoftwareSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={`${state.name} × workflow`}
        title={`${workflow.title} in ${state.name} | FLOW`}
        description={`${workflow.description} This page combines state relevance with workflow intent so the page is genuinely unique.`}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Keyword target" title={workflow.keywordTarget} description={workflow.headline} />
              <div className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
                <p>State: {state.name}</p>
                <p>Language targets: {state.languages.join(", ")}</p>
                <p>State context: {state.stateFocus}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Localized module" title="Add proof, screenshots, and a local FAQ." description={state.localFaqNote} />
              <div className="mt-6 space-y-2 text-sm leading-7 text-zinc-600">
                {state.localSeeds.map((seed) => (
                  <p key={seed}>{seed}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Page structure" title="Use a repeatable outline with a unique local angle." description="The report recommends clear titles, a strong first paragraph, and content that answers the buyer’s exact problem." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workflow.outline.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-base font-medium text-zinc-950">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Industry tie-in" title={`${state.name} should connect the workflow to ${state.industryFocus}.`} description="State × industry pages should stay focused on the most relevant commercial use case." />
              <p className="mt-6 text-sm leading-7 text-zinc-600">
                This workflow page should link back to the primary state-industry page so Google sees a clean topical graph.
              </p>
              <Button asChild className="mt-6 h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                <Link href={`/india/${state.slug}/industries/${primaryIndustrySlug}`}>Open state industry page</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">CTA</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{workflow.ctaLabel}</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Use the workflow page to show how FLOW solves the exact job buyers search for in {state.name}.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                  <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                  <Link href={siteContent.ctas.requestScopeCall.href}>{siteContent.ctas.requestScopeCall.label}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
