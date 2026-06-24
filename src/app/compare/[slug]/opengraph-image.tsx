import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";
import { comparisonPages } from "@/lib/decision-pages";

export const runtime = "edge";
export const size = socialImageSize;
export const contentType = socialImageContentType;

type Params = Promise<{ slug: string }>;

export default async function Image({ params }: { params: Params }) {
  const { slug } = await params;
  const page = comparisonPages[slug];

  return createSocialImageResponse({
    eyebrow: "Comparison",
    title: page?.title ?? "Workflow comparison",
    description: page?.metadata.description ?? "Decision-stage comparison between workflow automation options.",
    accentLabel: "Compare",
  });
}
