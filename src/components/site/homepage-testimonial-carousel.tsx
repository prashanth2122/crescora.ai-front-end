"use client";

import Image from "next/image";
import { useState } from "react";

import type { HomepageReview } from "@/lib/homepage-reviews";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type HomepageTestimonialCarouselProps = {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: readonly HomepageReview[];
};

function formatSlideIndex(value: number) {
  return String(value).padStart(2, "0");
}

export function HomepageTestimonialCarousel({
  copy,
  items,
}: HomepageTestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const showControls = items.length > 1;
  const activeItem = items[activeIndex];

  if (!activeItem) {
    return null;
  }

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % items.length);
  }

  return (
    <section className="border-y border-zinc-200/70 bg-[linear-gradient(180deg,rgba(244,244,245,0.82)_0%,rgba(250,250,250,0.95)_100%)] py-14 sm:py-16">
      <div className="mx-auto w-full max-w-[86rem] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-[0_24px_90px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white px-5 py-6 sm:px-8 sm:py-8">
            <Quote className="absolute right-5 top-5 h-16 w-16 text-zinc-100 sm:h-24 sm:w-24" strokeWidth={1.2} />

            <p className="relative text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">{copy.eyebrow}</p>
            <h2 className="relative mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {copy.title}
            </h2>
            <p className="relative mt-4 max-w-3xl text-base leading-8 text-zinc-600">{copy.description}</p>

            <div className="relative mt-10 rounded-[1.75rem] border border-zinc-200 bg-[linear-gradient(180deg,rgba(250,250,250,0.92)_0%,rgba(244,244,245,0.88)_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
              <div className={`grid gap-8 ${activeItem.imageUrl ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:items-start" : ""}`}>
                <div>
                  <blockquote className="mt-8 max-w-5xl text-[1.75rem] font-medium leading-[1.2] tracking-tight text-zinc-950 sm:text-[2rem] lg:text-[2.3rem]">
                    “{activeItem.quote}”
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white text-sm font-semibold text-zinc-700 shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
                      {activeItem.logoImageSrc ? (
                        <Image
                          src={activeItem.logoImageSrc}
                          alt={activeItem.logoAlt ?? activeItem.logoName ?? activeItem.sourceLabel}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <span>{activeItem.logoText ?? activeItem.logoName?.slice(0, 2).toUpperCase() ?? "R"}</span>
                      )}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-zinc-950">{activeItem.name}</p>
                      <p className="mt-1 text-sm text-zinc-500">
                        {activeItem.sourceLabel}
                        {activeItem.sourceDate ? ` · ${activeItem.sourceDate}` : ""}
                      </p>
                    </div>
                  </div>
                </div>

                {activeItem.imageUrl ? (
                  <div className="rounded-[1.35rem] border border-zinc-200 bg-white p-3 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
                    <img
                      src={activeItem.imageUrl}
                      alt={activeItem.imageAlt ?? `${activeItem.name} review proof`}
                      className="block h-auto w-full rounded-[1rem] border border-zinc-200 object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {showControls ? (
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-zinc-200 pt-6">
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-full"
                  onClick={showPrevious}
                  aria-label="Show previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-full"
                  onClick={showNext}
                  aria-label="Show next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm font-medium tracking-[0.24em] text-zinc-500">
                {formatSlideIndex(activeIndex + 1)} / {formatSlideIndex(items.length)}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
