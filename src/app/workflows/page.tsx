import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { siteContent } from "@/lib/site-content";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { createExactPageMetadata } from "@/lib/seo";

const page = siteContent.workflowsIndex;

export const metadata = createExactPageMetadata({
  title: page.metadata.title,
  description: page.metadata.description,
  path: "/workflows",
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", href: "https://www.crescora.ai" },
  { name: "Workflows", href: "https://www.crescora.ai/workflows" },
]);

export default function WorkflowsHubPage() {
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
        <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm font-medium leading-7 text-zinc-700">{page.hero.trustLine}</p>
          <div className="mt-8 border-t border-zinc-200 pt-8">
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
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.section.eyebrow}
          title={page.section.title}
          description={page.section.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.cards.map((workflow) => (
            <Card key={workflow.href} className="flex h-full flex-col border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{workflow.eyebrow}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{workflow.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{workflow.text}</p>
                <Button asChild variant="link" className="mt-auto h-auto w-fit p-0 pt-5 text-zinc-950 hover:no-underline">
                  <Link href={workflow.href}>{workflow.ctaLabel}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <SectionHeading
            eyebrow={page.whyItMatters.eyebrow}
            title={page.whyItMatters.title}
            description={page.whyItMatters.description}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {page.whyItMatters.cards.map((item) => (
              <Card key={item.title} className="border-zinc-200 bg-zinc-50 shadow-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-base leading-8 text-zinc-600">{page.whyItMatters.supportLine}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.14)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">{page.finalCta.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">{page.finalCta.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">{page.finalCta.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
              <Link href={page.finalCta.primary.href}>{page.finalCta.primary.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10">
              <Link href={page.finalCta.secondary.href}>{page.finalCta.secondary.label}</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
