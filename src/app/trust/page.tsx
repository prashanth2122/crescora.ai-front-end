import Link from "next/link";

import { trustPoints } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { WorkflowVisual } from "@/components/site/workflow-visual";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = siteContent.trust.metadata;

export default function TrustPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={siteContent.trust.hero.eyebrow}
        title={siteContent.trust.hero.title}
        description={siteContent.trust.hero.description}
        primaryCta={siteContent.trust.hero.primaryCta}
        secondaryCta={siteContent.trust.hero.secondaryCta}
        visual={<WorkflowVisual />}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                {siteContent.trust.handoffBadge}
              </Badge>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                {siteContent.trust.handoffTitle}
              </h2>
              <div className="mt-6 space-y-3">
                {trustPoints.map((point) => (
                  <p key={point} className="text-sm leading-7 text-zinc-700">
                    {point}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                {siteContent.trust.dependableBadge}
              </Badge>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{siteContent.trust.dependableText}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{siteContent.trust.controlTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-600">{siteContent.trust.controlText}</p>
          <Button asChild className="mt-5 h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={siteContent.trust.cta.href}>{siteContent.trust.cta.label}</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
