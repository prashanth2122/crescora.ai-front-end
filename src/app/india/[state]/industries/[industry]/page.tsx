import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import {
  buildBreadcrumbSchema,
  getStatePrimaryIndustrySlug,
  industryBySlug,
  seoOrganizationSchema,
} from "@/lib/india-seo-data";
import { buildFaqPageSchema, createPageMetadata } from "@/lib/seo";
import { stateSeoSeedBySlug, stateSeoSeedList } from "@/lib/state-seo-seeds";
import {
  buildStateIndustryDescription,
  buildStateIndustryFaqItems,
  buildStateIndustryTitle,
  formatStateIndustryList,
  stateIndustrySeoBySlug,
  type StateIndustrySlug,
} from "@/lib/state-industry-seo";
import { getStateWorkflowSlugs, stateWorkflowSeoBySlug } from "@/lib/state-workflow-seo";

type Params = Promise<{ state: string; industry: string }>;

function isSupportedStateIndustry(stateSlug: string, industrySlug: string): industrySlug is StateIndustrySlug {
  return getStatePrimaryIndustrySlug(stateSlug) === industrySlug && industrySlug in stateIndustrySeoBySlug;
}

function buildWorkflowCards(stateSlug: string) {
  return getStateWorkflowSlugs(stateSlug)
    .map((workflowSlug) => {
      const config = stateWorkflowSeoBySlug[workflowSlug];

      return {
        slug: workflowSlug,
        title: config.label,
        description: config.businessOutcomeLine,
      };
    })
    .slice(0, 4);
}

export function generateStaticParams() {
  return stateSeoSeedList.map((seed) => ({
    state: seed.slug,
    industry: getStatePrimaryIndustrySlug(seed.slug),
  }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { state: stateSlug, industry: industrySlug } = await params;
  const seed = stateSeoSeedBySlug.get(stateSlug);

  if (!seed || !isSupportedStateIndustry(stateSlug, industrySlug)) {
    return {};
  }

  const config = stateIndustrySeoBySlug[industrySlug];

  return {
    ...createPageMetadata({
      title: buildStateIndustryTitle(seed, config),
      description: buildStateIndustryDescription(seed, config),
      path: `/india/${seed.slug}/industries/${industrySlug}`,
    }),
  };
}

export default async function StateIndustryPage({ params }: { params: Params }) {
  const { state: stateSlug, industry: industrySlug } = await params;
  const seed = stateSeoSeedBySlug.get(stateSlug);

  if (!seed || !isSupportedStateIndustry(stateSlug, industrySlug)) {
    notFound();
  }

  const config = stateIndustrySeoBySlug[industrySlug];
  const industry = industryBySlug.get(industrySlug);

  if (!industry) {
    notFound();
  }

  const workflowCards = buildWorkflowCards(seed.slug);
  const faqItems = buildStateIndustryFaqItems(seed, config);
  const faqSchema = buildFaqPageSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "India", href: "https://www.crescora.ai/india" },
    { name: seed.name, href: `https://www.crescora.ai/india/${seed.slug}` },
    { name: industry.name, href: `https://www.crescora.ai/india/${seed.slug}/industries/${industry.slug}` },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoOrganizationSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <SeoJsonLd data={faqSchema} />

      <PageHero
        eyebrow={`${seed.name} industry`}
        title={`${config.label} for teams in ${seed.name}`}
        description={`FLOW helps ${config.titleNoun} teams in ${seed.name} reduce ${seed.primaryPain}. Support ${formatStateIndustryList(seed.languages)} customer journeys across ${formatStateIndustryList(seed.cityClusters)} with workflow orchestration, AI routing, reminders, records, analytics, and human handoff.`}
        primaryCta={{ label: config.ctaLabel, href: "/contact" }}
        secondaryCta={{ label: `Discuss ${seed.name} rollout`, href: "/contact" }}
        supportText={`Local search focus includes ${seed.localSearchTerms.join(", ")}. Best fit for ${formatStateIndustryList(seed.industries)} in ${seed.name}.`}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry fit"
          title={`Why ${config.titleNoun} teams in ${seed.name} choose FLOW`}
          description={`${config.buyerLine} The strongest need in ${seed.name} usually comes from ${seed.commercialAngle}.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Commercial angle</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Built for real state demand</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Teams in {seed.name} often operate under {seed.commercialAngle}. The goal is cleaner execution, not generic chatbot replies.
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Core problem</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Fix the workflow gaps first</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                In {seed.name}, {seed.primaryPain} usually create the biggest operational drag for {config.titleNoun} teams.
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Coverage</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Built for {formatStateIndustryList(seed.cityClusters)}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Launch with support for {formatStateIndustryList(seed.languages)} customer journeys while keeping one reusable industry playbook across the state.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry outcomes"
          title={`What ${config.titleNoun} should improve in ${seed.name}`}
          description={config.workflowLine}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {config.outcomeAreas.map((area) => (
            <Card key={area} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold tracking-tight text-zinc-950">{area}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Use FLOW to make {area.toLowerCase()} more visible, more consistent, and less dependent on manual follow-up across {seed.name}.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow coverage"
          title={`Relevant workflows for ${industry.name.toLowerCase()} in ${seed.name}`}
          description={`These workflow pages are the best next layer for ${industry.name.toLowerCase()} in ${seed.name}.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workflowCards.map((card) => (
            <Card key={card.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{card.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/india/${seed.slug}/workflows/${card.slug}`}>Open workflow page</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow="Implementation"
                title={`How FLOW implementation works for ${industry.name.toLowerCase()} in ${seed.name}`}
                description={config.launchLine}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "1. Pick the highest-friction workflow",
                    description: `Start with the process most affected by ${seed.primaryPain} in ${seed.name}.`,
                  },
                  {
                    title: "2. Capture the right customer context",
                    description: "Collect the details, intent, status, and next-step signals your team needs before routing or follow-up starts.",
                  },
                  {
                    title: "3. Add routing and reminders",
                    description: "Connect AI understanding, forms, reminders, notifications, records, and escalation paths in one workflow.",
                  },
                  {
                    title: "4. Measure and improve",
                    description: `Track bookings, response quality, collections, unresolved cases, and drop-offs across ${formatStateIndustryList(seed.cityClusters)} and the broader ${seed.name} rollout.`,
                  },
                ].map((step) => (
                  <div key={step.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow="Local relevance"
                title={`Local language and market coverage in ${seed.name}`}
                description={`A strong ${config.titleNoun} page should stay relevant across ${formatStateIndustryList(seed.cityClusters)} while supporting ${formatStateIndustryList(seed.languages)} customer journeys.`}
              />
              <div className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
                <p>Priority cities: {formatStateIndustryList(seed.cityClusters)}</p>
                <p>Languages: {formatStateIndustryList(seed.languages)}</p>
                <p>Industry fit: {formatStateIndustryList(seed.industries)}</p>
                <p>Search themes: {seed.localSearchTerms.join(", ")}</p>
              </div>
              <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">What the rollout should protect</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Keep customer context, workflow state, reminders, handoff, and outcomes visible so teams in {seed.name} do not fall back into manual coordination.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={`FAQs for ${industry.name.toLowerCase()} in ${seed.name}`}
          description={`These are the rollout questions buyers in ${seed.name} ask before they commit to ${config.titleNoun} with FLOW.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <Card key={item.question} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold tracking-tight text-zinc-950">{item.question}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">Next step</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Ready to launch {config.titleNoun} in {seed.name}?</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">
            Use FLOW to reduce {seed.primaryPain} across {formatStateIndustryList(seed.cityClusters)} with workflows built for {industry.name.toLowerCase()}, customer journeys in {formatStateIndustryList(seed.languages)}, and rollout control that does not depend on manual follow-up.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
            Search-intent coverage includes {seed.localSearchTerms.join(", ")} while the implementation stays grounded in real workflow outcomes, analytics, records, and human handoff.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
              <Link href="/contact">{config.ctaLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10">
              <Link href={`/industries/${industry.slug}`}>Open full industry page</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10">
              <Link href={`/india/${seed.slug}`}>Open state page</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
