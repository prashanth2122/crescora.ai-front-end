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

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname ?? "/");
  const copy = getLocaleCopy(locale);
  const desktopNavItems = copy.navigation.slice(0, 5);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:px-8">
          <Link href={buildLocalizedHref("/", locale)} className="flex items-center">
            <Image
              src="/header-logo.png"
              alt={site.name}
              width={1774}
              height={387}
              priority
              sizes="(max-width: 639px) 120px, (max-width: 1023px) 145px, 160px"
              className="h-8 w-auto object-contain sm:h-9 lg:h-10"
            />
          </Link>

          <nav className="hidden items-center justify-center gap-5 lg:flex">
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
              <Link
                href={buildLocalizedHref(copy.ctas.talkToSales.href, locale)}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {copy.ctas.talkToSales.label}
              </Link>
              <Button asChild className="bg-zinc-950 text-white hover:bg-zinc-800">
                <Link href={buildLocalizedHref(copy.ctas.bookProjectDemo.href, locale)}>
                  {copy.ctas.bookProjectDemo.label}
                </Link>
              </Button>
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
                src="/header-logo.png"
                alt={site.name}
                width={1774}
                height={387}
                sizes="120px"
                className="h-8 w-auto object-contain sm:h-9"
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
              <nav className="flex flex-col gap-2">
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
                <Link
                  href={buildLocalizedHref(copy.ctas.talkToSales.href, locale)}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-zinc-200 px-4 py-3 text-center text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950"
                >
                  {copy.ctas.talkToSales.label}
                </Link>
                <Button asChild className="justify-center rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800">
                  <Link
                    href={buildLocalizedHref(copy.ctas.bookProjectDemo.href, locale)}
                    onClick={() => setMobileOpen(false)}
                  >
                    {copy.ctas.bookProjectDemo.label}
                  </Link>
                </Button>
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
