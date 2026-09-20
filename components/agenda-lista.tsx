"use client"

import { Lock, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Agendamento } from "@/lib/types"
import type { EntradaAgenda } from "@/lib/schedule"
import { formatarDuracao, formatarValor } from "@/lib/format"
import { StatusBadge } from "@/components/status-badge"

interface Props {
  entradas: EntradaAgenda[]
  agoraMin?: number
  ehHoje?: boolean
  onLivre: (hora: string) => void
  onAgendamento: (ag: Agendamento) => void
}

export function AgendaLista({
  entradas,
  agoraMin,
  ehHoje = false,
  onLivre,
  onAgendamento,
}: Props) {
  return (
    <ul className="card-surface divide-y divide-border/80 overflow-hidden rounded-[16px]">
      {entradas.map((e) => {
        const passou =
          ehHoje && agoraMin !== undefined && e.minutos < agoraMin

        if (e.tipo === "agendamento") {
          const ag = e.agendamento
          return (
            <li key={`ag-${ag.id}`}>
              <button
                type="button"
                onClick={() => onAgendamento(ag)}
                className={cn(
                  "flex w-full items-start gap-3 px-4 py-3.5 text-left transition-colors duration-150 hover:bg-muted/50 md:items-center md:gap-4",
                  (ag.status === "cancelado" || ag.status === "ausente") &&
                    "opacity-55",
                )}
              >
                <span className="w-12 shrink-0 text-[15px] font-semibold tabular-nums md:w-14 md:text-base">
                  {e.hora}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate text-[15px] font-medium">
                      {ag.clienteNome}
                    </p>
                    <StatusBadge
                      status={ag.status}
                      className="md:hidden"
                    />
                  </div>
                  <p className="mt-0.5 text-[13px] text-muted-foreground md:hidden">
                    {ag.servicoNome} · {formatarDuracao(ag.duracaoMin)} ·{" "}
                    {formatarValor(ag.valor)}
                  </p>
                </div>

                <p className="hidden min-w-0 flex-1 truncate text-sm text-muted-foreground md:block">
                  {ag.servicoNome}
                </p>
                <p className="hidden w-16 shrink-0 text-sm text-muted-foreground tabular-nums md:block">
                  {formatarDuracao(ag.duracaoMin)}
                </p>
                <p className="hidden w-16 shrink-0 text-right text-sm font-medium tabular-nums md:block">
                  {formatarValor(ag.valor)}
                </p>
                <StatusBadge
                  status={ag.status}
                  className="hidden shrink-0 md:inline-flex"
                />
              </button>
            </li>
          )
        }

        if (e.tipo === "bloqueio") {
          return (
            <li key={`bl-${e.hora}-${e.bloqueio.id}`}>
              <div
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3.5 text-muted-foreground md:gap-4",
                  passou && "opacity-45",
                )}
              >
                <span className="w-12 shrink-0 text-[15px] font-semibold tabular-nums md:w-14 md:text-base">
                  {e.hora}
                </span>
                <div className="flex min-w-0 items-center gap-2 text-sm">
                  <Lock className="size-3.5 shrink-0" />
                  <span className="truncate">
                    Bloqueado
                    {e.bloqueio.motivo ? ` · ${e.bloqueio.motivo}` : ""}
                  </span>
                </div>
              </div>
            </li>
          )
        }

        return (
          <li key={`lv-${e.hora}`}>
            <button
              type="button"
              onClick={() => onLivre(e.hora)}
              className={cn(
                "group flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors duration-150 hover:bg-muted/60 md:gap-4",
                passou && "opacity-40",
              )}
            >
              <span className="w-12 shrink-0 text-[15px] font-semibold tabular-nums text-muted-foreground md:w-14 md:text-base">
                {e.hora}
              </span>
              <span className="flex-1 text-sm font-medium text-muted-foreground">
                Disponível
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-[10px] bg-secondary px-2.5 py-1.5 text-[12px] font-medium text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Plus className="size-3.5" />
                Agendar
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
