export type StatusAgendamento =
  | "confirmado"
  | "agendado"
  | "concluido"
  | "cancelado"
  | "ausente"

export type OrigemAgendamento = "profissional" | "cliente"

export interface Servico {
  id: string
  nome: string
  duracaoMin: number
  valor: number
  ativo: boolean
}

export interface Cliente {
  id: string
  nome: string
  telefone: string
}

export interface Agendamento {
  id: string
  /** data no formato YYYY-MM-DD */
  data: string
  /** horário de início no formato HH:mm */
  hora: string
  clienteId: string | null
  clienteNome: string
  clienteTelefone: string
  servicoId: string | null
  servicoNome: string
  duracaoMin: number
  valor: number
  observacao?: string
  status: StatusAgendamento
  origem: OrigemAgendamento
}

export interface DisponibilidadeDia {
  /** 0 = Domingo ... 6 = Sábado */
  diaSemana: number
  ativo: boolean
  inicio: string
  fim: string
}

export interface Bloqueio {
  id: string
  data: string
  inicio: string
  fim: string
  motivo?: string
}

export interface Perfil {
  nome: string
  negocio: string
  categoria: string
  cidade: string
  slug: string
}
