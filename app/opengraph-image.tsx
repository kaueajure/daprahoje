import { ImageResponse } from "next/og"

export const alt = "Da Pra Hoje — agenda online para quem trabalha com horário marcado"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f7f5",
          padding: "64px 72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#111111",
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            DPH
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#111111",
              letterSpacing: "-0.03em",
            }}
          >
            Da Pra Hoje
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 650,
              color: "#111111",
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Dá pra hoje?
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#5c5c58",
              maxWidth: 720,
              lineHeight: 1.35,
            }}
          >
            Agenda online simples para quem trabalha com horário marcado.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#48b878",
            }}
          />
          <div style={{ fontSize: 22, color: "#48b878", fontWeight: 600 }}>
            Tem sim · horários livres na hora
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
