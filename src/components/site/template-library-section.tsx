"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type TemplateLibraryCard = {
  tag: string;
  title: string;
  href: string;
  text: string;
  ctaLabel: string;
  filterGroups: readonly string[];
  featured?: boolean;
};

type TemplateLibrarySectionProps = {
  filters: readonly string[];
  cards: readonly TemplateLibraryCard[];
};

export function TemplateLibrarySection({ filters, cards }: TemplateLibrarySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredCards = useMemo(() => {
    if (activeFilter === "All") {
      return cards;
    }

    return cards.filter((card) => card.filterGroups.includes(activeFilter));
  }, [activeFilter, cards]);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            type="button"
            variant={activeFilter === filter ? "default" : "outline"}
            className={[
              "h-10 rounded-full px-4",
              activeFilter === filter ? "bg-zinc-950 text-white hover:bg-zinc-800" : "",
            ].join(" ")}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredCards.map((template) => (
          <Card
            key={template.href}
            className={[
              "flex h-full flex-col border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]",
              template.featured ? "border-zinc-950 shadow-[0_24px_80px_rgba(15,23,42,0.08)]" : "",
            ].join(" ")}
          >
            <CardContent className="flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{template.tag}</p>
                {template.featured ? (
                  <Badge className="h-auto rounded-full bg-zinc-950 px-3 py-1 text-[11px] font-semibold text-white">
                    Most Requested
                  </Badge>
                ) : null}
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">{template.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{template.text}</p>
              <Button asChild variant="link" className="mt-auto h-auto w-fit p-0 pt-5 text-zinc-950 hover:no-underline">
                <Link href={template.href}>{template.ctaLabel}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
