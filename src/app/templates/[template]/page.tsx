import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { createPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";
import { buildBreadcrumbSchema, seoSoftwareSchema, templateBySlug, templates } from "@/lib/india-seo-data";

type Params = Promise<{ template: string }>;

export function generateStaticParams() {
  return templates.map((template) => ({ template: template.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { template: templateSlug } = await params;
  const template = templateBySlug.get(templateSlug);

  if (!template) {
    return {};
  }

  return {
    ...createPageMetadata({
      title: template.title,
      description: template.description,
      path: `/templates/${template.slug}`,
    }),
  };
}

export default async function TemplatePage({ params }: { params: Params }) {
  const { template: templateSlug } = await params;
  const template = templateBySlug.get(templateSlug);

  if (!template) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "Templates", href: "https://www.crescora.ai/templates" },
    { name: template.title, href: `https://www.crescora.ai/templates/${template.slug}` },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoSoftwareSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Template"
        title={template.title}
        description={`${template.description} The page should stay BOFU and practical.`}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Intent" title={template.intent} description={template.keywordTarget} />
              <p className="mt-6 text-sm leading-7 text-zinc-600">{template.headline}</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Included" title="What the template page should show." description="Use screenshots, triggers, and handoff logic to explain how the template works." />
              <div className="mt-6 space-y-2 text-sm leading-7 text-zinc-600">
                {template.included.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">CTA</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">{template.ctaLabel}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
            Template pages are designed to attract buyers ready to implement, not casual browsers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
              <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
              <Link href="/templates">Back to templates</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
