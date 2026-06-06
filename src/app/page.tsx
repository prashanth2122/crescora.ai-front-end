import Link from "next/link";

import { homepageCapabilities, industryCards, pricingPackages, trustPoints } from "@/lib/site-data";
import { siteContent } from "@/lib/site-content";
import { blogPosts, solutionPages } from "@/lib/seo-marketing-data";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { WorkflowVisual } from "@/components/site/workflow-visual";
import { LeadForm } from "@/components/site/lead-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function HomePage() {
  const {
    hero,
    painPoints,
    pain,
    outcomes,
    industries,
    howItWorks,
    beforeAfter,
    trust,
    faq,
    pricing,
    finalCta,
  } = siteContent.homepage;

  return (
    <PageShell>
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_30px_120px_rgba(15,23,42,0.28)]">
          <div className="bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.28),transparent_22%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.22),transparent_22%),linear-gradient(135deg,#050816_0%,#0b1220_50%,#111827_100%)] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="text-white">
                <Badge className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-white hover:bg-white/15">
                  {hero.badge}
                </Badge>
                <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                  {hero.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  {hero.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                    <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href={siteContent.ctas.viewTemplates.href}>{siteContent.ctas.viewTemplates.label}</Link>
                  </Button>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/50">{hero.builtForLabel}</p>
                  <p className="mt-2 text-sm leading-7 text-white/80">{hero.builtForText}</p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {hero.stats.map((stat) => (
                    <Card key={stat.label} className="border-white/10 bg-white/5 text-white">
                      <CardContent className="p-4">
                        <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
                        <p className="mt-2 text-sm leading-6 text-white/65">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="lg:pl-2">
                <WorkflowVisual className="shadow-[0_25px_80px_rgba(0,0,0,0.45)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {painPoints.slice(0, 3).map((point) => (
            <Card key={point} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <p className="mt-4 text-lg font-medium text-zinc-950">{point}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{pain.warningText}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={pain.eyebrow} title={pain.title} description={pain.description} />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((point) => (
            <Card key={point} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex items-start gap-4 p-6">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <p className="text-base font-medium text-zinc-950">{point}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{pain.cardText}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={outcomes.eyebrow} title={outcomes.title} description={outcomes.description} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">From message to outcome</p>
              <div className="mt-6 space-y-4">
                {outcomes.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm leading-7 text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <Badge className="rounded-full border-white/10 bg-white/10 px-4 py-1 text-xs text-white hover:bg-white/15">
                Automation claim
              </Badge>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{outcomes.automationClaim}</h3>
              <p className="mt-4 text-base leading-8 text-white/72">{outcomes.automationSupport}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {outcomes.results.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/65">Result</p>
                    <p className="mt-1 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={industries.eyebrow} title={industries.title} description={industries.description} />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {industryCards.map((industry) => (
            <Card
              key={industry.title}
              className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
                  {industry.title}
                </Badge>
                <p className="mt-4 text-lg font-medium text-zinc-950">{industry.text}</p>
                <Button asChild variant="link" className="mt-4 h-auto p-0 text-zinc-950">
                  <Link href={industry.href}>View {industry.title} Workflows</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title="Solution pages capture the highest-intent product searches."
          description="These pages translate the product into exact buyer pain points, then link into templates, comparisons, and demos."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {solutionPages.map((page) => (
            <Card key={page.slug} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{page.keywordTarget}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{page.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{page.description}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={`/solutions/${page.slug}`}>Open solution page</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Blog content supports informational search and internal linking."
          description="These articles are designed to support the solution pages and capture the educational queries from the brief."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {blogPosts.slice(0, 4).map((post) => (
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
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={siteContent.ctas.viewBlog.href}>{siteContent.ctas.viewBlog.label}</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-6">
            <Link href={siteContent.ctas.viewSolutions.href}>{siteContent.ctas.viewSolutions.label}</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} description={howItWorks.description} />
            <div className="mt-6 rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{howItWorks.teamLabel}</p>
              <p className="mt-4 text-base leading-8 text-zinc-600">{howItWorks.teamDescription}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {homepageCapabilities.map((capability) => (
              <Card key={capability.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <p className="text-base font-medium text-zinc-950">{capability.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{capability.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{beforeAfter.beforeLabel}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
                {beforeAfter.beforeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#fafafa_0%,#ffffff_100%)] shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{beforeAfter.afterLabel}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-700">
                {beforeAfter.afterItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{trust.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{trust.title}</h3>
              <div className="mt-6 space-y-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-sm leading-7 text-zinc-700">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{faq.eyebrow}</p>
              <Accordion type="single" collapsible className="mt-4">
                {faq.items.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="text-zinc-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} description={pricing.description} />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {pricingPackages.map((pkg) => (
            <Card key={pkg.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{pkg.bestFor}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{pkg.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{pkg.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={siteContent.ctas.seePricing.href}>{siteContent.ctas.seePricing.label}</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-6">
            <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <LeadForm />
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-0 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">{finalCta.eyebrow}</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">{finalCta.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-600">{finalCta.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                <Link href={finalCta.primary.href}>{finalCta.primary.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6">
                <Link href={finalCta.secondary.href}>{finalCta.secondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
