"use client";

import { useReportWebVitals } from "next/web-vitals";

import { ANALYTICS_ENABLED, trackWebVital } from "@/lib/analytics";

export function AnalyticsWebVitals() {
  useReportWebVitals((metric) => {
    if (!ANALYTICS_ENABLED) {
      return;
    }

    trackWebVital(metric);
  });

  return null;
}
