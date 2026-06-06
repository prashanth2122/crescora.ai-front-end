import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { siteContent } from "@/lib/site-content";
import { buildBreadcrumbSchema, seoSoftwareSchema, workflowBySlug, workflows } from "@/lib/india-seo-data";

type Params = Promise<{ workflow: string }>;

export function generateStaticParams() {
  return workflows.map((workflow) => ({ workflow: workflow.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { workflow: workflowSlug } = await params;
  const workflow = workflowBySlug.get(workflowSlug);

  if (!workflow) {
    return {};
  }

  return {
    title: workflow.title,
    description: workflow.description,
    alternates: { canonical: `/workflows/${workflow.slug}` },
  };
}

export default async function WorkflowPage({ params }: { params: Params }) {
  const { workflow: workflowSlug } = await params;
  const workflow = workflowBySlug.get(workflowSlug);

  if (!workflow) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://crescora.ai" },
    { name: "Workflows", href: "https://crescora.ai/workflows" },
    { name: workflow.title, href: `https://crescora.ai/workflows/${workflow.slug}` },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoSoftwareSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Workflow"
        title={workflow.title}
        description={`${workflow.description} This page is a dedicated BOFU landing page rather than a generic feature page.`}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Search target" title={workflow.keywordTarget} description={workflow.headline} />
              <p className="mt-6 text-sm leading-7 text-zinc-600">
                Use the first paragraph and subheads to mirror the buyer job. Google’s guidance in the report says the snippet often comes from page content, not just metadata.
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Outline" title="Keep the page structured and commercially explicit." description="A strong workflow page should read like a rollout guide, not a product brochure." />
              <div className="mt-6 space-y-2 text-sm leading-7 text-zinc-600">
                {workflow.outline.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Primary CTA</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">{workflow.ctaLabel}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
            Use a dedicated workflow page to convert search intent into a demo request, then support it with state and industry pages.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
              <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
              <Link href="/india">Open India hub</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
