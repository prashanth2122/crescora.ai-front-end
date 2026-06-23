"use client";

import { useEffect, useEffectEvent, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import {
  ANALYTICS_ENABLED,
  getDestinationPath,
  getLinkTargetType,
  getPageAnalyticsContext,
  getPageCategory,
  getScrollDepthThresholds,
  trackEvent,
} from "@/lib/analytics";

function getLinkLabel(link: HTMLAnchorElement) {
  const label =
    link.dataset.analyticsLabel ||
    link.getAttribute("aria-label") ||
    link.textContent ||
    link.href;

  return label.trim().replace(/\s+/g, " ").slice(0, 100);
}

export function SiteAnalytics() {
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const trackedScrollDepthsRef = useRef<Set<number>>(new Set());

  const trackPageBrowse = useEffectEvent(() => {
    const currentSearch = search ? `?${search}` : "";
    const context = getPageAnalyticsContext(pathname, currentSearch);

    trackEvent("page_browse", {
      ...context,
      page_title: document.title,
    });

    if (getPageCategory(pathname) === "contact") {
      trackEvent("contact_page_view", context);
    }
  });

  const handleScroll = useEffectEvent(() => {
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (documentHeight <= 0) {
      return;
    }

    const currentPercent = Math.round((window.scrollY / documentHeight) * 100);
    const context = getPageAnalyticsContext(
      pathname,
      search ? `?${search}` : "",
    );

    for (const threshold of getScrollDepthThresholds()) {
      if (
        currentPercent >= threshold &&
        !trackedScrollDepthsRef.current.has(threshold)
      ) {
        trackedScrollDepthsRef.current.add(threshold);
        trackEvent("scroll_depth", {
          ...context,
          scroll_percent: threshold,
        });
      }
    }
  });

  const handleDocumentClick = useEffectEvent((event: MouseEvent) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const link = target.closest("a[href]");
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }

    const href = link.getAttribute("href");
    if (!href || href === "#") {
      return;
    }

    const currentSearch = search ? `?${search}` : "";
    const context = getPageAnalyticsContext(pathname, currentSearch);
    const destinationPath = getDestinationPath(href, window.location.origin);
    const destinationType = getLinkTargetType(href, window.location.origin);
    const analyticsArea =
      link.dataset.analyticsArea ||
      link.closest<HTMLElement>("[data-analytics-area]")?.dataset.analyticsArea ||
      "site";
    const analyticsRole =
      link.dataset.analyticsRole ||
      link.closest<HTMLElement>("[data-analytics-role]")?.dataset.analyticsRole ||
      "link";

    const payload = {
      ...context,
      analytics_area: analyticsArea,
      analytics_role: analyticsRole,
      link_label: getLinkLabel(link),
      destination_type: destinationType,
      destination_path: destinationPath ?? "external",
      destination_url: href,
      targets_contact_form: destinationPath === "/contact",
    };

    if (destinationPath === "/contact") {
      trackEvent("contact_intent_click", payload);
      return;
    }

    trackEvent(analyticsRole === "cta" ? "cta_click" : "navigation_click", payload);
  });

  useEffect(() => {
    if (!ANALYTICS_ENABLED) {
      return;
    }

    trackedScrollDepthsRef.current.clear();
    trackPageBrowse();

    const engagementTimer = window.setTimeout(() => {
      trackEvent("page_engaged", {
        ...getPageAnalyticsContext(pathname, search ? `?${search}` : ""),
        engagement_seconds: 15,
      });
    }, 15_000);

    return () => {
      window.clearTimeout(engagementTimer);
    };
  }, [pathname, search]);

  useEffect(() => {
    if (!ANALYTICS_ENABLED) {
      return;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, search]);

  useEffect(() => {
    if (!ANALYTICS_ENABLED) {
      return;
    }

    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, [pathname, search]);

  return null;
}
