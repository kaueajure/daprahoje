/** Prefixo do painel do profissional. */
export const PAINEL = "/painel" as const

export const rotasPainel = {
  hoje: PAINEL,
  agenda: `${PAINEL}/agenda`,
  clientes: `${PAINEL}/clientes`,
  servicos: `${PAINEL}/servicos`,
  configuracoes: `${PAINEL}/configuracoes`,
  mais: `${PAINEL}/mais`,
} as const

/** Segmentos reservados — não podem ser slug de página pública. */
export const SLUGS_RESERVADOS = [
  "painel",
  "agenda",
  "clientes",
  "servicos",
  "configuracoes",
  "mais",
  "entrar",
  "cadastro",
  "api",
  "sitemap.xml",
  "robots.txt",
] as const

export function slugReservado(slug: string) {
  return (SLUGS_RESERVADOS as readonly string[]).includes(slug.toLowerCase())
}
