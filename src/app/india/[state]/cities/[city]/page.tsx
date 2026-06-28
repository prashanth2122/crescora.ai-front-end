import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbSchema, getStatePrimaryIndustrySlug, seoOrganizationSchema } from "@/lib/india-seo-data";
import { createExactPageMetadata, buildFaqPageSchema } from "@/lib/seo";
import { citySeoSeedByStateAndSlug, citySeoSeedList } from "@/lib/city-seo-seeds";
import { formatStateIndustryList } from "@/lib/state-industry-seo";
import { stateWorkflowSeoBySlug } from "@/lib/state-workflow-seo";

type Params = Promise<{ state: string; city: string }>;

function getCitySeed(stateSlug: string, citySlug: string) {
  return citySeoSeedByStateAndSlug.get(`${stateSlug}:${citySlug}`);
}

function buildCityTitle(stateSlug: string, citySlug: string) {
  const seed = getCitySeed(stateSlug, citySlug);

  if (!seed) {
    return "";
  }

  return `AI Business Automation in ${seed.name}, ${seed.titleStateName}, India | Crescora FLOW`;
}

function buildCityDescription(stateSlug: string, citySlug: string) {
  const seed = getCitySeed(stateSlug, citySlug);

  if (!seed) {
    return "";
  }

  const workflowLabels = seed.featuredWorkflowSlugs.map((workflowSlug, index) => {
    const label = stateWorkflowSeoBySlug[workflowSlug].label;
    return index === 0 ? label : label.charAt(0).toLowerCase() + label.slice(1);
  });

  return `Crescora FLOW helps businesses in ${seed.name}, ${seed.stateName} reduce ${seed.localPainPoint} with ${seed.stateSeed.languages.join(", ")} support for ${formatStateIndustryList(seed.primaryIndustries)}. Local workflow demand includes ${formatStateIndustryList(workflowLabels)}.`;
}

function buildCityFaqItems(stateSlug: string, citySlug: string) {
  const seed = getCitySeed(stateSlug, citySlug);

  if (!seed) {
    return [];
  }

  const workflowLabels = seed.featuredWorkflowSlugs.map((workflowSlug) => stateWorkflowSeoBySlug[workflowSlug].label.toLowerCase());

  return [
    {
      question: `Why do businesses in ${seed.name} choose FLOW?`,
      answer: `Businesses in ${seed.name} choose FLOW because they need to reduce ${seed.localPainPoint}. FLOW supports AI routing, forms, reminders, records, notifications, analytics, and human handoff in one controlled rollout for ${seed.marketRole}.`,
    },
    {
      question: `Which industries in ${seed.name} benefit the most from automation?`,
      answer: `${formatStateIndustryList(seed.primaryIndustries)} in ${seed.name} benefit when they need faster response times, better follow-up discipline, cleaner bookings, stronger workflow ownership, and less repetitive customer support work.`,
    },
    {
      question: `Which workflows should businesses in ${seed.name} launch first?`,
      answer: `Most teams in ${seed.name} should start with ${formatStateIndustryList(workflowLabels)} because local rollout pressure usually comes from ${seed.workflowPriorityLine}.`,
    },
    {
      question: `Can FLOW support local language customer journeys in ${seed.name}?`,
      answer: `Yes. FLOW can support ${formatStateIndustryList(seed.stateSeed.languages)} prompts, FAQs, reminders, and handoff logic depending on the rollout scope and the language coverage your team needs in ${seed.name}.`,
    },
    {
      question: `How should a rollout in ${seed.name} stay locally relevant?`,
      answer: `${seed.proofLine} The rollout should use city-specific workflow priorities, language coverage, and commercial context rather than generic state copy alone.`,
    },
  ];
}

export function generateStaticParams() {
  return citySeoSeedList.map((seed) => ({ state: seed.stateSlug, city: seed.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { state: stateSlug, city: citySlug } = await params;
  const seed = getCitySeed(stateSlug, citySlug);

  if (!seed) {
    return {};
  }

  return {
    ...createExactPageMetadata({
      title: buildCityTitle(stateSlug, citySlug),
      description: buildCityDescription(stateSlug, citySlug),
      path: `/india/${stateSlug}/cities/${citySlug}`,
    }),
  };
}

export default async function CitySeoPage({ params }: { params: Params }) {
  const { state: stateSlug, city: citySlug } = await params;
  const seed = getCitySeed(stateSlug, citySlug);

  if (!seed) {
    notFound();
  }

  const primaryIndustrySlug = getStatePrimaryIndustrySlug(seed.stateSlug);
  const faqItems = buildCityFaqItems(stateSlug, citySlug);
  const faqSchema = buildFaqPageSchema(faqItems);
  const featuredWorkflows = seed.featuredWorkflowSlugs.map((workflowSlug) => stateWorkflowSeoBySlug[workflowSlug]);
  const workflowLabels = featuredWorkflows.map((workflow) => workflow.label);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "India", href: "https://www.crescora.ai/india" },
    { name: seed.stateName, href: `https://www.crescora.ai/india/${seed.stateSlug}` },
    { name: seed.name, href: `https://www.crescora.ai/india/${seed.stateSlug}/cities/${seed.slug}` },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoOrganizationSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <SeoJsonLd data={faqSchema} />

      <PageHero
        eyebrow={`${seed.stateName} city`}
        title={`AI business automation for teams in ${seed.name}`}
        description={`FLOW helps teams in ${seed.name} reduce ${seed.localPainPoint}. Support ${formatStateIndustryList(seed.stateSeed.languages)} customer journeys for ${formatStateIndustryList(seed.primaryIndustries)} with ${formatStateIndustryList(workflowLabels)} inside one workflow layer built for ${seed.marketRole}.`}
        primaryCta={{ label: seed.ctaLabel, href: "/contact" }}
        secondaryCta={{ label: `Discuss ${seed.name} Workflow`, href: "/contact" }}
        supportText={`Local search themes include ${seed.localSearchTerms.join(", ")}. ${seed.proofLine}`}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="City overview"
          title={`Why businesses in ${seed.name} choose FLOW`}
          description={`In ${seed.name}, the strongest fit is ${seed.marketRole}. Teams usually need one platform that can handle ${seed.localPainPoint} without fragmenting leads, bookings, payments, support, and staff visibility.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">City focus</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Built for the buying pattern in {seed.name}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                FLOW fits teams operating in {seed.marketRole}. The goal is measurable workflow outcomes and cleaner customer operations, not generic chatbot replies.
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Primary pain</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Fix the workflow gaps first</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{seed.localPainPoint} are the issues that usually waste revenue and staff time in {seed.name}.</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Local proof</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Connected to the wider {seed.stateName} market</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {seed.proofLine}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {seed.proofBlocks.length > 0 ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Local workflow proof"
            title={`What automation needs to get right in ${seed.name}`}
            description={seed.priorityProofIntro ?? seed.proofLine}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {seed.proofBlocks.map((block) => (
              <Card key={block.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{block.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{block.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflows"
          title={`High-impact automation workflows for ${seed.name}`}
          description={`These workflow patterns best match customer pressure and operational bottlenecks in ${seed.name}.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {seed.featuredWorkflowSlugs.map((workflowSlug) => {
            const workflow = stateWorkflowSeoBySlug[workflowSlug];

            return (
              <Card key={workflowSlug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{workflow.label}</h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {workflow.businessOutcomeLine} In {seed.name}, this usually matters most when teams need {workflow.localUseCaseLine.toLowerCase()}
                  </p>
                  <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                    <Link href={`/india/${seed.stateSlug}/workflows/${workflowSlug}`}>Open workflow page</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title={`Industries we support in ${seed.name}`}
          description={`FLOW supports buyers and operators in ${seed.name} who need controlled automation that fits the city's workflow priorities rather than a generic statewide message.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {seed.primaryIndustries.map((industry) => (
            <Card key={industry} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{industry}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Businesses in {industry} across {seed.name} often need faster replies, better workflow ownership, clean records, and a stronger follow-up system than manual chat handling can provide.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={`/india/${seed.stateSlug}/industries/${primaryIndustrySlug}`}>Open state industry page</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full border-zinc-300 px-6 text-zinc-950 hover:bg-zinc-50">
            <Link href={`/india/${seed.stateSlug}`}>Open state page</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow="Language coverage"
                title="Local language and search-intent coverage"
                description={`Support customer journeys in ${formatStateIndustryList(seed.stateSeed.languages)} while keeping local workflow priorities, search intent, and handoff under one operational system.`}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {seed.stateSeed.languages.map((language) => (
                  <Badge key={language} variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                    {language}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
                <p>Primary city: {seed.name}</p>
                <p>Nearby cities: {seed.cityNeighbors.join(", ")}</p>
                <p>Priority industries: {formatStateIndustryList(seed.primaryIndustries)}</p>
                <p>High-intent search themes: {seed.localSearchTerms.join(", ")}</p>
              </div>
              <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">What makes the city page locally relevant</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{seed.proofLine}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow="Implementation"
                title={`How FLOW implementation works in ${seed.name}`}
                description={`A strong rollout in ${seed.name} should connect customer conversations to structured business outcomes instead of isolated chatbot replies.`}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "1. Map the highest-friction workflow",
                    description: `Start with the process where ${seed.localPainPoint} create the most revenue loss or workload in ${seed.name}.`,
                  },
                  {
                    title: "2. Capture city-level routing context",
                    description: `Collect name, mobile number, intent, location, and the workflow signals your team needs for ${formatStateIndustryList(seed.primaryIndustries)} in ${seed.name}.`,
                  },
                  {
                    title: "3. Add workflow logic and handoff",
                    description: `Connect ${formatStateIndustryList(workflowLabels)} with AI understanding, forms, records, notifications, follow-ups, and human handoff in one operating layer.`,
                  },
                  {
                    title: "4. Measure and improve",
                    description: `Track leads, bookings, collections, support outcomes, and drop-offs across ${seed.name}, nearby demand in ${seed.cityNeighbors.slice(0, 2).join(" and ")}, and the wider ${seed.stateName} rollout.`,
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
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={`FAQs for ${seed.name} businesses`}
          description={`These are the rollout questions buyers in ${seed.name} ask before they commit to AI business automation with FLOW.`}
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
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Ready to launch automation for your business in {seed.name}?</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">
            Use FLOW to reduce {seed.localPainPoint} for teams in {seed.name} with a rollout built for {formatStateIndustryList(seed.primaryIndustries)} and customer journeys in {formatStateIndustryList(seed.stateSeed.languages)}.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
            Local workflow demand includes {formatStateIndustryList(workflowLabels)} while the implementation stays grounded in city-level search intent, records, reminders, analytics, and human handoff.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
              <Link href="/contact">{seed.ctaLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10">
              <Link href={`/india/${seed.stateSlug}`}>Open {seed.stateName} page</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
