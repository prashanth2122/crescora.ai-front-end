import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { buildRouteSocialImagePath, createPageMetadata } from "@/lib/seo";
import { revenuePages } from "@/lib/revenue-pages";
import { siteContent } from "@/lib/site-content";

export const metadata = {
  ...createPageMetadata({
    title: "Automation Solutions",
    description:
      "Automation solutions for enquiries, appointment booking, lead qualification, payment reminders, document collection, customer support, CRM updates, and human handover.",
    path: "/solutions",
    imagePath: buildRouteSocialImagePath("/solutions"),
  }),
};

export default function SolutionsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "Solutions", href: "https://www.crescora.ai/solutions" },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Solutions"
        title="Automation solutions for the workflows your business repeats every day."
        description="Crescora AI helps businesses automate high-friction customer journeys such as enquiries, appointment booking, lead qualification, payment reminders, document collection, customer support, CRM updates, and human handover. Start with one workflow, prove the process, then expand into more channels, teams, and integrations."
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solution cards"
          title="Pick the workflow that creates the clearest operational value first."
          description="Each solution explains the business problem, what Crescora AI automates, where humans step in, and which outcomes to measure during the pilot."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {revenuePages.map((page) => (
            <Card
              key={page.slug}
              className="flex h-full flex-col border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
            >
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{page.keywordTarget}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{page.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{page.description}</p>
                <div className="mt-5 space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-7 text-zinc-700">
                  <p><span className="font-semibold text-zinc-950">Business problem:</span> Repeated customer steps stay manual, delayed, or hard to track.</p>
                  <p><span className="font-semibold text-zinc-950">Crescora AI automates:</span> Intake, routing, reminders, records, handover, and outcome tracking based on the workflow.</p>
                  <p><span className="font-semibold text-zinc-950">Pilot metric:</span> Response speed, completion rate, handover quality, and drop-off points.</p>
                </div>
                <Button asChild variant="link" className="mt-auto h-auto w-fit p-0 text-zinc-950 hover:no-underline">
                  <Link href={`/solutions/${page.slug}`} className="inline-flex items-center gap-1">
                    Open solution page
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
