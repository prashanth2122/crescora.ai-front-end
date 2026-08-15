"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { ProductScreenshotViewer } from "@/components/site/product-screenshot-viewer";
import { Button } from "@/components/ui/button";

type PlatformShowcaseTab = {
  id: string;
  tabLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  supportingText?: string;
  proofPoints: readonly string[];
  cta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

type HomepagePlatformShowcaseProps = {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    tabs: readonly PlatformShowcaseTab[];
  };
};

export function HomepagePlatformShowcase({ copy }: HomepagePlatformShowcaseProps) {
  if (!copy.tabs.length) {
    return null;
  }

  const [activeTabId, setActiveTabId] = useState(copy.tabs[0]?.id ?? "");
  const activeTab = copy.tabs.find((tab) => tab.id === activeTabId) ?? copy.tabs[0];

  if (!activeTab) {
    return null;
  }

  const previewImageClassesByTabId: Record<string, string> = {
    build: "origin-top scale-100 sm:scale-[1.26]",
    operate: "origin-top scale-100 sm:scale-[1.28]",
    measure: "origin-top scale-100 sm:scale-[1.24]",
    integrate: "origin-top scale-100 sm:scale-[1.2]",
    deploy: "origin-top scale-100 sm:scale-[1.18]",
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
        <div className="px-2 pb-2 sm:hidden">
          <label htmlFor="homepage-platform-tab-select" className="sr-only">
            Select platform view
          </label>
          <div className="rounded-[1.2rem] border border-zinc-200 bg-zinc-50 p-2">
            <select
              id="homepage-platform-tab-select"
              value={activeTab.id}
              onChange={(event) => setActiveTabId(event.target.value)}
              className="h-12 w-full rounded-[0.95rem] border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 outline-none ring-0"
              aria-label="Select platform view"
            >
              {copy.tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.tabLabel}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="-mx-2 hidden overflow-x-auto px-2 pb-2 sm:block">
          <div className="flex min-w-max gap-2">
            {copy.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`rounded-full border px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors ${
                  activeTab.id === tab.id
                    ? "border-zinc-950 bg-zinc-950 text-white"
                    : "border-zinc-200 bg-white text-zinc-500"
                }`}
                aria-pressed={activeTab.id === tab.id}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <div className="grid gap-6 rounded-[2rem] border border-zinc-200 bg-[linear-gradient(135deg,rgba(255,255,255,1),rgba(244,244,245,0.96))] p-6 shadow-[0_24px_72px_rgba(15,23,42,0.06)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{activeTab.eyebrow}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">{activeTab.title}</h3>
              <p className="mt-4 text-base leading-8 text-zinc-600">{activeTab.description}</p>
              {activeTab.supportingText ? (
                <p className="mt-4 text-sm leading-7 text-zinc-500">{activeTab.supportingText}</p>
              ) : null}

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {activeTab.proofPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[1.15rem] border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="h-12 rounded-full bg-zinc-950 px-6 text-white hover:bg-zinc-800">
                  <Link href={activeTab.cta.href} className="inline-flex items-center gap-2">
                    <span>{activeTab.cta.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <ProductScreenshotViewer
                viewerId={activeTab.id}
                title={activeTab.title}
                eyebrow={activeTab.tabLabel}
                image={activeTab.image}
                previewScrollable={false}
                previewMaxHeightClassName="max-h-none sm:max-h-[28rem] lg:max-h-[32rem]"
                previewImageClassName={previewImageClassesByTabId[activeTab.id]}
                disableModalOnMobile
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
