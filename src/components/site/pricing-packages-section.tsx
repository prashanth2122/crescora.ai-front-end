"use client";

import Link from "next/link";
import { useState } from "react";

import type { PricingPackage } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PricingPackagesSectionProps = {
  defaultRegion: string;
  regionLabel: string;
  regionHelperText: string;
  regionOptions: readonly { value: string; label: string }[];
  regionNotes: Record<string, string>;
  packagesByRegion: Record<string, readonly PricingPackage[]>;
  scopeNote: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function PricingPackagesSection({
  defaultRegion,
  regionLabel,
  regionHelperText,
  regionOptions,
  regionNotes,
  packagesByRegion,
  scopeNote,
  primaryCta,
  secondaryCta,
}: PricingPackagesSectionProps) {
  const [region, setRegion] = useState(defaultRegion);
  const packages = packagesByRegion[region] ?? [];

  return (
    <section className="mt-10">
      <div className="rounded-[1.75rem] border border-zinc-200 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-tight text-zinc-950">{regionLabel}</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">{regionHelperText}</p>
          </div>
          <div className="w-full max-w-sm">
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger
                aria-label={regionLabel}
                className="h-12 w-full rounded-full border-zinc-200 bg-white px-4 text-left text-sm font-medium text-zinc-950"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {regionOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-4">
        {packages.map((pkg) => (
          <Card
            key={`${region}-${pkg.title}`}
            className={[
              "flex h-full flex-col border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]",
              pkg.featured ? "border-zinc-950 shadow-[0_24px_80px_rgba(15,23,42,0.09)]" : "",
            ].join(" ")}
          >
            <CardContent className="flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{pkg.label}</p>
                {pkg.badge ? (
                  <Badge className="h-auto rounded-full bg-zinc-950 px-3 py-1 text-[11px] font-semibold text-white">
                    {pkg.badge}
                  </Badge>
                ) : null}
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{pkg.title}</h2>
              <div className="mt-4">
                <p className="text-3xl font-semibold tracking-tight text-zinc-950">{pkg.price}</p>
                {pkg.priceDetail ? (
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{pkg.priceDetail}</p>
                ) : null}
              </div>
              <p className="mt-5 text-sm font-medium leading-7 text-zinc-950">Best for</p>
              <p className="text-sm leading-7 text-zinc-600">{pkg.bestFor}</p>
              <p className="mt-5 text-sm font-medium leading-7 text-zinc-950">Includes</p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-600">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={pkg.featured ? "default" : "outline"}
                className={[
                  "mt-6 h-12 w-full rounded-full px-6",
                  pkg.featured ? "bg-zinc-950 text-white hover:bg-zinc-800" : "",
                ].join(" ")}
              >
                <Link href={pkg.title === "Enterprise" ? secondaryCta.href : primaryCta.href}>{pkg.ctaLabel}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
        <p className="text-sm leading-7 text-zinc-600">{regionNotes[region]}</p>
        <p className="mt-3 text-sm leading-7 text-zinc-600">{scopeNote}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-6">
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
