import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { siteContent } from "@/lib/site-content";
import type { ComparisonPageData, ProofPageData } from "@/lib/decision-pages";

export function ComparisonPageTemplate({
  title,
  eyebrow,
  description,
  bottomLine,
  rows,
  whyFlowWins,
  whenAlternativeFits,
  rolloutSteps,
}: ComparisonPageData) {
  return (
    <PageShell>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
            {siteContent.ui.comparisonTemplate.bottomLine}
          </Badge>
          <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-600">{bottomLine}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.ui.comparisonTemplate.decisionFactors}
          title={siteContent.ui.comparisonTemplate.decisionFactorsTitle}
          description={siteContent.ui.comparisonTemplate.decisionFactorsDescription}
        />

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <div className="grid grid-cols-1 bg-zinc-950 px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 md:grid-cols-[0.9fr_1.05fr_1.05fr]">
            <div>{siteContent.ui.comparisonTemplate.factor}</div>
            <div>{siteContent.ui.comparisonTemplate.flow}</div>
            <div>{siteContent.ui.comparisonTemplate.alternative}</div>
          </div>
          <div className="divide-y divide-zinc-200">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-3 px-6 py-5 md:grid-cols-[0.9fr_1.05fr_1.05fr] md:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">{row.label}</p>
                </div>
                <div className="text-sm leading-7 text-zinc-700">{row.flow}</div>
                <div className="text-sm leading-7 text-zinc-700">{row.alternative}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {siteContent.ui.comparisonTemplate.whyFlowWins}
              </p>
              <ul className="mt-5 space-y-4">
                {whyFlowWins.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-zinc-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-950" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {siteContent.ui.comparisonTemplate.whenAlternativeFits}
              </p>
              <ul className="mt-5 space-y-4">
                {whenAlternativeFits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-zinc-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {siteContent.ui.comparisonTemplate.recommendedRollout}
              </p>
              <ol className="mt-5 space-y-4 text-sm leading-7 text-zinc-700">
                {rolloutSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#fafafa_0%,#ffffff_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
            <Badge variant="secondary" className="rounded-full bg-zinc-100 text-zinc-700">
              {siteContent.ui.comparisonTemplate.nextStep}
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
              {siteContent.ui.comparisonTemplate.decisionTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
              {siteContent.ui.comparisonTemplate.decisionDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6">
                <Link href={siteContent.ctas.requestScopeCall.href}>{siteContent.ctas.requestScopeCall.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ProofPageTemplate({
  title,
  eyebrow,
  description,
  note,
  context,
  challenge,
  workflow,
  controls,
  outcomes,
  rolloutSteps,
}: ProofPageData) {
  return (
    <PageShell>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <Badge className="rounded-full border border-amber-200 bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-amber-900 hover:bg-white">
            {siteContent.ui.proofTemplate.proofNote}
          </Badge>
          <p className="mt-4 max-w-4xl text-base leading-8 text-amber-950">{note}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.ui.proofTemplate.scenario}
          title={siteContent.ui.proofTemplate.scenarioTitle}
          description={siteContent.ui.proofTemplate.scenarioDescription}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {siteContent.ui.proofTemplate.context}
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-600">{context}</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {siteContent.ui.proofTemplate.whatBreaks}
              </p>
              <ul className="mt-5 space-y-4">
                {challenge.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-zinc-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-950" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.ui.proofTemplate.workflowDesign}
          title={siteContent.ui.proofTemplate.workflowDesignTitle}
          description={siteContent.ui.proofTemplate.workflowDesignDescription}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {workflow.map((step, index) => (
            <Card key={step} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-zinc-700">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {siteContent.ui.proofTemplate.operationalControls}
              </p>
              <ul className="mt-5 space-y-4">
                {controls.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-zinc-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {siteContent.ui.proofTemplate.whatImproves}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {outcomes.map((item) => (
                  <div key={item} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-sm leading-7 text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#fafafa_0%,#ffffff_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <SectionHeading
            eyebrow={siteContent.ui.proofTemplate.rollout}
            title={siteContent.ui.proofTemplate.rolloutTitle}
            description={siteContent.ui.proofTemplate.rolloutDescription}
          />
          <ol className="mt-8 grid gap-4 lg:grid-cols-2">
            {rolloutSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-zinc-700">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
              <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full px-6">
              <Link href={siteContent.ctas.requestScopeCall.href}>{siteContent.ctas.requestScopeCall.label}</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
