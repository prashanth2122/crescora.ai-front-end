import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { siteContent } from "@/lib/site-content";

type Section = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

type SeoLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  keywordTarget: string;
  sections: Section[];
  relatedLinks: RelatedLink[];
  ctaLabel: string;
  schemas?: Record<string, unknown>[];
  breadcrumbs?: Record<string, unknown>;
  extraCtaHref?: string;
  extraCtaLabel?: string;
};

export function SeoLandingPage({
  eyebrow,
  title,
  description,
  intro,
  keywordTarget,
  sections,
  relatedLinks,
  ctaLabel,
  schemas,
  breadcrumbs,
  extraCtaHref,
  extraCtaLabel,
}: SeoLandingPageProps) {
  return (
    <>
      {schemas?.map((schema, index) => <SeoJsonLd key={index} data={schema} />) ?? null}
      {breadcrumbs ? <SeoJsonLd data={breadcrumbs} /> : null}
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Workflow focus" title={keywordTarget} description={intro} />
              <p className="mt-6 text-sm leading-7 text-zinc-600">{description}</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow="Decision support"
                title="Guide the buyer to the next practical step."
                description="Help visitors move from an automation question to the right template, comparison, workflow example, or demo request."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                  Workflow guide
                </Badge>
                <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                  Related pages
                </Badge>
                <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                  Clear CTA
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <Card key={section.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
                <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Related pages" title="Connect this page to the right next destination." description="Every page should help readers continue toward the most useful workflow, template, comparison, or demo path." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedLinks.map((link) => (
            <Card key={link.href} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{link.label}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{link.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={link.href}>Open page</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">CTA</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">{ctaLabel}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
            Use the CTA to help the visitor choose a demo request or a workflow scope discussion.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
              <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
              <Link href={extraCtaHref ?? siteContent.ctas.requestScopeCall.href}>{extraCtaLabel ?? siteContent.ctas.requestScopeCall.label}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
