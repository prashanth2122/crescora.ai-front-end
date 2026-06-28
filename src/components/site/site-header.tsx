"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";
import { buildLocalizedHref, getLocaleCopy, getLocaleFromPath } from "@/lib/locales";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

type ActionLinkProps = {
  href: string;
  label: string;
  className?: string;
  analyticsRole?: string;
  analyticsArea?: string;
  contactChannel?: string;
  onClick?: () => void;
};

function ActionLink({
  href,
  label,
  className,
  analyticsRole,
  analyticsArea,
  contactChannel,
  onClick,
}: ActionLinkProps) {
  const sharedProps = {
    className,
    "data-analytics-role": analyticsRole,
    "data-analytics-area": analyticsArea,
    "data-contact-intent": "true",
    "data-contact-channel": contactChannel,
    onClick,
  } as const;

  if (isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...sharedProps}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} {...sharedProps}>
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname ?? "/");
  const copy = getLocaleCopy(locale);
  const desktopNavItems = copy.navigation.slice(0, 5);
  const localizedTalkToSalesHref = buildLocalizedHref(
    copy.ctas.talkToSales.href,
    locale,
  );
  const localizedBookDemoHref = buildLocalizedHref(
    copy.ctas.bookProjectDemo.href,
    locale,
  );

  return (
    <>
      <header
        data-analytics-area="site_header"
        className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:px-8">
          <Link
            href={buildLocalizedHref("/", locale)}
            data-analytics-role="brand"
            className="flex items-center"
          >
            <Image
              src="/crescora_navbar_logo_white_header_2x.png"
              alt={site.name}
              width={498}
              height={96}
              priority
              sizes="(max-width: 639px) 120px, (max-width: 1023px) 145px, 160px"
              className="navbar-logo"
            />
          </Link>

          <nav
            data-analytics-area="site_header_nav"
            className="hidden items-center justify-center gap-5 lg:flex"
          >
            {desktopNavItems.map((item) => (
              <Link
                key={item.href}
                href={buildLocalizedHref(item.href, locale)}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-4 xl:flex">
              <ActionLink
                href={localizedTalkToSalesHref}
                label={copy.ctas.talkToSales.label}
                analyticsRole="cta"
                analyticsArea="site_header"
                contactChannel="sales"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              />
              <ActionLink
                href={localizedBookDemoHref}
                label={copy.ctas.bookProjectDemo.label}
                analyticsRole="cta"
                analyticsArea="site_header"
                contactChannel="demo"
                className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              />
            </div>
            <div className="lg:hidden">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-full border-zinc-200 bg-white"
                aria-expanded={mobileOpen}
                aria-label={copy.header.openMenuLabel}
                onClick={() => setMobileOpen((current) => !current)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex h-full w-[90vw] max-w-sm flex-col border-l border-zinc-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-5">
              <Image
                src="/crescora_navbar_logo_white_header_2x.png"
                alt={site.name}
                width={498}
                height={96}
                sizes="120px"
                className="navbar-logo"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full"
                aria-label={copy.header.closeMenuLabel}
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-auto px-4 py-5">
              <nav data-analytics-area="mobile_nav" className="flex flex-col gap-2">
                {copy.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={buildLocalizedHref(item.href, locale)}
                    className={cn(
                      "rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-5 grid gap-3">
                <ActionLink
                  href={localizedTalkToSalesHref}
                  label={copy.ctas.talkToSales.label}
                  analyticsRole="cta"
                  analyticsArea="mobile_nav"
                  contactChannel="sales"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-zinc-200 px-4 py-3 text-center text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950"
                />
                <ActionLink
                  href={localizedBookDemoHref}
                  label={copy.ctas.bookProjectDemo.label}
                  analyticsRole="cta"
                  analyticsArea="mobile_nav"
                  contactChannel="demo"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-zinc-950 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            aria-label={copy.header.closeOverlayLabel}
            className="absolute inset-0 -z-10"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      ) : null}
    </>
  );
}
