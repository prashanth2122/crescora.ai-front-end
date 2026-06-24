import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { createPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";
import {
  buildBreadcrumbSchema,
  getStatePrimaryIndustrySlug,
  indiaStates,
  stateBySlug,
  seoOrganizationSchema,
  workflows,
} from "@/lib/india-seo-data";

type StatePageProps = {
  params: Promise<{ state: string }>;
};

export function generateStaticParams() {
  return indiaStates.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({ params }: StatePageProps) {
  const { state: stateSlug } = await params;
  const state = stateBySlug.get(stateSlug);

  if (!state) {
    return {};
  }

  return {
    ...createPageMetadata({
      title: state.title,
      description: state.description,
      path: `/india/${state.slug}`,
    }),
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { state: stateSlug } = await params;
  const state = stateBySlug.get(stateSlug);

  if (!state) {
    notFound();
  }

  const primaryIndustrySlug = getStatePrimaryIndustrySlug(state.slug);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "India SEO", href: "https://www.crescora.ai/india" },
    { name: state.name, href: `https://www.crescora.ai/india/${state.slug}` },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoOrganizationSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={`Tier ${state.tier} state hub`}
        title={state.title}
        description={state.description}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Why this state matters" title={state.h1} description={state.stateFocus} />
              <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600">
                <p>
                  Target keyword: <span className="font-medium text-zinc-950">{state.keywordTarget}</span>
                </p>
                <p>Industry focus: {state.industryFocus}</p>
                <p>Localized proof: {state.localProof}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Languages" title="Priority language modules and query forms." description="English first, then localized modules where Search Console proves demand." />
              <div className="mt-6 flex flex-wrap gap-2">
                {state.languages.map((language) => (
                  <Badge key={language} variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                    {language}
                  </Badge>
                ))}
              </div>
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

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow pages"
          title="State × workflow pages should lead with the highest-friction jobs."
          description="The report says Tier A states should get at least three workflow pages plus proof and one industry page."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {state.workflowSlugs.map((workflowSlug) => {
            const workflow = workflows.find((item) => item.slug === workflowSlug);
            if (!workflow) return null;
            return (
              <Card key={workflow.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{workflow.keywordTarget}</p>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{workflow.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{workflow.headline}</p>
                  <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                    <Link href={`/india/${state.slug}/workflows/${workflow.slug}`}>Open state workflow page</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry page"
          title="State-industry pages should stay unique and proof-led."
          description="Each state should link to one primary industry page that matches its commercial search profile."
        />
        <div className="mt-6">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{state.industryFocus}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                Use the {state.name} page to prove relevance for {state.industryFocus.toLowerCase()}.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                The state page should not be a generic clone. Regional examples, FAQs, screenshots, and local proof
                are the difference between a scalable architecture and a thin page farm.
              </p>
              <Button asChild className="mt-6 h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                <Link href={`/india/${state.slug}/industries/${primaryIndustrySlug}`}>Open state industry page</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
