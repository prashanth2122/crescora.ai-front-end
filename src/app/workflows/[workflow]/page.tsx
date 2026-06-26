import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { createExactPageMetadata, createPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";
import { buildBreadcrumbSchema, seoSoftwareSchema, workflowBySlug, workflows, type WorkflowSeo } from "@/lib/india-seo-data";

type Params = Promise<{ workflow: string }>;

function WorkflowHeroVisual({ workflow }: { workflow: NonNullable<WorkflowSeo["publicPage"]> }) {
  const visual = workflow.heroVisual;

  return (
    <Card className="overflow-hidden border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <CardContent className="p-0">
        <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            {visual?.eyebrow ?? "Workflow path"}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
            {visual?.title ?? "Document intake with validation and controlled review"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            {visual?.description ??
              "Route each submission through request, upload, validation, missing-file recovery, and a review or escalation path when the workflow should not guess."}
          </p>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {workflow.heroFlowSteps?.map((step) => (
              <div key={step} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700">
                {step}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-zinc-900 bg-zinc-950 p-5 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">Status model</p>
                <p className="mt-2 text-lg font-semibold">Workflow states the team can track</p>
              </div>
              <Badge className="border-white/10 bg-white/10 text-white hover:bg-white/15">FLOW</Badge>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
            {workflow.heroStatusChips?.map((chip) => (
                <div key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/85">
                  {chip}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-white/70">
              {visual?.note ??
                "Document workflows should collect only required files and route sensitive submissions through controlled review paths."}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function renderPublicWorkflowPage(workflow: WorkflowSeo) {
  const page = workflow.publicPage;

  if (!page) {
    return null;
  }

  const workflowDiagramSection = page.workflowDiagramSection;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow ?? "Workflow"}
        title={page.heroTitle}
        description={page.heroDescription}
        primaryCta={page.heroPrimaryCta}
        secondaryCta={page.heroSecondaryCta}
        supportText={page.heroSupportLine}
        visual={<WorkflowHeroVisual workflow={page} />}
      />

      {workflowDiagramSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={workflowDiagramSection.eyebrow}
                title={workflowDiagramSection.title}
                description={workflowDiagramSection.description}
              />
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {workflowDiagramSection.steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-900 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                      {step}
                    </div>
                    {index < workflowDiagramSection.steps.length - 1 ? (
                      <span aria-hidden className="hidden text-2xl text-zinc-300 md:block">
                        {'->'}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
              {workflowDiagramSection.supportLine ? (
                <p className="mt-6 max-w-5xl text-base leading-8 text-zinc-600">
                  {workflowDiagramSection.supportLine}
                </p>
              ) : null}
            </CardContent>
          </Card>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {page.overviewCards.map((card) => (
            <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{card.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">{card.title}</h2>
                <p className="mt-4 text-base leading-8 text-zinc-600">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.capabilitySection.eyebrow}
          title={page.capabilitySection.title}
          description={
            page.capabilitySection.description ??
            "Use one workflow layer to collect files, validate what is missing, route exceptions, and keep the next owner informed."
          }
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {page.capabilitySection.items.map((item) => (
            <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {page.capabilitySection.supportLine ? (
          <p className="mt-8 max-w-5xl text-base leading-8 text-zinc-600">{page.capabilitySection.supportLine}</p>
        ) : null}
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.beforeAfterSection.eyebrow}
          title={page.beforeAfterSection.title}
          description={
            page.beforeAfterSection.description ??
            "Show buyers how the document process changes once reminders, review routing, and workflow state become visible."
          }
        />
        <Card className="mt-10 overflow-hidden border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-0">
            <div className="grid grid-cols-2 border-b border-zinc-200 bg-zinc-50 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              <div className="px-6 py-4">Before FLOW</div>
              <div className="border-l border-zinc-200 px-6 py-4">After FLOW</div>
            </div>
            {page.beforeAfterSection.rows.map((row) => (
              <div key={row.before} className="grid grid-cols-2 border-b border-zinc-200 last:border-b-0">
                <div className="px-6 py-5 text-sm leading-7 text-zinc-600">{row.before}</div>
                <div className="border-l border-zinc-200 px-6 py-5 text-sm leading-7 text-zinc-700">{row.after}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {page.launchSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={page.launchSection.eyebrow}
            title={page.launchSection.title}
            description={page.launchSection.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.launchSection.items.map((item) => (
              <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.journeySection.eyebrow}
          title={page.journeySection.title}
          description={
            page.journeySection.description ??
            "A strong document workflow should show how requests move from first submission to validation, review, and final customer status."
          }
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.journeySection.steps.map((step, index) => (
            <Card key={step} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Step {index + 1}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-700">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {page.contextSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={page.contextSection.eyebrow}
            title={page.contextSection.title}
            description={page.contextSection.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.contextSection.items.map((item) => (
              <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {page.contextSection.note ? (
            <p className="mt-8 max-w-5xl text-base leading-8 text-zinc-600">{page.contextSection.note}</p>
          ) : null}
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={page.trustSection.eyebrow}
                title={page.trustSection.title}
                description={
                  page.trustSection.description ??
                  "Document-heavy workflows need clear upload guidance, review controls, and audit visibility before they are safe to scale."
                }
              />
              <div className="mt-6 space-y-4">
                {page.trustSection.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4">
                    <p className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{item.description}</p>
                  </div>
                ))}
              </div>
              {page.trustSection.supportLine ? (
                <p className="mt-6 text-sm leading-7 text-zinc-600">{page.trustSection.supportLine}</p>
              ) : null}
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={page.outcomesSection.eyebrow}
                title={page.outcomesSection.title}
                description={
                  page.outcomesSection.description ??
                  "Keep the rollout focused on measurable submission, review, and completion quality."
                }
                tone="inverse"
              />
              <div className="mt-6 space-y-4">
                {page.outcomesSection.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-lg font-semibold tracking-tight text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-white/75">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {page.faqSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={page.faqSection.eyebrow}
            title={page.faqSection.title}
            description={page.faqSection.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {page.faqSection.items.map((item) => (
              <Card key={item.question} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">{page.finalCta.eyebrow}</p>
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
          {page.finalCta.note ? (
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60">{page.finalCta.note}</p>
          ) : null}
        </div>
      </section>
    </>
  );
}

function renderDefaultWorkflowPage(workflow: WorkflowSeo) {
  return (
    <>
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
                Use the first paragraph and subheads to mirror the buyer job. Search snippets often come from page content, not just metadata.
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
    </>
  );
}

export function generateStaticParams() {
  return workflows.map((workflow) => ({ workflow: workflow.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { workflow: workflowSlug } = await params;
  const workflow = workflowBySlug.get(workflowSlug);

  if (!workflow) {
    return {};
  }

  const metadataInput = {
    title: workflow.metadataTitle ?? workflow.title,
    description: workflow.metadataDescription ?? workflow.description,
    path: `/workflows/${workflow.slug}`,
  };

  return workflow.metadataTitle ? createExactPageMetadata(metadataInput) : createPageMetadata(metadataInput);
}

export default async function WorkflowPage({ params }: { params: Params }) {
  const { workflow: workflowSlug } = await params;
  const workflow = workflowBySlug.get(workflowSlug);

  if (!workflow) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "Workflows", href: "https://www.crescora.ai/workflows" },
    { name: workflow.title, href: `https://www.crescora.ai/workflows/${workflow.slug}` },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={seoSoftwareSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      {workflow.publicPage ? renderPublicWorkflowPage(workflow) : renderDefaultWorkflowPage(workflow)}
    </PageShell>
  );
}
