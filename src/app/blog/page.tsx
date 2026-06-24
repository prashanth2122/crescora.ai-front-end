import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { createPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";
import { blogPosts } from "@/lib/seo-marketing-data";

export const metadata = {
  ...createPageMetadata({
    title: "Blog",
    description: "Operational articles and implementation notes from the Crescora team.",
    path: "/blog",
    noIndex: true,
  }),
};

export default function BlogPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://www.crescora.ai" },
    { name: "Blog", href: "https://www.crescora.ai/blog" },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Blog"
        title="Editorial notes, rollout ideas, and product guidance."
        description="This hub will carry long-form operational content. Until the article library is fully rewritten, it stays out of the search index."
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.viewSolutions}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Posts"
          title="Current draft articles"
          description="Each article links back to the relevant solution, proof, or comparison page while the editorial layer is being rebuilt."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{post.category}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{post.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/blog/${post.slug}`}>Open article</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
