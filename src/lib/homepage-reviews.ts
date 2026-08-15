import reviewsJson from "@/content/homepage-reviews.json";

export type HomepageReview = {
  id: string;
  quote: string;
  name: string;
  description: string;
  sourceLabel: string;
  sourceDate?: string;
  sourceHref?: string;
  imageUrl?: string;
  imageAlt?: string;
  logoName?: string;
  logoText?: string;
  logoImageSrc?: string;
  logoAlt?: string;
  proofBadges?: readonly string[];
};

function readOptionalString(value: unknown, fieldName: string) {
  if (value == null) {
    return undefined;
  }

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Homepage review field "${fieldName}" must be a non-empty string when provided.`);
  }

  return value;
}

function readRequiredString(value: unknown, fieldName: string) {
  const parsed = readOptionalString(value, fieldName);

  if (!parsed) {
    throw new Error(`Homepage review field "${fieldName}" is required.`);
  }

  return parsed;
}

function readProofBadges(value: unknown) {
  if (value == null) {
    return undefined;
  }

  if (!Array.isArray(value) || value.some((item) => typeof item !== "string" || item.trim().length === 0)) {
    throw new Error('Homepage review field "proofBadges" must be an array of non-empty strings when provided.');
  }

  return value;
}

function parseHomepageReviews(value: unknown): readonly HomepageReview[] {
  if (!Array.isArray(value)) {
    throw new Error("Homepage reviews JSON must export an array.");
  }

  return value.map((item, index) => {
    if (item == null || typeof item !== "object" || Array.isArray(item)) {
      throw new Error(`Homepage review at index ${index} must be an object.`);
    }

    const record = item as Record<string, unknown>;

    return {
      id: readRequiredString(record.id, "id"),
      quote: readRequiredString(record.quote, "quote"),
      name: readRequiredString(record.name, "name"),
      description: readRequiredString(record.description, "description"),
      sourceLabel: readRequiredString(record.sourceLabel, "sourceLabel"),
      sourceDate: readOptionalString(record.sourceDate, "sourceDate"),
      sourceHref: readOptionalString(record.sourceHref, "sourceHref"),
      imageUrl: readOptionalString(record.imageUrl, "imageUrl"),
      imageAlt: readOptionalString(record.imageAlt, "imageAlt"),
      logoName: readOptionalString(record.logoName, "logoName"),
      logoText: readOptionalString(record.logoText, "logoText"),
      logoImageSrc: readOptionalString(record.logoImageSrc, "logoImageSrc"),
      logoAlt: readOptionalString(record.logoAlt, "logoAlt"),
      proofBadges: readProofBadges(record.proofBadges),
    };
  });
}

export const homepageReviews = parseHomepageReviews(reviewsJson);
