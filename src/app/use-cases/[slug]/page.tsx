import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteContent } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

type UseCaseCard = { title: string; description: string };
type UseCaseFaq = { question: string; answer: string };
type UseCaseComparisonRow = { before: string; after: string };

type UseCaseDetailPageContent = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    supportText?: string;
  };
  rollout?: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: readonly string[];
  itemDescriptions?: readonly string[];
  captureSection?: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly UseCaseCard[];
  };
  workflowSection?: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly string[];
    supportLine: string;
    statusChips?: readonly string[];
  };
  comparisonSection?: {
    eyebrow: string;
    title: string;
    description: string;
    rows: readonly UseCaseComparisonRow[];
  };
  useCasesSection?: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly UseCaseCard[];
  };
  metricsSection?: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly UseCaseCard[];
  };
  faqSection?: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly UseCaseFaq[];
  };
  finalCta?: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  cta?: { label: string; href: string };
};

const useCasePages: Record<string, UseCaseDetailPageContent> = {
  "lead-capture-qualification": siteContent.useCases.leadCaptureQualification,
  "faq-automation": siteContent.useCases.faqAutomation,
  "crm-api-sync": siteContent.useCases.crmApiSync,
  "reminder-automation": siteContent.useCases.reminderAutomation,
  "ticket-creation-escalation": siteContent.useCases.ticketCreationEscalation,
  "feedback-collection": siteContent.useCases.feedbackCollection,
} as const;

type UseCaseSlug = keyof typeof useCasePages;

const pagesBySlug = new Map(Object.entries(useCasePages) as Array<[UseCaseSlug, (typeof useCasePages)[UseCaseSlug]]>);
export function generateStaticParams() {
  return Object.keys(useCasePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = pagesBySlug.get(slug as UseCaseSlug);

  if (!page) {
    return {};
  }

  return {
    ...createPageMetadata({
      title: page.metadata.title,
      description: page.metadata.description,
      path: `/use-cases/${slug}`,
    }),
  };
}

export default async function UseCaseDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = pagesBySlug.get(slug as UseCaseSlug);

  if (!page) {
    notFound();
  }

  return (
    <PageShell>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        supportText={page.hero.supportText}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.rollout?.eyebrow ?? "What FLOW handles"}
          title={page.rollout?.title ?? "A practical rollout path for this workflow."}
          description={
            page.rollout?.description ??
            "Start with one high-friction step, prove the flow, then expand into the adjacent follow-ups."
          }
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {page.items.map((item, index) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex items-start gap-3 p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-zinc-950/5 text-zinc-950">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-base font-medium leading-7 text-zinc-950">{item}</p>
                  {page.itemDescriptions?.[index] ? (
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{page.itemDescriptions[index]}</p>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {page.captureSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={page.captureSection.eyebrow}
            title={page.captureSection.title}
            description={page.captureSection.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.captureSection.items.map((item) => (
              <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      {page.workflowSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={page.workflowSection.eyebrow}
            title={page.workflowSection.title}
            description={page.workflowSection.description}
          />
          {page.workflowSection.statusChips?.length ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {page.workflowSection.statusChips.map((chip) => (
                <span key={chip} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
          <Card className="mt-8 border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-800">
                {page.workflowSection.steps.map((step, index) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2">{step}</span>
                    {index < page.workflowSection!.steps.length - 1 ? <span className="text-zinc-300">→</span> : null}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-zinc-600">{page.workflowSection.supportLine}</p>
            </CardContent>
          </Card>
        </section>
      ) : null}

      {page.comparisonSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={page.comparisonSection.eyebrow}
            title={page.comparisonSection.title}
            description={page.comparisonSection.description}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {page.comparisonSection.rows.map((row) => (
              <Card key={row.before} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6 sm:p-7">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Before FLOW</p>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{row.before}</p>
                    </div>
                    <div className="md:border-l md:border-zinc-200 md:pl-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">After FLOW</p>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{row.after}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      {page.useCasesSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={page.useCasesSection.eyebrow}
            title={page.useCasesSection.title}
            description={page.useCasesSection.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.useCasesSection.items.map((item) => (
              <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      {page.metricsSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={page.metricsSection.eyebrow}
            title={page.metricsSection.title}
            description={page.metricsSection.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.metricsSection.items.map((item) => (
              <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      {page.faqSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={page.faqSection.eyebrow}
            title={page.faqSection.title}
            description={page.faqSection.description}
          />
          <Card className="mt-10 border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                {page.faqSection.items.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="text-zinc-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="border-zinc-200 bg-zinc-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
          <CardContent className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                {page.finalCta?.eyebrow ?? "Next step"}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {page.finalCta?.title ?? "See how FLOW can automate this workflow."}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {page.finalCta?.description ??
                  "Book a demo to map the first automation step, the handoff path, and the follow-up sequence for your team."}
              </p>
              {page.finalCta?.note ? <p className="mt-4 text-sm leading-7 text-white/55">{page.finalCta.note}</p> : null}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-100">
                <Link href={page.finalCta?.primary.href ?? siteContent.ctas.bookProjectDemo.href}>
                  {page.finalCta?.primary.label ?? siteContent.ctas.bookProjectDemo.label}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={page.finalCta?.secondary.href ?? siteContent.ctas.requestScopeCall.href}>
                  {page.finalCta?.secondary.label ?? siteContent.ctas.requestScopeCall.label}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
