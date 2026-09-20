"use client"

import * as React from "react"
import { Clock, Pencil, Plus, Trash2 } from "lucide-react"
import { toast } from "@/components/ui/toast"

import { useDados } from "@/lib/store"
import type { Servico } from "@/lib/types"
import { formatarDuracao, formatarValor } from "@/lib/format"
import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function ServicosView() {
  const { servicos, salvarServico, removerServico } = useDados()
  const [open, setOpen] = React.useState(false)
  const [editId, setEditId] = React.useState<string | null>(null)
  const [nome, setNome] = React.useState("")
  const [duracao, setDuracao] = React.useState("30")
  const [valor, setValor] = React.useState("40")
  const [ativo, setAtivo] = React.useState(true)

  function abrirNovo() {
    setEditId(null)
    setNome("")
    setDuracao("30")
    setValor("40")
    setAtivo(true)
    setOpen(true)
  }

  function abrirEdicao(s: Servico) {
    setEditId(s.id)
    setNome(s.nome)
    setDuracao(String(s.duracaoMin))
    setValor(String(s.valor))
    setAtivo(s.ativo)
    setOpen(true)
  }

  function handleSalvar() {
    if (!nome.trim()) return
    salvarServico({
      id: editId ?? undefined,
      nome: nome.trim(),
      duracaoMin: Number(duracao) || 30,
      valor: Number(valor) || 0,
      ativo,
    })
    toast.success(editId ? "Serviço atualizado." : "Serviço adicionado.")
    setOpen(false)
  }

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-[24px] font-semibold tracking-tight md:text-[28px]">
            Serviços
          </h1>
          <p className="text-sm text-muted-foreground">
            O que você oferece e quanto custa.
          </p>
        </div>
        <Button onClick={abrirNovo}>
          <Plus className="size-4" />
          Novo serviço
        </Button>
      </header>

      {servicos.length === 0 ? (
        <EmptyState
          title="Nenhum serviço ainda."
          description="Cadastre o que você oferece para agendar mais rápido."
          actionLabel="Novo serviço"
          onAction={abrirNovo}
        />
      ) : (
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s) => (
            <li
              key={s.id}
              className={cn(
                "card-surface flex items-center gap-3 rounded-[14px] px-4 py-3.5",
                !s.ativo && "opacity-50",
              )}
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="truncate font-medium">{s.nome}</p>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px] font-medium",
                      s.ativo
                        ? "bg-confirmed text-confirmed-foreground"
                        : "bg-done text-done-foreground",
                    )}
                  >
                    {s.ativo ? "Ativo" : "Inativo"}
                  </span>
                </div>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="size-3.5" />
                  {formatarDuracao(s.duracaoMin)}
                  <span className="opacity-40">·</span>
                  {formatarValor(s.valor)}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Editar serviço"
                onClick={() => abrirEdicao(s)}
              >
                <Pencil className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Remover serviço"
                className="text-destructive hover:text-destructive"
                onClick={() => {
                  removerServico(s.id)
                  toast.success("Serviço removido.")
                }}
              >
                <Trash2 className="size-4" />
              </Button>
            </li>
          ))}
        </ul>
      )}

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md">
          <SheetHeader className="border-b border-border/80">
            <SheetTitle className="text-lg font-semibold">
              {editId ? "Editar serviço" : "Novo serviço"}
            </SheetTitle>
            <SheetDescription>
              Defina nome, duração e valor.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 p-4">
            <div className="grid gap-2">
              <Label htmlFor="srv-nome">Nome</Label>
              <Input
                id="srv-nome"
                placeholder="Ex.: Corte + Barba"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="srv-duracao">Duração (min)</Label>
                <Input
                  id="srv-duracao"
                  type="number"
                  min={5}
                  step={5}
                  value={duracao}
                  onChange={(e) => setDuracao(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="srv-valor">Valor (R$)</Label>
                <Input
                  id="srv-valor"
                  type="number"
                  min={0}
                  step={1}
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-[12px] bg-secondary px-3.5 py-3">
              <Label htmlFor="srv-ativo">Ativo</Label>
              <Switch
                id="srv-ativo"
                checked={ativo}
                onCheckedChange={(v) => setAtivo(Boolean(v))}
              />
            </div>
          </div>
          <SheetFooter className="border-t border-border/80">
            <Button
              className="w-full"
              size="lg"
              disabled={!nome.trim()}
              onClick={handleSalvar}
            >
              {editId ? "Salvar" : "Adicionar serviço"}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
