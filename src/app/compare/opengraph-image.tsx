import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";

export const runtime = "edge";
export const alt = "Crescora comparison pages";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImageResponse({
    eyebrow: "Compare",
    title: "Compare Crescora AI with leading AI automation platforms and workflow alternatives.",
    description: "Yellow.ai, Kore.ai, Gupshup, Intercom, Zendesk AI, and workflow-level comparisons in one decision-stage cluster.",
    accentLabel: "Compare",
  });
}
