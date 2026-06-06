import Link from "next/link";

import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = siteContent.about.metadata;

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={siteContent.about.hero.eyebrow}
        title={siteContent.about.hero.title}
        description={siteContent.about.hero.description}
        primaryCta={siteContent.about.hero.primaryCta}
        secondaryCta={siteContent.about.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                {siteContent.about.mission.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{siteContent.about.mission.description}</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                {siteContent.about.belief.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{siteContent.about.belief.description}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={siteContent.about.cta.href}>{siteContent.about.cta.label}</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
