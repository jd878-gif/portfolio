import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0F172A",
          backgroundImage:
            "linear-gradient(135deg, #0F172A 0%, #0F172A 60%, #102036 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#14B8A6",
            }}
          />
          <span style={{ color: "#38BDF8", fontSize: 22, fontFamily: "monospace" }}>
            {profile.status}
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 84, color: "#FFFFFF", fontWeight: 600 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#2563EB", marginTop: 14 }}>
          {profile.headline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#94A3B8",
            marginTop: 36,
            maxWidth: 920,
            lineHeight: 1.4,
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
