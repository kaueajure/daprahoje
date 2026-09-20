"use client"

import * as React from "react"
import type {
  Agendamento,
  Bloqueio,
  Cliente,
  DisponibilidadeDia,
  Perfil,
  Servico,
} from "./types"
import { addDias, hojeStr } from "./format"

const STORAGE_KEY = "daparahoje:dados:v1"

function uid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }
  return Math.random().toString(36).slice(2)
}

interface EstadoDados {
  perfil: Perfil
  servicos: Servico[]
  clientes: Cliente[]
  agendamentos: Agendamento[]
  disponibilidade: DisponibilidadeDia[]
  bloqueios: Bloqueio[]
  autenticado: boolean
}

interface StoreContexto extends EstadoDados {
  pronto: boolean
  salvarAgendamento: (
    ag: Omit<Agendamento, "id"> & { id?: string },
  ) => Agendamento
  removerAgendamento: (id: string) => void
  atualizarStatus: (id: string, status: Agendamento["status"]) => void

  salvarServico: (s: Omit<Servico, "id"> & { id?: string }) => void
  removerServico: (id: string) => void

  salvarCliente: (c: Omit<Cliente, "id"> & { id?: string }) => Cliente
  removerCliente: (id: string) => void

  atualizarDisponibilidade: (dias: DisponibilidadeDia[]) => void
  salvarBloqueio: (b: Omit<Bloqueio, "id"> & { id?: string }) => void
  removerBloqueio: (id: string) => void

  atualizarPerfil: (p: Partial<Perfil>) => void
  entrar: (perfil?: Partial<Perfil>) => void
  sair: () => void
}

const Ctx = React.createContext<StoreContexto | null>(null)

function estadoInicial(): EstadoDados {
  const hoje = hojeStr()
  const amanha = addDias(hoje, 1)

  const servicos: Servico[] = [
    { id: "srv-corte", nome: "Corte", duracaoMin: 30, valor: 40, ativo: true },
    {
      id: "srv-corte-barba",
      nome: "Corte + Barba",
      duracaoMin: 60,
      valor: 60,
      ativo: true,
    },
    { id: "srv-barba", nome: "Barba", duracaoMin: 30, valor: 30, ativo: true },
    {
      id: "srv-pezinho",
      nome: "Pézinho",
      duracaoMin: 15,
      valor: 15,
      ativo: true,
    },
  ]

  const clientes: Cliente[] = [
    { id: "cli-joao", nome: "João Silva", telefone: "(17) 99999-9999" },
    { id: "cli-carlos", nome: "Carlos Mendes", telefone: "(17) 98888-1234" },
    { id: "cli-pedro", nome: "Pedro Santos", telefone: "(17) 97777-4321" },
    { id: "cli-rafael", nome: "Rafael Souza", telefone: "(17) 96666-7788" },
    { id: "cli-lucas", nome: "Lucas Oliveira", telefone: "(17) 95555-9090" },
    { id: "cli-matheus", nome: "Matheus Silva", telefone: "(17) 94444-1010" },
  ]

  const mk = (
    data: string,
    hora: string,
    cliente: Cliente,
    servico: Servico,
    status: Agendamento["status"] = "confirmado",
  ): Agendamento => ({
    id: uid(),
    data,
    hora,
    clienteId: cliente.id,
    clienteNome: cliente.nome,
    clienteTelefone: cliente.telefone,
    servicoId: servico.id,
    servicoNome: servico.nome,
    duracaoMin: servico.duracaoMin,
    valor: servico.valor,
    status,
    origem: "profissional",
  })

  const [corte, corteBarba, barba] = servicos

  const agendamentos: Agendamento[] = [
    mk(hoje, "09:00", clientes[1], corte, "concluido"),
    mk(hoje, "10:00", clientes[2], corteBarba, "confirmado"),
    mk(hoje, "13:00", clientes[4], barba, "agendado"),
    mk(hoje, "14:30", clientes[5], corteBarba),
    {
      ...mk(hoje, "16:30", clientes[0], corte, "agendado"),
      origem: "cliente",
    },
    mk(amanha, "09:30", clientes[2], corteBarba),
    mk(amanha, "11:00", clientes[4], corte),
  ]

  const disponibilidade: DisponibilidadeDia[] = [
    { diaSemana: 0, ativo: false, inicio: "09:00", fim: "18:00" },
    { diaSemana: 1, ativo: true, inicio: "09:00", fim: "18:00" },
    { diaSemana: 2, ativo: true, inicio: "09:00", fim: "18:00" },
    { diaSemana: 3, ativo: true, inicio: "09:00", fim: "18:00" },
    { diaSemana: 4, ativo: true, inicio: "09:00", fim: "18:00" },
    { diaSemana: 5, ativo: true, inicio: "09:00", fim: "19:00" },
    { diaSemana: 6, ativo: true, inicio: "09:00", fim: "18:00" },
  ]

  const perfil: Perfil = {
    nome: "João",
    negocio: "João Barber",
    categoria: "Barbearia",
    cidade: "São José do Rio Preto",
    slug: "joaobarber",
  }

  return {
    perfil,
    servicos,
    clientes,
    agendamentos,
    disponibilidade,
    bloqueios: [],
    autenticado: true,
  }
}

function carregar(): EstadoDados | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as EstadoDados
    if (!parsed?.perfil?.slug) return null
    // migração leve
    parsed.servicos = (parsed.servicos ?? []).map((s) => ({
      ...s,
      ativo: s.ativo !== false,
    }))
    parsed.agendamentos = (parsed.agendamentos ?? []).map((a) => ({
      ...a,
      status:
        (a.status as string) === "pendente" ? "agendado" : a.status,
    }))
    if (!parsed.perfil.cidade) parsed.perfil.cidade = ""
    return parsed
  } catch {
    return null
  }
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [estado, setEstado] = React.useState<EstadoDados>(estadoInicial)
  const [pronto, setPronto] = React.useState(false)

  React.useEffect(() => {
    const salvo = carregar()
    if (salvo) setEstado(salvo)
    setPronto(true)
  }, [])

  React.useEffect(() => {
    if (!pronto) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estado))
    } catch {
      // ignore quota
    }
  }, [estado, pronto])

  const salvarAgendamento: StoreContexto["salvarAgendamento"] = (ag) => {
    const comId: Agendamento = { ...ag, id: ag.id ?? uid() } as Agendamento
    setEstado((prev) => {
      const existe = prev.agendamentos.some((a) => a.id === comId.id)
      return {
        ...prev,
        agendamentos: existe
          ? prev.agendamentos.map((a) => (a.id === comId.id ? comId : a))
          : [...prev.agendamentos, comId],
      }
    })
    return comId
  }

  const removerAgendamento: StoreContexto["removerAgendamento"] = (id) => {
    setEstado((prev) => ({
      ...prev,
      agendamentos: prev.agendamentos.filter((a) => a.id !== id),
    }))
  }

  const atualizarStatus: StoreContexto["atualizarStatus"] = (id, status) => {
    setEstado((prev) => ({
      ...prev,
      agendamentos: prev.agendamentos.map((a) =>
        a.id === id ? { ...a, status } : a,
      ),
    }))
  }

  const salvarServico: StoreContexto["salvarServico"] = (s) => {
    const comId: Servico = {
      ...s,
      id: s.id ?? uid(),
      ativo: s.ativo ?? true,
    }
    setEstado((prev) => {
      const existe = prev.servicos.some((x) => x.id === comId.id)
      return {
        ...prev,
        servicos: existe
          ? prev.servicos.map((x) => (x.id === comId.id ? comId : x))
          : [...prev.servicos, comId],
      }
    })
  }

  const removerServico: StoreContexto["removerServico"] = (id) => {
    setEstado((prev) => ({
      ...prev,
      servicos: prev.servicos.filter((s) => s.id !== id),
    }))
  }

  const salvarCliente: StoreContexto["salvarCliente"] = (c) => {
    const comId: Cliente = { ...c, id: c.id ?? uid() }
    setEstado((prev) => {
      const existe = prev.clientes.some((x) => x.id === comId.id)
      return {
        ...prev,
        clientes: existe
          ? prev.clientes.map((x) => (x.id === comId.id ? comId : x))
          : [...prev.clientes, comId],
      }
    })
    return comId
  }

  const removerCliente: StoreContexto["removerCliente"] = (id) => {
    setEstado((prev) => ({
      ...prev,
      clientes: prev.clientes.filter((c) => c.id !== id),
    }))
  }

  const atualizarDisponibilidade: StoreContexto["atualizarDisponibilidade"] = (
    dias,
  ) => {
    setEstado((prev) => ({ ...prev, disponibilidade: dias }))
  }

  const salvarBloqueio: StoreContexto["salvarBloqueio"] = (b) => {
    const comId: Bloqueio = { ...b, id: b.id ?? uid() }
    setEstado((prev) => {
      const existe = prev.bloqueios.some((x) => x.id === comId.id)
      return {
        ...prev,
        bloqueios: existe
          ? prev.bloqueios.map((x) => (x.id === comId.id ? comId : x))
          : [...prev.bloqueios, comId],
      }
    })
  }

  const removerBloqueio: StoreContexto["removerBloqueio"] = (id) => {
    setEstado((prev) => ({
      ...prev,
      bloqueios: prev.bloqueios.filter((b) => b.id !== id),
    }))
  }

  const atualizarPerfil: StoreContexto["atualizarPerfil"] = (p) => {
    setEstado((prev) => ({ ...prev, perfil: { ...prev.perfil, ...p } }))
  }

  const entrar: StoreContexto["entrar"] = (perfil) => {
    setEstado((prev) => ({
      ...prev,
      autenticado: true,
      perfil: { ...prev.perfil, ...perfil },
    }))
  }

  const sair: StoreContexto["sair"] = () => {
    setEstado((prev) => ({ ...prev, autenticado: false }))
  }

  const value: StoreContexto = {
    ...estado,
    pronto,
    salvarAgendamento,
    removerAgendamento,
    atualizarStatus,
    salvarServico,
    removerServico,
    salvarCliente,
    removerCliente,
    atualizarDisponibilidade,
    salvarBloqueio,
    removerBloqueio,
    atualizarPerfil,
    entrar,
    sair,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useDados(): StoreContexto {
  const ctx = React.useContext(Ctx)
  if (!ctx) throw new Error("useDados precisa estar dentro de <DataProvider>")
  return ctx
}
