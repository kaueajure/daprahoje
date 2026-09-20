import type { Metadata } from "next"
import { LandingPage } from "@/components/landing/landing-page"
import {
  SITE_DESCRIPTION,
  SITE_HOME_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site"

export const metadata: Metadata = {
  title: SITE_HOME_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_HOME_TITLE} · ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_HOME_TITLE} · ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  return <LandingPage />
}
