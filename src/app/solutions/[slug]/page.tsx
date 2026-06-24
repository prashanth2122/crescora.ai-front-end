import { notFound } from "next/navigation";

import { RevenueSolutionPage } from "@/components/site/revenue-solution-page";
import { PageShell } from "@/components/site/page-shell";
import { buildRouteSocialImagePath, createPageMetadata } from "@/lib/seo";
import { revenuePages, revenuePagesBySlug } from "@/lib/revenue-pages";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return revenuePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = revenuePagesBySlug.get(slug);

  if (!page) {
    return {};
  }

  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/solutions/${page.slug}`,
    imagePath: buildRouteSocialImagePath(`/solutions/${page.slug}`),
  });
}

export default async function SolutionPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = revenuePagesBySlug.get(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "Solutions", href: "https://www.crescora.ai/solutions" },
    { name: page.title, href: `https://www.crescora.ai/solutions/${page.slug}` },
  ];

  return (
    <PageShell>
      <RevenueSolutionPage page={page} breadcrumbs={breadcrumbs} />
    </PageShell>
  );
}
