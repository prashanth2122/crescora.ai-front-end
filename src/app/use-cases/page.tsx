import Link from "next/link";

import { useCases } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = siteContent.useCasesIndex.metadata;

export default function UseCasesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={siteContent.useCasesIndex.hero.eyebrow}
        title={siteContent.useCasesIndex.hero.title}
        description={siteContent.useCasesIndex.hero.description}
        primaryCta={siteContent.useCasesIndex.hero.primaryCta}
        secondaryCta={siteContent.useCasesIndex.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item) => (
            <Card key={item.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={item.href}>{siteContent.ctas.openUseCase.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
