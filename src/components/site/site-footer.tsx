import Link from "next/link";
import { headers } from "next/headers";

import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site-data";
import { buildLocalizedHref, getLocaleCopy, resolveLocaleFromHeaders } from "@/lib/locales";

export async function SiteFooter() {
  const requestHeaders = await headers();
  const locale = resolveLocaleFromHeaders(requestHeaders);
  const copy = getLocaleCopy(locale);

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">{site.name}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">{copy.footer.title}</h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-zinc-600">{copy.footer.intro}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {copy.footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={buildLocalizedHref(link.href, locale)}
                        className="text-sm text-zinc-700 transition-colors hover:text-zinc-950"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {site.name}. {copy.footer.allRightsReserved}
          </p>
          <p>
            {copy.footer.companyReferenceLabel} {site.legalName}. {copy.footer.productLabel} {site.productFull}.
          </p>
        </div>
      </div>
    </footer>
  );
}
