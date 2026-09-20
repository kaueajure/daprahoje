import type {
  Agendamento,
  Bloqueio,
  DisponibilidadeDia,
} from "./types"
import { diaSemanaDe, toHHMM, toMin } from "./format"

export const PASSO_MIN = 30

export type EntradaAgenda =
  | { tipo: "livre"; hora: string; minutos: number }
  | { tipo: "bloqueio"; hora: string; minutos: number; bloqueio: Bloqueio }
  | {
      tipo: "agendamento"
      hora: string
      minutos: number
      agendamento: Agendamento
    }

export interface AgendaDoDia {
  aberto: boolean
  entradas: EntradaAgenda[]
}

function arredondarPasso(min: number): number {
  return Math.ceil(min / PASSO_MIN) * PASSO_MIN
}

export function intervalosSobrepostos(
  aInicio: number,
  aFim: number,
  bInicio: number,
  bFim: number,
): boolean {
  return aInicio < bFim && bInicio < aFim
}

/** Verifica se um intervalo conflita com agendamentos ou bloqueios existentes. */
export function temConflito(opts: {
  data: string
  hora: string
  duracaoMin: number
  agendamentos: Agendamento[]
  bloqueios: Bloqueio[]
  ignorarId?: string
}): boolean {
  const inicio = toMin(opts.hora)
  const fim = inicio + opts.duracaoMin

  for (const a of opts.agendamentos) {
    if (a.data !== opts.data) continue
    if (a.status === "cancelado") continue
    if (opts.ignorarId && a.id === opts.ignorarId) continue
    const aIni = toMin(a.hora)
    const aFim = aIni + a.duracaoMin
    if (intervalosSobrepostos(inicio, fim, aIni, aFim)) return true
  }

  for (const b of opts.bloqueios) {
    if (b.data !== opts.data) continue
    if (intervalosSobrepostos(inicio, fim, toMin(b.inicio), toMin(b.fim))) {
      return true
    }
  }

  return false
}

export function montarAgendaDoDia(
  data: string,
  disponibilidade: DisponibilidadeDia[],
  agendamentos: Agendamento[],
  bloqueios: Bloqueio[],
): AgendaDoDia {
  const disp = disponibilidade.find((d) => d.diaSemana === diaSemanaDe(data))

  if (!disp || !disp.ativo) {
    return { aberto: false, entradas: [] }
  }

  const inicio = toMin(disp.inicio)
  const fim = toMin(disp.fim)

  const doDia = agendamentos
    .filter((a) => a.data === data && a.status !== "cancelado")
    .sort((a, b) => toMin(a.hora) - toMin(b.hora))

  const ocupadoAte = new Map<number, Agendamento>()
  for (const a of doDia) {
    const aIni = toMin(a.hora)
    const aFim = aIni + Math.max(PASSO_MIN, arredondarPasso(a.duracaoMin))
    for (let m = aIni; m < aFim; m += PASSO_MIN) {
      if (!ocupadoAte.has(m)) ocupadoAte.set(m, a)
    }
  }

  const bloqueiosDoDia = bloqueios.filter((b) => b.data === data)
  const entradas: EntradaAgenda[] = []
  let cursor = inicio
  const jaMostrados = new Set<string>()

  while (cursor < fim) {
    const ag = ocupadoAte.get(cursor)
    if (ag && toMin(ag.hora) === cursor && !jaMostrados.has(ag.id)) {
      jaMostrados.add(ag.id)
      entradas.push({
        tipo: "agendamento",
        hora: toHHMM(cursor),
        minutos: cursor,
        agendamento: ag,
      })
      cursor += Math.max(PASSO_MIN, arredondarPasso(ag.duracaoMin))
      continue
    }

    if (ag && toMin(ag.hora) !== cursor) {
      // slot coberto pela duração de um agendamento anterior
      cursor += PASSO_MIN
      continue
    }

    const bloqueio = bloqueiosDoDia.find(
      (b) => cursor >= toMin(b.inicio) && cursor < toMin(b.fim),
    )
    if (bloqueio) {
      entradas.push({
        tipo: "bloqueio",
        hora: toHHMM(cursor),
        minutos: cursor,
        bloqueio,
      })
      cursor += PASSO_MIN
      continue
    }

    entradas.push({ tipo: "livre", hora: toHHMM(cursor), minutos: cursor })
    cursor += PASSO_MIN
  }

  return { aberto: true, entradas }
}

/** Horários livres do dia, opcionalmente a partir de "agoraMin" (para hoje). */
export function horariosLivres(
  agenda: AgendaDoDia,
  agoraMin?: number,
  duracaoMin = PASSO_MIN,
): string[] {
  const livres = agenda.entradas.filter((e) => e.tipo === "livre")
  return livres
    .filter((e) => agoraMin === undefined || e.minutos >= agoraMin)
    .filter((e) => {
      // precisa caber a duração contínua
      const passos = Math.ceil(duracaoMin / PASSO_MIN)
      for (let i = 0; i < passos; i++) {
        const alvo = e.minutos + i * PASSO_MIN
        const slot = agenda.entradas.find((x) => x.minutos === alvo)
        if (!slot || slot.tipo !== "livre") return false
      }
      return true
    })
    .map((e) => e.hora)
}

/** Próximo agendamento ativo a partir de agoraMin. */
export function proximoAgendamento(
  agenda: AgendaDoDia,
  agoraMin: number,
): Agendamento | null {
  const entrada = agenda.entradas.find(
    (e) =>
      e.tipo === "agendamento" &&
      e.minutos + e.agendamento.duracaoMin > agoraMin &&
      e.agendamento.status !== "concluido" &&
      e.agendamento.status !== "ausente" &&
      e.agendamento.status !== "cancelado",
  )
  return entrada && entrada.tipo === "agendamento" ? entrada.agendamento : null
}
