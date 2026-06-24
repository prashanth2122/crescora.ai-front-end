import Link from "next/link";

import { siteContent } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";
import { useCaseCanonicalMap } from "@/lib/seo-route-map";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = createPageMetadata({
  title: siteContent.useCases.humanHandoff.metadata.title,
  description: siteContent.useCases.humanHandoff.metadata.description,
  path: "/use-cases/human-handoff-automation",
  noIndex: true,
  alternates: {
    canonical: useCaseCanonicalMap["human-handoff-automation"],
  },
});

export default function HumanHandoffPage() {
  const page = siteContent.useCases.humanHandoff;

  return (
    <PageShell>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {page.items.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-base font-medium text-zinc-950">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild className="mt-8 h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
          <Link href={page.cta.href}>{page.cta.label}</Link>
        </Button>
      </section>
    </PageShell>
  );
}
