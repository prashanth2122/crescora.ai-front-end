import Link from "next/link";

import { proofCards } from "@/lib/decision-pages";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = siteContent.proofIndex.metadata;

export default function ProofPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={siteContent.proofIndex.hero.eyebrow}
        title={siteContent.proofIndex.hero.title}
        description={siteContent.proofIndex.hero.description}
        primaryCta={siteContent.proofIndex.hero.primaryCta}
        secondaryCta={siteContent.proofIndex.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm leading-7 text-amber-950">{siteContent.proofIndex.notice}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.proofIndex.section.eyebrow}
          title={siteContent.proofIndex.section.title}
          description={siteContent.proofIndex.section.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {proofCards.map((item) => (
            <Card key={item.href} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={item.href}>{siteContent.ctas.openProofPage.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
