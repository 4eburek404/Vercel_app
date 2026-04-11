import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Константин Орлов — корпоративные командировки и travel-процессы";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #fdf9f3 0%, #f0e6d8 60%, #e8dcc8 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "#1f1a15",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f5ede2",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              KO
            </div>
            <span style={{ fontSize: "22px", color: "#6d6258", letterSpacing: "0.08em" }}>
              konstantin-orlov.vercel.app
            </span>
          </div>
          <h1
            style={{
              fontSize: "64px",
              lineHeight: 1.05,
              color: "#1f1a15",
              fontWeight: 700,
              maxWidth: "900px",
              letterSpacing: "-0.03em",
            }}
          >
            Деловые поездки, которые не ломают ритм бизнеса
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "28px", color: "#1f1a15", fontWeight: 700 }}>
              Константин Орлов
            </span>
            <span style={{ fontSize: "18px", color: "#6d6258" }}>
              Корпоративные командировки / Travel policy / VIP-поездки
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "999px",
              background: "#1f1a15",
              color: "#f5ede2",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            12+ лет в travel
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
