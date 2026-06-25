import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  supportText?: string;
  visual?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  supportText,
  visual,
  className,
}: PageHeroProps) {
  return (
    <section
      data-analytics-area="page_hero"
      className={cn(
        "mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
        className,
      )}
    >
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div style={{ animation: "rise-up 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both", animationDelay: "80ms" }}>
          {eyebrow ? (
            <Badge
              variant="secondary"
              className="rounded-full border border-zinc-200 bg-white/90 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-zinc-600"
            >
              {eyebrow}
            </Badge>
          ) : null}
          <h1
            className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl"
            style={{ animation: "rise-up 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both", animationDelay: "140ms" }}
          >
            {title}
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg"
            style={{ animation: "rise-up 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both", animationDelay: "220ms" }}
          >
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div
              className="mt-8 flex flex-wrap gap-3"
              style={{ animation: "rise-up 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both", animationDelay: "300ms" }}
            >
              {primaryCta ? (
                <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                  <Link href={primaryCta.href} data-analytics-role="cta">
                    {primaryCta.label}
                  </Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button asChild variant="outline" className="h-12 rounded-full px-6">
                  <Link href={secondaryCta.href} data-analytics-role="cta">
                    {secondaryCta.label}
                  </Link>
                </Button>
              ) : null}
            </div>
          )}
          {supportText ? (
            <p
              className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500"
              style={{ animation: "rise-up 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both", animationDelay: "360ms" }}
            >
              {supportText}
            </p>
          ) : null}
        </div>

        {visual ? (
          <div style={{ animation: "rise-up 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both", animationDelay: "160ms" }}>
            {visual}
          </div>
        ) : null}
      </div>
    </section>
  );
}
