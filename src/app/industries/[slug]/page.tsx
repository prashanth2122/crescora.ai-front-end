import { notFound } from "next/navigation";

import { PageShell } from "@/components/site/page-shell";
import { SeoLandingPage } from "@/components/site/seo-landing-page";
import { buildBreadcrumbSchema, seoSoftwareSchema } from "@/lib/india-seo-data";
import { industrySeoLandingPages } from "@/lib/seo-marketing-data";
import { createPageMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

const pagesBySlug = new Map(industrySeoLandingPages.map((page) => [page.slug, page] as const));

export function generateStaticParams() {
  return industrySeoLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = pagesBySlug.get(slug);

  if (!page) {
    return {};
  }

  return {
    ...createPageMetadata({
      title: page.title,
      description: page.description,
      path: `/industries/${page.slug}`,
    }),
  };
}

export default async function IndustrySeoAliasPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = pagesBySlug.get(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "Industries", href: "https://www.crescora.ai/industries" },
    { name: page.title, href: `https://www.crescora.ai/industries/${page.slug}` },
  ]);

  return (
    <PageShell>
      <SeoLandingPage
        eyebrow="Industry"
        title={page.h1}
        description={page.description}
        intro={page.intro}
        keywordTarget={page.keywordTarget}
        sections={page.sections}
        relatedLinks={page.relatedLinks}
        ctaLabel={page.ctaLabel}
        schemas={[seoSoftwareSchema]}
        breadcrumbs={breadcrumbs}
        extraCtaHref="/templates"
        extraCtaLabel="View Industry Templates"
      />
    </PageShell>
  );
}
