import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { createLocalizedMetadata, getLocaleCopy, localizedEntryRoutes } from "@/lib/locales";
import { hiPageCopy } from "@/lib/page-copy/hi";

const page = hiPageCopy.home;
const copy = getLocaleCopy("hi");

export const metadata = createLocalizedMetadata(
  "/hi",
  page.metadata.title,
  page.metadata.description,
);

const breadcrumbSchema = buildBreadcrumbSchema(page.breadcrumb);

export default function HindiHomePage() {
  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={copy.ctas.bookProjectDemo}
        secondaryCta={{ label: page.hero.secondaryCta, href: "/hi/solutions" }}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.routeSection.eyebrow}
          title={page.routeSection.title}
          description={page.routeSection.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.routeCards.map((route) => (
            <Card key={route.href} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Locale hub</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{route.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{route.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={route.href}>{copy.pageActions.openLocaleHub}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="border-zinc-200 bg-zinc-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
          <CardContent className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">{page.foundation.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{page.foundation.title}</h2>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                {page.foundation.routesLabel}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-white/72">{localizedEntryRoutes.join(" • ")}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                <Link href="/hi/solutions">Hindi solutions</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/15 px-6 text-white hover:bg-white/10 hover:text-white">
                <Link href="/hi/solutions">{copy.ctas.viewSolutions.label}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
