import Link from "next/link";

import { industryCards } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { industrySeoLandingPages } from "@/lib/seo-marketing-data";

export const metadata = siteContent.industriesIndex.metadata;

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", href: "https://crescora.ai" },
  { name: "Industries", href: "https://crescora.ai/industries" },
]);

export default function IndustriesPage() {
  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={siteContent.industriesIndex.hero.eyebrow}
        title={siteContent.industriesIndex.hero.title}
        description={siteContent.industriesIndex.hero.description}
        primaryCta={siteContent.industriesIndex.hero.primaryCta}
        secondaryCta={siteContent.industriesIndex.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {industryCards.map((industry) => (
            <Card key={industry.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{industry.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{industry.text}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                    <Link href={industry.href}>{siteContent.ctas.viewIndustryWorkflow.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <SectionHeading
            eyebrow={siteContent.industriesIndex.phaseTwo.eyebrow}
            title={siteContent.industriesIndex.phaseTwo.title}
            description={siteContent.industriesIndex.phaseTwo.description}
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SEO landing pages"
          title="Additional industry landing pages target the exact queries from the brief."
          description="These are the keyword-specific versions that complement the existing industry pages."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {industrySeoLandingPages.map((industry) => (
            <Card key={industry.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{industry.keywordTarget}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{industry.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{industry.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/industries/${industry.slug}`}>Open SEO landing page</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
