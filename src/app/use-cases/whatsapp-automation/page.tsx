import type { Metadata } from "next";
import Link from "next/link";

import { siteContent } from "@/lib/site-content";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { createPageMetadata, whatsappAutomationSchema, whatsappAutomationServicesListSchema } from "@/lib/seo";
import { useCaseCanonicalMap } from "@/lib/seo-route-map";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "WhatsApp Automation Workflows and AI Chatbots",
    description: siteContent.useCases.whatsapp.metadata.description,
    path: "/use-cases/whatsapp-automation",
    noIndex: true,
    alternates: {
      canonical: useCaseCanonicalMap["whatsapp-automation"],
    },
  }),
};

export default function WhatsAppAutomationPage() {
  const page = siteContent.useCases.whatsapp;
  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "Use Cases", href: "https://www.crescora.ai/use-cases" },
    { name: "WhatsApp Automation", href: "https://www.crescora.ai/use-cases/whatsapp-automation" },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={whatsappAutomationSchema} />
      <SeoJsonLd data={whatsappAutomationServicesListSchema} />
      <SeoJsonLd data={breadcrumbs} />

      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pain" title={page.painTitle} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.painPoints.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-base font-medium text-zinc-950">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Automation" title={page.automationTitle} />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {page.automations.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                    FLOW
                  </Badge>
                  <p className="text-base font-medium text-zinc-950">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Channels and systems"
          title={page.coverageTitle}
          description={page.coverageDescription}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {page.coverageCards.map((card) => (
            <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{card.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Services" title={page.serviceTitle} description={page.serviceDescription} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.services.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-base font-medium text-zinc-950">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">{page.exampleFlowTitle}</h3>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
              {page.exampleFlow.map((item, index) => (
                <li key={item}>
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
            <Button asChild className="mt-6 h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
              <Link href={page.cta.href}>{page.cta.label}</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
