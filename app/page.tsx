import type { Metadata } from "next"
import { LandingPage } from "@/components/landing/landing-page"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: `${SITE_NAME} — agenda online para quem trabalha com horário marcado`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Dá pra hoje?`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/brand/logo.png`,
        width: 960,
        height: 413,
        alt: "Logo Da Pra Hoje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Dá pra hoje?`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/brand/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "agenda online",
    "agenda online para profissionais",
    "sistema de agendamento",
    "sistema de agendamento online",
    "agenda para autônomos",
    "agenda para barbeiro",
    "agenda para barbearia",
    "agenda para manicure",
    "agenda para cabeleireiro",
    "agenda para tatuador",
    "agendamento online",
  ],
}

export default function HomePage() {
  return <LandingPage />
}
