import Link from "next/link";

import { createExactPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileText,
  GraduationCap,
  Headphones,
  Hospital,
  MessageSquareText,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";

export const metadata = createExactPageMetadata({
  title: siteContent.about.metadata.title,
  description: siteContent.about.metadata.description,
  path: "/about",
});

export default function AboutPage() {
  const {
    hero,
    whoWeAre,
    mission,
    whatWeBuild,
    whyWeBuiltFlow,
    belief,
    whoWeHelp,
    howWeWork,
    different,
    trust,
    product,
    pilot,
    finalCta,
  } = siteContent.about;

  const buildIcons = [MessageSquareText, Workflow, CalendarDays, Sparkles, FileText, BadgeCheck, CheckCircle2, ArrowRight, Workflow, BadgeCheck];
  const helpIcons = [Hospital, Building2, GraduationCap, Headphones, Wrench, FileText];
  const stepIcons = [ArrowRight, Workflow, MessageSquareText, CheckCircle2, BadgeCheck, Sparkles];
  const differentIcons = [BadgeCheck, CheckCircle2, Workflow, Sparkles, Building2];

  return (
    <PageShell>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading eyebrow="About" title={whoWeAre.title} />
            <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-5 text-base leading-8 text-zinc-600">
                  {whoWeAre.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Mission" title={mission.title} description={mission.description} />
              <p className="mt-5 text-sm leading-7 text-zinc-600">{mission.support}</p>
              <div className="mt-6 rounded-[1.25rem] border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Mission card</p>
                <p className="mt-3 text-lg font-medium leading-8 text-zinc-950">{mission.card}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Automation" title={whatWeBuild.title} description={whatWeBuild.description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {whatWeBuild.items.map((item, index) => {
            const Icon = buildIcons[index % buildIcons.length];

            return (
              <Card key={item} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-[15px] font-medium leading-7 text-zinc-950">{item}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Why FLOW exists" title={whyWeBuiltFlow.title} />
              <div className="mt-5 space-y-5 text-sm leading-8 text-zinc-600">
                {whyWeBuiltFlow.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">Our belief</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">{belief.title}</h2>
              <p className="mt-4 text-base leading-8 text-white/72">{belief.description}</p>
              <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Belief card</p>
                <p className="mt-3 text-lg font-medium leading-8 text-white">{belief.card}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Who we help" title={whoWeHelp.title} description={whoWeHelp.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whoWeHelp.cards.map((card, index) => {
            const Icon = helpIcons[index % helpIcons.length];

            return (
              <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
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

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title={howWeWork.title} description={howWeWork.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {howWeWork.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];

            return (
              <Card key={step.title} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950">{step.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{step.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What makes us different" title={different.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {different.cards.map((card, index) => {
            const Icon = differentIcons[index % differentIcons.length];

            return (
              <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-base font-semibold tracking-tight text-zinc-950">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{card.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Trust and control" title={trust.title} description={trust.description} />
              <div className="mt-6 space-y-3">
                {trust.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-sm leading-7 text-zinc-700">{bullet}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Product relationship" title={product.title} description={product.description} />
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {product.details.map((detail) => (
                  <div key={detail} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-7 text-zinc-700">
                    {detail}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">Pilot program</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">{pilot.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">{pilot.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {pilot.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-7 text-white/80">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:pt-14">
              <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                <Link href={pilot.cta.href}>{pilot.cta.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                <Link href={hero.secondaryCta?.href ?? "/platform"}>Explore FLOW</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <SectionHeading eyebrow="Final CTA" title={finalCta.title} description={finalCta.description} />
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
              <Link href={finalCta.primary.href}>{finalCta.primary.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full px-6">
              <Link href={finalCta.secondary.href}>{finalCta.secondary.label}</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
