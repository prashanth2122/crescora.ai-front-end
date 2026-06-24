import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { createPageMetadata } from "@/lib/seo";
import { revenuePages } from "@/lib/revenue-pages";
import { siteContent } from "@/lib/site-content";

export const metadata = {
  ...createPageMetadata({
    title: "Solutions",
    description: "Primary revenue pages for WhatsApp automation, AI chatbots, workflow automation, support, booking, and connected business operations.",
    path: "/solutions",
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
        title="Primary revenue pages built around the workflows buyers actually need to launch."
        description="Each solution page now carries implementation detail, product surfaces, rollout examples, FAQs, and proof signals so the commercial intent stays on the strongest URL."
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Main pages"
          title="Keep the commercial intent on a single canonical page per workflow category."
          description="These are the URLs that now own the primary search demand while overlapping template, workflow, and draft article routes are demoted from the index."
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
