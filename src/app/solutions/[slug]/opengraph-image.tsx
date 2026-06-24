import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";
import { revenuePagesBySlug } from "@/lib/revenue-pages";

export const runtime = "edge";
export const size = socialImageSize;
export const contentType = socialImageContentType;

type Params = Promise<{ slug: string }>;

export default async function Image({ params }: { params: Params }) {
  const { slug } = await params;
  const page = revenuePagesBySlug.get(slug);

  return createSocialImageResponse({
    eyebrow: "Solution",
    title: page?.title ?? "Workflow automation solution",
    description: page?.description ?? "Production-ready customer workflow automation for sales, support, and operations.",
    accentLabel: "Solution",
  });
}
