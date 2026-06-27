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
import { getStateWorkflowSlugs, stateWorkflowSeoBySlug } from "@/lib/state-workflow-seo";

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

  return `Crescora FLOW helps businesses in ${seed.name}, ${seed.stateName} automate ${seed.stateSeed.primaryPain} with ${seed.stateSeed.languages.join(", ")} support for ${seed.stateSeed.industries.join(", ")}.`;
}

function buildCityFaqItems(stateSlug: string, citySlug: string) {
  const seed = getCitySeed(stateSlug, citySlug);

  if (!seed) {
    return [];
  }

  return [
    {
      question: `Why do businesses in ${seed.name} choose FLOW?`,
      answer: `Businesses in ${seed.name} choose FLOW because they need to reduce ${seed.stateSeed.primaryPain}. FLOW supports AI routing, forms, reminders, records, notifications, analytics, and human handoff in one controlled rollout.`,
    },
    {
      question: `Which industries in ${seed.name} benefit the most from automation?`,
      answer: `${formatStateIndustryList(seed.stateSeed.industries)} in ${seed.name} benefit when they need faster response times, better follow-up discipline, cleaner bookings, payment visibility, and less repetitive customer support work.`,
    },
    {
      question: `Can FLOW support local language customer journeys in ${seed.name}?`,
      answer: `Yes. FLOW can support ${formatStateIndustryList(seed.stateSeed.languages)} prompts, FAQs, reminders, and handoff logic depending on the rollout scope and the language coverage your team needs in ${seed.name}.`,
    },
    {
      question: `What should a business in ${seed.name} automate first?`,
      answer: `Start with the workflow causing the most loss or manual effort in ${seed.name}, such as ${seed.stateSeed.primaryPain}. The best first rollout is usually the one closest to revenue, bookings, collections, or support pressure.`,
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

  const workflowSlugs = getStateWorkflowSlugs(seed.stateSlug);
  const primaryIndustrySlug = getStatePrimaryIndustrySlug(seed.stateSlug);
  const faqItems = buildCityFaqItems(stateSlug, citySlug);
  const faqSchema = buildFaqPageSchema(faqItems);
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
        description={`FLOW helps teams in ${seed.name} reduce ${seed.stateSeed.primaryPain}. Support ${formatStateIndustryList(seed.stateSeed.languages)} customer journeys for ${formatStateIndustryList(seed.stateSeed.industries)} with workflow orchestration, AI routing, reminders, records, analytics, and human handoff.`}
        primaryCta={{ label: `Book ${seed.name} Demo`, href: "/contact" }}
        secondaryCta={{ label: `Discuss ${seed.name} Workflow`, href: "/contact" }}
        supportText={`Search coverage includes ${seed.stateSeed.localSearchTerms.join(", ")}. Nearby city relevance includes ${seed.cityNeighbors.join(", ")}.`}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="City overview"
          title={`Why businesses in ${seed.name} choose FLOW`}
          description={`The strongest opportunity in ${seed.name} is ${seed.stateSeed.commercialAngle}. Teams usually need one platform that can handle ${seed.stateSeed.primaryPain} without fragmenting leads, bookings, payments, support, and staff visibility.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">City focus</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Built for real demand in {seed.name}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                FLOW fits businesses facing {seed.stateSeed.commercialAngle} rather than generic chatbot use. The goal is measurable customer outcomes and cleaner operations.
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Primary pain</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Fix the workflow gaps first</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{seed.stateSeed.primaryPain} are the issues that usually waste revenue and staff time in {seed.name}.</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Nearby relevance</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Connected to the wider {seed.stateName} market</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                This page stays locally relevant to {seed.name} while also supporting nearby demand across {seed.cityNeighbors.join(", ")}.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflows"
          title={`High-impact automation workflows for ${seed.name}`}
          description={`These workflow patterns best match customer and operational pressure in ${seed.name}.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workflowSlugs.map((workflowSlug) => {
            const workflow = stateWorkflowSeoBySlug[workflowSlug];

            return (
              <Card key={workflowSlug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{workflow.label}</h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{workflow.businessOutcomeLine}</p>
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
          description={`FLOW supports buyers and operators in ${seed.name} who need controlled automation for enquiry capture, bookings, support, documents, payments, and team handoff.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {seed.stateSeed.industries.map((industry) => (
            <Card key={industry} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{industry}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Businesses in {industry} across {seed.name} often need faster replies, better routing, clean records, and a stronger follow-up system than manual chat handling can provide.
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
                title="Local language and customer experience coverage"
                description={`Support customer journeys in ${formatStateIndustryList(seed.stateSeed.languages)} while keeping routing, records, reminders, and handoff under one operational system.`}
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
                <p>High-intent search themes: {seed.stateSeed.localSearchTerms.join(", ")}</p>
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
                    description: `Start with the process where ${seed.stateSeed.primaryPain} create the most revenue loss or workload.`,
                  },
                  {
                    title: "2. Capture the right customer data",
                    description: "Collect name, mobile number, intent, source, location, and the next action your team needs.",
                  },
                  {
                    title: "3. Add automation and routing",
                    description: "Connect AI understanding, forms, records, notifications, follow-ups, and human handoff in one workflow.",
                  },
                  {
                    title: "4. Measure and improve",
                    description: `Track leads, bookings, collections, support outcomes, drop-offs, and team visibility across ${seed.name} and ${seed.stateName}.`,
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
            Use FLOW to automate {seed.stateSeed.primaryPain} for teams in {seed.name} with a rollout built for {formatStateIndustryList(seed.stateSeed.industries)} and customer journeys in {formatStateIndustryList(seed.stateSeed.languages)}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
              <Link href="/contact">Book {seed.name} Demo</Link>
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
