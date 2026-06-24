import Link from "next/link";

import { pricingPackages } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  "FLOW pricing packages",
  pricingPackages.map((pkg) => ({
    name: pkg.title,
    url: buildAbsoluteUrl("/pricing"),
    description: `${pkg.price}${pkg.priceDetail ? ` (${pkg.priceDetail})` : ""} - Best for ${pkg.bestFor}`,
  })),
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
        <div className="grid gap-4 lg:grid-cols-4">
          {pricingPackages.map((pkg) => (
            <Card
              key={pkg.title}
              className="flex h-full flex-col border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
            >
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{pkg.label}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{pkg.title}</h2>
                <div className="mt-4">
                  <p className="text-3xl font-semibold tracking-tight text-zinc-950">{pkg.price}</p>
                  {pkg.priceDetail ? (
                    <p className="mt-1 text-sm font-medium leading-6 text-zinc-500">{pkg.priceDetail}</p>
                  ) : null}
                </div>
                <p className="mt-3 text-sm font-medium leading-7 text-zinc-950">Best for</p>
                <p className="text-sm leading-7 text-zinc-600">{pkg.bestFor}</p>
                <p className="mt-4 text-sm font-medium leading-7 text-zinc-950">Includes</p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-zinc-600">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <p className="text-sm leading-7 text-zinc-600">{siteContent.pricing.note}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
              <Link href={siteContent.pricing.ctas.primary.href}>{siteContent.pricing.ctas.primary.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full px-6">
              <Link href={siteContent.pricing.ctas.secondary.href}>{siteContent.pricing.ctas.secondary.label}</Link>
            </Button>
          </div>
        </div>

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
