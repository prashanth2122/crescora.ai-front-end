import type { Metadata } from "next";

import { enLocaleCopy } from "@/lib/locales/en";
import { hiLocaleCopy } from "@/lib/locales/hi";
import { createPageMetadata, siteMetadataBase } from "@/lib/seo";

export const supportedLocales = ["en", "hi"] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

const localizedRouteRoots = [
  "/",
  "/solutions",
  "/blog",
  "/compare",
  "/templates",
  "/industries",
  "/workflows",
  "/india",
] as const;

export const localizedEntryRoutes = [
  "/hi",
  "/hi/solutions",
  "/hi/blog",
  "/hi/compare",
  "/hi/templates",
  "/hi/industries",
  "/hi/workflows",
  "/hi/india",
] as const;

export type LocalizedNavigationItem = {
  label: string;
  href: string;
};

export type LocalizedFooterGroup = {
  title: string;
  links: LocalizedNavigationItem[];
};

export type LocaleCopy = {
  site: {
    seoTitle: string;
    description: string;
  };
  language: {
    label: string;
    current: string;
    switchTo: string;
  };
  header: {
    openMenuLabel: string;
    closeMenuLabel: string;
    closeOverlayLabel: string;
  };
  footer: {
    title: string;
    intro: string;
    allRightsReserved: string;
    companyReferenceLabel: string;
    productLabel: string;
  };
  navigation: LocalizedNavigationItem[];
  footerGroups: LocalizedFooterGroup[];
  ctas: {
    bookProjectDemo: { label: string; href: string };
    requestScopeCall: { label: string; href: string };
    talkToSales: { label: string; href: string };
    viewSolutions: { label: string; href: string };
    viewBlog: { label: string; href: string };
    viewTemplates: { label: string; href: string };
    seePricing: { label: string; href: string };
  };
  pageActions: {
    openLocaleHub: string;
    openSolutionPage: string;
    openArticle: string;
    openComparePage: string;
    openTemplate: string;
    openWorkflowPage: string;
    openIndustryPage: string;
    openStateHub: string;
  };
};

export const localeCopy: Record<Locale, LocaleCopy> = {
  en: enLocaleCopy,
  hi: hiLocaleCopy,
};

export function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && (supportedLocales as readonly string[]).includes(value));
}

export function normalizePathname(pathname: string): string {
  if (!pathname) {
    return "/";
  }

  const trimmed = pathname.split("?")[0]?.split("#")[0]?.replace(/\/+$/, "") ?? "";
  return trimmed.length > 0 ? trimmed : "/";
}

export function getLocaleFromPath(pathname: string): Locale {
  const normalizedPath = normalizePathname(pathname);
  return normalizedPath === "/hi" || normalizedPath.startsWith("/hi/") ? "hi" : defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === "/hi") {
    return "/";
  }

  if (normalizedPath.startsWith("/hi/")) {
    const stripped = normalizedPath.slice(3);
    return stripped.length > 0 ? stripped : "/";
  }

  return normalizedPath;
}

function findLocalizedRoot(pathname: string): string | undefined {
  const normalizedPath = normalizePathname(pathname);

  return localizedRouteRoots.find((root) => {
    if (root === "/") {
      return normalizedPath === "/";
    }

    return normalizedPath === root || normalizedPath.startsWith(`${root}/`);
  });
}

export function withLocalePrefix(pathname: string, locale: Locale): string {
  const normalizedPath = stripLocalePrefix(pathname);

  if (locale === defaultLocale) {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return "/hi";
  }

  const localizedRoot = findLocalizedRoot(normalizedPath);

  if (!localizedRoot || localizedRoot === "/") {
    return normalizedPath;
  }

  return `/hi${localizedRoot}`;
}

export function buildLocalizedHref(href: string, locale: Locale): string {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  return withLocalePrefix(href, locale);
}

export function getLocalizedRoutePath(pathname: string, locale: Locale): string {
  const normalizedPath = stripLocalePrefix(pathname);

  if (locale === defaultLocale) {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return "/hi";
  }

  const localizedRoot = findLocalizedRoot(normalizedPath);

  if (!localizedRoot || localizedRoot === "/") {
    return "/hi";
  }

  return `/hi${localizedRoot}`;
}

export function getLocaleCopy(locale: Locale): LocaleCopy {
  return localeCopy[locale];
}

export function createLocalizedMetadata(
  pathname: string,
  title: string,
  description: string,
  options: { noIndex?: boolean } = {},
): Metadata {
  const canonicalPath = getLocalizedRoutePath(pathname, getLocaleFromPath(pathname));
  const locale = getLocaleFromPath(pathname);

  return {
    ...createPageMetadata({
      title,
      description,
      path: canonicalPath,
      locale: locale === "hi" ? "hi_IN" : "en_IN",
      noIndex: options.noIndex ?? false,
      alternates: {
        canonical: canonicalPath,
        languages: {
          en: getLocalizedRoutePath(pathname, "en"),
          hi: getLocalizedRoutePath(pathname, "hi"),
          "x-default": getLocalizedRoutePath(pathname, "en"),
        },
      },
    }),
    metadataBase: siteMetadataBase,
  };
}
