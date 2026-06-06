import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { siteContent } from "@/lib/site-content";
import { buildBreadcrumbSchema, templates } from "@/lib/india-seo-data";

export const metadata = {
  title: "Workflow Templates | FLOW by Crescora",
  description: "Template-led landing pages for WhatsApp, booking, payments, document collection, support, RAG, real estate, service businesses, billing, and observability.",
  alternates: { canonical: "/templates" },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", href: "https://crescora.ai" },
  { name: "Templates", href: "https://crescora.ai/templates" },
]);

export default function TemplatesHubPage() {
  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Templates"
        title="Templates are the launch assets behind the SEO strategy."
        description="The report recommends template-led pages to turn commercial intent into practical rollout assets with screenshots, triggers, and handoff logic."
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Template pages"
          title="Build pages that help teams start quickly."
          description="These pages are BOFU and should include what is included, screenshots, and operational logic."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{template.intent}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{template.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{template.headline}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/templates/${template.slug}`}>Open template</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
