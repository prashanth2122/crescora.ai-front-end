import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { siteContent } from "@/lib/site-content";
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
import { createPageMetadata } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({
    title: indiaSeo.metadata.title,
    description: indiaSeo.metadata.description,
    path: "/india",
    noIndex: true,
  }),
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", href: "https://www.crescora.ai" },
  { name: "India SEO", href: "https://www.crescora.ai/india" },
]);

export default function IndiaSeoHubPage() {
  return (
    <PageShell>
      <SeoJsonLd data={seoOrganizationSchema} />
      <SeoJsonLd data={seoSoftwareSchema} />
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={indiaSeo.hero.eyebrow}
        title={indiaSeo.hero.title}
        description={indiaSeo.hero.description}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={indiaSeo.sections.statePriority.eyebrow}
                title={indiaSeo.sections.statePriority.title}
                description={indiaSeo.sections.statePriority.description}
              />
              <div className="mt-6 space-y-3">
                {indiaStates.filter((state) => state.tier === "A").map((state) => (
                  <div key={state.slug} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-sm font-semibold text-zinc-950">{state.name}</p>
                    <p className="mt-1 text-sm leading-7 text-zinc-600">{state.stateFocus}</p>
                    <Button asChild variant="link" className="mt-2 h-auto p-0 text-zinc-950">
                      <Link href={`/india/${state.slug}`}>Open state hub</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={indiaSeo.sections.workflowPriority.eyebrow}
                title={indiaSeo.sections.workflowPriority.title}
                description={indiaSeo.sections.workflowPriority.description}
              />
              <div className="mt-6 space-y-3">
                {workflows.slice(0, 6).map((workflow) => (
                  <div key={workflow.slug} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-sm font-semibold text-zinc-950">{workflow.title}</p>
                    <p className="mt-1 text-sm leading-7 text-zinc-600">{workflow.headline}</p>
                    <Button asChild variant="link" className="mt-2 h-auto p-0 text-zinc-950">
                      <Link href={`/workflows/${workflow.slug}`}>Open workflow page</Link>
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
          eyebrow={indiaSeo.sections.templatePriority.eyebrow}
          title={indiaSeo.sections.templatePriority.title}
          description={indiaSeo.sections.templatePriority.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {templates.slice(0, 6).map((template) => (
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

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-6 sm:p-8">
            <SectionHeading
              eyebrow={indiaSeo.sections.local.eyebrow}
              title={indiaSeo.sections.local.title}
              description={indiaSeo.sections.local.description}
            />
            <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
              {indiaSeo.sections.local.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={indiaSeo.sections.technical.eyebrow}
                title={indiaSeo.sections.technical.title}
                description={indiaSeo.sections.technical.description}
              />
              <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
                {indiaSeo.sections.technical.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={indiaSeo.sections.measurement.eyebrow}
                title={indiaSeo.sections.measurement.title}
                description={indiaSeo.sections.measurement.description}
              />
              <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
                {indiaSeo.measurement.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Industries" title="Industry pages support the state and workflow architecture." description="The report recommends hospitals, clinics, real estate, support teams, and service businesses as the first vertical coverage." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industriesSeo.map((industry) => (
            <Card key={industry.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{industry.keywordTarget}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{industry.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{industry.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/industries/${industry.slug}`}>Open industry page</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
