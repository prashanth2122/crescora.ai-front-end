import Link from "next/link";

import { siteContent, type LegalPageData } from "@/lib/site-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";

type LegalPageProps = {
  page: LegalPageData;
  showContactCard?: boolean;
};

export function LegalPage({ page, showContactCard = true }: LegalPageProps) {
  const salesContact = siteContent.contact.details.items[0];

  return (
    <PageShell>
      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} description={page.hero.description} />
      <section className="mx-auto w-full max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-zinc-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          <CardContent className="space-y-10 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
              <span>{page.dateLabel ?? "Last updated"}</span>
              <span className="text-zinc-950">{page.updatedOn}</span>
            </div>

            {page.sections.map((section, index) => (
              <section
                key={section.title}
                className={index > 0 ? "border-t border-zinc-200 pt-8" : ""}
              >
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="space-y-2 pl-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="list-disc">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.tables?.map((table) => (
                    <div key={table.caption ?? table.headers.join("|")} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                      {table.caption ? (
                        <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                          {table.caption}
                        </div>
                      ) : null}
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
                          <thead>
                            <tr>
                              {table.headers.map((header) => (
                                <th key={header} className="border-b border-zinc-200 px-4 py-3 font-semibold text-zinc-950">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.rows.map((row, rowIndex) => (
                              <tr key={`${table.headers.join("|")}-${rowIndex}`}>
                                {row.map((cell, cellIndex) => (
                                  <td key={`${cell}-${cellIndex}`} className="border-b border-zinc-100 px-4 py-3 align-top text-zinc-600">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {showContactCard ? (
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Contact
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Questions about this policy? Reach out to the Crescora AI team and we will
                  route your request to the right person.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {"href" in salesContact ? (
                    <Link
                      className="inline-flex h-11 items-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                      href={salesContact.href}
                    >
                      {salesContact.value}
                    </Link>
                  ) : null}
                  <Link
                    className="inline-flex h-11 items-center rounded-full border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-100"
                    href="/contact"
                  >
                    Contact page
                  </Link>
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
