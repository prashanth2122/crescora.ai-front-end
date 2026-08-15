"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

import { getProductImageDimensions } from "@/lib/product-image-dimensions";

type ProductScreenshotViewerProps = {
  viewerId: string;
  title: string;
  eyebrow: string;
  image: {
    src: string;
    alt: string;
  };
  helperText?: string;
  overlayDescription?: string;
  previewMaxHeightClassName?: string;
  previewScrollable?: boolean;
  previewImageClassName?: string;
  previewImageStyle?: CSSProperties;
  buttonLabel?: string;
  previewOverlay?: ReactNode;
  disableModalOnMobile?: boolean;
};

export function ProductScreenshotViewer({
  viewerId,
  title,
  eyebrow,
  image,
  helperText,
  overlayDescription,
  previewMaxHeightClassName = "max-h-[28rem] sm:max-h-[32rem] lg:max-h-[36rem]",
  previewScrollable = true,
  previewImageClassName,
  previewImageStyle,
  buttonLabel = "View Full Screen",
  previewOverlay,
  disableModalOnMobile = false,
}: ProductScreenshotViewerProps) {
  const dimensions = getProductImageDimensions(image.src);
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [zoom, setZoom] = useState<100 | 150 | 200>(100);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const syncViewport = () => {
      setIsMobileViewport(mediaQuery.matches);
    };

    syncViewport();

    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  const isModalDisabled = disableModalOnMobile && isMobileViewport;

  useEffect(() => {
    if (isModalDisabled && isOpen) {
      setIsOpen(false);
    }
  }, [isModalDisabled, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousHtmlOverscrollBehavior = html.style.overscrollBehavior;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyOverscrollBehavior = body.style.overscrollBehavior;

    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      html.style.overscrollBehavior = previousHtmlOverscrollBehavior;
      body.style.overflow = previousBodyOverflow;
      body.style.overscrollBehavior = previousBodyOverscrollBehavior;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function openModal() {
    if (isModalDisabled) {
      return;
    }

    setZoom(100);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="rounded-[1.75rem] border border-zinc-200 bg-white/95 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
      <div className="rounded-[1.35rem] border border-zinc-200 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.14),rgba(255,255,255,0.98)_52%,rgba(244,244,245,0.96))] p-3">
        <div className="flex items-center justify-between gap-3 border-b border-zinc-200/80 px-1 pb-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">{eyebrow}</p>
            {helperText ? <p className="mt-1 text-sm font-medium text-zinc-700">{helperText}</p> : null}
          </div>
          <button
            type="button"
            onClick={openModal}
            className={`h-10 cursor-pointer items-center justify-center rounded-full border border-zinc-300 bg-white px-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 transition-colors hover:bg-zinc-50 ${
              disableModalOnMobile ? "hidden md:inline-flex" : "inline-flex"
            }`}
          >
            {buttonLabel}
          </button>
        </div>

        <div
          className={`relative mt-3 ${isModalDisabled ? "cursor-default" : "cursor-zoom-in"} ${previewScrollable ? "overflow-auto" : "overflow-hidden"} rounded-[1.1rem] border border-zinc-200 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ${previewMaxHeightClassName}`}
          role="region"
          aria-label={`${title} screenshot preview`}
          tabIndex={0}
        >
          {!isModalDisabled ? (
            <button
              type="button"
              onClick={openModal}
              className={`absolute inset-0 z-10 cursor-zoom-in ${disableModalOnMobile ? "hidden md:block" : "block"}`}
              aria-label={`Open ${title} modal`}
            />
          ) : null}
          <Image
            src={image.src}
            alt={image.alt}
            width={dimensions.width}
            height={dimensions.height}
            sizes="(max-width: 1023px) 100vw, 52vw"
            className={`block h-auto w-full max-w-none align-top ${previewImageClassName ?? ""}`}
            style={previewImageStyle}
          />
          {previewOverlay ? <div className="pointer-events-none absolute inset-0">{previewOverlay}</div> : null}
        </div>
      </div>

      {isMounted && isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[1200] bg-[rgba(9,9,11,0.84)] p-3 backdrop-blur-md sm:p-5"
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  closeModal();
                }
              }}
              aria-hidden="true"
            >
              <div className="pointer-events-none flex h-full items-center justify-center">
                <div
                  className="pointer-events-auto flex h-[90dvh] w-[min(94vw,118rem)] min-w-0 flex-col overflow-hidden rounded-[2rem] border border-white/16 bg-white shadow-[0_40px_140px_rgba(0,0,0,0.48)] ring-1 ring-black/12"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`${viewerId}-dialog-title`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="border-b border-zinc-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,244,245,0.92)_100%)] px-5 py-4 sm:px-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">{eyebrow}</p>
                        <h4 id={`${viewerId}-dialog-title`} className="mt-2 text-left text-lg font-semibold text-zinc-950 sm:text-xl">
                          {title}
                        </h4>
                        {overlayDescription ? (
                          <p className="mt-2 max-w-2xl text-left text-sm leading-6 text-zinc-600">{overlayDescription}</p>
                        ) : null}
                      </div>

                      <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
                        {[100, 150, 200].map((zoomOption) => (
                          <button
                            key={zoomOption}
                            type="button"
                            onClick={() => setZoom(zoomOption as 100 | 150 | 200)}
                            className={`inline-flex h-10 cursor-pointer items-center justify-center rounded-full border px-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                              zoom === zoomOption
                                ? "border-zinc-950 bg-zinc-950 text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)]"
                                : "border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50"
                            }`}
                            aria-pressed={zoom === zoomOption}
                          >
                            {zoomOption}%
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={closeModal}
                          className="inline-flex h-10 cursor-pointer items-center justify-center rounded-full border border-rose-300 bg-rose-600 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(225,29,72,0.28)] transition-colors hover:bg-rose-500"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="min-h-0 flex-1 overflow-auto overscroll-contain bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.14),rgba(255,255,255,0.98)_50%,rgba(244,244,245,0.96))] p-4 sm:p-5"
                    role="region"
                    aria-label={`${title} full screen screenshot`}
                    tabIndex={0}
                  >
                    <div className="min-h-full" style={{ width: `${zoom}%` }}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={dimensions.width}
                        height={dimensions.height}
                        sizes="92vw"
                        className="block h-auto w-full max-w-none rounded-[1.1rem] border border-zinc-200 bg-white align-top shadow-[0_24px_80px_rgba(15,23,42,0.16)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
