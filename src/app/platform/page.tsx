import Link from "next/link";

import { homepageCapabilities, trustPoints } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { WorkflowVisual } from "@/components/site/workflow-visual";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: siteContent.platform.metadata.title,
  description: siteContent.platform.metadata.description,
  path: "/platform",
});

export default function PlatformPage() {
  const page = siteContent.platform;

  return (
    <PageShell>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        visual={<WorkflowVisual />}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.section.eyebrow} title={page.section.title} description={page.section.description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {homepageCapabilities.map((item) => (
            <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-base font-medium text-zinc-950">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                {page.team.badge}
              </Badge>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{page.team.title}</h3>
              <div className="mt-6 space-y-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-sm leading-7 text-zinc-700">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">{page.team.startLabel}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{page.team.startTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">{page.team.startText}</p>
              <Button asChild className="mt-6 h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                <Link href={page.team.cta.href}>{page.team.cta.label}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
