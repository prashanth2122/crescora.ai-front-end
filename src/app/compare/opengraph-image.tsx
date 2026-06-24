import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";

export const runtime = "edge";
export const alt = "Crescora comparison pages";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImageResponse({
    eyebrow: "Compare",
    title: "Decision-stage workflow comparisons for buyers choosing the right operating model.",
    description: "Compare FLOW with chatbots, manual WhatsApp, generic automation, and CRM-led process designs.",
    accentLabel: "Compare",
  });
}
