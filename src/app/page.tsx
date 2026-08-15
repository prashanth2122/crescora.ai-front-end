import type { Metadata } from "next";
import Link from "next/link";

import { getHomepageDemoVideoUrl, getPublicContactSurfaceConfig } from "@/lib/app-config";
import { homepageReviews } from "@/lib/homepage-reviews";
import { siteContent } from "@/lib/site-content";
import {
  buildAbsoluteUrl,
  buildFaqPageSchema,
  createExactPageMetadata,
  homepageServicesListSchema,
  organizationSchema,
  softwareSchema,
  websiteSchema,
} from "@/lib/seo";
import { buildYoutubeEmbedUrl, getYoutubeVideoId } from "@/lib/youtube";
import { HomepageDemoVideoSection } from "@/components/site/homepage-demo-video-section";
import { HomepagePlatformShowcase } from "@/components/site/homepage-platform-showcase";
import { ProductScreenshotViewer } from "@/components/site/product-screenshot-viewer";
import { HomepageTestimonialCarousel } from "@/components/site/homepage-testimonial-carousel";
import { LeadForm } from "@/components/site/lead-form";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  Headphones,
  HeartPulse,
  LifeBuoy,
  Route,
  ShieldCheck,
  Stethoscope,
  Wrench,
} from "lucide-react";

const automationIcons = [ClipboardList, CalendarClock, CreditCard, Bot, FileText, LifeBuoy];
const industryIcons = [HeartPulse, Building2, GraduationCap, Stethoscope, Wrench, Headphones];
const trustIcons = [BadgeCheck, LifeBuoy, Route, ShieldCheck];

const homepageMetadata = siteContent.homepage.metadata;

export const metadata: Metadata = {
  ...createExactPageMetadata({
    title: homepageMetadata.title,
    description: homepageMetadata.description,
    path: "/",
  }),
  openGraph: {
    title: homepageMetadata.socialTitle,
    description: homepageMetadata.socialDescription,
    url: buildAbsoluteUrl("/"),
    type: "website",
    siteName: siteContent.site.name,
    locale: "en_IN",
    images: [
      {
        url: buildAbsoluteUrl("/opengraph-image"),
        alt: "Turn Customer Conversations Into Business Actions",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homepageMetadata.socialTitle,
    description: homepageMetadata.socialDescription,
    images: [buildAbsoluteUrl("/opengraph-image")],
  },
};

function buildVideoSchema(youtubeUrl: string | null) {
  const videoId = getYoutubeVideoId(youtubeUrl);
  const embedUrl = buildYoutubeEmbedUrl(youtubeUrl);

  if (!videoId || !embedUrl) {
    return null;
  }

  const durationSeconds = siteContent.homepage.demoVideo.videoDurationSeconds;
  const durationMinutes = Math.floor(durationSeconds / 60);
  const remainingSeconds = durationSeconds % 60;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: siteContent.homepage.demoVideo.videoTitle,
    description: siteContent.homepage.demoVideo.videoDescription,
    thumbnailUrl: [siteContent.homepage.demoVideo.videoThumbnailUrl],
    uploadDate: siteContent.homepage.demoVideo.videoUploadDate,
    duration: `PT${durationMinutes}M${remainingSeconds}S`,
    embedUrl,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
  };
}

function HeroVisual() {
  return (
    <ProductScreenshotViewer
      viewerId="homepage-hero"
      title={siteContent.homepage.hero.title}
      eyebrow="Platform overview"
      image={siteContent.homepage.hero.visual}
      previewMaxHeightClassName="max-h-none sm:max-h-[30rem] lg:max-h-[34rem]"
      previewScrollable={false}
      previewImageClassName="origin-top scale-100 sm:scale-[1.08]"
      disableModalOnMobile
      previewOverlay={
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0)_36%,rgba(9,9,11,0.05)_100%)]" />
          <div className="absolute bottom-5 left-4 right-4 hidden flex-col gap-4 sm:right-auto sm:flex sm:max-w-sm">
            <div className="rounded-[1.4rem] border border-zinc-200 bg-white/95 p-4 shadow-[0_20px_40px_rgba(15,23,42,0.16)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Platform coverage</p>
              <div className="mt-3 space-y-2">
                {["Build and validate workflows", "Run live operations", "Deploy with governance"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden flex-wrap gap-3 sm:flex">
              <div className="rounded-full border border-white/15 bg-zinc-950 px-4 py-2 text-sm font-medium text-white shadow-[0_12px_28px_rgba(15,23,42,0.2)]">
                Quality & outcomes
              </div>
              <div className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                Channels & integrations
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}

function ProofStrip() {
  return (
    <div className="mt-8 border-t border-zinc-200 pt-6">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-zinc-600">
        {siteContent.homepage.hero.proofStrip.map((item, index) => (
          <div key={item} className="flex items-center gap-5">
            {index > 0 ? <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:inline-flex" /> : null}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const homepageDemoVideoUrl = getHomepageDemoVideoUrl();
  const whatsappHref =
    getPublicContactSurfaceConfig().whatsappHref ?? siteContent.homepage.finalCta.secondary.href;
  const videoSchema = buildVideoSchema(homepageDemoVideoUrl);

  return (
    <PageShell>
      <SeoJsonLd data={organizationSchema} />
      <SeoJsonLd data={websiteSchema} />
      <SeoJsonLd data={softwareSchema} />
      <SeoJsonLd data={homepageServicesListSchema} />
      <SeoJsonLd data={buildFaqPageSchema(siteContent.homepage.faq.items)} />
      {videoSchema ? <SeoJsonLd data={videoSchema} /> : null}

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="min-w-0">
            <Badge className="rounded-full border-zinc-200 bg-zinc-50 px-4 py-1 text-xs uppercase tracking-[0.28em] text-zinc-700 hover:bg-zinc-100">
              {siteContent.homepage.hero.badge}
            </Badge>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              {siteContent.homepage.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              {siteContent.homepage.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="h-12 w-full rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800 sm:w-auto">
                <Link
                  href={siteContent.ctas.bookProjectDemo.href}
                  data-analytics-role="cta"
                  data-analytics-area="homepage_hero"
                  data-analytics-event="hero_demo_click"
                >
                  {siteContent.ctas.bookProjectDemo.label}
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 w-full rounded-full px-6 sm:w-auto">
                <Link
                  href={siteContent.homepage.hero.secondaryCtaHref}
                  data-analytics-role="cta"
                  data-analytics-area="homepage_hero"
                  data-analytics-event="product_demo_click"
                  className="inline-flex items-center gap-2"
                >
                  <span>{siteContent.homepage.hero.secondaryCtaLabel}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500">
              {siteContent.homepage.hero.supportingText}
            </p>

            <ProofStrip />
          </div>

          <HeroVisual />
        </div>
      </section>

      <HomepageDemoVideoSection copy={siteContent.homepage.demoVideo} youtubeUrl={homepageDemoVideoUrl} />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.homepage.automation.eyebrow}
          title={siteContent.homepage.automation.title}
          description={siteContent.homepage.automation.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.homepage.automation.cards.map((item, index) => {
            const Icon = automationIcons[index % automationIcons.length];

            return (
              <Card key={item.title} className="h-full border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-600">{item.text}</p>
                  <Button asChild variant="link" className="mt-auto w-fit px-0 pt-5 text-zinc-950">
                    <Link href={item.href} className="inline-flex items-center gap-2">
                      <span>{item.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={siteContent.homepage.automation.cta.href} className="inline-flex items-center gap-2">
              <span>{siteContent.homepage.automation.cta.label}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          title={siteContent.homepage.howItWorks.title}
          description={siteContent.homepage.howItWorks.description}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {siteContent.homepage.howItWorks.steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="h-full border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{step.text}</p>
                </CardContent>
              </Card>
              {index < siteContent.homepage.howItWorks.steps.length - 1 ? (
                <div className="hidden lg:flex absolute -right-6 top-1/2 z-10 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
                  <ArrowRight className="h-5 w-5 text-zinc-500" />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-base leading-8 text-zinc-600">
          {siteContent.homepage.howItWorks.resultStatement}
        </p>
      </section>

      <HomepagePlatformShowcase copy={siteContent.homepage.platformProof} />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.homepage.industries.eyebrow}
          title={siteContent.homepage.industries.title}
          description={siteContent.homepage.industries.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.homepage.industries.cards.map((item, index) => {
            const Icon = industryIcons[index % industryIcons.length];

            return (
              <Card key={item.title} className="h-full border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-zinc-600">{item.text}</p>
                  <Button asChild variant="link" className="mt-auto w-fit px-0 pt-5 text-zinc-950">
                    <Link
                      href={item.href}
                      data-analytics-area="homepage_industries"
                      data-analytics-role="cta"
                      data-analytics-event="industry_workflow_click"
                      className="inline-flex items-center gap-2"
                    >
                      <span>{item.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link
              href={siteContent.homepage.industries.cta.href}
              data-analytics-area="homepage_industries"
              data-analytics-role="cta"
              data-analytics-event="industry_workflow_click"
              className="inline-flex items-center gap-2"
            >
              <span>{siteContent.homepage.industries.cta.label}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.homepage.trust.eyebrow}
          title={siteContent.homepage.trust.title}
          description={siteContent.homepage.trust.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.homepage.trust.cards.map((item, index) => {
            const Icon = trustIcons[index % trustIcons.length];

            return (
              <Card key={item.title} className="h-full border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {siteContent.homepage.trust.links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-zinc-700 underline-offset-4 hover:text-zinc-950 hover:underline">
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={siteContent.homepage.implementation.eyebrow}
              title={siteContent.homepage.implementation.title}
              description={siteContent.homepage.implementation.description}
            />

            <div className="mt-10 grid gap-3">
              {siteContent.homepage.implementation.steps.map((step, index) => (
                <div key={step.title} className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-zinc-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.14)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
                {siteContent.homepage.implementation.founderCallout.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {siteContent.homepage.implementation.founderCallout.title}
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {siteContent.homepage.implementation.founderCallout.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/82">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-sm leading-7 text-zinc-600">
              {siteContent.homepage.implementation.rolloutNote}{" "}
              <Link
                href="/pricing"
                className="font-medium text-zinc-950 underline-offset-4 hover:underline"
                data-analytics-area="homepage_implementation"
                data-analytics-role="cta"
                data-analytics-event="pricing_click"
              >
                View pricing.
              </Link>
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              {siteContent.homepage.implementation.metricsEyebrow}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {siteContent.homepage.implementation.metrics.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <LeadForm variant="homepage" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={siteContent.homepage.faq.eyebrow} title={siteContent.homepage.faq.title} />
        <Card className="mt-10 border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              {siteContent.homepage.faq.items.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="text-zinc-600">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <HomepageTestimonialCarousel copy={siteContent.homepage.testimonial} items={homepageReviews} />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-0 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-zinc-200 bg-zinc-950 px-6 py-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
            {siteContent.homepage.finalCta.eyebrow}
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">{siteContent.homepage.finalCta.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-white/72">
                {siteContent.homepage.finalCta.description}
              </p>
              <p className="mt-4 text-sm text-white/58">{siteContent.homepage.finalCta.note}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="h-12 w-full rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-100 sm:w-auto">
                <Link
                  href={siteContent.homepage.finalCta.primary.href}
                  data-analytics-area="homepage_final_cta"
                  data-analytics-role="cta"
                  data-analytics-event="hero_demo_click"
                >
                  {siteContent.homepage.finalCta.primary.label}
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 w-full rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white sm:w-auto">
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-area="homepage_final_cta"
                  data-analytics-role="cta"
                  data-analytics-event="whatsapp_click"
                >
                  {siteContent.homepage.finalCta.secondary.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

