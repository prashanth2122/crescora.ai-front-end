import { siteContent } from "@/lib/site-content";
import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";

export const runtime = "edge";
export const alt = "Turn Customer Conversations Into Business Actions";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImageResponse({
    eyebrow: "Crescora.ai",
    title: siteContent.homepage.metadata.socialTitle.replace(" | Crescora.ai", ""),
    description: siteContent.homepage.metadata.socialDescription,
    accentLabel: "Turn Conversations Into Business Actions",
  });
}
