"use client"

import * as React from "react"
import { ChevronDown, Trash2 } from "lucide-react"
import { toast } from "@/components/ui/toast"

import { useDados } from "@/lib/store"
import type { Agendamento, StatusAgendamento } from "@/lib/types"
import { hojeStr, formatarValor } from "@/lib/format"
import { temConflito } from "@/lib/schedule"
import { statusLabel } from "@/components/status-badge"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

interface AberturaNovo {
  data?: string
  hora?: string
}

interface FormContexto {
  abrirNovo: (opts?: AberturaNovo) => void
  abrirEdicao: (ag: Agendamento) => void
}

const Ctx = React.createContext<FormContexto | null>(null)

const STATUS_OPCOES: StatusAgendamento[] = [
  "confirmado",
  "agendado",
  "concluido",
  "ausente",
  "cancelado",
]

interface FormState {
  clienteNome: string
  clienteTelefone: string
  servicoId: string
  data: string
  hora: string
  duracaoMin: string
  valor: string
  observacao: string
  status: StatusAgendamento
}

function estadoVazio(opts?: AberturaNovo): FormState {
  return {
    clienteNome: "",
    clienteTelefone: "",
    servicoId: "",
    data: opts?.data ?? hojeStr(),
    hora: opts?.hora ?? "",
    duracaoMin: "",
    valor: "",
    observacao: "",
    status: "confirmado",
  }
}

export function AgendamentoFormProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const {
    servicos,
    clientes,
    agendamentos,
    bloqueios,
    salvarAgendamento,
    removerAgendamento,
    salvarCliente,
  } = useDados()

  const [open, setOpen] = React.useState(false)
  const [editandoId, setEditandoId] = React.useState<string | null>(null)
  const [maisOpcoes, setMaisOpcoes] = React.useState(false)
  const [form, setForm] = React.useState<FormState>(estadoVazio)

  const servicosAtivos = servicos.filter((s) => s.ativo)

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }))

  const abrirNovo = React.useCallback((opts?: AberturaNovo) => {
    setEditandoId(null)
    setMaisOpcoes(false)
    setForm(estadoVazio(opts))
    setOpen(true)
  }, [])

  const abrirEdicao = React.useCallback((ag: Agendamento) => {
    setEditandoId(ag.id)
    setMaisOpcoes(true)
    setForm({
      clienteNome: ag.clienteNome,
      clienteTelefone: ag.clienteTelefone,
      servicoId: ag.servicoId ?? "",
      data: ag.data,
      hora: ag.hora,
      duracaoMin: String(ag.duracaoMin),
      valor: String(ag.valor),
      observacao: ag.observacao ?? "",
      status: (ag.status as string) === "pendente" ? "agendado" : ag.status,
    })
    setOpen(true)
  }, [])

  function aoEscolherServico(id: string) {
    const s = servicos.find((x) => x.id === id)
    setForm((f) => ({
      ...f,
      servicoId: id,
      duracaoMin: s ? String(s.duracaoMin) : f.duracaoMin,
      valor: s ? String(s.valor) : f.valor,
    }))
  }

  function aoDigitarNome(nome: string) {
    const existente = clientes.find(
      (c) => c.nome.toLowerCase() === nome.trim().toLowerCase(),
    )
    setForm((f) => ({
      ...f,
      clienteNome: nome,
      clienteTelefone: existente ? existente.telefone : f.clienteTelefone,
    }))
  }

  const podeSalvar =
    form.clienteNome.trim().length > 0 && !!form.servicoId && !!form.hora

  function handleSalvar() {
    if (!podeSalvar) return
    const servico = servicos.find((s) => s.id === form.servicoId)
    const duracaoMin = Number(form.duracaoMin) || servico?.duracaoMin || 30

    if (
      temConflito({
        data: form.data,
        hora: form.hora,
        duracaoMin,
        agendamentos,
        bloqueios,
        ignorarId: editandoId ?? undefined,
      })
    ) {
      toast.error("Esse horário conflita com outro atendimento ou bloqueio.")
      return
    }

    const clienteExistente = clientes.find(
      (c) => c.nome.toLowerCase() === form.clienteNome.trim().toLowerCase(),
    )
    let clienteId = clienteExistente?.id ?? null
    if (!clienteExistente && form.clienteNome.trim()) {
      const novo = salvarCliente({
        nome: form.clienteNome.trim(),
        telefone: form.clienteTelefone.trim(),
      })
      clienteId = novo.id
    } else if (clienteExistente && form.clienteTelefone.trim()) {
      salvarCliente({
        id: clienteExistente.id,
        nome: form.clienteNome.trim(),
        telefone: form.clienteTelefone.trim(),
      })
    }

    salvarAgendamento({
      id: editandoId ?? undefined,
      data: form.data,
      hora: form.hora,
      clienteId,
      clienteNome: form.clienteNome.trim(),
      clienteTelefone: form.clienteTelefone.trim(),
      servicoId: form.servicoId,
      servicoNome: servico?.nome ?? "",
      duracaoMin,
      valor: Number(form.valor) || servico?.valor || 0,
      observacao: form.observacao.trim() || undefined,
      status: form.status,
      origem: "profissional",
    })
    toast.success(editandoId ? "Atendimento atualizado." : "Agendamento criado.")
    setOpen(false)
  }

  function handleExcluir() {
    if (editandoId) {
      removerAgendamento(editandoId)
      toast.success("Atendimento removido.")
    }
    setOpen(false)
  }

  const value = React.useMemo(() => ({ abrirNovo, abrirEdicao }), [
    abrirNovo,
    abrirEdicao,
  ])

  return (
    <Ctx.Provider value={value}>
      {children}

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full gap-0 overflow-y-auto sm:max-w-md"
        >
          <SheetHeader className="border-b border-border/80">
            <SheetTitle className="text-lg font-semibold">
              {editandoId ? "Atendimento" : "Novo agendamento"}
            </SheetTitle>
            <SheetDescription>
              {editandoId
                ? "Ajuste, confirme ou conclua o atendimento."
                : "Cliente, serviço e horário. Rápido."}
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-4 p-4">
            <div className="grid gap-2">
              <Label htmlFor="cliente">Cliente</Label>
              <Input
                id="cliente"
                list="lista-clientes"
                placeholder="Nome do cliente"
                autoComplete="off"
                value={form.clienteNome}
                onChange={(e) => aoDigitarNome(e.target.value)}
              />
              <datalist id="lista-clientes">
                {clientes.map((c) => (
                  <option key={c.id} value={c.nome} />
                ))}
              </datalist>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                inputMode="tel"
                placeholder="(00) 00000-0000"
                value={form.clienteTelefone}
                onChange={(e) => set("clienteTelefone", e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label>Serviço</Label>
              <Select
                items={Object.fromEntries(
                  servicosAtivos.map((s) => [s.id, s.nome]),
                )}
                value={form.servicoId}
                onValueChange={(v) => aoEscolherServico(v as string)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha o serviço" />
                </SelectTrigger>
                <SelectContent>
                  {servicosAtivos.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.nome} · {formatarValor(s.valor)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="data">Data</Label>
                <Input
                  id="data"
                  type="date"
                  value={form.data}
                  onChange={(e) => set("data", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="hora">Horário</Label>
                <Input
                  id="hora"
                  type="time"
                  step={900}
                  value={form.hora}
                  onChange={(e) => set("hora", e.target.value)}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMaisOpcoes((v) => !v)}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronDown
                className={cn(
                  "size-4 transition-transform duration-150",
                  maisOpcoes && "rotate-180",
                )}
              />
              Mais opções
            </button>

            {maisOpcoes && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="duracao">Duração (min)</Label>
                    <Input
                      id="duracao"
                      type="number"
                      min={5}
                      step={5}
                      value={form.duracaoMin}
                      onChange={(e) => set("duracaoMin", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="valor">Valor (R$)</Label>
                    <Input
                      id="valor"
                      type="number"
                      min={0}
                      step={1}
                      value={form.valor}
                      onChange={(e) => set("valor", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="obs">Observação</Label>
                  <Textarea
                    id="obs"
                    rows={2}
                    placeholder="Ex.: cliente prefere máquina 2"
                    value={form.observacao}
                    onChange={(e) => set("observacao", e.target.value)}
                  />
                </div>
              </>
            )}

            {editandoId && (
              <div className="grid gap-2">
                <Label>Status</Label>
                <div className="flex flex-wrap gap-2">
                  {STATUS_OPCOES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => set("status", s)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm transition-colors duration-150",
                        form.status === s
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-muted-foreground hover:bg-muted",
                      )}
                    >
                      {statusLabel(s)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <SheetFooter className="border-t border-border/80">
            <Button
              className="w-full"
              size="lg"
              disabled={!podeSalvar}
              onClick={handleSalvar}
            >
              {editandoId ? "Salvar alterações" : "Agendar horário"}
            </Button>
            {editandoId && (
              <Button
                variant="ghost"
                className="w-full text-destructive hover:text-destructive"
                onClick={handleExcluir}
              >
                <Trash2 className="size-4" />
                Excluir atendimento
              </Button>
            )}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </Ctx.Provider>
  )
}

export function useAgendamentoForm(): FormContexto {
  const ctx = React.useContext(Ctx)
  if (!ctx)
    throw new Error(
      "useAgendamentoForm precisa estar dentro de <AgendamentoFormProvider>",
    )
  return ctx
}
