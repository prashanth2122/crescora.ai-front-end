import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { siteContent } from "@/lib/site-content";
import { blogPosts } from "@/lib/seo-marketing-data";

export const metadata = {
  title: "Blog | FLOW by Crescora",
  description: "SEO blog posts covering WhatsApp automation, appointments, support, payments, real estate, hospitals, and workflow automation in India.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "https://crescora.ai" },
    { name: "Blog", href: "https://crescora.ai/blog" },
  ]);

  return (
    <PageShell>
      <SeoJsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Blog"
        title="Blog content captures informational search intent and supports the money pages."
        description="These posts are written to support the solution, industry, template, and comparison routes from the pasted brief."
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.viewSolutions}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Posts"
          title="Publish articles that link back to the commercial pages."
          description="The brief recommends 2 posts per week; this hub gives you a scalable route tree for that cadence."
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
