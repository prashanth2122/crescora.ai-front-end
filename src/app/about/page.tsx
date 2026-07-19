import Link from "next/link";
import Image from "next/image";

import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { createExactPageMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { siteContent } from "@/lib/site-content";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  FileText,
  GraduationCap,
  Headphones,
  Hospital,
  LineChart,
  MessageSquareText,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { buildAbsoluteUrl, buildPageSchema, organizationSchema } from "@/lib/seo";

export const metadata = createExactPageMetadata({
  title: siteContent.about.metadata.title,
  description: siteContent.about.metadata.description,
  path: "/about",
});

const aboutBreadcrumbs = buildBreadcrumbSchema([
  { name: "Home", href: buildAbsoluteUrl("/") },
  { name: "About", href: buildAbsoluteUrl("/about") },
]);

export default function AboutPage() {
  const {
    hero,
    whoWeAre,
    mission,
    whatWeBuild,
    whyWeBuiltFlow,
    belief,
    founderLed,
    whatWeWillNotDo,
    notOnly,
    proofPolicy,
    legalIdentity,
    whoWeHelp,
    howWeWork,
    different,
    trust,
    product,
    pilot,
    finalCta,
  } = siteContent.about;

  const buildIcons = [MessageSquareText, Workflow, CalendarDays, Sparkles, FileText, BadgeCheck, CheckCircle2, ArrowRight, Workflow, BadgeCheck];
  const helpIcons = [Hospital, Building2, GraduationCap, Headphones, Wrench, FileText];
  const stepIcons = [ArrowRight, Workflow, MessageSquareText, CheckCircle2, BadgeCheck, Sparkles];
  const differentIcons = [BadgeCheck, CheckCircle2, Workflow, Sparkles, Building2];
  const trustIcons = [ShieldCheck, LineChart, BadgeCheck, RefreshCw];
  const heroStepLabels = hero.workflowSteps ?? [];
  const heroSignals = hero.workflowSignals ?? [];

  return (
    <PageShell>
      <SeoJsonLd
        data={buildPageSchema({
          type: "AboutPage",
          name: siteContent.about.metadata.title,
          description: siteContent.about.metadata.description,
          path: "/about",
        })}
      />
      <SeoJsonLd data={organizationSchema} />
      <SeoJsonLd data={aboutBreadcrumbs} />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        visual={
          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(244,244,245,0.96)_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Crescora AI operating path</p>
            <div className="mt-6 space-y-3">
              {heroStepLabels.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                    {step}
                  </div>
                  {index < heroStepLabels.length - 1 ? (
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-zinc-400 sm:block" />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {heroSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm leading-6 text-zinc-700 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading eyebrow="About" title={whoWeAre.title} />
            <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-5 text-base leading-8 text-zinc-600">
                  {whoWeAre.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Mission" title={mission.title} description={mission.description} />
              <p className="mt-5 text-sm leading-7 text-zinc-600">{mission.support}</p>
              <div className="mt-6 rounded-[1.25rem] border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Mission card</p>
                <p className="mt-3 text-lg font-medium leading-8 text-zinc-950">{mission.card}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Automation" title={whatWeBuild.title} description={whatWeBuild.description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {whatWeBuild.items.map((item, index) => {
            const Icon = buildIcons[index % buildIcons.length];

            return (
              <Card key={item} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-[15px] font-medium leading-7 text-zinc-950">{item}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-600">{whatWeBuild.support}</p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Why Crescora AI exists" title={whyWeBuiltFlow.title} />
              <div className="mt-5 space-y-5 text-sm leading-8 text-zinc-600">
                {whyWeBuiltFlow.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">Our belief</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">{belief.title}</h2>
              <p className="mt-4 text-base leading-8 text-white/72">{belief.description}</p>
              <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Belief card</p>
                <p className="mt-3 text-lg font-medium leading-8 text-white">{belief.card}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <SectionHeading eyebrow="Founder-led" title={founderLed.title} />
              <div className="mt-5 space-y-5 text-sm leading-8 text-zinc-600">
                {founderLed.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {founderLed.founders.map((founder) => (
                  <div key={founder.linkedin} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                      <Image
                        src={founder.image.src}
                        alt={founder.image.alt}
                        fill
                        sizes="(min-width: 1024px) 280px, (min-width: 768px) 40vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <p className="mt-5 text-lg font-semibold tracking-tight text-zinc-950">{founder.name}</p>
                    <p className="mt-1 text-sm font-medium text-zinc-500">{founder.role}</p>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{founder.summary}</p>
                    <Button asChild variant="link" className="mt-4 h-auto p-0 text-zinc-950">
                      <a href={founder.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                        View LinkedIn
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{proofPolicy.title}</h2>
                <p className="mt-4 text-sm leading-8 text-zinc-600">{proofPolicy.description}</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{legalIdentity.title}</h2>
                <p className="mt-4 text-sm leading-8 text-zinc-600">{legalIdentity.description}</p>
                <dl className="mt-6 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-zinc-50">
                  {legalIdentity.details.map((detail) => (
                    <div key={detail.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[0.8fr_1.2fr] sm:gap-4">
                      <dt className="text-sm font-medium text-zinc-500">{detail.label}</dt>
                      <dd className="text-sm font-semibold text-zinc-950">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={proofPolicy.reviewScreenshots.eyebrow}
          title={proofPolicy.reviewScreenshots.title}
          description={proofPolicy.reviewScreenshots.description}
        />
        <div className="mt-10 grid gap-5">
          {proofPolicy.reviewScreenshots.items.map((review) => (
            <Card key={review.image} className="overflow-hidden border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-0">
                <div className="relative aspect-[3.3/1] bg-zinc-50">
                  <Image
                    src={review.image}
                    alt={review.alt}
                    fill
                    sizes="(min-width: 1024px) 82vw, 92vw"
                    className="object-contain"
                  />
                </div>
                <div className="border-t border-zinc-200 p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    <span>{review.sourcePlatform}</span>
                    <span aria-hidden="true">/</span>
                    <span>{review.reviewDate}</span>
                    <span aria-hidden="true">/</span>
                    <span>{review.isPublicReviewScreenshot ? "Public review screenshot" : "Review capture"}</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-zinc-950">{review.name}</p>
                  {review.quote ? (
                    <p className="mt-2 text-sm leading-7 text-zinc-600">&quot;{review.quote}&quot;</p>
                  ) : (
                    <p className="mt-2 text-sm leading-7 text-zinc-600">
                      Customer quote is not transcribed because the supplied capture does not show a readable customer comment.
                    </p>
                  )}
                  {review.sourceHref ? (
                    <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                      <a href={review.sourceHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                        View source
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Who we help" title={whoWeHelp.title} description={whoWeHelp.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whoWeHelp.cards.map((card, index) => {
            const Icon = helpIcons[index % helpIcons.length];

            return (
              <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-lg font-semibold tracking-tight text-zinc-950">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{card.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{whatWeWillNotDo.title}</h2>
              <ul className="mt-6 space-y-3">
                {whatWeWillNotDo.items.map((item) => (
                  <li key={item} className="text-sm leading-7 text-zinc-700">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-zinc-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.14)]">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">{notOnly.title}</h2>
              <ul className="mt-6 space-y-3">
                {notOnly.items.map((item) => (
                  <li key={item} className="text-sm leading-7 text-white/78">{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-8 text-white/72">{notOnly.summary}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title={howWeWork.title} description={howWeWork.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {howWeWork.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];

            return (
              <Card key={step.title} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950">{step.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{step.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What makes us different" title={different.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {different.cards.map((card, index) => {
            const Icon = differentIcons[index % differentIcons.length];

            return (
              <Card key={card.title} className="border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-base font-semibold tracking-tight text-zinc-950">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{card.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
        <div className="rounded-[1.9rem] border border-zinc-900/90 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Trust and control</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{trust.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">{trust.description}</p>
              <div className="mt-6 space-y-3">
                {trust.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-7 text-white/80">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trust.cards.map((card, index) => {
                const Icon = trustIcons[index % trustIcons.length];

                return (
                  <div key={card.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-950">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="mt-4 text-base font-semibold tracking-tight text-white">{card.title}</p>
                    <p className="mt-3 text-sm leading-7 text-white/72">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Company and product</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{product.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">{product.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {product.details.map((detail, index) => (
                  <div
                    key={detail}
                    className={`rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/80 ${index === 0 ? "sm:col-span-2" : ""}`}
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">Pilot program</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">{pilot.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">{pilot.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {pilot.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-7 text-white/80">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:pt-14">
              <Button asChild className="h-12 rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-200">
                <Link href={pilot.cta.href}>{pilot.cta.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                <Link href={hero.secondaryCta?.href ?? "/platform"}>Explore Crescora AI</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <SectionHeading eyebrow="Final CTA" title={finalCta.title} description={finalCta.summary ?? finalCta.description} />
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
              <Link href={finalCta.primary.href}>{finalCta.primary.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full px-6">
              <Link href={finalCta.secondary.href}>{finalCta.secondary.label}</Link>
            </Button>
          </div>
          {finalCta.note ? <p className="mt-5 text-sm leading-7 text-zinc-500">{finalCta.note}</p> : null}
        </div>
      </section>
    </PageShell>
  );
}
