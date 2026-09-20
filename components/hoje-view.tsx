"use client"

import * as React from "react"
import { ArrowRight, Clock } from "lucide-react"

import { useDados } from "@/lib/store"
import { useAgora } from "@/lib/use-now"
import {
  montarAgendaDoDia,
  horariosLivres,
  proximoAgendamento,
} from "@/lib/schedule"
import {
  addDias,
  dataCurta,
  dataExtenso,
  formatarDuracao,
  formatarValor,
  saudacao,
} from "@/lib/format"
import { useAgendamentoForm } from "@/components/agendamento-form-provider"
import { AgendaLista } from "@/components/agenda-lista"
import { StatusBadge } from "@/components/status-badge"
import { CarregandoTela } from "@/components/carregando"
import { Button } from "@/components/ui/button"
import { EmptyState } from "@/components/empty-state"

export function HojeView() {
  const dados = useDados()
  const { montado, hoje, agoraMin } = useAgora()
  const { abrirNovo, abrirEdicao } = useAgendamentoForm()

  const agenda = React.useMemo(
    () =>
      montarAgendaDoDia(
        hoje,
        dados.disponibilidade,
        dados.agendamentos,
        dados.bloqueios,
      ),
    [hoje, dados.disponibilidade, dados.agendamentos, dados.bloqueios],
  )

  const agoraParaFiltro = montado ? agoraMin : 0
  const livres = horariosLivres(agenda, agoraParaFiltro)
  const proximo = montado ? proximoAgendamento(agenda, agoraMin) : null

  const atendimentosHoje = dados.agendamentos.filter(
    (a) => a.data === hoje && a.status !== "cancelado",
  )
  const faturamentoPrevisto = atendimentosHoje.reduce(
    (soma, a) => soma + a.valor,
    0,
  )

  const proximoLivreFuturo = React.useMemo(() => {
    for (let i = 1; i <= 14; i++) {
      const d = addDias(hoje, i)
      const ag = montarAgendaDoDia(
        d,
        dados.disponibilidade,
        dados.agendamentos,
        dados.bloqueios,
      )
      const l = horariosLivres(ag)
      if (l.length > 0) return { data: d, hora: l[0] }
    }
    return null
  }, [hoje, dados.disponibilidade, dados.agendamentos, dados.bloqueios])

  if (!montado) {
    return <CarregandoTela />
  }

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <header className="min-w-0">
        <p className="text-sm text-muted-foreground">
          {saudacao()}, {dados.perfil.nome}
        </p>
        <h1 className="mt-0.5 text-[24px] font-semibold tracking-tight text-balance md:text-[28px]">
          {dataExtenso(hoje)}
        </h1>
      </header>

      {/* Layout desktop: resumo + cards à esquerda, agenda à direita */}
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] xl:items-start xl:gap-5">
        <div className="flex flex-col gap-4">
          {/* Resumo do dia */}
          <div className="card-surface grid grid-cols-3 divide-x divide-border/80 overflow-hidden rounded-[14px]">
            <Resumo
              valor={String(atendimentosHoje.length)}
              rotulo="atendimentos"
            />
            <Resumo valor={String(livres.length)} rotulo="disponíveis" />
            <Resumo
              valor={formatarValor(faturamentoPrevisto)}
              rotulo="previstos"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
            {/* Próximo atendimento */}
            <section className="card-surface rounded-[14px] p-4 md:p-5">
              <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                Próximo atendimento
              </p>
              {proximo ? (
                <button
                  type="button"
                  onClick={() => abrirEdicao(proximo)}
                  className="group mt-2.5 w-full text-left"
                >
                  <div className="flex flex-wrap items-baseline gap-2.5">
                    <span className="text-[36px] leading-none font-semibold tracking-tight tabular-nums md:text-[40px]">
                      {proximo.hora}
                    </span>
                    <StatusBadge status={proximo.status} />
                  </div>
                  <p className="mt-2.5 text-base font-medium md:text-lg">
                    {proximo.clienteNome}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {proximo.servicoNome}
                    <span className="mx-1.5 opacity-40">·</span>
                    {formatarDuracao(proximo.duracaoMin)}
                    <span className="mx-1.5 opacity-40">·</span>
                    {formatarValor(proximo.valor)}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
                    Ver atendimento
                    <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </span>
                </button>
              ) : (
                <div className="mt-2.5">
                  <p className="text-base font-medium">Nada por agora.</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Você não tem mais atendimentos marcados para hoje.
                  </p>
                </div>
              )}
            </section>

            {/* Dá pra hoje? */}
            <section className="card-surface rounded-[14px] p-4 md:p-5">
              <p className="text-[20px] font-semibold tracking-tight md:text-[22px]">
                Dá pra hoje?
              </p>
              {livres.length > 0 ? (
                <>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Sim.</span>{" "}
                    {livres.length}{" "}
                    {livres.length === 1
                      ? "horário disponível"
                      : "horários disponíveis"}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {livres.slice(0, 10).map((hora) => (
                      <button
                        key={hora}
                        type="button"
                        onClick={() => abrirNovo({ data: hoje, hora })}
                        className="rounded-[10px] bg-primary px-3 py-1.5 text-sm font-medium tabular-nums text-primary-foreground transition-opacity duration-150 hover:opacity-90"
                      >
                        {hora}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="mt-1">
                  <p className="text-sm text-muted-foreground">
                    Hoje não temos mais horários.
                  </p>
                  {proximoLivreFuturo && (
                    <div className="mt-3 rounded-[10px] bg-secondary px-3 py-2.5">
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Próximo disponível
                      </p>
                      <p className="mt-1 flex items-center gap-2 text-sm font-medium">
                        <Clock className="size-4 shrink-0" />
                        {dataCurta(proximoLivreFuturo.data)} às{" "}
                        {proximoLivreFuturo.hora}
                      </p>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mt-2.5 bg-card"
                        onClick={() =>
                          abrirNovo({
                            data: proximoLivreFuturo.data,
                            hora: proximoLivreFuturo.hora,
                          })
                        }
                      >
                        Ver horários de amanhã
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </section>
          </div>
        </div>

        {/* Agenda de hoje */}
        <section className="min-w-0">
          <h2 className="mb-2.5 text-base font-semibold tracking-tight md:text-lg">
            Agenda de hoje
          </h2>
          {agenda.aberto ? (
            agenda.entradas.length > 0 ? (
              <AgendaLista
                entradas={agenda.entradas}
                agoraMin={agoraMin}
                ehHoje
                onLivre={(hora) => abrirNovo({ data: hoje, hora })}
                onAgendamento={(ag) => abrirEdicao(ag)}
              />
            ) : (
              <EmptyState
                title="Sua agenda está livre hoje."
                description="Que tal adicionar seu primeiro atendimento?"
                actionLabel="Novo agendamento"
                onAction={() => abrirNovo()}
              />
            )
          ) : (
            <EmptyState
              title="Hoje é dia de descanso."
              description="Nenhum horário aberto na agenda. Você pode abrir o dia em Configurações."
            />
          )}
        </section>
      </div>
    </div>
  )
}

function Resumo({ valor, rotulo }: { valor: string; rotulo: string }) {
  return (
    <div className="px-3 py-3 text-center sm:px-4 sm:py-3.5 sm:text-left">
      <p className="text-base font-semibold tracking-tight tabular-nums sm:text-lg md:text-xl">
        {valor}
      </p>
      <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">
        {rotulo}
      </p>
    </div>
  )
}
