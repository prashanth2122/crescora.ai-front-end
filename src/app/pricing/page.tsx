import Link from "next/link";

import { pricingPackages } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = siteContent.pricing.metadata;

export default function PricingPage() {
  return (
    <PageShell>
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
            <Card key={pkg.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{pkg.bestFor}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{pkg.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{pkg.text}</p>
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
      </section>
    </PageShell>
  );
}
