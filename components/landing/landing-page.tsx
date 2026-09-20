import { SiteHeader } from "@/components/landing/site-header"
import {
  FAQ_ITENS,
  LandingAudience,
  LandingBenefits,
  LandingCta,
  LandingDaPraHoje,
  LandingFaq,
  LandingFooter,
  LandingHero,
  LandingHowItWorks,
  LandingProblem,
  LandingProductDemo,
  LandingPublicPage,
  LandingSimplicity,
} from "@/components/landing/sections"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site"

export function LandingPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "pt-BR",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/brand/logo.png`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITENS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-dvh bg-background">
        <SiteHeader />
        <main>
          <LandingHero />
          <LandingProblem />
          <LandingDaPraHoje />
          <LandingHowItWorks />
          <LandingProductDemo />
          <LandingPublicPage />
          <LandingAudience />
          <LandingBenefits />
          <LandingSimplicity />
          <LandingCta />
          <LandingFaq />
        </main>
        <LandingFooter />
      </div>
    </>
  )
}
