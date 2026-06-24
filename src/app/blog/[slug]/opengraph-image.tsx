import { blogPosts } from "@/lib/seo-marketing-data";
import { createSocialImageResponse, socialImageContentType, socialImageSize } from "@/lib/seo-social-image";

export const runtime = "edge";
export const size = socialImageSize;
export const contentType = socialImageContentType;

type Params = Promise<{ slug: string }>;

const postsBySlug = new Map(blogPosts.map((post) => [post.slug, post] as const));

export default async function Image({ params }: { params: Params }) {
  const { slug } = await params;
  const post = postsBySlug.get(slug);

  return createSocialImageResponse({
    eyebrow: post?.category ?? "Blog",
    title: post?.title ?? "Operational article",
    description: post?.description ?? "Workflow guidance and implementation notes from the Crescora team.",
    accentLabel: "Blog",
  });
}
