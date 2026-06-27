import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildFaqPageSchema } from "@/lib/seo";
import type { BlogPost, BlogPublicPage } from "@/lib/seo-marketing-data";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type SeoBlogPageProps = {
  post: BlogPost;
  schema: Record<string, unknown>;
  breadcrumbs?: Record<string, unknown>;
};

const sharedBlogFeaturedImagePath = "/blog/shared-blog-featured.png";

function buildFallbackPublicPage(post: BlogPost): BlogPublicPage {
  return {
    heroDescription: post.summary,
    heroPrimaryCta: siteContent.ctas.bookProjectDemo,
    heroSecondaryCta: siteContent.ctas.requestScopeCall,
    overviewCards: [
      {
        eyebrow: "Article focus",
        title: post.keywordTarget,
        description: post.description,
      },
      {
        eyebrow: "Reader outcome",
        title: `What this ${post.category.toLowerCase()} article covers`,
        description: "Use this article to move readers from search intent into a practical next workflow step.",
      },
    ],
    featuredImage: {
      eyebrow: "Featured workflow example",
      title: "A visual reference for the workflow path behind the article.",
      description: "Each public article should show the workflow shape, the next action, and the business outcome.",
    },
    sections: post.sections.map((section) => ({
      id: section.title.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-"),
      eyebrow: "Section",
      title: section.title,
      description: section.description,
      bullets: section.bullets,
    })),
    finalCta: {
      eyebrow: "Next step",
      title: "Ready to map this workflow to your business?",
      description: "Use the matching workflow, template, or demo path to move from research into rollout planning.",
      primary: siteContent.ctas.bookProjectDemo,
      secondary: siteContent.ctas.requestScopeCall,
    },
  };
}

function BlogHeroVisual({ chips }: { chips?: string[] }) {
  if (!chips?.length) {
    return null;
  }

  return (
    <Card className="overflow-hidden border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <CardContent className="p-0">
        <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Workflow status model</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">Track the customer journey instead of relying on chat memory.</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            A practical WhatsApp workflow should show the state of each enquiry, booking, reminder, payment, or handover.
          </p>
        </div>
        <div className="p-6">
          <div className="rounded-[1.5rem] border border-zinc-900 bg-zinc-950 p-5 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">Visible stages</p>
                <p className="mt-2 text-lg font-semibold">Operational states your team can act on</p>
              </div>
              <Badge className="border-white/10 bg-white/10 text-white hover:bg-white/15">FLOW</Badge>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <div key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/85">
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function SeoBlogPage({ post, schema, breadcrumbs }: SeoBlogPageProps) {
  const publicPage = post.publicPage ?? buildFallbackPublicPage(post);
  const faqSchema = publicPage.faqSection?.items.length ? buildFaqPageSchema(publicPage.faqSection.items) : null;
  const isSharedFeaturedImage = post.representativeImagePath === sharedBlogFeaturedImagePath;
  const featuredImageAspectRatioClass = isSharedFeaturedImage
    ? "aspect-[3/2]"
    : (publicPage.featuredImage?.aspectRatioClass ?? "aspect-[16/7]");
  const featuredImageFrameClassName = cn(
    isSharedFeaturedImage && "bg-white",
    publicPage.featuredImage?.frameClassName,
  );
  const featuredImageClassName = cn(
    isSharedFeaturedImage ? "object-contain object-center" : "object-cover",
    publicPage.featuredImage?.imageClassName,
  );

  return (
    <>
      <SeoJsonLd data={schema} />
      {breadcrumbs ? <SeoJsonLd data={breadcrumbs} /> : null}
      {faqSchema ? <SeoJsonLd data={faqSchema} /> : null}

      <PageHero
        eyebrow={post.category}
        title={publicPage.heroTitle ?? post.title}
        description={publicPage.heroDescription ?? post.description}
        primaryCta={publicPage.heroPrimaryCta ?? siteContent.ctas.bookProjectDemo}
        secondaryCta={publicPage.heroSecondaryCta ?? siteContent.ctas.requestScopeCall}
        supportText={publicPage.heroSupportText}
        visual={<BlogHeroVisual chips={publicPage.statusChips} />}
      />

      {publicPage.sections?.length ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading
                eyebrow={publicPage.tocSection?.eyebrow ?? "Article guide"}
                title={publicPage.tocSection?.title ?? "Table of contents"}
                description={
                  publicPage.tocSection?.description ??
                  "Jump to the part of the article that matches your rollout question."
                }
              />
              <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {publicPage.sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm font-medium text-zinc-800 transition hover:border-zinc-300 hover:bg-white"
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      ) : null}

      {publicPage.overviewCards?.length ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {publicPage.overviewCards.map((card) => (
              <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{card.eyebrow}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">{card.title}</h2>
                  <p className="mt-4 text-base leading-8 text-zinc-600">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-0">
            <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {publicPage.featuredImage?.eyebrow ?? "Featured workflow example"}
              </p>
              {publicPage.featuredImage?.title ? (
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">{publicPage.featuredImage.title}</h2>
              ) : null}
              {publicPage.featuredImage?.description ? (
                <p className="mt-3 text-sm leading-7 text-zinc-600">{publicPage.featuredImage.description}</p>
              ) : null}
            </div>
            <div
              className={cn(
                "relative w-full",
                featuredImageAspectRatioClass,
                featuredImageFrameClassName,
              )}
            >
              <Image
                src={post.representativeImagePath}
                alt={post.title}
                fill
                className={featuredImageClassName}
                sizes="100vw"
              />
            </div>
            {publicPage.featuredImage?.footer ? (
              <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-4 text-xs leading-6 text-zinc-500">
                {publicPage.featuredImage.footer}
              </div>
            ) : null}
          </CardContent>
        </Card>
      </section>

      {publicPage.sections?.map((section, index) => (
        <section key={section.id} id={section.id} className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />

              {section.paragraphs?.length ? (
                <div className="mt-6 space-y-4 text-base leading-8 text-zinc-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {section.bullets?.length ? (
                <ul className="mt-6 space-y-3 text-base leading-8 text-zinc-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.cards?.length ? (
                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {section.cards.map((card) => (
                    <div key={card.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                      <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{card.description}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.table ? (
                <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-zinc-200">
                  <div
                    className="grid border-b border-zinc-200 bg-zinc-50 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500"
                    style={{ gridTemplateColumns: `repeat(${section.table.headers.length}, minmax(0, 1fr))` }}
                  >
                    {section.table.headers.map((header, headerIndex) => (
                      <div key={header} className={`px-6 py-4 ${headerIndex > 0 ? "border-l border-zinc-200" : ""}`}>
                        {header}
                      </div>
                    ))}
                  </div>
                  {section.table.rows.map((row) => (
                    <div
                      key={row.join("|")}
                      className="grid border-b border-zinc-200 last:border-b-0"
                      style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
                    >
                      {row.map((cell, cellIndex) => (
                        <div
                          key={`${row[0]}-${cellIndex}`}
                          className={`px-6 py-5 text-sm leading-7 ${cellIndex === 0 ? "font-medium text-zinc-950" : "text-zinc-600"} ${cellIndex > 0 ? "border-l border-zinc-200" : ""}`}
                        >
                          {cell}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : null}

              {section.cta ? (
                <div className="mt-8">
                  <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                    <Link href={section.cta.href}>{section.cta.label}</Link>
                  </Button>
                </div>
              ) : null}
            </CardContent>
          </Card>

          {index === 2 && publicPage.midCta ? (
            <div className="mt-6 rounded-[1.75rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">{publicPage.midCta.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{publicPage.midCta.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">{publicPage.midCta.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                  <Link href={publicPage.midCta.primary.href}>{publicPage.midCta.primary.label}</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10">
                  <Link href={publicPage.midCta.secondary.href}>{publicPage.midCta.secondary.label}</Link>
                </Button>
              </div>
            </div>
          ) : null}
        </section>
      ))}

      {post.relatedLinks.length ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={publicPage.relatedLinksSection?.eyebrow ?? "Related links"}
            title={publicPage.relatedLinksSection?.title ?? "Related pages to explore next"}
            description={
              publicPage.relatedLinksSection?.description ??
              "Open the solution, workflow, template, pricing, or industry page that matches your next question."
            }
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {post.relatedLinks.map((link) => (
              <Card key={link.href} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{link.label}</h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{link.description}</p>
                  <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                    <Link href={link.href}>{link.ctaLabel ?? "Explore page"}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      {publicPage.faqSection ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={publicPage.faqSection.eyebrow}
            title={publicPage.faqSection.title}
            description={publicPage.faqSection.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {publicPage.faqSection.items.map((item) => (
              <Card key={item.question} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      {publicPage.finalCta ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">{publicPage.finalCta.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{publicPage.finalCta.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">{publicPage.finalCta.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                <Link href={publicPage.finalCta.primary.href}>{publicPage.finalCta.primary.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10">
                <Link href={publicPage.finalCta.secondary.href}>{publicPage.finalCta.secondary.label}</Link>
              </Button>
            </div>
            {publicPage.finalCta.note ? (
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60">{publicPage.finalCta.note}</p>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
}
