export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://daparahoje.com"

export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "")

export const SITE_NAME = "Da Pra Hoje"

export const SITE_TAGLINE =
  "Agenda online simples para quem trabalha com horário marcado."

export const SITE_DESCRIPTION =
  "Organize atendimentos, veja horários disponíveis e facilite o agendamento com uma agenda online simples para profissionais autônomos."

/** Título da Home (o template do layout acrescenta · Da Pra Hoje). */
export const SITE_HOME_TITLE =
  "Agenda online para quem trabalha com horário marcado"

export const CTA_DEMO_LABEL = "Testar demonstração"
export const CTA_DEMO_SECONDARY = "Ver como funciona"
