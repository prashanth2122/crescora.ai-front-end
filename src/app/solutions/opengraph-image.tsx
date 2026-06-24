import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";

export const runtime = "edge";
export const alt = "Crescora solution pages";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImageResponse({
    eyebrow: "Solutions",
    title: "Primary workflow automation pages for buyer-intent categories.",
    description: "WhatsApp automation, AI chatbots, workflow operations, booking, support, and rollout-ready customer journeys.",
    accentLabel: "Solutions",
  });
}
