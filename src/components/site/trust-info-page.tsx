import { CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { buildAbsoluteUrl, buildPageSchema } from "@/lib/seo";

type TrustInfoPageCopy = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  sections: readonly {
    title: string;
    items: readonly string[];
  }[];
};

type TrustInfoPageProps = {
  path: string;
  breadcrumbLabel: string;
  copy: TrustInfoPageCopy;
};

export function TrustInfoPage({ path, breadcrumbLabel, copy }: TrustInfoPageProps) {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: buildAbsoluteUrl("/") },
    { name: breadcrumbLabel, href: buildAbsoluteUrl(path) },
  ]);

  return (
    <PageShell>
      <SeoJsonLd
        data={buildPageSchema({
          name: copy.metadata.title,
          description: copy.metadata.description,
          path,
        })}
      />
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description}
        primaryCta={copy.hero.primaryCta}
        secondaryCta={copy.hero.secondaryCta}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={breadcrumbLabel}
          title="What this means before rollout"
          description="These boundaries are intentionally explicit so a pilot starts with shared expectations instead of vague platform promises."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {copy.sections.map((section) => (
            <Card key={section.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{section.title}</h2>
                <ul className="mt-5 space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-zinc-700">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
