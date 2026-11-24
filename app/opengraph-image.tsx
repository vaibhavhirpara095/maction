import { ImageResponse } from "next/og";

export const alt = "Maction Consulting — Market Research, Data Analytics & Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded default OG/Twitter image for routes without their own.
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
          background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #172554 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#60a5fa",
          }}
        >
          Maction Consulting
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Transform Data Into Business Growth
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#cbd5e1" }}>
          Market Research · Data Analytics · Consulting
        </div>
      </div>
    ),
    { ...size },
  );
}
