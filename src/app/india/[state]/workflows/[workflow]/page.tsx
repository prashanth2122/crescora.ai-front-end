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
  seoOrganizationSchema,
  workflowBySlug,
} from "@/lib/india-seo-data";
import { buildFaqPageSchema, createPageMetadata } from "@/lib/seo";
import { stateSeoSeedBySlug } from "@/lib/state-seo-seeds";
import {
  buildStateWorkflowDescription,
  buildStateWorkflowFaqItems,
  buildStateWorkflowTitle,
  formatStateSeoList,
  getStateWorkflowSlugs,
  isSupportedStateWorkflow,
  stateWorkflowSeoBySlug,
} from "@/lib/state-workflow-seo";

type Params = Promise<{ state: string; workflow: string }>;

function buildAutomationCards(workflowSlug: string) {
  const workflow = workflowBySlug.get(workflowSlug);

  if (!workflow) {
    return [];
  }

  if (workflow.publicPage?.capabilitySection.items?.length) {
    return workflow.publicPage.capabilitySection.items.slice(0, 4);
  }

  return workflow.outline.slice(0, 4).map((item) => ({
    title: item,
    description: workflow.headline,
  }));
}

function buildLaunchSteps(workflowSlug: string) {
  const workflow = workflowBySlug.get(workflowSlug);

  if (!workflow) {
    return [];
  }

  if (workflow.publicPage?.journeySection.steps?.length) {
    return workflow.publicPage.journeySection.steps.slice(0, 5);
  }

  return workflow.outline.slice(0, 5);
}

function buildBeforeAfterRows(workflowSlug: string) {
  const workflow = workflowBySlug.get(workflowSlug);
  const rows = workflow?.publicPage?.beforeAfterSection.rows ?? [];

  return rows.slice(0, 4);
}

export function generateStaticParams() {
  return Array.from(stateSeoSeedBySlug.values()).flatMap((seed) =>
    getStateWorkflowSlugs(seed.slug).map((workflow) => ({ state: seed.slug, workflow })),
  );
}

export async function generateMetadata({ params }: { params: Params }) {
  const { state: stateSlug, workflow: workflowSlug } = await params;
  const seed = stateSeoSeedBySlug.get(stateSlug);

  if (!seed || !isSupportedStateWorkflow(stateSlug, workflowSlug)) {
    return {};
  }

  const config = stateWorkflowSeoBySlug[workflowSlug];

  return {
    ...createPageMetadata({
      title: buildStateWorkflowTitle(seed, config),
      description: buildStateWorkflowDescription(seed, config),
      path: `/india/${seed.slug}/workflows/${workflowSlug}`,
    }),
  };
}

export default async function StateWorkflowPage({ params }: { params: Params }) {
  const { state: stateSlug, workflow: workflowSlug } = await params;
  const seed = stateSeoSeedBySlug.get(stateSlug);

  if (!seed || !isSupportedStateWorkflow(stateSlug, workflowSlug)) {
    notFound();
  }

  const workflow = workflowBySlug.get(workflowSlug);

  if (!workflow) {
    notFound();
  }

  const config = stateWorkflowSeoBySlug[workflowSlug];
  const automationCards = buildAutomationCards(workflowSlug);
  const launchSteps = buildLaunchSteps(workflowSlug);
  const beforeAfterRows = buildBeforeAfterRows(workflowSlug);
  const faqItems = buildStateWorkflowFaqItems(seed, config);
  const faqSchema = buildFaqPageSchema(faqItems);
  const primaryIndustrySlug = getStatePrimaryIndustrySlug(seed.slug);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "India", href: "https://www.crescora.ai/india" },
    { name: seed.name, href: `https://www.crescora.ai/india/${seed.slug}` },
    {
      name: workflow.title,
      href: `https://www.crescora.ai/india/${seed.slug}/workflows/${workflow.slug}`,
    },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoOrganizationSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <SeoJsonLd data={faqSchema} />

      <PageHero
        eyebrow={`${seed.name} workflow`}
        title={`${config.label} for businesses in ${seed.name}`}
        description={`Crescora AI helps teams in ${seed.name} use ${config.titleNoun} workflows to reduce ${seed.primaryPain}. Support ${formatStateSeoList(seed.languages)} customer journeys across ${formatStateSeoList(seed.cityClusters)} with workflow orchestration, AI routing, records, reminders, analytics, and human handoff.`}
        primaryCta={{ label: config.ctaLabel, href: "/contact" }}
        secondaryCta={{ label: `Discuss ${seed.name} rollout`, href: "/contact" }}
        supportText={`Service examples include ${seed.localSearchTerms.join(", ")}. Best fit for ${formatStateSeoList(seed.industries)} in ${seed.name}.`}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="State fit"
          title={`Why ${config.titleNoun} matters in ${seed.name}`}
          description={`Businesses in ${seed.name} usually need ${config.titleNoun} when they face ${seed.primaryPain}. Crescora AI keeps the customer journey structured instead of leaving it spread across manual chat messages and internal follow-up.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Business pressure</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Built for real operating demand</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {seed.name} teams often handle {seed.commercialAngle}. The workflow should reduce response gaps and improve customer movement to the next step.
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Workflow outcome</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Move each conversation forward cleanly</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{config.businessOutcomeLine}</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Local coverage</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Built for {formatStateSeoList(seed.cityClusters)}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Launch with support for {formatStateSeoList(seed.languages)} customer journeys and workflow examples such as {seed.localSearchTerms.join(", ")}.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Coverage"
          title={`What this ${config.titleNoun} workflow can automate in ${seed.name}`}
          description={`Use one structured workflow layer to support the operating pressure most common in ${seed.name}.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {automationCards.map((item) => (
            <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry use"
          title={`Where teams in ${seed.name} use this workflow`}
          description={`${config.localUseCaseLine} The page stays reusable, but the local SEO value comes from state-specific industries, cities, languages, and search demand.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {seed.industries.map((industry) => (
            <Card key={industry} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{industry}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  In {seed.name}, {industry} often use {config.titleNoun} to reduce manual follow-up, protect conversion quality, and keep teams aligned on the next customer action.
                </p>
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
                eyebrow="Launch plan"
                title={`How Crescora AI runs ${config.titleNoun} in ${seed.name}`}
                description={config.launchFocusLine}
              />
              <div className="mt-8 space-y-4">
                {launchSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Step {index + 1}</p>
                    <p className="mt-3 text-sm leading-7 text-zinc-700">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow="Rollout fit"
                title={`Support ${formatStateSeoList(seed.languages)} customer journeys across ${seed.name}`}
                description={`A strong ${config.titleNoun} rollout should stay operationally useful across ${formatStateSeoList(seed.cityClusters)} and the broader ${seed.name} market.`}
              />
              <div className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
                <p>Priority cities: {formatStateSeoList(seed.cityClusters)}</p>
                <p>Languages: {formatStateSeoList(seed.languages)}</p>
                <p>Industries: {formatStateSeoList(seed.industries)}</p>
                <p>Workflow examples: {seed.localSearchTerms.join(", ")}</p>
              </div>
              <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">What the rollout should protect</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Keep customer intent, workflow state, reminders, records, and human escalation visible so the team in {seed.name} is not forced back into manual follow-up.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {beforeAfterRows.length ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Before and after"
            title={`What changes after ${config.titleNoun} launches in ${seed.name}`}
            description={`The goal is not to add another chatbot. The goal is to make the workflow cleaner, faster, and easier to manage.`}
          />
          <Card className="mt-10 overflow-hidden border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 border-b border-zinc-200 bg-zinc-50 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                <div className="px-6 py-4">Before Crescora AI</div>
                <div className="border-l border-zinc-200 px-6 py-4">After Crescora AI</div>
              </div>
              {beforeAfterRows.map((row) => (
                <div key={row.before} className="grid grid-cols-2 border-b border-zinc-200 last:border-b-0">
                  <div className="px-6 py-5 text-sm leading-7 text-zinc-600">{row.before}</div>
                  <div className="border-l border-zinc-200 px-6 py-5 text-sm leading-7 text-zinc-700">{row.after}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={`FAQs about ${config.titleNoun} in ${seed.name}`}
          description={`These are the questions buyers in ${seed.name} ask before they launch ${config.titleNoun} with Crescora AI.`}
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
            Built for local teams: Crescora AI helps businesses in {seed.name} automate {config.titleNoun} workflows across {formatStateSeoList(seed.cityClusters)}. The rollout can support {formatStateSeoList(seed.languages)} customer journeys for {formatStateSeoList(seed.industries)}.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
            Local rollout focus: this page shows how businesses in this region can start with one practical {config.titleNoun} workflow and expand safely after the first rollout is tested.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
              <Link href="/contact">{config.ctaLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10">
              <Link href={`/workflows/${workflow.slug}`}>View full workflow example</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10">
              <Link href={`/india/${seed.slug}/industries/${primaryIndustrySlug}`}>View regional industry example</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
