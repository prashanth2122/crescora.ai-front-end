import { comparisonPages } from "@/lib/decision-pages";
import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";

const page = comparisonPages["flow-vs-generic-automation"];

export const runtime = "edge";
export const alt = page.title;
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImageResponse({
    eyebrow: "Comparison",
    title: page.title,
    description: page.metadata.description,
    accentLabel: "Compare",
  });
}
