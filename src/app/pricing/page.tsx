import { defaultPricingRegion, pricingPackagesByRegion, pricingRegions } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { PricingPackagesSection } from "@/components/site/pricing-packages-section";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { Card, CardContent } from "@/components/ui/card";
import {
  buildAbsoluteUrl,
  buildFaqPageSchema,
  buildItemListSchema,
  buildPageSchema,
  createExactPageMetadata,
} from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: siteContent.pricing.metadata.title,
  description: siteContent.pricing.metadata.description,
  path: "/pricing",
});

const pricingBreadcrumbs = buildBreadcrumbSchema([
  { name: "Home", href: buildAbsoluteUrl("/") },
  { name: "Pricing", href: buildAbsoluteUrl("/pricing") },
]);

const pricingPackagesSchema = buildItemListSchema(
  "Crescora AI pricing packages",
  pricingRegions.flatMap((region) =>
    pricingPackagesByRegion[region.value].map((pkg) => ({
      name: `${pkg.title} (${region.label})`,
      url: buildAbsoluteUrl("/pricing"),
      description: `${pkg.price}${pkg.priceDetail ? ` (${pkg.priceDetail})` : ""} - Best for ${pkg.bestFor}`,
    })),
  ),
);

export default function PricingPage() {
  return (
    <PageShell>
      <SeoJsonLd
        data={buildPageSchema({
          name: siteContent.pricing.metadata.title,
          description: siteContent.pricing.metadata.description,
          path: "/pricing",
        })}
      />
      <SeoJsonLd data={pricingBreadcrumbs} />
      <SeoJsonLd data={pricingPackagesSchema} />
      <SeoJsonLd data={buildFaqPageSchema(siteContent.pricing.faq.items)} />

      <PageHero
        eyebrow={siteContent.pricing.hero.eyebrow}
        title={siteContent.pricing.hero.title}
        description={siteContent.pricing.hero.description}
        primaryCta={siteContent.pricing.hero.primaryCta}
        secondaryCta={siteContent.pricing.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white/85 px-6 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <p className="text-sm font-medium leading-7 text-zinc-700">{siteContent.pricing.hero.trustLine}</p>
        </div>

        <section className="mt-8 rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            {siteContent.pricing.included.title}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {siteContent.pricing.included.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <PricingPackagesSection
          defaultRegion={defaultPricingRegion}
          regionLabel={siteContent.pricing.regionSelector.label}
          regionHelperText={siteContent.pricing.regionSelector.helperText}
          regionOptions={pricingRegions}
          regionNotes={siteContent.pricing.regionNotes}
          packagesByRegion={pricingPackagesByRegion}
          scopeNote={siteContent.pricing.scopeNote}
          primaryCta={siteContent.pricing.ctas.primary}
          secondaryCta={siteContent.pricing.ctas.secondary}
        />

        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {[siteContent.pricing.beforeLaunch, siteContent.pricing.mayCostExtra].map((section) => (
              <Card key={section.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{section.eyebrow}</p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{section.title}</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm leading-7 text-zinc-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 text-sm leading-7 text-zinc-700 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              {siteContent.pricing.trustCopy}
            </div>
            <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 text-sm leading-7 text-zinc-700 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              {siteContent.pricing.cancellationPolicy}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            eyebrow={siteContent.pricing.factors.eyebrow}
            title={siteContent.pricing.factors.title}
            description={siteContent.pricing.factors.description}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {siteContent.pricing.factors.items.map((item) => (
              <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {[siteContent.pricing.clientReadiness, siteContent.pricing.scopeClarity].map((section) => (
              <Card key={section.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{section.eyebrow}</p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{section.title}</h2>
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm leading-7 text-zinc-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            eyebrow={siteContent.pricing.faq.eyebrow}
            title={siteContent.pricing.faq.title}
            description={siteContent.pricing.faq.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {siteContent.pricing.faq.items.map((item) => (
              <Card key={item.question} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </PageShell>
  );
}
