import Link from "next/link";

import { comparisonCards, proofCards } from "@/lib/decision-pages";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = siteContent.resources.metadata;

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={siteContent.resources.hero.eyebrow}
        title={siteContent.resources.hero.title}
        description={siteContent.resources.hero.description}
        primaryCta={siteContent.resources.hero.primaryCta}
        secondaryCta={siteContent.resources.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.resources.decisionSection.eyebrow}
          title={siteContent.resources.decisionSection.title}
          description={siteContent.resources.decisionSection.description}
        />
        <div className="mt-10 grid gap-4 xl:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {siteContent.resources.comparisonLabel}
              </p>
              <div className="mt-5 space-y-4">
                {comparisonCards.map((item) => (
                  <div key={item.href} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <h3 className="text-base font-semibold text-zinc-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{item.text}</p>
                    <Button asChild variant="link" className="mt-2 h-auto p-0 text-zinc-950">
                      <Link href={item.href}>{siteContent.ctas.openComparison.label}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {siteContent.resources.proofLabel}
              </p>
              <div className="mt-5 space-y-4">
                {proofCards.map((item) => (
                  <div key={item.href} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <h3 className="text-base font-semibold text-zinc-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{item.text}</p>
                    <Button asChild variant="link" className="mt-2 h-auto p-0 text-zinc-950">
                      <Link href={item.href}>{siteContent.ctas.openProofPage.label}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.resources.contentHub.eyebrow}
          title={siteContent.resources.contentHub.title}
          description={siteContent.resources.contentHub.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {siteContent.resources.contentHub.items.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-base font-medium text-zinc-950">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-6">
            <Link href={siteContent.ctas.requestScopeCall.href}>{siteContent.ctas.requestScopeCall.label}</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
