import { notFound } from "next/navigation";

import { SeoLandingPage } from "@/components/site/seo-landing-page";
import { PageShell } from "@/components/site/page-shell";
import { buildBreadcrumbSchema, seoSoftwareSchema } from "@/lib/india-seo-data";
import { solutionPages } from "@/lib/seo-marketing-data";

type Params = Promise<{ slug: string }>;

const pagesBySlug = new Map(solutionPages.map((page) => [page.slug, page] as const));

export function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = pagesBySlug.get(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/solutions/${page.slug}` },
  };
}

export default async function SolutionPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = pagesBySlug.get(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Home", href: "https://crescora.ai" },
    { name: "Solutions", href: "https://crescora.ai/solutions" },
    { name: page.title, href: `https://crescora.ai/solutions/${page.slug}` },
  ]);

  return (
    <PageShell>
      <SeoLandingPage
        eyebrow="Solution"
        title={page.h1}
        description={page.description}
        intro={page.intro}
        keywordTarget={page.keywordTarget}
        sections={page.sections}
        relatedLinks={page.relatedLinks}
        ctaLabel={page.ctaLabel}
        schema={seoSoftwareSchema}
        breadcrumbs={breadcrumbs}
        extraCtaHref="/contact"
        extraCtaLabel="Request scope call"
      />
    </PageShell>
  );
}
