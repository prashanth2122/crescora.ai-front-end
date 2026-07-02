import Link from "next/link";

import { PageHero } from "@/components/site/page-hero";
import { PageShell } from "@/components/site/page-shell";
import { ProductProofSection } from "@/components/site/product-proof-section";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createExactPageMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

export const metadata = createExactPageMetadata({
  title: "Try Crescora AI Demo Workflows | Sample Automation Options",
  description:
    "Explore safe Crescora AI sample demo workflow options for hospitals, real estate, coaching, payment reminders, support FAQs, and document collection.",
  path: "/demo",
});

const demoOptions = [
  {
    title: "Hospital appointment demo",
    description: "Appointment request, department routing, reminder, payment or report handover, and urgent-case escalation.",
    href: "/workflow-examples/healthcare-front-desk-automation",
  },
  {
    title: "Real estate lead demo",
    description: "Lead capture, buyer qualification, project sharing, site-visit request, sales handover, and follow-up.",
    href: "/workflow-examples/real-estate-lead-operations",
  },
  {
    title: "Coaching admission demo",
    description: "Course enquiry, demo class booking, fee reminder, document follow-up, and counsellor routing.",
    href: "/workflow-examples/education-admissions-workflow",
  },
  {
    title: "Payment reminder demo",
    description: "Due reminder, payment status capture, failed-payment recovery, receipt update, and billing handover.",
    href: "/workflows/payments",
  },
  {
    title: "Support FAQ demo",
    description: "Approved answer flow, issue classification, low-confidence fallback, ticket context, and human handover.",
    href: "/workflows/customer-support",
  },
  {
    title: "Document collection demo",
    description: "Document request, missing-file reminder, validation status, review queue, and customer next-step update.",
    href: "/workflows/document-collection",
  },
];

export default function DemoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sample demos"
        title="Try Crescora AI demo workflows without mistaking them for live customer deployments."
        description="These are sample workflow paths that show how Crescora AI can structure customer conversations, reminders, documents, payments, support, and human handover. They use demo content and should be scoped before any real launch."
        primaryCta={siteContent.ctas.bookProjectDemo}
        secondaryCta={siteContent.ctas.requestScopeCall}
        supportText="Demo examples are illustrative. Real workflows depend on your requirements, approvals, channels, integrations, data handling rules, and support ownership."
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Choose a demo path"
          title="Pick the workflow closest to your current operational bottleneck."
          description="Each option opens a public workflow example or detailed workflow page, not a fake live customer environment."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {demoOptions.map((option) => (
            <Card key={option.title} className="flex h-full flex-col border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <CardContent className="flex h-full flex-col p-6">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{option.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{option.description}</p>
                <Button asChild variant="link" className="mt-auto h-auto w-fit p-0 pt-5 text-zinc-950">
                  <Link href={option.href}>Open demo path</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <ProductProofSection
        eyebrow={siteContent.homepage.productProof.eyebrow}
        title={siteContent.homepage.productProof.title}
        description={siteContent.homepage.productProof.description}
        disclaimer={siteContent.homepage.productProof.disclaimer}
        panels={siteContent.homepage.productProof.panels}
      />
    </PageShell>
  );
}
