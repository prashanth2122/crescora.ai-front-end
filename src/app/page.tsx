import Link from "next/link";

import { trustPoints } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { WorkflowVisual } from "@/components/site/workflow-visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Headphones,
  Hospital,
  MessageSquareText,
  Sparkles,
  Stethoscope,
  Workflow,
  Wrench,
} from "lucide-react";

const automationIcons = [MessageSquareText, Workflow, CalendarDays, Headphones, BadgeCheck, ArrowRight];
const exploreIcons = [Building2, Workflow, BadgeCheck, Sparkles];

const homepageIndustryCards = [
  {
    title: "Hospitals",
    href: "/industries/hospitals",
    description: "Automate appointments, patient reminders, document collection, and safe handover for sensitive cases.",
    ctaLabel: "View Hospital Workflows",
    icon: Hospital,
  },
  {
    title: "Clinics",
    href: "/industries/clinics",
    description: "Book appointments, send reminders, collect patient details, and reduce front-desk call load.",
    ctaLabel: "View Clinic Workflows",
    icon: Stethoscope,
  },
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    description: "Qualify leads, share project details, book site visits, and keep follow-ups consistent.",
    ctaLabel: "View Real Estate Workflows",
    icon: Building2,
  },
  {
    title: "Education",
    href: "/industries/education",
    description: "Answer admission questions, collect student details, manage documents, and route applicants to counselors.",
    ctaLabel: "View Education Workflows",
    icon: Sparkles,
  },
  {
    title: "Support Teams",
    href: "/industries/support-teams",
    description: "Resolve repeated questions, capture issue details, and hand over complex cases with full context.",
    ctaLabel: "View Support Workflows",
    icon: Headphones,
  },
  {
    title: "Service Businesses",
    href: "/industries/service-businesses",
    description: "Automate bookings, reminders, payment follow-ups, service requests, and customer updates.",
    ctaLabel: "View Service Workflows",
    icon: Wrench,
  },
] as const;

export default function HomePage() {
  const {
    hero,
    pain,
    automation,
    outcomes,
    industries,
    pilot,
    explore,
    trust,
    faq,
    finalCta,
  } = siteContent.homepage;

  return (
    <PageShell>
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_30px_120px_rgba(15,23,42,0.28)]">
          <div className="bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.28),transparent_22%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.22),transparent_22%),linear-gradient(135deg,#050816_0%,#0b1220_50%,#111827_100%)] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="text-white">
                <Badge className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-white hover:bg-white/15">
                  {hero.badge}
                </Badge>
                <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                  {hero.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  {hero.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                    <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href={siteContent.ctas.viewIndustryWorkflow.href}>
                      {siteContent.ctas.viewIndustryWorkflow.label}
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/50">{hero.builtForLabel}</p>
                  <p className="mt-2 text-sm leading-7 text-white/80">{hero.builtForText}</p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {hero.stats.map((stat) => (
                    <Card key={stat.label} className="border-white/10 bg-white/5 text-white">
                      <CardContent className="p-4">
                        <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
                        <p className="mt-2 text-sm leading-6 text-white/65">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="lg:pl-2">
                <WorkflowVisual className="shadow-[0_25px_80px_rgba(0,0,0,0.45)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={pain.eyebrow} title={pain.title} description={pain.description} />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pain.cards.map((point) => (
            <Card key={point.title} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex items-start gap-4 p-6">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <p className="text-base font-medium text-zinc-950">{point.title}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{point.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={automation.eyebrow} title={automation.title} description={automation.description} />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {automation.cards.map((item, index) => {
                const Icon = automationIcons[index % automationIcons.length];

                return (
                  <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
                    <CardContent className="p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="mt-4 text-base font-medium text-zinc-950">{item.title}</p>
                      <p className="mt-3 text-[15px] leading-7 text-zinc-600">{item.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <Badge className="rounded-full border-white/10 bg-white/10 px-4 py-1 text-xs text-white hover:bg-white/15">
                {outcomes.impactLabel}
              </Badge>
              <h2 className="mt-5 text-[1.75rem] font-semibold leading-tight tracking-tight">{outcomes.automationClaim}</h2>
              <p className="mt-4 text-[15px] leading-8 text-white/72">{outcomes.description}</p>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">{outcomes.eyebrow}</p>
                <p className="mt-3 text-lg font-semibold text-white">{outcomes.title}</p>
                <div className="mt-5 space-y-3">
                  {outcomes.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-zinc-950">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-sm leading-7 text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-8 text-white/72">{outcomes.automationSupport}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {outcomes.results.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/55">Result</p>
                    <p className="mt-2 text-[15px] font-medium leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={industries.eyebrow} title={industries.title} description={industries.description} />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homepageIndustryCards.map((industry) => {
            const Icon = industry.icon;

            return (
              <Card
                key={industry.title}
                className="h-full border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <Badge variant="secondary" className="mt-4 w-fit rounded-full bg-zinc-100 text-zinc-700">
                    {industry.title}
                  </Badge>
                  <p className="mt-4 text-[15px] leading-7 text-zinc-800">{industry.description}</p>
                  <Button asChild variant="link" className="mt-auto w-fit px-0 pt-4 text-zinc-950">
                    <Link href={industry.href} className="inline-flex items-center gap-2">
                      <span>{industry.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-zinc-200 bg-white px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Need a different industry?</p>
            <p className="mt-2 text-base font-medium text-zinc-950">Explore the full industry workflow library.</p>
          </div>
          <Button asChild className="h-11 rounded-full bg-zinc-950 px-5 text-white hover:bg-zinc-800">
            <Link href={siteContent.ctas.viewIndustryWorkflow.href}>{siteContent.ctas.viewIndustryWorkflow.label}</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">{pilot.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{pilot.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">{pilot.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                  <Link href={pilot.primaryCta.href}>{pilot.primaryCta.label}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href={pilot.secondaryCta.href}>{pilot.secondaryCta.label}</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/50">Included</p>
              <div className="mt-4 grid gap-3">
                {pilot.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-7 text-white/80">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={explore.eyebrow} title={explore.title} description={explore.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {explore.cards.map((item, index) => {
            const Icon = exploreIcons[index % exploreIcons.length];

            return (
              <Card key={item.title} className="h-full border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-600">{item.description}</p>
                  <Button asChild variant="link" className="mt-auto w-fit px-0 pt-4 text-zinc-950">
                    <Link href={item.href} className="inline-flex items-center gap-2">
                      <span>{item.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{trust.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{trust.title}</h3>
              <div className="mt-6 space-y-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-sm leading-7 text-zinc-700">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{faq.eyebrow}</p>
              <Accordion type="single" collapsible className="mt-4">
                {faq.items.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="text-zinc-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-0 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{finalCta.eyebrow}</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">{finalCta.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-600">{finalCta.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                <Link href={finalCta.primary.href}>{finalCta.primary.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6">
                <Link href={finalCta.secondary.href}>{finalCta.secondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
