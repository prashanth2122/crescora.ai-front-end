import Link from "next/link";
import { notFound } from "next/navigation";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { createExactPageMetadata, createPageMetadata } from "@/lib/seo";
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

  const metadataInput = {
    title: template.metadataTitle ?? template.title,
    description: template.metadataDescription ?? template.description,
    path: `/templates/${template.slug}`,
  };

  return {
    ...(template.metadataTitle ? createExactPageMetadata(metadataInput) : createPageMetadata(metadataInput)),
  };
}

function TemplateHeroVisual({
  eyebrow,
  title,
  description,
  note,
  statusChips,
  path,
}: {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  statusChips: readonly string[];
  path: readonly string[];
}) {
  return (
    <Card className="overflow-hidden border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{eyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">{title}</h2>
          </div>
          <Badge className="rounded-full bg-zinc-950 px-3 py-1 text-[11px] font-semibold text-white">Workflow</Badge>
        </div>
        <p className="mt-4 text-sm leading-7 text-zinc-600">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {statusChips.map((chip) => (
            <span key={chip} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Template workflow path</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {path.map((step, index) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full bg-white px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm">
                  {step}
                </span>
                {index < path.length - 1 ? <span className="text-zinc-300">→</span> : null}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-zinc-500">{note}</p>
      </CardContent>
    </Card>
  );
}

export default async function TemplatePage({ params }: { params: Params }) {
  const { template: templateSlug } = await params;
  const template = templateBySlug.get(templateSlug);

  if (!template) {
    notFound();
  }

  const publicPage = template.publicPage;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "Templates", href: "https://www.crescora.ai/templates" },
    {
      name: publicPage?.breadcrumbTitle ?? template.title,
      href: `https://www.crescora.ai/templates/${template.slug}`,
    },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoSoftwareSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={publicPage?.hero.eyebrow ?? "Template"}
        title={publicPage?.hero.title ?? template.title}
        description={
          publicPage?.hero.description ??
          `${template.description} Start with a practical workflow that can be adapted to your team.`
        }
        primaryCta={publicPage?.hero.primaryCta ?? siteContent.ctas.bookProjectDemo}
        secondaryCta={publicPage?.hero.secondaryCta ?? siteContent.ctas.requestScopeCall}
        supportText={publicPage?.hero.supportLine}
        visual={
          publicPage ? (
            <TemplateHeroVisual
              eyebrow={publicPage.hero.visual.eyebrow}
              title={publicPage.hero.visual.title}
              description={publicPage.hero.visual.description}
              note={publicPage.hero.visual.note}
              statusChips={publicPage.hero.statusChips}
              path={publicPage.hero.visual.path}
            />
          ) : undefined
        }
      />

      {publicPage ? (
        <>
          {publicPage.queueCard ? (
            <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
              <Card className="overflow-hidden border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">{publicPage.queueCard.eyebrow}</p>
                      <h2 className="mt-3 text-3xl font-semibold tracking-tight">{publicPage.queueCard.title}</h2>
                      <p className="mt-4 text-sm leading-7 text-white/72">{publicPage.queueCard.description}</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:w-[34rem]">
                      {publicPage.queueCard.stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <p className="text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
                          <p className="mt-2 text-sm font-medium text-white/70">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-6 max-w-3xl text-sm leading-7 text-white/60">{publicPage.queueCard.note}</p>
                </CardContent>
              </Card>
            </section>
          ) : null}

          <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {publicPage.overviewCards.map((card) => (
                <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                  <CardContent className="p-6 sm:p-8">
                    <SectionHeading eyebrow={card.eyebrow} title={card.title} />
                    <p className="mt-6 text-sm leading-7 text-zinc-600">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={publicPage.includedSection.eyebrow}
              title={publicPage.includedSection.title}
              description={publicPage.includedSection.description}
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {publicPage.includedSection.items.map((item) => (
                <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={publicPage.workflowSection.eyebrow}
              title={publicPage.workflowSection.title}
              description={publicPage.workflowSection.description}
            />
            <Card className="mt-10 border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-800">
                  {publicPage.workflowSection.steps.map((step, index) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2">{step}</span>
                      {index < publicPage.workflowSection.steps.length - 1 ? <span className="text-zinc-300">→</span> : null}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7 text-zinc-600">{publicPage.workflowSection.supportLine}</p>
              </CardContent>
            </Card>
          </section>

          <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={publicPage.setupNoteSection.eyebrow}
              title={publicPage.setupNoteSection.title}
              description={publicPage.setupNoteSection.description}
            />
            <Card className="mt-10 border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6 sm:p-8">
                <p className="text-sm leading-7 text-zinc-600">{publicPage.setupNoteSection.note}</p>
              </CardContent>
            </Card>
          </section>

          <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={publicPage.beforeAfterSection.eyebrow}
              title={publicPage.beforeAfterSection.title}
              description={publicPage.beforeAfterSection.description}
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {publicPage.beforeAfterSection.rows.map((row) => (
                <Card key={row.before} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                  <CardContent className="p-6 sm:p-7">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Before Crescora AI</p>
                        <p className="mt-3 text-sm leading-7 text-zinc-600">{row.before}</p>
                      </div>
                      <div className="md:border-l md:border-zinc-200 md:pl-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">After Crescora AI</p>
                        <p className="mt-3 text-sm leading-7 text-zinc-600">{row.after}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={publicPage.useCasesSection.eyebrow}
              title={publicPage.useCasesSection.title}
              description={publicPage.useCasesSection.description}
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {publicPage.useCasesSection.items.map((item) => (
                <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {publicPage.capabilitiesSection ? (
            <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow={publicPage.capabilitiesSection.eyebrow}
                title={publicPage.capabilitiesSection.title}
                description={publicPage.capabilitiesSection.description}
              />
              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {publicPage.capabilitiesSection.items.map((item) => (
                  <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={publicPage.metricsSection.eyebrow}
              title={publicPage.metricsSection.title}
              description={publicPage.metricsSection.description}
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {publicPage.metricsSection.items.map((item) => (
                <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={publicPage.faqSection.eyebrow}
              title={publicPage.faqSection.title}
              description={publicPage.faqSection.description}
            />
            <Card className="mt-10 border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6 sm:p-8">
                <Accordion type="single" collapsible className="w-full">
                  {publicPage.faqSection.items.map((item) => (
                    <AccordionItem key={item.question} value={item.question}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-zinc-600">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>

          <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
            <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">{publicPage.finalCta.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{publicPage.finalCta.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">{publicPage.finalCta.description}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">{publicPage.finalCta.note}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                  <Link href={publicPage.finalCta.primary.href}>{publicPage.finalCta.primary.label}</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10">
                  <Link href={publicPage.finalCta.secondary.href}>{publicPage.finalCta.secondary.label}</Link>
                </Button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6 sm:p-8">
                      <SectionHeading eyebrow="Pilot-ready structure" title={template.headline} description={template.description} />
                  <p className="mt-6 text-sm leading-7 text-zinc-600">
                    Use this template as a practical starting point, then adapt the prompts, routing, and handover rules to match your workflow.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6 sm:p-8">
                  <SectionHeading eyebrow="Included" title="What this template can cover." description="Use the starting points below to move from chat to a clear business outcome." />
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
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Next step</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{template.ctaLabel}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                Tell us how this workflow should fit your business and we will map the fastest rollout path.
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
        </>
      )}
    </PageShell>
  );
}
