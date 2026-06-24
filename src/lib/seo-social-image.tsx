import { ImageResponse } from "next/og";

import { siteContent } from "@/lib/site-content";

export const socialImageSize = {
  width: 1200,
  height: 630,
} as const;

export const socialImageContentType = "image/png";

type SocialImageInput = {
  eyebrow: string;
  title: string;
  description: string;
  accentLabel?: string;
};

export function createSocialImageResponse({
  eyebrow,
  title,
  description,
  accentLabel = "FLOW",
}: SocialImageInput) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          padding: 56,
          color: "#ffffff",
          background:
            "radial-gradient(circle at 18% 18%, rgba(56,189,248,0.28), transparent 26%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.24), transparent 24%), linear-gradient(135deg, #050816 0%, #0b1220 50%, #10172a 100%)",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 24,
            maxWidth: 760,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontSize: 22,
                letterSpacing: 4,
                textTransform: "uppercase",
                opacity: 0.76,
              }}
            >
              <span>{siteContent.site.name}</span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span>{eyebrow}</span>
            </div>
            <div
              style={{
                fontSize: title.length > 72 ? 54 : 62,
                lineHeight: 1.04,
                fontWeight: 700,
                display: "flex",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 26,
                lineHeight: 1.35,
                opacity: 0.84,
                display: "flex",
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 20,
              opacity: 0.72,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.06)",
                padding: "10px 18px",
                fontSize: 18,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              {siteContent.site.product}
            </div>
            <span>{siteContent.site.tagline}</span>
          </div>
        </div>

        <div
          style={{
            width: 278,
            minWidth: 278,
            borderRadius: 38,
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.05)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 28,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.12)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.04) 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 42,
                fontWeight: 700,
                letterSpacing: 4,
              }}
            >
              {accentLabel}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                letterSpacing: 3,
                textTransform: "uppercase",
                opacity: 0.64,
                textAlign: "center",
              }}
            >
              {siteContent.site.productFull}
            </div>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
