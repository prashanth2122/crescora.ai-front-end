import Link from "next/link";

import {
  ArrowRight,
  BellRing,
  CalendarDays,
  CircleHelp,
  CreditCard,
  FileText,
  Handshake,
  Headphones,
  MessageSquareText,
  Plug,
  Search,
  Star,
  Ticket,
} from "lucide-react";

import { useCases } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({
    title: "Use Cases",
    description: siteContent.useCasesIndex.hero.description,
    path: "/use-cases",
    noIndex: true,
  }),
};

const useCaseIcons = {
  "WhatsApp Automation": MessageSquareText,
  "Lead Capture & Qualification": Search,
  "Appointment Booking": CalendarDays,
  "Payment Follow-Up": CreditCard,
  "Document Collection": FileText,
  "Customer Support": Headphones,
  "FAQ Automation": CircleHelp,
  "Human Handoff": Handshake,
  "CRM & API Sync": Plug,
  "Reminder Automation": BellRing,
  "Ticket Creation & Escalation": Ticket,
  "Feedback & Review Collection": Star,
} as const;

export default function UseCasesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={siteContent.useCasesIndex.hero.eyebrow}
        title={siteContent.useCasesIndex.hero.title}
        description={siteContent.useCasesIndex.hero.description}
        primaryCta={siteContent.useCasesIndex.hero.primaryCta}
        secondaryCta={siteContent.useCasesIndex.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => {
            const Icon = useCaseIcons[item.title as keyof typeof useCaseIcons] ?? MessageSquareText;

            return (
              <Card
                key={item.href}
                className="flex h-full flex-col border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-950/5 text-zinc-950">
                      <Icon className="size-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                    </div>
                  </div>
                  <Button asChild variant="link" className="mt-auto h-auto w-fit p-0 text-zinc-950 hover:no-underline">
                    <Link href={item.href} className="inline-flex items-center gap-1">
                      {siteContent.ctas.openUseCase.label}
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 rounded-[28px] border border-zinc-200 bg-white px-6 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:px-8 sm:py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            {siteContent.useCasesIndex.moreWorkflowsLabel}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {siteContent.useCasesIndex.moreWorkflows.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Card className="mt-6 border-zinc-200 bg-zinc-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
          <CardContent className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Need help choosing?</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {siteContent.useCasesIndex.ctaTitle}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                {siteContent.useCasesIndex.ctaDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-100">
                <Link href={siteContent.useCasesIndex.ctaPrimary.href}>
                  {siteContent.useCasesIndex.ctaPrimary.label}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={siteContent.useCasesIndex.ctaSecondary.href}>
                  {siteContent.useCasesIndex.ctaSecondary.label}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
