import { customerIntakeApiConfig } from "@/lib/app-config";
import { siteContent } from "@/lib/site-content";
import { pricingPackagesByRegion, pricingRegions, type PricingPackage } from "@/lib/site-data";

type PublicPricingApiRegion = {
  code: string;
  label: string;
  currency: string;
  currencySymbol: string;
  isDefault: boolean;
};

type PublicPricingApiPrice = {
  currency: string;
  regionCode: string;
  interval: "month";
  amountPaise: number | null;
  amountMajor: number | null;
  display: string;
  startsFromDisplay: string | null;
  baseAmountPaise: number | null;
  discountedAmountPaise: number | null;
};

type PublicPricingApiPlan = {
  code: string;
  name: string;
  eyebrow: string | null;
  badge: string | null;
  sortOrder: number;
  isCustomPricing: boolean;
  bestFor: string | null;
  description: string | null;
  includes: string[];
  channels: string[];
  ctaLabel: string;
  price: PublicPricingApiPrice;
  pricesByRegion: Record<string, PublicPricingApiPrice>;
  limits: {
    bots: number;
    flows: number;
    users: number;
    aiCredits: number;
    monthlyConversations: number;
    kbStorageMb: number;
    whatsappTemplates: number;
  };
};

type PublicPricingApiResponse = {
  generatedAt: string;
  billingRegion: {
    title: string;
    description: string;
    defaultRegionCode: string;
    regions: PublicPricingApiRegion[];
  };
  plans: PublicPricingApiPlan[];
};

export type PublicPricingRegionOption = {
  value: string;
  label: string;
};

export type PublicPricingData = {
  defaultRegion: string;
  regionLabel: string;
  regionHelperText: string;
  regionOptions: readonly PublicPricingRegionOption[];
  regionNotes: Record<string, string>;
  packagesByRegion: Record<string, readonly PricingPackage[]>;
  source: "api" | "fallback";
};

const FALLBACK_REGION_CODE_BY_VALUE: Record<string, string> = {
  india: "IN",
  global: "ROW",
};

const FALLBACK_REGION_VALUE_BY_CODE: Record<string, "india" | "global"> = {
  IN: "india",
  ROW: "global",
};

export function getFallbackPublicPricingData(): PublicPricingData {
  const regionOptions = pricingRegions.map((region) => ({
    value: FALLBACK_REGION_CODE_BY_VALUE[region.value] ?? region.value,
    label: region.label,
  }));

  return {
    defaultRegion: "IN",
    regionLabel: siteContent.pricing.regionSelector.label,
    regionHelperText: siteContent.pricing.regionSelector.helperText,
    regionOptions,
    regionNotes: {
      IN: siteContent.pricing.regionNotes.india,
      ROW: siteContent.pricing.regionNotes.global,
    },
    packagesByRegion: {
      IN: pricingPackagesByRegion.india,
      ROW: pricingPackagesByRegion.global,
    },
    source: "fallback",
  };
}

export async function getPublicPricingData(): Promise<PublicPricingData> {
  if (process.env.CRESCORA_PRICING_API_DISABLED === "true") {
    return getFallbackPublicPricingData();
  }

  try {
    const response = await fetch(buildPublicPricingApiUrl(), {
      cache: "no-store",
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return getFallbackPublicPricingData();
    }

    const payload: unknown = await response.json();
    return buildPublicPricingDataFromApiResponse(payload);
  } catch {
    return getFallbackPublicPricingData();
  }
}

export function buildPublicPricingDataFromApiResponse(payload: unknown): PublicPricingData {
  if (!isPublicPricingApiResponse(payload)) {
    return getFallbackPublicPricingData();
  }

  const regions = payload.billingRegion.regions.length > 0
    ? payload.billingRegion.regions
    : getFallbackPublicPricingData().regionOptions.map((region) => ({
        code: region.value,
        label: region.label,
        currency: region.value === "IN" ? "INR" : "USD",
        currencySymbol: region.value === "IN" ? "₹" : "$",
        isDefault: region.value === "IN",
      }));

  const defaultRegion =
    regions.find((region) => region.code === payload.billingRegion.defaultRegionCode)?.code ??
    regions.find((region) => region.isDefault)?.code ??
    regions[0]?.code ??
    "IN";

  const packagesByRegion = Object.fromEntries(
    regions.map((region) => [
      region.code,
      payload.plans
        .map((plan) => toPricingPackage(plan, region.code))
        .filter((plan): plan is PricingPackage => plan !== null),
    ]),
  );

  if (Object.values(packagesByRegion).every((packages) => packages.length === 0)) {
    return getFallbackPublicPricingData();
  }

  return {
    defaultRegion,
    regionLabel: payload.billingRegion.title,
    regionHelperText: payload.billingRegion.description,
    regionOptions: regions.map((region) => ({ value: region.code, label: region.label })),
    regionNotes: Object.fromEntries(regions.map((region) => [region.code, getRegionNote(region)])),
    packagesByRegion,
    source: "api",
  };
}

function buildPublicPricingApiUrl() {
  const baseUrl =
    process.env.CUSTOMER_INTAKE_API_BASE_URL?.trim() ||
    customerIntakeApiConfig.baseUrl;
  return `${baseUrl.replace(/\/+$/, "")}${customerIntakeApiConfig.pricingPath}`;
}

function toPricingPackage(plan: PublicPricingApiPlan, regionCode: string): PricingPackage | null {
  const price = plan.pricesByRegion[regionCode] ?? plan.price;

  if (!price?.display || !plan.name) {
    return null;
  }

  const label = plan.eyebrow ?? plan.bestFor ?? plan.code;
  const includes = plan.includes.length > 0 ? plan.includes : buildLimitIncludes(plan);

  return {
    label: label.toUpperCase(),
    title: plan.name,
    price: price.display,
    priceDetail: price.startsFromDisplay ?? undefined,
    bestFor: plan.description ?? plan.bestFor ?? "",
    includes,
    ctaLabel: plan.ctaLabel || getFallbackCtaLabel(plan),
    featured: plan.badge === "Most Popular",
    badge: plan.isCustomPricing ? undefined : plan.badge ?? undefined,
  };
}

function buildLimitIncludes(plan: PublicPricingApiPlan) {
  return [
    `${plan.limits.flows} active flows`,
    `${plan.limits.aiCredits.toLocaleString("en-US")} AI credits/month`,
    `${plan.limits.users} users`,
  ];
}

function getFallbackCtaLabel(plan: PublicPricingApiPlan) {
  if (plan.isCustomPricing || plan.code === "enterprise") {
    return "Discuss My Workflow";
  }
  return `Choose ${plan.name}`;
}

function getRegionNote(region: PublicPricingApiRegion) {
  const fallbackRegion = FALLBACK_REGION_VALUE_BY_CODE[region.code];
  if (fallbackRegion) {
    return siteContent.pricing.regionNotes[fallbackRegion];
  }

  return `${region.label} pricing is shown for ${region.currency}-billed customers. Final pricing still depends on workflow scope, selected channels, integrations, AI usage, support level, and rollout complexity.`;
}

function isPublicPricingApiResponse(payload: unknown): payload is PublicPricingApiResponse {
  if (!isRecord(payload) || !isRecord(payload.billingRegion) || !Array.isArray(payload.plans)) {
    return false;
  }

  const billingRegion = payload.billingRegion;
  return (
    typeof payload.generatedAt === "string" &&
    typeof billingRegion.title === "string" &&
    typeof billingRegion.description === "string" &&
    typeof billingRegion.defaultRegionCode === "string" &&
    Array.isArray(billingRegion.regions) &&
    billingRegion.regions.every(isPublicPricingApiRegion) &&
    payload.plans.every(isPublicPricingApiPlan)
  );
}

function isPublicPricingApiRegion(region: unknown): region is PublicPricingApiRegion {
  return (
    isRecord(region) &&
    typeof region.code === "string" &&
    typeof region.label === "string" &&
    typeof region.currency === "string" &&
    typeof region.currencySymbol === "string" &&
    typeof region.isDefault === "boolean"
  );
}

function isPublicPricingApiPlan(plan: unknown): plan is PublicPricingApiPlan {
  return (
    isRecord(plan) &&
    typeof plan.code === "string" &&
    typeof plan.name === "string" &&
    (typeof plan.eyebrow === "string" || plan.eyebrow === null) &&
    (typeof plan.badge === "string" || plan.badge === null) &&
    typeof plan.sortOrder === "number" &&
    typeof plan.isCustomPricing === "boolean" &&
    (typeof plan.bestFor === "string" || plan.bestFor === null) &&
    (typeof plan.description === "string" || plan.description === null) &&
    Array.isArray(plan.includes) &&
    plan.includes.every((item) => typeof item === "string") &&
    Array.isArray(plan.channels) &&
    typeof plan.ctaLabel === "string" &&
    isPublicPricingApiPrice(plan.price) &&
    isRecord(plan.pricesByRegion) &&
    Object.values(plan.pricesByRegion).every(isPublicPricingApiPrice) &&
    isRecord(plan.limits)
  );
}

function isPublicPricingApiPrice(price: unknown): price is PublicPricingApiPrice {
  return (
    isRecord(price) &&
    typeof price.currency === "string" &&
    typeof price.regionCode === "string" &&
    price.interval === "month" &&
    (typeof price.amountPaise === "number" || price.amountPaise === null) &&
    (typeof price.amountMajor === "number" || price.amountMajor === null) &&
    typeof price.display === "string" &&
    (typeof price.startsFromDisplay === "string" || price.startsFromDisplay === null) &&
    (typeof price.baseAmountPaise === "number" || price.baseAmountPaise === null) &&
    (typeof price.discountedAmountPaise === "number" || price.discountedAmountPaise === null)
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
