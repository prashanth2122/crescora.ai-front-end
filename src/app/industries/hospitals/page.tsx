import Link from "next/link";

import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { MarketingImageShowcase } from "@/components/site/marketing-image-showcase";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, HeartPulse, Receipt, ShieldCheck, Stethoscope, UserRound } from "lucide-react";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: siteContent.industries.hospitals.metadata.title,
  description: siteContent.industries.hospitals.metadata.description,
  path: "/industries/hospitals",
});

export default function HospitalsIndustryPage() {
  const page = siteContent.industries.hospitals;
  const workflowIcons = [HeartPulse, UserRound, Stethoscope, FileText, Receipt, ShieldCheck, ShieldCheck];
  const safetyIcons = [ShieldCheck, UserRound, FileText, CheckCircle2];

  return (
    <PageShell>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        visual={
          <MarketingImageShowcase
            src="/marketing/hospital-automation-template.png"
            alt="Crescora AI hospital automation workflow graphic for appointments, patient intake, billing, documents, and staff handover."
            caption="Hospital automation marketing visual using demo workflow content, not a live hospital deployment."
            priority
          />
        }
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-full border border-zinc-200 bg-white/90 px-6 py-4 text-sm leading-7 text-zinc-700 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          {page.hero.trustLine}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {page.overviewCards.map((card) => (
            <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">{card.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">{card.title}</h2>
                <p className="mt-4 text-base leading-8 text-zinc-600">{card.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.workflowSection.eyebrow}
          title={page.workflowSection.title}
          description={page.workflowSection.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.workflowSection.cards.map((card, index) => {
            const Icon = workflowIcons[index % workflowIcons.length];

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
        <SectionHeading
          eyebrow={page.patientJourney.eyebrow}
          title={page.patientJourney.title}
          description={page.patientJourney.description}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-4">
                {page.patientJourney.steps.map((step, index) => (
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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Platform coverage</p>
              <p className="mt-4 text-base leading-8 text-zinc-600">{page.patientJourney.supportLine}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.9rem] border border-zinc-900/90 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:p-8">
          <SectionHeading
            eyebrow={page.safety.eyebrow}
            title={page.safety.title}
            className="max-w-4xl [&_h2]:text-white [&_p]:text-white/72 [&_p:first-child]:text-white/50"
          />
          <div className="mt-6 rounded-[1.5rem] border border-amber-300/30 bg-amber-300/10 p-5 text-sm leading-7 text-amber-50">
            {page.safety.emergencyNote}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {page.safety.cards.map((card, index) => {
              const Icon = safetyIcons[index % safetyIcons.length];

              return (
                <div key={card.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-950">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-base font-semibold tracking-tight text-white">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/72">{card.text}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-7 text-white/72">{page.safety.supportLine}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.startingWorkflows.eyebrow} title={page.startingWorkflows.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.startingWorkflows.cards.map((card) => (
            <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white">
                  {card.step}
                </div>
                <p className="mt-4 text-lg font-semibold tracking-tight text-zinc-950">{card.title}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{card.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{page.finalCta.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">{page.finalCta.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-600">{page.finalCta.description}</p>
              <p className="mt-4 text-sm leading-7 text-zinc-500">{page.finalCta.note}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                <Link href={page.finalCta.primary.href}>{page.finalCta.primary.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6">
                <Link href={page.finalCta.secondary.href}>{page.finalCta.secondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
