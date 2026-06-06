import { ImageResponse } from "next/og";
import { siteContent } from "@/lib/site-content";

export const runtime = "edge";
export const alt = `${siteContent.site.name} ${siteContent.site.product} website`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 56,
          color: "#fff",
          background:
            "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.28), transparent 28%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.24), transparent 24%), linear-gradient(135deg, #050816 0%, #0b1220 50%, #10172a 100%)",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 700 }}>
          <div style={{ fontSize: 22, letterSpacing: 5, textTransform: "uppercase", opacity: 0.72 }}>
            {siteContent.site.name}
          </div>
          <div style={{ fontSize: 64, lineHeight: 1.02, fontWeight: 700 }}>
            {siteContent.site.tagline}
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.4, opacity: 0.84 }}>
            {siteContent.site.description}
          </div>
        </div>
        <div
          style={{
            width: 290,
            height: 290,
            borderRadius: 40,
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.05)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          FLOW
        </div>
      </div>
    ),
    { ...size },
  );
}
