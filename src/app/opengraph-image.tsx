import { ImageResponse } from "next/og";
import { profile } from "@/lib/portfolio";

export const alt = "Nithiwut Wilainuch, Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f3f5f7",
          color: "#172033",
          display: "flex",
          fontFamily: "sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "2px solid #ccd6df",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "68px 54px 38px",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#527da1",
              borderRadius: 5,
              bottom: 0,
              display: "flex",
              left: 0,
              position: "absolute",
              top: 0,
              width: 10,
            }}
          />
          <div
            style={{
              color: "#527da1",
              display: "flex",
              fontFamily: "monospace",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            ENGINEERING PROFILE
          </div>
          <div style={{ display: "flex", fontSize: 54, fontWeight: 700, marginTop: 26 }}>
            {profile.name}
          </div>
          <div style={{ color: "#35445a", display: "flex", fontSize: 30, marginTop: 12 }}>
            {profile.role}
          </div>
          <div style={{ background: "#dce3e9", display: "flex", height: 2, marginTop: 36 }} />
          <div style={{ color: "#35445a", display: "flex", fontSize: 22, marginTop: 30 }}>
            Backend-focused engineer building production systems.
          </div>
          <div
            style={{
              color: "#527da1",
              display: "flex",
              fontFamily: "monospace",
              fontSize: 21,
              fontWeight: 700,
              marginTop: 28,
            }}
          >
            Java · Spring Boot · AWS · Kubernetes
          </div>
          <div
            style={{
              alignItems: "center",
              color: "#657386",
              display: "flex",
              fontFamily: "monospace",
              fontSize: 19,
              marginTop: "auto",
            }}
          >
            <div
              style={{
                background: "#527da1",
                borderRadius: "50%",
                display: "flex",
                height: 10,
                marginRight: 14,
                width: 10,
              }}
            />
            nithiwut.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
