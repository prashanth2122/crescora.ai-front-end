import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import {
  buildBreadcrumbSchema,
  indiaSeo,
  indiaStates,
  industriesSeo,
  seoOrganizationSchema,
  seoSoftwareSchema,
  templates,
  workflows,
} from "@/lib/india-seo-data";
import { createLocalizedMetadata, getLocaleCopy } from "@/lib/locales";
import { hiPageCopy } from "@/lib/page-copy/hi";

const page = hiPageCopy.india;
const copy = getLocaleCopy("hi");

export const metadata = createLocalizedMetadata(
  "/hi/india",
  page.metadata.title,
  page.metadata.description,
  { noIndex: true },
);

const breadcrumbSchema = buildBreadcrumbSchema(page.breadcrumb);

export default function HindiIndiaSeoHubPage() {
  return (
    <PageShell>
      <SeoJsonLd data={seoOrganizationSchema} />
      <SeoJsonLd data={seoSoftwareSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={copy.ctas.bookProjectDemo}
        secondaryCta={copy.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={page.stateSection.eyebrow}
                title={page.stateSection.title}
                description={page.stateSection.description}
              />
              <div className="mt-6 space-y-3">
                {indiaStates.filter((state) => state.tier === "A").map((state) => (
                  <div key={state.slug} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-sm font-semibold text-zinc-950">{state.name}</p>
                    <p className="mt-1 text-sm leading-7 text-zinc-600">{state.stateFocus}</p>
                    <Button asChild variant="link" className="mt-2 h-auto p-0 text-zinc-950">
                      <Link href={`/india/${state.slug}`}>{copy.pageActions.openStateHub}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={page.workflowSection.eyebrow}
                title={page.workflowSection.title}
                description={page.workflowSection.description}
              />
              <div className="mt-6 space-y-3">
                {workflows.slice(0, 6).map((workflow) => (
                  <div key={workflow.slug} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-sm font-semibold text-zinc-950">{workflow.title}</p>
                    <p className="mt-1 text-sm leading-7 text-zinc-600">{workflow.headline}</p>
                    <Button asChild variant="link" className="mt-2 h-auto p-0 text-zinc-950">
                      <Link href={`/workflows/${workflow.slug}`}>{copy.pageActions.openWorkflowPage}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.templateSection.eyebrow}
          title={page.templateSection.title}
          description={page.templateSection.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {templates.slice(0, 6).map((template) => (
            <Card key={template.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{template.intent}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{template.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{template.headline}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/templates/${template.slug}`}>{copy.pageActions.openTemplate}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-6 sm:p-8">
            <SectionHeading
              eyebrow={page.localSection.eyebrow}
              title={page.localSection.title}
              description={page.localSection.description}
            />
            <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
              {indiaSeo.sections.local.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.industrySection.eyebrow}
          title={page.industrySection.title}
          description={page.industrySection.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industriesSeo.map((industry) => (
            <Card key={industry.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{industry.keywordTarget}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{industry.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{industry.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/industries/${industry.slug}`}>{copy.pageActions.openIndustryPage}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
