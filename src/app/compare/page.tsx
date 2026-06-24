import Link from "next/link";

import { comparisonCards } from "@/lib/decision-pages";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: siteContent.compareIndex.metadata.title,
  description: siteContent.compareIndex.metadata.description,
  path: "/compare",
});

export default function ComparePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={siteContent.compareIndex.hero.eyebrow}
        title={siteContent.compareIndex.hero.title}
        description={siteContent.compareIndex.hero.description}
        primaryCta={siteContent.compareIndex.hero.primaryCta}
        secondaryCta={siteContent.compareIndex.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.compareIndex.section.eyebrow}
          title={siteContent.compareIndex.section.title}
          description={siteContent.compareIndex.section.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {comparisonCards.map((item) => (
            <Card key={item.href} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={item.href}>{siteContent.ctas.openComparison.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
