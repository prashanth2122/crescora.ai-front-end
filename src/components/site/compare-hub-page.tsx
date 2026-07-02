import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import type { CompareHubData } from "@/lib/decision-pages";
import { siteContent } from "@/lib/site-content";

type CompareHubPageTemplateProps = {
  page: CompareHubData;
};

export function CompareHubPageTemplate({ page }: CompareHubPageTemplateProps) {
  return (
    <PageShell>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.viewIndustryWorkflow}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.businessNeeds.eyebrow}
          title={page.businessNeeds.title}
          description={page.businessNeeds.description}
        />
        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-zinc-950 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                <tr>
                  <th className="px-6 py-4">Business need</th>
                  <th className="px-6 py-4">What Crescora AI helps automate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {page.businessNeeds.items.map((item) => (
                  <tr key={item.label}>
                    <th scope="row" className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
                      {item.label}
                    </th>
                    <td className="px-6 py-5 text-sm leading-7 text-zinc-700">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.platformComparison.eyebrow}
          title={page.platformComparison.title}
          description={page.platformComparison.description}
        />
        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-zinc-950 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                <tr>
                  <th className="px-6 py-4">Platform</th>
                  <th className="px-6 py-4">Common strength</th>
                  <th className="px-6 py-4">Where Crescora AI fits better</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {page.platformComparison.items.map((item) => (
                  <tr key={item.platform}>
                    <th scope="row" className="px-6 py-5 text-sm font-semibold text-zinc-950">
                      {item.platform}
                    </th>
                    <td className="px-6 py-5 text-sm leading-7 text-zinc-700">{item.strength}</td>
                    <td className="px-6 py-5 text-sm leading-7 text-zinc-700">{item.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.whyChoose.eyebrow} title={page.whyChoose.title} description={page.whyChoose.description} />
        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {page.whyChoose.items.map((item) => (
            <Card key={item.title} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.capabilities.eyebrow} title={page.capabilities.title} description={page.capabilities.description} />
        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-zinc-950 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                <tr>
                  <th className="px-6 py-4">Capability</th>
                  <th className="px-6 py-4">Crescora AI focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {page.capabilities.items.map((item) => (
                  <tr key={item.capability}>
                    <th scope="row" className="px-6 py-5 text-sm font-semibold text-zinc-950">
                      {item.capability}
                    </th>
                    <td className="px-6 py-5 text-sm leading-7 text-zinc-700">{item.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.rightFit.eyebrow} title={page.rightFit.title} description={page.rightFit.description} />
        <Card className="mt-10 border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {page.rightFit.items.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-7 text-zinc-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-950" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.alternatives.eyebrow} title={page.alternatives.title} description={page.alternatives.description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.alternatives.items.map((item) => (
            <Card key={item.href} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={item.href}>{siteContent.ctas.openComparison.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Card className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <CardContent className="p-6 sm:p-8">
            <SectionHeading eyebrow={page.manualBuild.eyebrow} title={page.manualBuild.title} description={page.manualBuild.description} />
            <ul className="mt-8 space-y-4">
              {page.manualBuild.items.map((item) => (
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
            <SectionHeading eyebrow={page.outcomes.eyebrow} title={page.outcomes.title} description={page.outcomes.description} />
            <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200">
              <table className="min-w-full text-left">
                <thead className="bg-zinc-950 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                  <tr>
                    <th className="px-5 py-4">Outcome</th>
                    <th className="px-5 py-4">Crescora AI impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {page.outcomes.items.map((item) => (
                    <tr key={item.outcome}>
                      <th scope="row" className="px-5 py-4 text-sm font-semibold text-zinc-950">
                        {item.outcome}
                      </th>
                      <td className="px-5 py-4 text-sm leading-7 text-zinc-700">{item.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,#fafafa_0%,#ffffff_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <SectionHeading
            eyebrow={page.startingWorkflows.eyebrow}
            title={page.startingWorkflows.title}
            description={page.startingWorkflows.description}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.startingWorkflows.items.map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm leading-7 text-zinc-700">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">Ready to automate your customer journeys?</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600">
              Crescora AI helps your business respond faster, reduce manual work, capture more opportunities, and deliver a more professional customer experience.
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              See how Crescora AI can automate your customer conversations, workflows, and follow-ups.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                <Link href={siteContent.ctas.bookProjectDemo.href}>{siteContent.ctas.bookProjectDemo.label}</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6">
                <Link href={siteContent.ctas.viewIndustryWorkflow.href}>{siteContent.ctas.viewIndustryWorkflow.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.relatedWorkflows.eyebrow}
          title={page.relatedWorkflows.title}
          description={page.relatedWorkflows.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {page.relatedWorkflows.items.map((item) => (
            <Card key={item.href} className="border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-zinc-950">
                  <Link href={item.href}>{siteContent.ctas.openComparison.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={page.faq.eyebrow} title={page.faq.title} description={page.faq.description} />
        <div className="mt-10 rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {page.faq.items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-zinc-600">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageShell>
  );
}
