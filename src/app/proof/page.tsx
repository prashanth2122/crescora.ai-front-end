import Link from "next/link";

import { proofCards } from "@/lib/decision-pages";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const metadata = siteContent.proofIndex.metadata;

export default function ProofPage() {
  const { hero, notice, section, includes, cta } = siteContent.proofIndex;

  return (
    <PageShell>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm leading-7 text-amber-950">{notice}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {proofCards.map((item) => (
            <Card key={item.href} className="flex h-full border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex h-full flex-col p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                <Button asChild variant="link" className="mt-auto h-auto w-fit p-0 text-zinc-950 hover:no-underline">
                  <Link href={item.href}>{siteContent.ctas.openProofPage.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={includes.eyebrow} title={includes.title} description={includes.description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {includes.items.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex h-full items-start gap-3 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-[15px] leading-7 text-zinc-700">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">Next step</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">Ready to compare the right workflow example?</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-600">
                Tell us your industry and current process. We&apos;ll suggest the best starting workflow for your business.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6">
                <Link href={hero.secondaryCta?.href ?? "/contact"}>{hero.secondaryCta?.label ?? "Discuss My Workflow"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
