import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { siteContent } from "@/lib/site-content";
import { buildBreadcrumbSchema, workflows } from "@/lib/india-seo-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({
    title: "Workflow Library",
    description: "Internal workflow blueprints and launch paths that support the primary solution pages.",
    path: "/workflows",
    noIndex: true,
  }),
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", href: "https://www.crescora.ai" },
  { name: "Workflows", href: "https://www.crescora.ai/workflows" },
]);

export default function WorkflowsHubPage() {
  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Workflows"
        title="Workflow blueprints that support the primary solution pages."
        description="These pages remain available for internal linking and sales conversations, but the solution pages now carry the indexable commercial intent."
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Landing pages"
          title="Workflow references and rollout patterns."
          description="Use these pages as supporting blueprints, not as primary index targets."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workflows.map((workflow) => (
            <Card key={workflow.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{workflow.keywordTarget}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{workflow.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{workflow.headline}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/workflows/${workflow.slug}`}>Open workflow page</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
