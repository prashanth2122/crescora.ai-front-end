import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";

export const runtime = "edge";
export const alt = "Crescora workflow examples";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImageResponse({
    eyebrow: "Workflow examples",
    title: "Workflow examples grounded in rollout shape, controls, and outcomes.",
    description: "Review workflow example pages for healthcare, real estate, and education operations.",
    accentLabel: "Examples",
  });
}
