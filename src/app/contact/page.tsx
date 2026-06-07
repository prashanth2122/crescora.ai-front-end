import { LeadForm } from "@/components/site/lead-form";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, UserRound } from "lucide-react";
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
        <SectionHeading
          eyebrow={siteContent.contact.details.eyebrow}
          title={siteContent.contact.details.title}
          description={siteContent.contact.details.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.contact.details.items.map((item) => {
            const isAddress = item.label === "Address";
            const Icon = isAddress ? MapPin : item.label === "CEO" ? UserRound : Mail;
            const linkHref = "href" in item ? item.href : undefined;

            return (
              <Card
                key={item.label}
                className="h-full border-zinc-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">{item.label}</p>
                  </div>
                  {isAddress ? (
                    <p className="mt-4 whitespace-pre-line text-base leading-8 text-zinc-700">{item.value}</p>
                  ) : (
                    <a
                      className="mt-4 text-base font-medium leading-8 text-zinc-950 hover:underline"
                      href={linkHref}
                    >
                      {item.value}
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <LeadForm />
      </section>
    </PageShell>
  );
}
