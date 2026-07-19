export const customerIntakeApiConfig = {
  baseUrl: process.env.CUSTOMER_INTAKE_API_BASE_URL ?? "https://api.crescora.ai",
  tokenPath: "/customer-facing-website/token",
  intakesPath: "/customer-facing-website/intakes",
  pricingPath: "/customer-facing-website/pricing",
} as const;

const DEFAULT_BOOK_A_CALL_PATH = "/contact";
const DEFAULT_WHATSAPP_PHONE_NUMBER = "+91-9642021224";
const DEFAULT_SUPPORT_EMAIL = "support@crescora.ai";
const DEFAULT_CONTACT_PHONE_NUMBER = "+91-9642021224";
const DEFAULT_WHATSAPP_PREFILL_TEXT =
  "I'm interested in your product";

export type PublicDirectContactItem = {
  label: "Contact";
  value: string;
  href: string;
};

type PublicConfigEnv = Record<string, string | undefined>;

function normalizeConfiguredUrl(value: string | undefined, fallback: string) {
  const normalized = value?.trim();
  return normalized && normalized.length > 0 ? normalized : fallback;
}

export function normalizeEmailAddress(value: string | undefined) {
  const normalized = value?.trim() ?? "";
  return normalized.includes("@") ? normalized : null;
}

export function normalizeDialablePhoneNumber(value: string | undefined) {
  const normalized = value?.replace(/\D/g, "") ?? "";
  return normalized.length >= 8 ? normalized : null;
}

export function buildWhatsAppHref(
  phoneNumber: string | undefined,
  prefillText = DEFAULT_WHATSAPP_PREFILL_TEXT,
) {
  const normalizedPhoneNumber = normalizeDialablePhoneNumber(phoneNumber);

  if (!normalizedPhoneNumber) {
    return null;
  }

  const normalizedPrefillText = prefillText.trim();
  const query = normalizedPrefillText.length > 0
    ? `?text=${encodeURIComponent(normalizedPrefillText)}`
    : "";

  return `https://wa.me/${normalizedPhoneNumber}${query}`;
}

export function buildPhoneHref(phoneNumber: string | undefined) {
  const normalizedPhoneNumber = normalizeDialablePhoneNumber(phoneNumber);

  if (!normalizedPhoneNumber) {
    return null;
  }

  return `tel:+${normalizedPhoneNumber}`;
}

export function buildMailtoHref(emailAddress: string | undefined) {
  const normalizedEmailAddress = normalizeEmailAddress(emailAddress);

  if (!normalizedEmailAddress) {
    return null;
  }

  return `mailto:${normalizedEmailAddress}`;
}

export function getPublicDirectContactItem(
  env: PublicConfigEnv = process.env,
): PublicDirectContactItem {
  const contactPhoneCandidates = [
    env.CONTACT_PHONE_NUMBER?.trim(),
    env.SUPPORT_PHONE_NUMBER?.trim(),
    env.WHATSAPP_PHONE_NUMBER?.trim(),
    DEFAULT_CONTACT_PHONE_NUMBER,
  ];
  const contactPhoneNumber =
    contactPhoneCandidates.find((candidate) => buildPhoneHref(candidate) !== null) ??
    DEFAULT_CONTACT_PHONE_NUMBER;

  return {
    label: "Contact",
    value: contactPhoneNumber,
    href: buildPhoneHref(contactPhoneNumber) ?? "tel:+919642021224",
  };
}

export function getPublicContactSurfaceConfig(
  env: PublicConfigEnv = process.env,
) {
  const supportPhoneNumber =
    env.SUPPORT_PHONE_NUMBER?.trim() || env.WHATSAPP_PHONE_NUMBER?.trim();
  const bookCallUrl = normalizeConfiguredUrl(
    env.BOOK_A_CALL_URL,
    DEFAULT_BOOK_A_CALL_PATH,
  );
  const whatsappPrefillText = normalizeConfiguredUrl(
    env.WHATSAPP_PREFILL_TEXT,
    DEFAULT_WHATSAPP_PREFILL_TEXT,
  );
  const whatsappHref = buildWhatsAppHref(
    env.WHATSAPP_PHONE_NUMBER ?? DEFAULT_WHATSAPP_PHONE_NUMBER,
    whatsappPrefillText,
  );
  const callHref = buildPhoneHref(supportPhoneNumber);
  const supportEmailHref = buildMailtoHref(
    env.SUPPORT_EMAIL ?? DEFAULT_SUPPORT_EMAIL,
  );

  return {
    bookCallUrl,
    callHref,
    supportEmailHref,
    whatsappHref,
    whatsappPrefillText,
  } as const;
}
