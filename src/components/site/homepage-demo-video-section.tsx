"use client";

import Link from "next/link";
import { useState } from "react";

import { trackEvent, getPageAnalyticsContext } from "@/lib/analytics";
import { buildYoutubeEmbedUrl, buildYoutubeWatchUrl } from "@/lib/youtube";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";

type HomepageDemoVideoSectionProps = {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
    support: string;
    note: string;
    whatYouWillSee: readonly {
      title: string;
      text: string;
    }[];
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCtaLabel: string;
    videoTitle: string;
    videoThumbnailUrl: string;
  };
  youtubeUrl: string | null;
};

export function HomepageDemoVideoSection({
  copy,
  youtubeUrl,
}: HomepageDemoVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = buildYoutubeEmbedUrl(youtubeUrl);
  const watchUrl = buildYoutubeWatchUrl(youtubeUrl);

  if (!embedUrl || !watchUrl) {
    if (process.env.NODE_ENV === "development") {
      const issueMessage = youtubeUrl
        ? "The configured HOMEPAGE_DEMO_VIDEO_URL is not a valid YouTube watch/share/embed URL or 11-character video ID."
        : "Set HOMEPAGE_DEMO_VIDEO_URL in your local .env file and restart the dev server to render the YouTube demo section.";

      return (
        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-dashed border-amber-300 bg-amber-50/80 p-6 text-zinc-900 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
            <SectionHeading eyebrow="Local setup required" title={copy.title} description={issueMessage} />
            <div className="mt-6 rounded-2xl border border-amber-200 bg-white px-4 py-3 font-mono text-sm text-zinc-800">
              HOMEPAGE_DEMO_VIDEO_URL=https://www.youtube.com/watch?v=YOUR_VIDEO_ID
            </div>
          </div>
        </section>
      );
    }

    return null;
  }

  const playingUrl = `${embedUrl}&autoplay=1`;

  function handlePlay() {
    setIsPlaying(true);
    if (typeof window !== "undefined") {
      trackEvent("video_play", {
        ...getPageAnalyticsContext(window.location.pathname, window.location.search),
        analytics_area: "homepage_video",
        video_title: copy.videoTitle,
      });
    }
  }

  return (
    <section id="homepage-demo" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="border-b border-zinc-200 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
            <Badge variant="secondary" className="mt-5 rounded-full bg-zinc-100 text-zinc-700">
              {copy.badge}
            </Badge>
            <p className="mt-4 text-base leading-8 text-zinc-600">{copy.support}</p>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-950 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
              <div className="aspect-video">
                {isPlaying ? (
                  <iframe
                    className="h-full w-full"
                    src={playingUrl}
                    title={copy.videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="group relative h-full w-full overflow-hidden text-left"
                    onClick={handlePlay}
                  >
                    <img
                      src={copy.videoThumbnailUrl}
                      alt={copy.videoTitle}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-zinc-950 shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105">
                        <PlayCircle className="h-10 w-10" />
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-500">{copy.note}</p>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">What you'll see</p>
            <div className="mt-6 grid gap-4">
              {copy.whatYouWillSee.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-zinc-200 bg-zinc-50 p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <div>
                      <h3 className="text-base font-semibold text-zinc-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-600">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                <Link
                  href={copy.primaryCta.href}
                  data-analytics-role="cta"
                  data-analytics-area="homepage_video"
                  data-analytics-event="product_demo_click"
                  className="inline-flex items-center gap-2"
                >
                  <span>{copy.primaryCta.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6">
                <Link href={watchUrl} target="_blank" rel="noreferrer">
                  {copy.secondaryCtaLabel}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
