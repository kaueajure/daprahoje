"use client"

import * as React from "react"
import { Phone, Plus, Search, UserPlus } from "lucide-react"
import { toast } from "@/components/ui/toast"

import { useDados } from "@/lib/store"
import type { Cliente } from "@/lib/types"
import { formatarValor, iniciais, dataCurta, toMin } from "@/lib/format"
import { StatusBadge } from "@/components/status-badge"
import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function ClientesView() {
  const { clientes, agendamentos, salvarCliente, removerCliente } = useDados()
  const [busca, setBusca] = React.useState("")
  const [selecionado, setSelecionado] = React.useState<Cliente | null>(null)
  const [novoOpen, setNovoOpen] = React.useState(false)
  const [novoNome, setNovoNome] = React.useState("")
  const [novoTel, setNovoTel] = React.useState("")

  const filtrados = clientes
    .filter((c) => {
      const t = busca.trim().toLowerCase()
      if (!t) return true
      return (
        c.nome.toLowerCase().includes(t) ||
        c.telefone.toLowerCase().includes(t)
      )
    })
    .sort((a, b) => a.nome.localeCompare(b.nome))

  function stats(cliente: Cliente) {
    const hist = agendamentos.filter(
      (a) =>
        (a.clienteId === cliente.id ||
          a.clienteNome.toLowerCase() === cliente.nome.toLowerCase()) &&
        a.status !== "cancelado",
    )
    const total = hist.reduce((s, a) => s + a.valor, 0)
    const ultimo = [...hist].sort((a, b) =>
      a.data === b.data
        ? toMin(b.hora) - toMin(a.hora)
        : a.data < b.data
          ? 1
          : -1,
    )[0]
    return { visitas: hist.length, total, ultimo }
  }

  function handleNovo() {
    if (!novoNome.trim()) return
    salvarCliente({ nome: novoNome.trim(), telefone: novoTel.trim() })
    toast.success("Cliente adicionado.")
    setNovoNome("")
    setNovoTel("")
    setNovoOpen(false)
  }

  const historico = selecionado
    ? agendamentos
        .filter(
          (a) =>
            a.clienteId === selecionado.id ||
            a.clienteNome.toLowerCase() === selecionado.nome.toLowerCase(),
        )
        .sort((a, b) =>
          a.data === b.data
            ? toMin(b.hora) - toMin(a.hora)
            : a.data < b.data
              ? 1
              : -1,
        )
    : []

  const selStats = selecionado ? stats(selecionado) : null

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-[24px] font-semibold tracking-tight md:text-[28px]">
            Clientes
          </h1>
          <p className="text-sm text-muted-foreground">
            {clientes.length}{" "}
            {clientes.length === 1 ? "cliente" : "clientes"}
          </p>
        </div>
        <Button onClick={() => setNovoOpen(true)}>
          <UserPlus className="size-4" />
          Novo cliente
        </Button>
      </header>

      <div className="relative">
        <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="h-11 pl-10"
          placeholder="Buscar cliente..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {filtrados.length === 0 ? (
        <EmptyState
          title={
            busca
              ? "Nenhum cliente encontrado."
              : "Nenhum cliente ainda."
          }
          description={
            busca
              ? undefined
              : "Os clientes adicionados aos agendamentos aparecerão aqui."
          }
          actionLabel={!busca ? "Novo cliente" : undefined}
          onAction={!busca ? () => setNovoOpen(true) : undefined}
        />
      ) : (
        <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {filtrados.map((c) => {
            const s = stats(c)
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => setSelecionado(c)}
                  className="card-surface flex w-full items-center gap-3 rounded-[14px] px-4 py-3.5 text-left transition-colors duration-150 hover:bg-muted/40"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold">
                    {iniciais(c.nome)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{c.nome}</p>
                    <p className="truncate text-sm text-muted-foreground">
                      {c.telefone || "Sem telefone"}
                    </p>
                  </div>
                  <div className="shrink-0 text-right text-xs text-muted-foreground">
                    <p>
                      {s.visitas}{" "}
                      {s.visitas === 1 ? "atendimento" : "atendimentos"}
                    </p>
                    {s.ultimo && (
                      <p className="mt-0.5">Último: {dataCurta(s.ultimo.data)}</p>
                    )}
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      )}

      <Sheet
        open={selecionado !== null}
        onOpenChange={(o) => !o && setSelecionado(null)}
      >
        <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
          {selecionado && selStats && (
            <>
              <SheetHeader className="border-b border-border/80">
                <SheetTitle className="text-lg font-semibold">
                  {selecionado.nome}
                </SheetTitle>
                <SheetDescription className="flex items-center gap-1.5">
                  <Phone className="size-3.5" />
                  {selecionado.telefone || "Sem telefone"}
                </SheetDescription>
              </SheetHeader>

              <div className="grid grid-cols-2 gap-3 p-4">
                <div className="rounded-[12px] bg-secondary px-3 py-3">
                  <p className="text-lg font-semibold tabular-nums">
                    {selStats.visitas}
                  </p>
                  <p className="text-xs text-muted-foreground">atendimentos</p>
                </div>
                <div className="rounded-[12px] bg-secondary px-3 py-3">
                  <p className="text-lg font-semibold tabular-nums">
                    {formatarValor(selStats.total)}
                  </p>
                  <p className="text-xs text-muted-foreground">em serviços</p>
                </div>
              </div>

              <div className="px-4 pb-4">
                <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                  Histórico
                </h3>
                {historico.length > 0 ? (
                  <ul className="flex flex-col gap-2">
                    {historico.map((a) => (
                      <li
                        key={a.id}
                        className="flex items-center gap-3 rounded-[12px] border border-border/80 px-3 py-3"
                      >
                        <div className="w-16 shrink-0">
                          <p className="text-sm font-semibold">
                            {dataCurta(a.data)}
                          </p>
                          <p className="text-xs text-muted-foreground tabular-nums">
                            {a.hora}
                          </p>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {a.servicoNome}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {formatarValor(a.valor)}
                          </p>
                        </div>
                        <StatusBadge status={a.status} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="rounded-[12px] border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
                    Ainda sem atendimentos.
                  </p>
                )}

                <Button
                  variant="ghost"
                  className="mt-4 w-full text-destructive hover:text-destructive"
                  onClick={() => {
                    removerCliente(selecionado.id)
                    toast.success("Cliente removido.")
                    setSelecionado(null)
                  }}
                >
                  Remover cliente
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      <Sheet open={novoOpen} onOpenChange={setNovoOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md">
          <SheetHeader className="border-b border-border/80">
            <SheetTitle className="text-lg font-semibold">
              Novo cliente
            </SheetTitle>
            <SheetDescription>Só o essencial para começar.</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 p-4">
            <div className="grid gap-2">
              <Label htmlFor="novo-nome">Nome</Label>
              <Input
                id="novo-nome"
                placeholder="Nome do cliente"
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="novo-tel">Telefone</Label>
              <Input
                id="novo-tel"
                inputMode="tel"
                placeholder="(00) 00000-0000"
                value={novoTel}
                onChange={(e) => setNovoTel(e.target.value)}
              />
            </div>
          </div>
          <SheetFooter className="border-t border-border/80">
            <Button
              className="w-full"
              size="lg"
              disabled={!novoNome.trim()}
              onClick={handleNovo}
            >
              <Plus className="size-4" />
              Salvar cliente
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
