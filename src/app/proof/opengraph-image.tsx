import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";

export const runtime = "edge";
export const alt = "Crescora proof pages";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImageResponse({
    eyebrow: "Proof",
    title: "Workflow examples grounded in rollout shape, controls, and outcomes.",
    description: "Review proof-style pages for healthcare, real estate, and education operations.",
    accentLabel: "Proof",
  });
}
