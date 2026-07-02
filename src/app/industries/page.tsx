import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  FlaskConical,
  GraduationCap,
  Headset,
  HeartPulse,
  Scissors,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { siteContent } from "@/lib/site-content";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { MarketingImageShowcase } from "@/components/site/marketing-image-showcase";
import { SectionHeading } from "@/components/site/section-heading";
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

const industryIcons = {
  Hospitals: HeartPulse,
  Clinics: Stethoscope,
  "Real Estate": Building2,
  "Education / Admissions": GraduationCap,
  "Coaching Centers / EdTech": GraduationCap,
  "Diagnostics / Labs": FlaskConical,
  "Customer Support Teams": Headset,
  "Service Businesses": BriefcaseBusiness,
  "Salons / Spas / Wellness": Scissors,
  "Insurance / Finance Services": ShieldCheck,
} as const;

export default function IndustriesPage() {
  const page = siteContent.industriesIndex;

  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-6 sm:p-8">
            <SectionHeading
              eyebrow={page.proofStrip.eyebrow}
              title={page.proofStrip.title}
              description={page.proofStrip.description}
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {page.proofStrip.capabilities.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-zinc-700"
                >
                  {item}
                </Badge>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-zinc-600">{page.proofStrip.platformLine}</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured industries"
          title="Workflows shaped around the operational pain each team repeats every day."
          description="Each card focuses on the pain removed, the workflow automated, and the business outcome created."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {page.cards.map((industry) => {
            const Icon = industryIcons[industry.title as keyof typeof industryIcons] ?? BriefcaseBusiness;

            return (
            <Card
              key={industry.title}
              className="flex h-full flex-col border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
            >
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-950/5 text-zinc-950">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{industry.title}</h2>
                    <p className="mt-3 text-base leading-7 text-zinc-600">{industry.description}</p>
                  </div>
                </div>
                <Button asChild variant="link" className="mt-auto h-auto w-fit p-0 pt-5 text-zinc-950 hover:no-underline">
                  <Link href={industry.href} className="inline-flex items-center gap-1">
                    {industry.ctaLabel}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            );
          })}
        </div>
        <p className="mt-8 max-w-4xl text-base leading-8 text-zinc-600">
          Crescora AI can run the intake, qualification, business rules, record updates, reminders, approvals, and human
          escalation steps behind each of these workflows. The same engine can adapt to regulated, service-heavy, and
          high-follow-up teams without forcing every industry into the same shallow chatbot pattern.
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.engineSection.eyebrow}
          title={page.engineSection.title}
          description={page.engineSection.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.engineSection.outcomes.map((item) => (
            <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mt-8 rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={page.moreIndustries.eyebrow}
                title={page.moreIndustries.title}
                description={page.moreIndustries.description}
              />
              <div className="mt-5 flex flex-wrap gap-2">
                {page.moreIndustries.chips.map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <MarketingImageShowcase
              src="/marketing/insurance-finance-usecases.png"
              alt="Crescora AI insurance and finance workflow graphic for service requests, reminders, documents, and human review."
              caption="Finance and insurance marketing visual for scope review, not a claim of regulated decision automation."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{page.phaseTwo.eyebrow}</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
            {page.phaseTwo.title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600">
            {page.phaseTwo.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
              <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full px-6">
              <Link href={siteContent.ctas.requestScopeCall.href}>{siteContent.ctas.requestScopeCall.label}</Link>
            </Button>
          </div>
          <p className="mt-5 text-sm leading-7 text-zinc-600">{page.phaseTwo.trustLine}</p>
        </div>
      </section>
    </PageShell>
  );
}
