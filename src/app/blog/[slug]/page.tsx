import { notFound } from "next/navigation";

import { SeoBlogPage } from "@/components/site/seo-blog-page";
import { PageShell } from "@/components/site/page-shell";
import { articleSchemaForPost, blogPosts } from "@/lib/seo-marketing-data";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { createArticleMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

const postsBySlug = new Map(blogPosts.map((post) => [post.slug, post] as const));

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = postsBySlug.get(slug);

  if (!post) {
    return {};
  }

  return {
    ...createArticleMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      authors: [post.author],
      imagePath: post.representativeImagePath,
      noIndex: true,
    }),
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = postsBySlug.get(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "Blog", href: "https://www.crescora.ai/blog" },
    { name: post.title, href: `https://www.crescora.ai/blog/${post.slug}` },
  ]);

  return (
    <PageShell>
      <SeoBlogPage post={post} schema={articleSchemaForPost(post)} breadcrumbs={breadcrumbs} />
    </PageShell>
  );
}
