const DIAS_SEMANA = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
]

const MESES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
]

/** Data local no formato YYYY-MM-DD (sem fuso UTC). */
export function toDateStr(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const d = String(date.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

export function parseDateStr(str: string): Date {
  const [y, m, d] = str.split("-").map(Number)
  return new Date(y, m - 1, d)
}

export function hojeStr(): string {
  return toDateStr(new Date())
}

export function addDias(str: string, dias: number): string {
  const d = parseDateStr(str)
  d.setDate(d.getDate() + dias)
  return toDateStr(d)
}

export function diaSemanaDe(str: string): number {
  return parseDateStr(str).getDay()
}

/** Ex.: "Sábado, 19 de setembro" */
export function dataExtenso(str: string): string {
  const d = parseDateStr(str)
  return `${DIAS_SEMANA[d.getDay()]}, ${d.getDate()} de ${MESES[d.getMonth()]}`
}

/** Ex.: "sáb, 19 set" */
export function dataCurta(str: string): string {
  const d = parseDateStr(str)
  const dia = DIAS_SEMANA[d.getDay()].slice(0, 3).toLowerCase()
  const mes = MESES[d.getMonth()].slice(0, 3)
  return `${dia}, ${d.getDate()} ${mes}`
}

export function nomeDiaSemana(diaSemana: number): string {
  return DIAS_SEMANA[diaSemana]
}

export function ehHoje(str: string): boolean {
  return str === hojeStr()
}

export function formatarValor(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: valor % 1 === 0 ? 0 : 2,
  })
}

export function formatarDuracao(min: number): string {
  if (min < 60) return `${min}min`
  const horas = Math.floor(min / 60)
  const resto = min % 60
  if (resto === 0) return horas === 1 ? "1h" : `${horas}h`
  return `${horas}h${resto}`
}

export function toMin(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number)
  return h * 60 + m
}

export function toHHMM(min: number): string {
  const h = Math.floor(min / 60)
  const m = min % 60
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
}

export function saudacao(date = new Date()): string {
  const h = date.getHours()
  if (h < 12) return "Bom dia"
  if (h < 18) return "Boa tarde"
  return "Boa noite"
}

export function iniciais(nome: string): string {
  const partes = nome.trim().split(/\s+/)
  if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase()
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase()
}
