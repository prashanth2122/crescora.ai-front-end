import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

const useCasePages = {
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
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What FLOW handles"
          title="A practical rollout path for this workflow."
          description="Start with one high-friction step, prove the flow, then expand into the adjacent follow-ups."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {page.items.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex items-start gap-3 p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-zinc-950/5 text-zinc-950">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                </div>
                <p className="text-base font-medium leading-7 text-zinc-950">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="border-zinc-200 bg-zinc-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
          <CardContent className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Next step</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                See how FLOW can automate this workflow.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Book a demo to map the first automation step, the handoff path, and the follow-up sequence for your team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-100">
                <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={siteContent.ctas.requestScopeCall.href}>
                  {siteContent.ctas.requestScopeCall.label}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
