export const customerIntakeApiConfig = {
  baseUrl: process.env.CUSTOMER_INTAKE_API_BASE_URL ?? "https://api.crescora.ai",
  tokenPath: "/customer-facing-website/token",
  intakesPath: "/customer-facing-website/intakes",
} as const;
