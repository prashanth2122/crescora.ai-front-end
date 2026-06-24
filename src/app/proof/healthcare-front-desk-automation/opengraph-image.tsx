import { proofPages } from "@/lib/decision-pages";
import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";

const page = proofPages["healthcare-front-desk-automation"];

export const runtime = "edge";
export const alt = page.title;
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImageResponse({
    eyebrow: "Proof",
    title: page.title,
    description: page.metadata.description,
    accentLabel: "Proof",
  });
}
