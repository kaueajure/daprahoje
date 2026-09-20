"use client"

import * as React from "react"
import Link from "next/link"
import { ExternalLink, Plus, Trash2 } from "lucide-react"
import { toast } from "@/components/ui/toast"

import { useDados } from "@/lib/store"
import { slugReservado } from "@/lib/routes"
import { SITE_HOST } from "@/lib/site"
import type { DisponibilidadeDia } from "@/lib/types"
import { dataCurta, nomeDiaSemana } from "@/lib/format"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function ConfigView() {
  const {
    perfil,
    atualizarPerfil,
    disponibilidade,
    atualizarDisponibilidade,
    bloqueios,
    salvarBloqueio,
    removerBloqueio,
  } = useDados()

  const [bData, setBData] = React.useState("")
  const [bInicio, setBInicio] = React.useState("14:00")
  const [bFim, setBFim] = React.useState("16:00")
  const [bMotivo, setBMotivo] = React.useState("")

  function editarDia(diaSemana: number, patch: Partial<DisponibilidadeDia>) {
    atualizarDisponibilidade(
      disponibilidade.map((d) =>
        d.diaSemana === diaSemana ? { ...d, ...patch } : d,
      ),
    )
  }

  function handleBloquear() {
    if (!bData) return
    salvarBloqueio({
      data: bData,
      inicio: bInicio,
      fim: bFim,
      motivo: bMotivo.trim() || undefined,
    })
    toast.success("Horário bloqueado.")
    setBData("")
    setBMotivo("")
  }

  const ordenados = [...disponibilidade].sort(
    (a, b) => ((a.diaSemana + 6) % 7) - ((b.diaSemana + 6) % 7),
  )

  return (
    <div className="flex flex-col gap-5 md:gap-6">
      <header>
        <h1 className="text-[24px] font-semibold tracking-tight md:text-[28px]">
          Configurações
        </h1>
        <p className="text-sm text-muted-foreground">
          Perfil, horário de funcionamento e bloqueios.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Seu perfil</h2>
        <div className="card-surface grid gap-4 rounded-[16px] p-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="p-nome">Seu nome</Label>
            <Input
              id="p-nome"
              value={perfil.nome}
              onChange={(e) => atualizarPerfil({ nome: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="p-negocio">Nome do negócio</Label>
            <Input
              id="p-negocio"
              value={perfil.negocio}
              onChange={(e) => atualizarPerfil({ negocio: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="p-cat">Categoria</Label>
            <Input
              id="p-cat"
              placeholder="Ex.: Barbearia"
              value={perfil.categoria}
              onChange={(e) => atualizarPerfil({ categoria: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="p-cidade">Cidade</Label>
            <Input
              id="p-cidade"
              placeholder="Ex.: São José do Rio Preto"
              value={perfil.cidade}
              onChange={(e) => atualizarPerfil({ cidade: e.target.value })}
            />
          </div>
          <div className="grid gap-2 sm:col-span-2">
            <Label htmlFor="p-slug">Link público</Label>
            <div className="flex items-center rounded-[12px] border border-input bg-background pl-3 text-sm">
              <span className="text-muted-foreground">{SITE_HOST}/</span>
              <input
                id="p-slug"
                className="h-11 flex-1 bg-transparent px-1 outline-none"
                value={perfil.slug}
                onChange={(e) => {
                  const next = e.target.value
                    .toLowerCase()
                    .replace(/[^a-z0-9-]/g, "")
                  if (slugReservado(next)) {
                    toast.error("Esse link está reservado. Escolha outro.")
                    return
                  }
                  atualizarPerfil({ slug: next })
                }}
              />
            </div>
          </div>
        </div>
        <Link
          href={`/${perfil.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium underline-offset-2 hover:underline"
        >
          <ExternalLink className="size-4" />
          Ver minha página pública
        </Link>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Horário de funcionamento</h2>
        <div className="card-surface divide-y divide-border/80 overflow-hidden rounded-[16px]">
          {ordenados.map((d) => (
            <div
              key={d.diaSemana}
              className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center"
            >
              <div className="flex w-36 items-center gap-3">
                <Switch
                  checked={d.ativo}
                  onCheckedChange={(v) =>
                    editarDia(d.diaSemana, { ativo: Boolean(v) })
                  }
                />
                <span className="text-sm font-medium">
                  {nomeDiaSemana(d.diaSemana)}
                </span>
              </div>
              {d.ativo ? (
                <div className="flex flex-1 items-center gap-2">
                  <Input
                    type="time"
                    className="w-full"
                    value={d.inicio}
                    onChange={(e) =>
                      editarDia(d.diaSemana, { inicio: e.target.value })
                    }
                  />
                  <span className="text-muted-foreground">–</span>
                  <Input
                    type="time"
                    className="w-full"
                    value={d.fim}
                    onChange={(e) =>
                      editarDia(d.diaSemana, { fim: e.target.value })
                    }
                  />
                </div>
              ) : (
                <span className="flex-1 text-sm text-muted-foreground">
                  Fechado
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Bloquear horário</h2>
        <div className="card-surface grid gap-3 rounded-[16px] p-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="b-data">Data</Label>
            <Input
              id="b-data"
              type="date"
              value={bData}
              onChange={(e) => setBData(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="b-motivo">Motivo (opcional)</Label>
            <Input
              id="b-motivo"
              placeholder="Ex.: compromisso pessoal"
              value={bMotivo}
              onChange={(e) => setBMotivo(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="b-inicio">De</Label>
            <Input
              id="b-inicio"
              type="time"
              value={bInicio}
              onChange={(e) => setBInicio(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="b-fim">Até</Label>
            <Input
              id="b-fim"
              type="time"
              value={bFim}
              onChange={(e) => setBFim(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <Button disabled={!bData} onClick={handleBloquear}>
              <Plus className="size-4" />
              Bloquear horário
            </Button>
          </div>
        </div>

        {bloqueios.length > 0 && (
          <ul className="flex flex-col gap-2">
            {[...bloqueios]
              .sort((a, b) => (a.data < b.data ? -1 : 1))
              .map((b) => (
                <li
                  key={b.id}
                  className="card-surface flex items-center gap-3 rounded-[14px] px-4 py-3"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {dataCurta(b.data)} · {b.inicio}–{b.fim}
                    </p>
                    {b.motivo && (
                      <p className="text-sm text-muted-foreground">
                        {b.motivo}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Remover bloqueio"
                    className="text-destructive hover:text-destructive"
                    onClick={() => {
                      removerBloqueio(b.id)
                      toast.success("Bloqueio removido.")
                    }}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </li>
              ))}
          </ul>
        )}
      </section>
    </div>
  )
}
