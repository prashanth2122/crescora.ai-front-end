import { getLocaleFromPath, normalizePathname, stripLocalePrefix } from "@/lib/locales";

export const DEFAULT_GA_MEASUREMENT_ID = "G-027GJ53KYV";
export const GOOGLE_ANALYTICS_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || DEFAULT_GA_MEASUREMENT_ID;
export const ANALYTICS_ENABLED =
  GOOGLE_ANALYTICS_ID.length > 0 &&
  (process.env.NODE_ENV === "production" ||
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_IN_DEV === "true");

const EVENT_NAME_MAX_LENGTH = 40;
const PARAM_VALUE_MAX_LENGTH = 100;
const SCROLL_DEPTH_THRESHOLDS = [25, 50, 75, 90] as const;
const TRACKED_MARKETING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
] as const;

export type AnalyticsPrimitive = string | number | boolean;
export type AnalyticsParams = Record<
  string,
  AnalyticsPrimitive | null | undefined
>;

type LinkTargetType = "internal" | "external" | "mailto" | "tel" | "hash";

type LeadFormSelectionInput = {
  country: string;
  industry: string;
  primaryUseCase: string;
  monthlyEnquiryVolume: string;
  timeline: string;
  preferredChannel: string;
  currentTools: string;
  keyProblem: string;
};

type WebVitalMetric = {
  name: string;
  id: string;
  value: number;
  delta: number;
  rating: "good" | "needs-improvement" | "poor";
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function sanitizeParamValue(value: string) {
  return value.trim().replace(/\s+/g, " ").slice(0, PARAM_VALUE_MAX_LENGTH);
}

export function sanitizeEventName(value: string) {
  const sanitized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_{2,}/g, "_");

  if (!sanitized) {
    return "event";
  }

  const normalized =
    /^[a-z]/.test(sanitized) ? sanitized : `event_${sanitized}`;
  return normalized.slice(0, EVENT_NAME_MAX_LENGTH);
}

export function cleanAnalyticsParams(params: AnalyticsParams) {
  const entries: Array<[string, AnalyticsPrimitive]> = [];

  for (const [key, value] of Object.entries(params)) {
    if (value == null) {
      continue;
    }

    if (typeof value === "string") {
      const sanitized = sanitizeParamValue(value);
      if (sanitized) {
        entries.push([key, sanitized]);
      }
      continue;
    }

    entries.push([key, value]);
  }

  return Object.fromEntries(entries);
}

export function getPageCategory(pathname: string) {
  const normalized = stripLocalePrefix(pathname);
  const segments =
    normalized === "/" ? [] : normalized.replace(/^\/+/, "").split("/");

  if (segments.length === 0) {
    return "home";
  }

  const [root, detail] = segments;

  switch (root) {
    case "contact":
      return "contact";
    case "pricing":
      return "pricing";
    case "about":
      return "about";
    case "platform":
      return "platform";
    case "trust":
      return "trust";
    case "resources":
      return "resources";
    case "privacy":
    case "terms":
    case "cookies":
    case "acceptable-use":
      return "legal";
    case "industries":
      return detail ? "industry_detail" : "industry_index";
    case "solutions":
      return detail ? "solution_detail" : "solution_index";
    case "use-cases":
      return detail ? "use_case_detail" : "use_case_index";
    case "workflows":
      return detail ? "workflow_detail" : "workflow_index";
    case "templates":
      return detail ? "template_detail" : "template_index";
    case "compare":
      return detail ? "comparison_detail" : "comparison_index";
    case "proof":
      return detail ? "proof_detail" : "proof_index";
    case "blog":
      return detail ? "blog_detail" : "blog_index";
    case "india":
      if (!detail) {
        return "india_index";
      }

      return segments.includes("workflows") || segments.includes("industries")
        ? "india_detail"
        : "india_state";
    default:
      return "content_page";
  }
}

export function getMarketingParams(
  search: string | URLSearchParams,
): AnalyticsParams {
  const searchParams =
    typeof search === "string"
      ? new URLSearchParams(search.startsWith("?") ? search.slice(1) : search)
      : search;

  return Object.fromEntries(
    TRACKED_MARKETING_PARAMS.flatMap((key) => {
      const value = searchParams.get(key);
      return value ? [[key, value]] : [];
    }),
  );
}

export function getPageAnalyticsContext(pathname: string, search = "") {
  const normalizedPath = normalizePathname(pathname);
  const strippedPath = stripLocalePrefix(normalizedPath);
  const segments =
    strippedPath === "/" ? [] : strippedPath.replace(/^\/+/, "").split("/");
  const searchParams = new URLSearchParams(
    search.startsWith("?") ? search.slice(1) : search,
  );

  return {
    page_path: normalizedPath,
    page_locale: getLocaleFromPath(normalizedPath),
    page_category: getPageCategory(normalizedPath),
    page_depth: segments.length,
    primary_section: segments[0] ?? "home",
    secondary_section: segments[1] ?? "none",
    has_query_params: searchParams.size > 0,
    ...getMarketingParams(searchParams),
  };
}

export function getScrollDepthThresholds() {
  return [...SCROLL_DEPTH_THRESHOLDS];
}

export function getLinkTargetType(
  href: string,
  origin: string,
): LinkTargetType {
  if (href.startsWith("#")) {
    return "hash";
  }

  if (href.startsWith("mailto:")) {
    return "mailto";
  }

  if (href.startsWith("tel:")) {
    return "tel";
  }

  try {
    const url = new URL(href, origin);
    return url.origin === origin ? "internal" : "external";
  } catch {
    return "external";
  }
}

export function getDestinationPath(href: string, origin: string) {
  try {
    const url = new URL(href, origin);
    return normalizePathname(url.pathname);
  } catch {
    return null;
  }
}

export function buildLeadFormSelectionSnapshot(
  values: LeadFormSelectionInput,
) {
  return {
    country: values.country || "unknown",
    industry: values.industry || "unknown",
    primary_use_case: values.primaryUseCase || "unknown",
    monthly_enquiry_volume: values.monthlyEnquiryVolume || "unknown",
    timeline: values.timeline || "unknown",
    preferred_channel: values.preferredChannel || "unspecified",
    has_current_tools: values.currentTools.trim().length > 0,
    has_problem_statement: values.keyProblem.trim().length > 0,
  };
}

export function buildLeadFormProgress(
  completedRequiredFields: number,
  totalRequiredFields: number,
) {
  const completionPercent =
    totalRequiredFields > 0
      ? Math.round((completedRequiredFields / totalRequiredFields) * 100)
      : 0;

  return {
    completed_required_fields: completedRequiredFields,
    required_fields_total: totalRequiredFields,
    completion_percent: completionPercent,
  };
}

function queueAnalyticsCommand(...args: unknown[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag === "function") {
    window.gtag(...args);
    return;
  }

  window.dataLayer.push(Array.from(args));
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (!ANALYTICS_ENABLED || typeof window === "undefined") {
    return;
  }

  queueAnalyticsCommand(
    "event",
    sanitizeEventName(eventName),
    cleanAnalyticsParams(params),
  );
}

function normalizeWebVitalValue(metric: WebVitalMetric) {
  const rawValue = metric.name === "CLS" ? metric.value * 1000 : metric.value;
  return Math.round(rawValue);
}

export function trackWebVital(metric: WebVitalMetric) {
  if (typeof window === "undefined") {
    return;
  }

  trackEvent("web_vital", {
    ...getPageAnalyticsContext(
      window.location.pathname,
      window.location.search,
    ),
    metric_name: metric.name,
    metric_id: metric.id,
    metric_rating: metric.rating,
    metric_value: normalizeWebVitalValue(metric),
    metric_delta: Math.round(metric.delta),
  });
}
