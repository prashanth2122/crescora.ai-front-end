import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { siteContent } from "@/lib/site-content";
import { solutionPages } from "@/lib/seo-marketing-data";

export const metadata = {
  title: "Solutions | FLOW by Crescora",
  description: "SEO landing pages for WhatsApp automation, AI chatbot builder, workflow automation, and customer support automation.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://crescora.ai" },
    { name: "Solutions", href: "https://crescora.ai/solutions" },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Solutions"
        title="Solutions pages target the exact pain buyers search for."
        description="These pages capture the strongest product-intent keywords from the brief and route readers into the right workflow, industry, template, or comparison page."
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.viewTemplates}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Main pages"
          title="Build around the query, not the product category."
          description="Each page below is written for a specific search intent from the pasted brief."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solutionPages.map((page) => (
            <Card key={page.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{page.keywordTarget}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{page.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{page.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/solutions/${page.slug}`}>Open solution page</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
