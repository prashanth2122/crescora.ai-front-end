import { LeadForm } from "@/components/site/lead-form";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { getPublicDirectContactItem } from "@/lib/app-config";
import { buildBreadcrumbSchema } from "@/lib/india-seo-data";
import { buildAbsoluteUrl, buildPageSchema, createExactPageMetadata, organizationSchema } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

export const metadata = createExactPageMetadata({
  title: siteContent.contact.metadata.title,
  description: siteContent.contact.metadata.description,
  path: "/contact",
});

const contactBreadcrumbs = buildBreadcrumbSchema([
  { name: "Home", href: buildAbsoluteUrl("/") },
  { name: "Contact", href: buildAbsoluteUrl("/contact") },
]);

export default function ContactPage() {
  const addressItem = siteContent.contact.details.items.find((item) => item.label === "Address");
  const contactItems = siteContent.contact.details.items.filter((item) => item.label !== "Address");
  const detailItems = [...contactItems, getPublicDirectContactItem(), ...(addressItem ? [addressItem] : [])];

  return (
    <PageShell>
      <SeoJsonLd
        data={buildPageSchema({
          type: "ContactPage",
          name: siteContent.contact.metadata.title,
          description: siteContent.contact.metadata.description,
          path: "/contact",
        })}
      />
      <SeoJsonLd data={organizationSchema} />
      <SeoJsonLd data={contactBreadcrumbs} />

      <PageHero
        eyebrow={siteContent.contact.hero.eyebrow}
        title={siteContent.contact.hero.title}
        description={siteContent.contact.hero.description}
      />
      <section
        data-analytics-area="contact_details"
        className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow={siteContent.contact.details.eyebrow}
          title={siteContent.contact.details.title}
          description={siteContent.contact.details.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {detailItems.map((item) => {
            const isAddress = item.label === "Address";
            const Icon = isAddress ? MapPin : item.label === "CEO" ? UserRound : item.label === "Contact" ? Phone : Mail;
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
        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-zinc-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {siteContent.contact.nextSteps.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                {siteContent.contact.nextSteps.title}
              </h2>
              <ul className="mt-6 space-y-3">
                {siteContent.contact.nextSteps.items.map((item) => (
                  <li key={item} className="text-sm leading-7 text-zinc-700">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-zinc-950 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/50">Response expectation</p>
              <p className="mt-4 text-base leading-8 text-white/78">{siteContent.contact.responseExpectation}</p>
              <p className="mt-4 text-base leading-8 text-white/78">{siteContent.contact.founderLedNote}</p>
              <p className="mt-6 text-xs leading-6 text-white/55">{siteContent.contact.consent}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
