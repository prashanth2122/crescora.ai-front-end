import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
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
  workflows,
} from "@/lib/india-seo-data";
import { buildFaqPageSchema, createExactPageMetadata } from "@/lib/seo";
import { stateSeoSeedBySlug, stateSeoSeedList, type StateSeoSeed, type WorkflowKey } from "@/lib/state-seo-seeds";
import { getStateWorkflowSlugs } from "@/lib/state-workflow-seo";

type StatePageProps = {
  params: Promise<{ state: string }>;
};

type WorkflowCard = {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
};

const stateSeoTitleBySlug: Record<string, string> = {
  maharashtra: "AI Business Automation in Maharashtra, India | Crescora AI",
  "uttar-pradesh": "AI Business Automation in Uttar Pradesh, India | Crescora AI",
  "tamil-nadu": "AI Business Automation in Tamil Nadu, India | Crescora AI",
  "west-bengal": "AI Business Automation in West Bengal, India | Crescora AI",
  karnataka: "AI Business Automation in Karnataka, India | Crescora AI",
  "madhya-pradesh": "AI Business Automation in Madhya Pradesh, India | Crescora AI",
  rajasthan: "AI Business Automation in Rajasthan, India | Crescora AI",
  gujarat: "AI Business Automation in Gujarat, India | Crescora AI",
  bihar: "AI Business Automation in Bihar, India | Crescora AI",
  "andhra-pradesh": "AI Business Automation in Andhra Pradesh, India | Crescora AI",
  telangana: "AI Business Automation in Telangana, India | Crescora AI",
  odisha: "AI Business Automation in Odisha, India | Crescora AI",
  "jammu-and-kashmir": "AI Business Automation in Jammu & Kashmir, India | Crescora AI",
  uttarakhand: "AI Business Automation in Uttarakhand, India | Crescora AI",
  "himachal-pradesh": "AI Business Automation in Himachal Pradesh, India | Crescora AI",
  tripura: "AI Business Automation in Tripura, India | Crescora AI",
  goa: "AI Business Automation in Goa, India | Crescora AI",
  puducherry: "AI Business Automation in Puducherry, India | Crescora AI",
  chandigarh: "AI Business Automation in Chandigarh, India | Crescora AI",
  manipur: "AI Business Automation in Manipur, India | Crescora AI",
  nagaland: "AI Business Automation in Nagaland, India | Crescora AI",
  meghalaya: "AI Business Automation in Meghalaya, India | Crescora AI",
  mizoram: "AI Business Automation in Mizoram, India | Crescora AI",
  "arunachal-pradesh": "AI Business Automation in Arunachal Pradesh, India | Crescora AI",
  sikkim: "AI Business Automation in Sikkim, India | Crescora AI",
  "andaman-and-nicobar-islands": "AI Business Automation in Andaman & Nicobar, India | Crescora AI",
  ladakh: "AI Business Automation in Ladakh, India | Crescora AI",
  "dadra-and-nagar-haveli-and-daman-and-diu":
    "AI Automation in Dadra, Nagar Haveli, Daman & Diu | Crescora AI",
  lakshadweep: "AI Business Automation in Lakshadweep, India | Crescora AI",
};

const workflowRouteSlugByKey: Partial<Record<WorkflowKey, string>> = {
  lead: "whatsapp-automation",
  appointment: "appointment-booking",
  payment: "payments",
  document: "document-collection",
  support: "customer-support",
};

const workflowContentByKey: Record<WorkflowKey, { title: string; description: string }> = {
  lead: {
    title: "Lead capture and qualification",
    description:
      "Capture enquiries from WhatsApp, website chat, ads, and forms, then qualify intent before leads go cold.",
  },
  appointment: {
    title: "Appointment booking and reminders",
    description:
      "Guide customers toward bookings, confirmations, reschedules, reminders, and staff handoff without manual chasing.",
  },
  payment: {
    title: "Payment reminders and collections",
    description:
      "Send due reminders, share payment steps, collect references, and escalate overdue cases with clean tracking.",
  },
  document: {
    title: "Document intake and follow-up",
    description:
      "Collect missing documents, follow up automatically, validate status, and keep teams aligned on pending items.",
  },
  support: {
    title: "Support triage and human handoff",
    description:
      "Handle common questions instantly, route unresolved issues, and move complex conversations to the right team.",
  },
  education: {
    title: "Admissions and education workflows",
    description:
      "Capture course enquiries, schedule callbacks, automate admission follow-ups, and reduce repetitive counselling work.",
  },
  healthcare: {
    title: "Healthcare conversation workflows",
    description:
      "Support patient enquiries, appointment requests, reminders, reports, billing guidance, and safe staff escalation.",
  },
  realEstate: {
    title: "Real estate follow-up workflows",
    description:
      "Qualify property leads, share project information, book site visits, and keep sales follow-ups moving.",
  },
  hospitality: {
    title: "Hospitality and booking workflows",
    description:
      "Respond to booking enquiries faster, confirm availability, send reminders, and support guest communication cleanly.",
  },
  sales: {
    title: "Sales routing and follow-up",
    description:
      "Prioritize serious buyers, route them to the right rep, and track follow-ups across high-volume customer pipelines.",
  },
};

function formatList(items: string[]) {
  if (items.length <= 1) {
    return items[0] ?? "";
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function buildStateTitle(seed: StateSeoSeed) {
  return stateSeoTitleBySlug[seed.slug] ?? `AI Business Automation in ${seed.name}, India | Crescora AI`;
}

function buildStateDescription(seed: StateSeoSeed) {
  return `Crescora AI helps businesses in ${seed.name} automate ${seed.primaryPain} across ${seed.cityClusters.join(", ")} with ${seed.languages.join(", ")} support for ${seed.industries.join(", ")}.`;
}

function buildWorkflowCards(seed: StateSeoSeed, availableWorkflowSlugs: string[]) {
  return seed.workflows.map((workflowKey) => {
    const content = workflowContentByKey[workflowKey];
    const slug = workflowRouteSlugByKey[workflowKey];
    const href = slug && availableWorkflowSlugs.includes(slug) ? `/india/${seed.slug}/workflows/${slug}` : undefined;

    return {
      title: content.title,
      description: content.description,
      href,
      ctaLabel: href ? "Open workflow page" : undefined,
    } satisfies WorkflowCard;
  });
}

function buildFaqItems(seed: StateSeoSeed) {
  return [
    {
      question: `Why do businesses in ${seed.name} choose Crescora AI?`,
      answer: `Businesses in ${seed.name} choose Crescora AI because they need a workflow platform that handles ${seed.primaryPain}. Crescora AI supports multi-channel conversations, AI routing, forms, records, reminders, notifications, human handoff, analytics, and governance in one controlled rollout.`,
    },
    {
      question: `Which industries in ${seed.name} benefit the most from automation?`,
      answer: `${formatList(seed.industries)} in ${seed.name} benefit when they need faster response times, cleaner lead capture, better booking coordination, reliable document follow-up, and less repetitive customer support work.`,
    },
    {
      question: `Can Crescora AI support local language customer journeys in ${seed.name}?`,
      answer: `Yes. Crescora AI can support ${formatList(seed.languages)} conversation paths, FAQs, routing prompts, and handoff workflows depending on the rollout scope, approval process, and the language coverage your business needs.`,
    },
    {
      question: `What should a business in ${seed.name} automate first?`,
      answer: `Start with the workflow causing the most loss or manual effort in ${seed.name}, such as ${seed.primaryPain}. The best first rollout is usually the one closest to revenue, bookings, collections, or support load.`,
    },
    {
      question: `Can Crescora AI connect WhatsApp automation with records, notifications, and human handoff?`,
      answer: `Yes. Crescora AI can connect WhatsApp-led journeys with forms, records, appointments, payment steps, document requests, notifications, audit-friendly actions, and human handoff so each conversation reaches a clear business outcome.`,
    },
  ];
}

export function generateStaticParams() {
  return stateSeoSeedList.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({ params }: StatePageProps) {
  const { state: stateSlug } = await params;
  const seed = stateSeoSeedBySlug.get(stateSlug);

  if (!seed) {
    return {};
  }

  return {
    ...createExactPageMetadata({
      title: buildStateTitle(seed),
      description: buildStateDescription(seed),
      path: `/india/${seed.slug}`,
    }),
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { state: stateSlug } = await params;
  const seed = stateSeoSeedBySlug.get(stateSlug);

  if (!seed) {
    notFound();
  }

  const availableWorkflowSlugs = getStateWorkflowSlugs(seed.slug);
  const availableWorkflowSlugSet = new Set<string>(availableWorkflowSlugs);
  const workflowCards = buildWorkflowCards(seed, availableWorkflowSlugs);
  const faqItems = buildFaqItems(seed);
  const faqSchema = buildFaqPageSchema(faqItems);
  const primaryIndustrySlug = getStatePrimaryIndustrySlug(seed.slug);
  const relatedWorkflow = workflows.find((workflow) => availableWorkflowSlugSet.has(workflow.slug));
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "India", href: "https://www.crescora.ai/india" },
    { name: seed.name, href: `https://www.crescora.ai/india/${seed.slug}` },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoOrganizationSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <SeoJsonLd data={faqSchema} />

      <PageHero
        eyebrow={`Automation in ${seed.name}`}
        title={`WhatsApp automation and conversational AI workflows for businesses in ${seed.name}`}
        description={`Crescora AI helps teams across ${formatList(seed.cityClusters)} fix ${seed.primaryPain}. Support ${formatList(seed.languages)} customer journeys for ${formatList(seed.industries)} with workflow orchestration, AI operations, human handoff, knowledge flows, governance, billing, and analytics.`}
        primaryCta={{ label: `Book ${seed.name} Demo`, href: "/contact" }}
        secondaryCta={{ label: `Discuss ${seed.name} Workflow`, href: "/contact" }}
        supportText={`Built for ${seed.commercialAngle}. Local search focus includes ${seed.localSearchTerms.join(", ")}.`}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="State overview"
          title={`Why businesses in ${seed.name} choose Crescora AI`}
          description={`The strongest opportunity in ${seed.name} is ${seed.commercialAngle}. Teams usually need one platform that can handle ${seed.primaryPain} without fragmenting leads, bookings, payments, support, and staff visibility.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Commercial angle</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Built for real operating pressure in {seed.name}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Crescora AI fits businesses facing {seed.commercialAngle} rather than generic chatbot use. The goal is measurable customer outcomes and cleaner operations.
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Primary pain</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Fix the customer journey gaps first</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{seed.primaryPain} are the issues that usually waste revenue and staff time in {seed.name}.</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">City clusters</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">Focus on the strongest demand clusters</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                This page is built to stay relevant across {formatList(seed.cityClusters)} while keeping one reusable template and state-specific SEO data.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflows"
          title={`High-impact WhatsApp automation workflows for ${seed.name}`}
          description={`These are the workflow patterns that best match the customer and operational pressure in ${seed.name}.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workflowCards.map((card) => (
            <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{card.description}</p>
                {card.href ? (
                  <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                    <Link href={card.href}>{card.ctaLabel}</Link>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title={`Industries we support in ${seed.name}`}
          description={`Crescora AI supports buyers and operators in ${seed.name} who need controlled automation for enquiry capture, bookings, support, documents, payments, and team handoff.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {seed.industries.map((industry) => (
            <Card key={industry} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{industry}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Businesses in {industry} across {seed.name} often need faster replies, better routing, clean records, and a stronger follow-up system than manual WhatsApp handling can provide.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={`/india/${seed.slug}/industries/${primaryIndustrySlug}`}>Open state industry page</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow="Language coverage"
                title={`Local language and customer experience coverage`}
                description={`Support customer journeys in ${formatList(seed.languages)} while keeping routing, records, reminders, and handoff under one operational system.`}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {seed.languages.map((language) => (
                  <Badge key={language} variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                    {language}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
                <p>Priority city clusters: {formatList(seed.cityClusters)}</p>
                <p>High-intent search themes: {seed.localSearchTerms.join(", ")}</p>
                <p>Best fit for: {formatList(seed.industries)}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow="Implementation"
                title={`How Crescora AI implementation works`}
                description={`A strong rollout in ${seed.name} should connect customer conversations to structured business outcomes instead of isolated chatbot replies.`}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "1. Map the highest-friction workflow",
                    description: `Start with the process where ${seed.primaryPain} create the most revenue loss or workload.`,
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
                    title: "4. Launch with clear language support",
                    description: `Support customer journeys in ${formatList(seed.languages)} where that improves conversion and service quality.`,
                  },
                  {
                    title: "5. Measure and improve",
                    description: `Track leads, bookings, collections, support outcomes, drop-offs, and team visibility across ${seed.cityClusters[0]} and the broader ${seed.name} rollout.`,
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
          description={`These are the rollout questions buyers in ${seed.name} ask before they commit to WhatsApp automation and conversational workflow implementation.`}
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
            Use Crescora AI to automate {seed.primaryPain} for teams across {formatList(seed.cityClusters)} with a rollout built for {formatList(seed.industries)} and customer journeys in {formatList(seed.languages)}.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/60">
            Search-intent coverage includes {seed.localSearchTerms.join(", ")} while the implementation stays grounded in real workflows, records, governance, analytics, and human handoff.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
              <Link href="/contact">Book {seed.name} Demo</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10">
              <Link href={relatedWorkflow ? `/india/${seed.slug}/workflows/${relatedWorkflow.slug}` : `/india/${seed.slug}/industries/${primaryIndustrySlug}`}>
                {relatedWorkflow ? "Open state workflow page" : "Open state industry page"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
