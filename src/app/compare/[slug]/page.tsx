import { notFound } from "next/navigation";

import { ComparisonPageTemplate } from "@/components/site/decision-pages";
import { comparisonPages } from "@/lib/decision-pages";
import { buildRouteSocialImagePath, createExactPageMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

const compareSlugs = [
  "flow-vs-chatbot-builder",
  "flow-vs-whatsapp-chatbot-tools",
  "flow-vs-manual-customer-support",
  "flow-vs-zapier-for-indian-businesses",
] as const;

export function generateStaticParams() {
  return compareSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = comparisonPages[slug];

  if (!page) {
    return {};
  }

  return createExactPageMetadata({
    title: page.metadata.title,
    description: page.metadata.description,
    path: `/compare/${slug}`,
    imagePath: buildRouteSocialImagePath(`/compare/${slug}`),
  });
}

export default async function CompareDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = comparisonPages[slug];

  if (!page) {
    notFound();
  }

  return <ComparisonPageTemplate {...page} />;
}
