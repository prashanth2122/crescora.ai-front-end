import Link from "next/link";

import { siteContent } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { MarketingImageShowcase } from "@/components/site/marketing-image-showcase";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createExactPageMetadata } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: siteContent.industries.healthcare.metadata.title,
  description: siteContent.industries.healthcare.metadata.description,
  path: "/industries/healthcare",
});

export default function HealthcarePage() {
  const page = siteContent.industries.healthcare;

  return (
    <PageShell>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        visual={
          <MarketingImageShowcase
            src="/marketing/labs-test-usecases.png"
            alt="Crescora AI medical labs and healthcare automation workflow graphic for test requests, report status, reminders, and staff review."
            caption="Healthcare and labs marketing visual using demo workflow content, not a live diagnostic or hospital deployment."
            priority
          />
        }
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pain" title={page.painTitle} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.painPoints.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-base font-medium text-zinc-950">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Workflow" title={page.workflowTitle} description={page.workflowDescription} />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {page.workflows.map((item) => (
            <Card key={item} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                    Crescora AI
                  </Badge>
                  <p className="text-base font-medium text-zinc-950">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">{page.beforeTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{page.beforeText}</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">{page.afterTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{page.afterText}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
            Trust
          </Badge>
          <p className="mt-4 text-sm leading-7 text-zinc-600">{page.trustText}</p>
          <Button asChild className="mt-5 h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={page.cta.href}>{page.cta.label}</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
