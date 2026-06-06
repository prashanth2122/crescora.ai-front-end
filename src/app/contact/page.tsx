import { LeadForm } from "@/components/site/lead-form";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.contact.metadata;

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={siteContent.contact.hero.eyebrow}
        title={siteContent.contact.hero.title}
        description={siteContent.contact.hero.description}
      />
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <LeadForm />
      </section>
    </PageShell>
  );
}
