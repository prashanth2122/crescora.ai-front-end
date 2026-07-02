import Link from "next/link";

import { MarketingImageShowcase } from "@/components/site/marketing-image-showcase";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/lib/site-content";

export type ScopedIndustryPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
      caption: string;
    };
  };
  sections: Array<{
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  }>;
  trustNote: string;
  finalCta: {
    title: string;
    description: string;
  };
};

export function ScopedIndustryPage({ page }: { page: ScopedIndustryPageContent }) {
  return (
    <PageShell>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
        visual={
          <MarketingImageShowcase
            src={page.hero.image.src}
            alt={page.hero.image.alt}
            caption={page.hero.image.caption}
            priority
          />
        }
      />

      {page.sections.map((section) => (
        <section key={section.title} className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {section.items.map((item) => (
              <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <p className="text-sm leading-7 text-zinc-700">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">Human review</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">Sensitive workflows stay under staff control.</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{page.trustNote}</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-zinc-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">Next step</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">{page.finalCta.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{page.finalCta.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                  <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white">
                  <Link href={siteContent.ctas.requestScopeCall.href}>{siteContent.ctas.requestScopeCall.label}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
