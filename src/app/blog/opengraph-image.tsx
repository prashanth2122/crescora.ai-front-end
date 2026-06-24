import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";

export const runtime = "edge";
export const alt = "Crescora blog";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImageResponse({
    eyebrow: "Blog",
    title: "Operational articles and implementation notes for buyers and operators.",
    description: "Workflow guidance, rollout notes, and search-aligned articles connected to solutions, proof, and comparisons.",
    accentLabel: "Blog",
  });
}
