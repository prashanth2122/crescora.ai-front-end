import Link from "next/link";

import { homepageCapabilities, pricingPackages, trustPoints } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { solutionPages } from "@/lib/seo-marketing-data";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { WorkflowVisual } from "@/components/site/workflow-visual";
import { LeadForm } from "@/components/site/lead-form";
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
  FileText,
  GraduationCap,
  Headphones,
  Hospital,
  MessageSquareText,
  Sparkles,
  Stethoscope,
  Workflow,
  Wrench,
} from "lucide-react";

export default function HomePage() {
  const {
    hero,
    pain,
    painSpotlights,
    automation,
    pilot,
    outcomes,
    industries,
    blog,
    howItWorks,
    beforeAfter,
    trust,
    faq,
    pricing,
    finalCta,
  } = siteContent.homepage;

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
      icon: GraduationCap,
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
    {
      title: "Diagnostics / Labs",
      href: "/industries/hospitals",
      description: "Handle report updates, reminders, document requests, and patient follow-up with fewer manual calls.",
      ctaLabel: "View Diagnostics Workflows",
      icon: FileText,
    },
    {
      title: "Coaching / EdTech",
      href: "/industries/education",
      description: "Capture enquiries, book demo classes, manage reminders, and route serious leads to counselors.",
      ctaLabel: "View Coaching Workflows",
      icon: GraduationCap,
    },
    {
      title: "Salons / Wellness",
      href: "/industries/service-businesses",
      description: "Automate bookings, reminders, cancellations, and repeat visits without manual follow-up.",
      ctaLabel: "View Wellness Workflows",
      icon: Sparkles,
    },
    {
      title: "Insurance / Finance Services",
      href: "/industries/service-businesses",
      description: "Follow up on applications, documents, status updates, and callback requests with clarity.",
      ctaLabel: "View Finance Workflows",
      icon: BadgeCheck,
    },
  ] as const;

  const moreIndustries = [
    "Ecommerce",
    "Retail stores",
    "Restaurants and cloud kitchens",
    "Travel agencies",
    "Hotels",
    "Gyms",
    "Automobile dealers",
    "Repair services",
    "Logistics",
    "HR and recruitment",
    "Legal firms",
    "Accounting firms",
    "Interior designers",
    "Construction companies",
    "Event companies",
    "Packers and movers",
    "SaaS support teams",
    "Manufacturing operations",
  ] as const;

  const homepageSolutionCopy: Record<string, { title: string; description: string }> = {
    "whatsapp-automation": {
      title: "WhatsApp Business Automation in India | FLOW by Crescora AI",
      description: "Automate repeated WhatsApp enquiries, booking reminders, payment follow-ups, and human handover.",
    },
    "ai-chatbot-builder": {
      title: "No-Code AI Chatbot Builder in India | FLOW by Crescora AI",
      description: "Build customer chat journeys for lead capture, FAQ automation, booking, handover, and multi-channel support.",
    },
    "workflow-automation": {
      title: "Business Workflow Automation Software in India | FLOW by Crescora AI",
      description: "Automate customer conversations, tasks, reminders, records, follow-ups, and team handovers.",
    },
    "customer-support-automation": {
      title: "Customer Support Automation for Small Businesses in India | FLOW by Crescora AI",
      description: "Automate FAQs, capture support details, reduce repeated replies, and escalate complex issues with context.",
    },
    "appointment-booking-automation": {
      title: "Appointment Booking Automation",
      description: "Reduce back-and-forth by automating availability checks, confirmation, reminders, and rescheduling.",
    },
    "lead-capture-automation": {
      title: "Lead Capture Automation",
      description: "Capture enquiries from website, WhatsApp, ads, or landing pages and route qualified leads to your team.",
    },
    "payment-reminder-automation": {
      title: "Payment Reminder Automation",
      description: "Send payment reminders, capture status updates, and escalate unresolved cases to your team.",
    },
    "document-collection-automation": {
      title: "Document Collection Automation",
      description: "Request, collect, and follow up on documents without repeated manual chasing.",
    },
    "crm-api-workflow-automation": {
      title: "CRM and API Workflow Automation",
      description: "Send captured leads, appointments, payments, and support details to CRM or internal tools.",
    },
    "human-handover-automation": {
      title: "Human Handover Automation",
      description: "Move sensitive, complex, or high-value conversations to humans with conversation history and next action.",
    },
  };

  const homepageSolutionCards = solutionPages.map((page) => ({
    ...page,
    ...(homepageSolutionCopy[page.slug] ?? {
      title: page.title.split(" | ")[0] ?? page.title,
      description: page.description,
    }),
  }));

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

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {painSpotlights.map((point) => (
            <Card key={point.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <p className="mt-4 text-lg font-medium text-zinc-950">{point.title}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{point.text}</p>
              </CardContent>
            </Card>
          ))}
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
        <SectionHeading
          eyebrow={automation.eyebrow}
          title={automation.title}
          description={automation.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {automation.cards.map((item, index) => {
            const automationIcons = [MessageSquareText, Workflow, CalendarDays, Sparkles, FileText, BadgeCheck, CheckCircle2, ArrowRight];
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
        <p className="mt-6 text-sm leading-7 text-zinc-600">
          Popular for hospitals, clinics, real estate teams, education businesses, support teams, and service companies.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-zinc-200 bg-white px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Next step</p>
            <p className="mt-2 text-base font-medium text-zinc-950">Want to automate one workflow first?</p>
          </div>
          <Button asChild className="h-11 rounded-full bg-zinc-950 px-5 text-white hover:bg-zinc-800">
            <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={outcomes.eyebrow} title={outcomes.title} description={outcomes.description} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">From message to outcome</p>
              <div className="mt-6 space-y-4">
                {outcomes.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-[15px] leading-7 text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <Badge className="rounded-full border-white/10 bg-white/10 px-4 py-1 text-xs text-white hover:bg-white/15">
                {outcomes.impactLabel}
              </Badge>
              <h3 className="mt-5 text-[1.75rem] font-semibold leading-tight tracking-tight">{outcomes.automationClaim}</h3>
              <p className="mt-4 text-[15px] leading-8 text-white/72">{outcomes.automationSupport}</p>
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
                    <Link href={industry.href}>{industry.ctaLabel} →</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-zinc-200 bg-white px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
            More industries FLOW can automate
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {moreIndustries.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
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
        <SectionHeading
          eyebrow="Solutions"
          title="Explore ready-to-launch automation solutions."
          description="Each solution page explains a specific business problem, workflow, demo path, and implementation approach."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homepageSolutionCards.map((page) => (
            <Card key={page.slug} className="h-full border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{page.keywordTarget}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{page.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-zinc-600">{page.description}</p>
                <Button asChild variant="link" className="mt-auto w-fit px-0 pt-4 text-zinc-950">
                  <Link href={`/solutions/${page.slug}`}>Open solution page →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={blog.eyebrow} title={blog.title} description={blog.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {blog.cards.map((post) => (
            <Card key={post.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{post.category}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{post.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/blog/${post.slug}`}>Read article</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={blog.primaryCta.href}>{blog.primaryCta.label}</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-6">
            <Link href={blog.secondaryCta.href}>{blog.secondaryCta.label}</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} description={howItWorks.description} />
            <div className="mt-6 rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{howItWorks.teamLabel}</p>
              <p className="mt-4 text-base leading-8 text-zinc-600">{howItWorks.teamDescription}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {homepageCapabilities.map((capability) => (
              <Card key={capability.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <p className="text-base font-medium text-zinc-950">{capability.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{capability.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{beforeAfter.beforeLabel}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
                {beforeAfter.beforeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#fafafa_0%,#ffffff_100%)] shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{beforeAfter.afterLabel}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-700">
                {beforeAfter.afterItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
                <Accordion
                  type="multiple"
                  defaultValue={faq.items.map((item) => item.question)}
                  className="mt-4"
                >
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

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} description={pricing.description} />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {pricingPackages.map((pkg) => (
            <Card
              key={pkg.title}
              className="flex h-full flex-col border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
            >
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{pkg.label}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{pkg.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-zinc-950">Best for</p>
                <p className="text-sm leading-7 text-zinc-600">{pkg.bestFor}</p>
                <p className="mt-4 text-sm font-medium leading-7 text-zinc-950">Includes</p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-zinc-600">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600">
          {siteContent.homepage.pricing.note}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-6">
            <Link href={siteContent.ctas.seePricing.href}>{siteContent.ctas.seePricing.label}</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <LeadForm />
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
