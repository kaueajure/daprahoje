"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { useDados } from "@/lib/store"
import { useAgora } from "@/lib/use-now"
import { montarAgendaDoDia, horariosLivres } from "@/lib/schedule"
import {
  addDias,
  dataExtenso,
  ehHoje as ehHojeFn,
  hojeStr,
  parseDateStr,
} from "@/lib/format"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AgendaLista } from "@/components/agenda-lista"
import { useAgendamentoForm } from "@/components/agendamento-form-provider"
import { EmptyState } from "@/components/empty-state"

type Modo = "hoje" | "dia" | "semana"

const DIAS_MINI = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

export function AgendaView() {
  const dados = useDados()
  const { agoraMin, montado } = useAgora()
  const { abrirNovo, abrirEdicao } = useAgendamentoForm()
  const [modo, setModo] = React.useState<Modo>("hoje")
  const [dataSel, setDataSel] = React.useState(() => hojeStr())

  React.useEffect(() => {
    if (modo === "hoje") setDataSel(hojeStr())
  }, [modo])

  const inicioSemana = React.useMemo(() => {
    const d = parseDateStr(dataSel)
    const diff = (d.getDay() + 6) % 7 // segunda = 0
    return addDias(dataSel, -diff)
  }, [dataSel])

  const diasStrip = React.useMemo(() => {
    const base = modo === "semana" ? inicioSemana : hojeStr()
    const len = modo === "semana" ? 7 : 14
    return Array.from({ length: len }, (_, i) => addDias(base, i))
  }, [modo, inicioSemana])

  const contagem = React.useMemo(() => {
    const mapa = new Map<string, number>()
    for (const a of dados.agendamentos) {
      if (a.status === "cancelado") continue
      mapa.set(a.data, (mapa.get(a.data) ?? 0) + 1)
    }
    return mapa
  }, [dados.agendamentos])

  const agenda = montarAgendaDoDia(
    dataSel,
    dados.disponibilidade,
    dados.agendamentos,
    dados.bloqueios,
  )

  const eHoje = ehHojeFn(dataSel)

  const semanaCols = React.useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const dia = addDias(inicioSemana, i)
      const ag = montarAgendaDoDia(
        dia,
        dados.disponibilidade,
        dados.agendamentos,
        dados.bloqueios,
      )
      return { dia, agenda: ag, livres: horariosLivres(ag).length }
    })
  }, [inicioSemana, dados.disponibilidade, dados.agendamentos, dados.bloqueios])

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-tight md:text-[28px]">
            Agenda
          </h1>
          <p className="text-sm text-muted-foreground">
            {dataExtenso(dataSel)}
          </p>
        </div>

        <div className="inline-flex rounded-[10px] bg-secondary p-1">
          {(
            [
              ["hoje", "Hoje"],
              ["dia", "Dia"],
              ["semana", "Semana"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setModo(id)}
              className={cn(
                "rounded-[8px] px-3 py-1.5 text-sm font-medium transition-colors duration-150",
                modo === id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      {modo !== "semana" && (
        <>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Dia anterior"
              onClick={() => setDataSel((d) => addDias(d, -1))}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant={eHoje ? "secondary" : "outline"}
              size="sm"
              onClick={() => {
                setDataSel(hojeStr())
                setModo("hoje")
              }}
            >
              Hoje
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Próximo dia"
              onClick={() => setDataSel((d) => addDias(d, 1))}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
            {diasStrip.map((dia) => {
              const d = parseDateStr(dia)
              const sel = dia === dataSel
              const qtd = contagem.get(dia) ?? 0
              return (
                <button
                  key={dia}
                  type="button"
                  onClick={() => {
                    setDataSel(dia)
                    if (modo === "hoje" && !ehHojeFn(dia)) setModo("dia")
                  }}
                  className={cn(
                    "flex w-14 shrink-0 flex-col items-center gap-1 rounded-[14px] border py-2 transition-colors duration-150",
                    sel
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/80 bg-card hover:bg-muted",
                  )}
                >
                  <span className="text-[11px] font-medium opacity-80">
                    {DIAS_MINI[d.getDay()]}
                  </span>
                  <span className="text-base font-semibold tabular-nums">
                    {d.getDate()}
                  </span>
                  <span
                    className={cn(
                      "size-1.5 rounded-full",
                      qtd > 0
                        ? sel
                          ? "bg-primary-foreground"
                          : "bg-foreground"
                        : "bg-transparent",
                    )}
                  />
                </button>
              )
            })}
          </div>

          {agenda.aberto ? (
            agenda.entradas.length > 0 ? (
              <AgendaLista
                entradas={agenda.entradas}
                agoraMin={agoraMin}
                ehHoje={eHoje && montado}
                onLivre={(hora) => abrirNovo({ data: dataSel, hora })}
                onAgendamento={(ag) => abrirEdicao(ag)}
              />
            ) : (
              <EmptyState
                title="Nada marcado neste dia."
                description="Que tal adicionar um atendimento?"
                actionLabel="Novo agendamento"
                onAction={() => abrirNovo({ data: dataSel })}
              />
            )
          ) : (
            <EmptyState
              title="Dia fechado."
              description="Você pode abrir esse dia em Configurações."
            />
          )}
        </>
      )}

      {modo === "semana" && (
        <>
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Semana anterior"
              onClick={() => setDataSel(addDias(inicioSemana, -7))}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <p className="text-sm text-muted-foreground">
              {dataExtenso(inicioSemana)} —{" "}
              {dataExtenso(addDias(inicioSemana, 6))}
            </p>
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Próxima semana"
              onClick={() => setDataSel(addDias(inicioSemana, 7))}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          {/* Mobile: seletor de dia + lista */}
          <div className="md:hidden">
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3">
              {semanaCols.map(({ dia, livres }) => {
                const d = parseDateStr(dia)
                const sel = dia === dataSel
                return (
                  <button
                    key={dia}
                    type="button"
                    onClick={() => setDataSel(dia)}
                    className={cn(
                      "flex w-14 shrink-0 flex-col items-center gap-1 rounded-[14px] border py-2",
                      sel
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border/80 bg-card",
                    )}
                  >
                    <span className="text-[11px]">{DIAS_MINI[d.getDay()]}</span>
                    <span className="font-semibold tabular-nums">
                      {d.getDate()}
                    </span>
                    {livres > 0 && (
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          sel ? "bg-primary-foreground" : "bg-foreground",
                        )}
                      />
                    )}
                  </button>
                )
              })}
            </div>
            {agenda.aberto ? (
              <AgendaLista
                entradas={agenda.entradas}
                onLivre={(hora) => abrirNovo({ data: dataSel, hora })}
                onAgendamento={(ag) => abrirEdicao(ag)}
              />
            ) : (
              <EmptyState title="Dia fechado." />
            )}
          </div>

          {/* Desktop: colunas compactas */}
          <div className="hidden gap-2 md:grid md:grid-cols-7">
            {semanaCols.map(({ dia, agenda: agDia }) => {
              const d = parseDateStr(dia)
              const eHojeCol = ehHojeFn(dia)
              const ags = agDia.entradas.filter((e) => e.tipo === "agendamento")
              return (
                <div
                  key={dia}
                  className={cn(
                    "card-surface min-h-48 rounded-[14px] p-2.5",
                    eHojeCol && "ring-1 ring-foreground/15",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setDataSel(dia)
                      setModo("dia")
                    }}
                    className="mb-2 w-full text-left"
                  >
                    <p className="text-[11px] text-muted-foreground">
                      {DIAS_MINI[d.getDay()]}
                    </p>
                    <p className="text-lg font-semibold tabular-nums">
                      {d.getDate()}
                    </p>
                  </button>
                  <div className="flex flex-col gap-1.5">
                    {ags.slice(0, 5).map((e) => {
                      if (e.tipo !== "agendamento") return null
                      const a = e.agendamento
                      return (
                        <button
                          key={a.id}
                          type="button"
                          onClick={() => abrirEdicao(a)}
                          className="rounded-[10px] bg-secondary px-2 py-1.5 text-left transition-colors hover:bg-muted"
                        >
                          <p className="text-[11px] font-semibold tabular-nums">
                            {a.hora}
                          </p>
                          <p className="truncate text-[11px]">{a.clienteNome}</p>
                        </button>
                      )
                    })}
                    {ags.length === 0 && agDia.aberto && (
                      <button
                        type="button"
                        onClick={() => abrirNovo({ data: dia })}
                        className="rounded-[10px] border border-dashed border-border px-2 py-2 text-[11px] text-muted-foreground hover:bg-muted"
                      >
                        + Agendar
                      </button>
                    )}
                    {!agDia.aberto && (
                      <p className="px-1 text-[11px] text-muted-foreground">
                        Fechado
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
