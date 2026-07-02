import Link from "next/link";

import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowRight, BellRing, ClipboardList, FileText, Headset, LineChart, LifeBuoy, MessageCircleWarning, MessagesSquare, ShieldCheck, Ticket, UserRound } from "lucide-react";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: siteContent.industries.supportTeams.metadata.title,
  description: siteContent.industries.supportTeams.metadata.description,
  path: "/industries/support-teams",
});

export default function SupportTeamsIndustryPage() {
  const page = siteContent.industries.supportTeams;
  const workflowIcons = [MessagesSquare, ClipboardList, Ticket, UserRound, BellRing, LineChart, MessageCircleWarning, FileText];
  const differenceIcons = [ClipboardList, ShieldCheck, Headset, AlertTriangle, LineChart];
  const observabilityIcons = [Ticket, UserRound, AlertTriangle, LifeBuoy, BellRing, LineChart];

  return (
    <PageShell>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        visual={
          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(244,244,245,0.96)_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Support workflow path</p>
            <div className="mt-6 space-y-3">
              {page.hero.previewSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                    {step}
                  </div>
                  {index < page.hero.previewSteps.length - 1 ? (
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-zinc-400 sm:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-full border border-zinc-200 bg-white/90 px-6 py-4 text-sm leading-7 text-zinc-700 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          {page.hero.trustLine}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {page.overviewCards.map((card, index) => {
            const Icon = index === 0 ? ClipboardList : UserRound;

            return (
              <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">{card.eyebrow}</p>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-zinc-950">{card.title}</h2>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-8 text-zinc-600">{card.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-600">{page.overviewSupportLine}</p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pain" title={page.painTitle} description={page.painDescription} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.painPoints.map((item) => (
            <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Workflow" title={page.workflowTitle} description={page.workflowDescription} />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {page.workflows.map((item, index) => {
            const Icon = workflowIcons[index % workflowIcons.length];

            return (
              <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-lg font-semibold tracking-tight text-zinc-950">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.journey.eyebrow} title={page.journey.title} description={page.journey.description} />
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-4">
                {page.journey.steps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-zinc-700">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Workflow coverage</p>
              <p className="mt-4 text-base leading-8 text-zinc-600">{page.journey.supportLine}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.9rem] border border-zinc-900/90 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:p-8">
          <SectionHeading
            eyebrow={page.comparison.eyebrow}
            title={page.comparison.title}
            className="max-w-4xl [&_h2]:text-white [&_p]:text-white/72 [&_p:first-child]:text-white/50"
          />
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="grid grid-cols-2 border-b border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
              <div className="px-5 py-4">Before Crescora AI</div>
              <div className="border-l border-white/10 px-5 py-4">After Crescora AI</div>
            </div>
            {page.comparison.rows.map((row, index) => (
              <div
                key={row.before}
                className={`grid grid-cols-2 bg-white/3 text-sm leading-7 text-white/78 ${index < page.comparison.rows.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <div className="px-5 py-4">{row.before}</div>
                <div className="border-l border-white/10 px-5 py-4">{row.after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.difference.eyebrow} title={page.difference.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {page.difference.cards.map((card, index) => {
            const Icon = differenceIcons[index % differenceIcons.length];

            return (
              <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-lg font-semibold tracking-tight text-zinc-950">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{card.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-600">{page.difference.supportLine}</p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.observability.eyebrow} title={page.observability.title} description={page.observability.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.observability.cards.map((card, index) => {
            const Icon = observabilityIcons[index % observabilityIcons.length];

            return (
              <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-lg font-semibold tracking-tight text-zinc-950">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{card.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.metrics.eyebrow} title={page.metrics.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.metrics.items.map((item) => (
            <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">{page.finalCta.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{page.finalCta.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-white/72">{page.finalCta.description}</p>
              <p className="mt-4 text-sm leading-7 text-white/60">{page.finalCta.note}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                <Link href={page.finalCta.primary.href}>{page.finalCta.primary.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                <Link href={page.finalCta.secondary.href}>{page.finalCta.secondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
