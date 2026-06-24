import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { siteContent } from "@/lib/site-content";
import type { BlogPost } from "@/lib/seo-marketing-data";

type SeoBlogPageProps = {
  post: BlogPost;
  schema: Record<string, unknown>;
  breadcrumbs?: Record<string, unknown>;
};

export function SeoBlogPage({ post, schema, breadcrumbs }: SeoBlogPageProps) {
  const publishedLabel = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(post.publishedAt));
  const modifiedLabel = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(post.modifiedAt));

  return (
    <>
      <SeoJsonLd data={schema} />
      {breadcrumbs ? <SeoJsonLd data={breadcrumbs} /> : null}
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.description}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Keyword target" title={post.keywordTarget} description={post.summary} />
              <p className="mt-6 text-sm leading-7 text-zinc-600">{post.description}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                <span>Author: {post.author}</span>
                <span>Published: {publishedLabel}</span>
                <span>Updated: {modifiedLabel}</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow="SEO notes"
                title="Each post should point back to the money pages."
                description="Link the article to the solution, industry, template, and comparison pages that match the topic."
              />
              <Badge variant="secondary" className="mt-6 rounded-full bg-zinc-100 text-zinc-700">
                Content marketing
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-0">
            <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Representative image</p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">Each article now carries a representative image, visible authorship, and publication metadata instead of relying only on the page title.</p>
            </div>
            <div className="relative aspect-[16/7] w-full">
              <Image src={post.representativeImagePath} alt={post.title} fill className="object-cover" sizes="100vw" />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {post.sections.map((section) => (
            <Card key={section.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <SectionHeading eyebrow="Section" title={section.title} description={section.description} />
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
        <SectionHeading eyebrow="Related links" title="Use the post to move readers deeper into the site." description="Internal links should send readers to the most relevant commercial page." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {post.relatedLinks.map((link) => (
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
    </>
  );
}
