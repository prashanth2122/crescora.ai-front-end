import type { Metadata } from "next";

import { siteContent } from "@/lib/site-content";

type JsonLdImage = {
  "@type": "ImageObject";
  url: string;
  width?: number;
  height?: number;
};

type FaqSchemaItem = {
  question: string;
  answer: string;
};

type ItemListSchemaItem = {
  name: string;
  url: string;
  description?: string;
};

type PageSchemaInput = {
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
  name: string;
  description: string;
  path: string;
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  imageAlt?: string;
  noIndex?: boolean;
  openGraphType?: "website" | "article";
  locale?: "en_IN" | "hi_IN";
  alternates?: Metadata["alternates"];
};

type ArticleMetadataInput = PageMetadataInput & {
  publishedTime: string;
  modifiedTime: string;
  authors: string[];
};

const site = siteContent.site;

export const siteOrigin = "https://www.crescora.ai";
export const siteMetadataBase = new URL(siteOrigin);
export const defaultSeoImagePath = "/opengraph-image";
export const editorialAuthor = "Crescora Editorial Team";

const areaServed = ["India", "United States", "United Kingdom", "United Arab Emirates", "Singapore"];

const homepageAutomationServices = [
  {
    name: "WhatsApp automation workflows",
    description: "Automate first replies, lead qualification, follow-up, booking, reminders, payments, and support on WhatsApp.",
  },
  {
    name: "Website chatbots and lead capture",
    description: "Run AI chatbots on the website, capture forms and chat leads, and route qualified enquiries into the next workflow step.",
  },
  {
    name: "Social media chat integration",
    description: "Connect Instagram and Facebook Messenger conversations to one shared workflow with human handoff when needed.",
  },
  {
    name: "Operations and CRM integrations",
    description: "Sync bookings, documents, payments, helpdesk actions, CRM records, Google Sheets rows, and internal API updates.",
  },
  {
    name: "Customer support automation",
    description: "Resolve repeated questions, triage issues, and escalate complex conversations with full context.",
  },
  {
    name: "Business workflow automation",
    description: "Automate lead capture, appointment booking, document collection, reminders, feedback, and outcome tracking.",
  },
] as const;

function normalizePath(path: string): string {
  if (!path) {
    return "/";
  }

  const trimmed = path.split("?")[0]?.split("#")[0]?.replace(/\/+$/, "") ?? "";
  return trimmed.length > 0 ? trimmed : "/";
}

function normalizeTitleComparison(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildImage(imagePath: string, imageAlt: string) {
  return {
    url: buildAbsoluteUrl(imagePath),
    alt: imageAlt,
    width: 1200,
    height: 630,
  } as const;
}

export function buildAbsoluteUrl(path: string): string {
  return new URL(normalizePath(path), siteOrigin).toString();
}

export function buildRouteSocialImagePath(path: string): string {
  const normalizedPath = normalizePath(path);

  return normalizedPath === "/" ? defaultSeoImagePath : `${normalizedPath}/opengraph-image`;
}

export function buildMetadataTitle(title: string): string {
  const normalizedTitle = normalizeTitleComparison(title);
  const fullBrand = site.productFull.trim();
  const legacyBrand = site.productFull.replace(/\s+AI$/i, "").trim();

  if (normalizedTitle.includes(normalizeTitleComparison(fullBrand)) || normalizedTitle.includes(normalizeTitleComparison(site.name))) {
    return title;
  }

  if (legacyBrand && normalizedTitle.includes(normalizeTitleComparison(legacyBrand))) {
    return title.replace(new RegExp(escapeRegExp(legacyBrand), "i"), fullBrand);
  }

  return `${title} | ${fullBrand}`;
}

export function createRobots({ index, follow }: { index: boolean; follow: boolean }): NonNullable<Metadata["robots"]> {
  return {
    index,
    follow,
    googleBot: {
      index,
      follow,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export const indexRobots = createRobots({ index: true, follow: true });
export const noIndexRobots = createRobots({ index: false, follow: true });

export function createPageMetadata({
  title,
  description,
  path,
  imagePath = defaultSeoImagePath,
  imageAlt = `${site.productFull} interface preview`,
  noIndex = false,
  openGraphType = "website",
  locale = "en_IN",
  alternates,
}: PageMetadataInput): Metadata {
  const absoluteTitle = buildMetadataTitle(title);
  const image = buildImage(imagePath, imageAlt);
  const canonicalPath = normalizePath(path);

  return {
    metadataBase: siteMetadataBase,
    title: absoluteTitle,
    description,
    alternates: alternates ?? { canonical: canonicalPath },
    robots: noIndex ? noIndexRobots : indexRobots,
    openGraph: {
      title: absoluteTitle,
      description,
      url: buildAbsoluteUrl(canonicalPath),
      type: openGraphType,
      siteName: site.name,
      locale,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: [image.url],
    },
  };
}

export function createExactPageMetadata(input: PageMetadataInput): Metadata {
  const metadata = createPageMetadata(input);

  return {
    ...metadata,
    title: { absolute: input.title },
    openGraph: metadata.openGraph
      ? {
          ...metadata.openGraph,
          title: input.title,
        }
      : undefined,
    twitter: metadata.twitter
      ? {
          ...metadata.twitter,
          title: input.title,
        }
      : undefined,
  };
}

export function createArticleMetadata({
  publishedTime,
  modifiedTime,
  authors,
  ...pageMetadata
}: ArticleMetadataInput): Metadata {
  const baseMetadata = createPageMetadata({
    ...pageMetadata,
    openGraphType: "article",
  });

  return {
    ...baseMetadata,
    authors: authors.map((name) => ({ name })),
    openGraph: {
      ...baseMetadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors,
    },
  };
}

export function jsonLdSafeStringify(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildRepresentativeImageJsonLd(path = defaultSeoImagePath): JsonLdImage {
  return {
    "@type": "ImageObject",
    url: buildAbsoluteUrl(path),
    width: 1200,
    height: 630,
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: siteOrigin,
  description: site.description,
  areaServed,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: siteOrigin,
  description: site.description,
  inLanguage: ["en-IN", "hi-IN"],
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.productFull,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: site.description,
  url: siteOrigin,
  image: buildAbsoluteUrl(defaultSeoImagePath),
  featureList: homepageAutomationServices.map((service) => service.name),
};

export const homepageServicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Crescora AI automation services",
  itemListElement: homepageAutomationServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.name,
    description: service.description,
  })),
};

export const whatsappAutomationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WhatsApp automation workflows",
  url: buildAbsoluteUrl("/use-cases/whatsapp-automation"),
  description: siteContent.useCases.whatsapp.metadata.description,
  serviceType: "AI-powered WhatsApp automation, chatbot workflows, and business process automation",
  provider: {
    "@type": "Organization",
    name: site.name,
    url: siteOrigin,
  },
  image: buildAbsoluteUrl(defaultSeoImagePath),
  areaServed,
};

export const whatsappAutomationServicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "WhatsApp automation services supported by Crescora AI",
  itemListElement: [
    ...siteContent.useCases.whatsapp.automations,
    ...siteContent.useCases.whatsapp.services,
  ].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item,
  })),
};

export function buildFaqPageSchema(items: readonly FaqSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildItemListSchema(name: string, items: readonly ItemListSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function buildPageSchema({
  type = "WebPage",
  name,
  description,
  path,
}: PageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: buildAbsoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: siteOrigin,
    },
  };
}
