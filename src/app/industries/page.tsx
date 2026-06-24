import Link from "next/link";

import { siteContent } from "@/lib/site-content";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: siteContent.industriesIndex.metadata.title,
  description: siteContent.industriesIndex.metadata.description,
  path: "/industries",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", href: "https://www.crescora.ai" },
  { name: "Industries", href: "https://www.crescora.ai/industries" },
]);

const featuredIndustryCards = [
  {
    title: "Hospitals",
    href: "/industries/hospitals",
    description:
      "Automate appointments, patient reminders, document collection, payment follow-ups, and safe handover.",
    ctaLabel: "View Industry Workflow",
  },
  {
    title: "Clinics",
    href: "/industries/clinics",
    description:
      "Book appointments, collect patient details, send reminders, and reduce front-desk call load.",
    ctaLabel: "View Industry Workflow",
  },
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    description:
      "Qualify leads, share project details, book site visits, and keep sales follow-ups consistent.",
    ctaLabel: "View Industry Workflow",
  },
  {
    title: "Education / Admissions",
    href: "/industries/education",
    description:
      "Answer admission questions, collect student details, manage documents, and route applicants to counselors.",
    ctaLabel: "View Industry Workflow",
  },
  {
    title: "Coaching Centers / EdTech",
    href: "/contact",
    description:
      "Capture course enquiries, book demo classes, share batch details, and follow up with students or parents.",
    ctaLabel: "Discuss My Workflow",
  },
  {
    title: "Diagnostics / Labs",
    href: "/contact",
    description:
      "Handle test enquiries, home collection bookings, report updates, payment confirmation, and patient reminders.",
    ctaLabel: "Discuss My Workflow",
  },
  {
    title: "Customer Support Teams",
    href: "/industries/support-teams",
    description:
      "Resolve repeated questions, capture issue details, create tickets, and hand over complex cases with context.",
    ctaLabel: "View Industry Workflow",
  },
  {
    title: "Service Businesses",
    href: "/industries/service-businesses",
    description:
      "Automate bookings, reminders, payment follow-ups, service requests, and customer updates.",
    ctaLabel: "View Industry Workflow",
  },
  {
    title: "Salons / Spas / Wellness",
    href: "/contact",
    description:
      "Book slots, send reminders, promote packages, collect feedback, and bring customers back for repeat visits.",
    ctaLabel: "Discuss My Workflow",
  },
  {
    title: "Insurance / Finance Services",
    href: "/contact",
    description:
      "Collect leads, request documents, track application status, send payment reminders, and hand off to advisors.",
    ctaLabel: "Discuss My Workflow",
  },
] as const;

const moreIndustryChips = [
  "Ecommerce",
  "Retail stores",
  "Restaurants and cloud kitchens",
  "Travel agencies",
  "Hotels and resorts",
  "Gyms and fitness centers",
  "Automobile dealers",
  "Repair and maintenance services",
  "Logistics and courier businesses",
  "HR and recruitment agencies",
  "Legal service firms",
  "Accounting and tax consultants",
  "Interior design firms",
  "Construction companies",
  "Event management companies",
  "Packers and movers",
  "Local service providers",
  "B2B agencies",
  "SaaS support teams",
  "Manufacturing operations teams",
] as const;

export default function IndustriesPage() {
  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={siteContent.industriesIndex.hero.eyebrow}
        title={siteContent.industriesIndex.hero.title}
        description={siteContent.industriesIndex.hero.description}
        primaryCta={siteContent.industriesIndex.hero.primaryCta}
        secondaryCta={siteContent.industriesIndex.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredIndustryCards.map((industry) => (
            <Card key={industry.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex h-full flex-col p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{industry.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{industry.description}</p>
                <Button asChild variant="link" className="mt-auto w-fit px-0 pt-4 text-zinc-950">
                  <Link href={industry.href}>{industry.ctaLabel}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
            More industries FLOW can automate
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {moreIndustryChips.map((item) => (
              <Badge key={item} variant="secondary" className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
            {siteContent.industriesIndex.phaseTwo.eyebrow}
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
            {siteContent.industriesIndex.phaseTwo.title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600">
            {siteContent.industriesIndex.phaseTwo.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
              <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full px-6">
              <Link href={siteContent.ctas.requestScopeCall.href}>{siteContent.ctas.requestScopeCall.label}</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
