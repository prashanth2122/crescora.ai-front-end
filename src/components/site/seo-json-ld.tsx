import { jsonLdSafeStringify } from "@/lib/seo";

type SeoJsonLdProps = {
  data: unknown;
};

export function SeoJsonLd({ data }: SeoJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdSafeStringify(data) }}
    />
  );
}
