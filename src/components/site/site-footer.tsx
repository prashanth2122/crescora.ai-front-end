"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import type { PublicDirectContactItem } from "@/lib/app-config";
import { siteContent } from "@/lib/site-content";
import { site } from "@/lib/site-data";
import { buildLocalizedHref, getLocaleCopy, getLocaleFromPath } from "@/lib/locales";

type SiteFooterProps = {
  directContactItem: PublicDirectContactItem;
};

export function SiteFooter({ directContactItem }: SiteFooterProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname ?? "/");
  const copy = getLocaleCopy(locale);
  const addressItem = siteContent.contact.details.items.find((item) => item.label === "Address");
  const contactItems = siteContent.contact.details.items.filter((item) => item.label !== "Address");
  const footerContactItems = [...contactItems, directContactItem, ...(addressItem ? [addressItem] : [])];

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">{site.name}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">{copy.footer.title}</h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-zinc-600">{copy.footer.intro}</p>
            <div className="mt-8 grid gap-3 rounded-3xl border border-zinc-200 bg-zinc-50/80 p-5 text-sm text-zinc-600 sm:grid-cols-2">
              {footerContactItems.map((item) => {
                const isAddress = item.label === "Address";

                return (
                  <div key={item.label} className={`space-y-1 ${isAddress ? "sm:col-span-2" : ""}`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">{item.label}</p>
                    {isAddress ? (
                      <p className="leading-7 text-zinc-700">{item.value}</p>
                    ) : (
                      <a className="leading-7 text-zinc-700 hover:text-zinc-950 hover:underline" href={item.href}>
                        {item.value}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
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
        </div>
      </div>
    </footer>
  );
}
