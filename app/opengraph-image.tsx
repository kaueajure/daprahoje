import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { BRAND_POSITIVE_ANSWER, BRAND_QUESTION, SITE_TAGLINE } from "@/lib/site"

export const alt =
  "Da Pra Hoje — agenda online para quem trabalha com horário marcado"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/brand/logo.png"),
  )
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`

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
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={200}
            height={86}
            alt=""
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 650,
              color: "#111111",
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {BRAND_QUESTION}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#5c5c58",
              maxWidth: 720,
              lineHeight: 1.35,
            }}
          >
            {SITE_TAGLINE}
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
              display: "flex",
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#48b878",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#48b878",
              fontWeight: 600,
            }}
          >
            {BRAND_POSITIVE_ANSWER.replace(/\.$/, "")} · 3 horários disponíveis
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
