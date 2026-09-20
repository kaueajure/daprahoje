import { cn } from "@/lib/utils"
import { SITE_HOST } from "@/lib/site"

/** Representações estáticas da UI real — sem store, indexáveis no HTML. */

export function MockStatus({
  children,
  tone = "pending",
}: {
  children: React.ReactNode
  tone?: "pending" | "confirmed" | "available"
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium",
        tone === "confirmed" && "bg-confirmed text-confirmed-foreground",
        tone === "pending" && "bg-pending text-pending-foreground",
        tone === "available" && "bg-secondary text-muted-foreground",
      )}
    >
      {children}
    </span>
  )
}

/** Visão geral do dia — sem o bloco de assinatura da marca. */
export function MockHojeCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "card-surface overflow-hidden rounded-[20px] text-left shadow-[0_20px_50px_rgba(0,0,0,0.06)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="border-b border-border/80 px-4 py-3.5 sm:px-5">
        <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          Hoje · terça
        </p>
        <p className="mt-1 text-[22px] font-semibold tracking-tight">
          Bom dia, João
        </p>
      </div>

      <div className="grid grid-cols-3 divide-x divide-border/80 border-b border-border/80">
        {[
          { k: "Atendimentos", v: "4" },
          { k: "Livres", v: "3" },
          { k: "Previsto", v: "R$ 280" },
        ].map((item) => (
          <div key={item.k} className="px-3 py-3 text-center sm:px-4">
            <p className="text-[11px] text-muted-foreground">{item.k}</p>
            <p className="mt-0.5 text-base font-semibold tracking-tight sm:text-lg">
              {item.v}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-4 px-4 py-4 sm:px-5">
        <div>
          <p className="text-[11px] font-medium text-muted-foreground">
            Próximo atendimento
          </p>
          <div className="mt-2 flex items-start justify-between gap-3">
            <div>
              <p className="text-3xl font-semibold tracking-tight tabular-nums">
                14:00
              </p>
              <p className="mt-1 text-sm font-medium">Carlos Mendes</p>
              <p className="text-sm text-muted-foreground">
                Corte + barba · 45 min
              </p>
            </div>
            <MockStatus tone="confirmed">Confirmado</MockStatus>
          </div>
        </div>

        <ul className="space-y-1.5 border-t border-border/70 pt-3">
          {[
            { hora: "14:00", label: "Carlos Mendes", tone: "busy" as const },
            { hora: "15:00", label: "Livre · 30 min", tone: "free" as const },
            { hora: "16:00", label: "Livre · 45 min", tone: "free" as const },
          ].map((row) => (
            <li
              key={row.hora}
              className={cn(
                "flex items-center gap-3 rounded-[10px] px-2.5 py-2 text-sm",
                row.tone === "free" && "bg-secondary/60",
                row.tone === "busy" && "bg-card",
              )}
            >
              <span className="w-11 shrink-0 font-medium tabular-nums">
                {row.hora}
              </span>
              <span className="min-w-0 truncate text-muted-foreground">
                {row.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function MockAgendaLista({ className }: { className?: string }) {
  const itens = [
    { hora: "09:00", titulo: "Ana Paula", meta: "Manicure", tipo: "busy" as const },
    { hora: "10:00", titulo: "Livre", meta: "45 min", tipo: "free" as const },
    { hora: "11:00", titulo: "Rafael", meta: "Corte masculino", tipo: "busy" as const },
    { hora: "14:00", titulo: "Carlos Mendes", meta: "Corte + barba", tipo: "busy" as const },
    { hora: "15:00", titulo: "Bloqueado", meta: "Almoço", tipo: "block" as const },
    { hora: "16:00", titulo: "Livre", meta: "30 min", tipo: "free" as const },
  ]

  return (
    <div
      className={cn("card-surface rounded-[20px] p-4 sm:p-5", className)}
      aria-hidden="true"
    >
      <p className="text-sm font-semibold">Agenda de hoje</p>
      <ul className="mt-3 space-y-2">
        {itens.map((item) => (
          <li
            key={item.hora}
            className={cn(
              "flex items-center gap-3 rounded-[12px] px-3 py-2.5",
              item.tipo === "free" && "bg-secondary/60",
              item.tipo === "block" && "bg-muted/80",
              item.tipo === "busy" && "bg-card ring-1 ring-black/[0.04]",
            )}
          >
            <span className="w-12 shrink-0 text-sm font-medium tabular-nums">
              {item.hora}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{item.titulo}</p>
              <p className="truncate text-xs text-muted-foreground">{item.meta}</p>
            </div>
            {item.tipo === "busy" && (
              <MockStatus tone="confirmed">Ok</MockStatus>
            )}
            {item.tipo === "free" && (
              <MockStatus tone="available">Livre</MockStatus>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Experiência do cliente — sem a assinatura “Dá pra hoje?”. */
export function MockPublicoCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "card-surface overflow-hidden rounded-[20px] text-left",
        className,
      )}
      aria-hidden="true"
    >
      <div className="border-b border-border/80 px-4 py-4 text-center sm:px-5">
        <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          {SITE_HOST}/joaobarber
        </p>
        <p className="mt-2 text-xl font-semibold tracking-tight">João Barber</p>
        <p className="text-sm text-muted-foreground">Barbearia · Rio Preto</p>
      </div>
      <div className="space-y-4 px-4 py-4 sm:px-5">
        <div>
          <p className="text-sm font-semibold">Escolha um horário</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Hoje, 20 de setembro</p>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {["14:30", "16:00", "17:30"].map((h) => (
              <span
                key={h}
                className="rounded-[10px] bg-primary py-2 text-center text-sm font-medium text-primary-foreground tabular-nums"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold">Escolha o serviço</p>
          {[
            "Corte · 30 min · R$ 45",
            "Barba · 20 min · R$ 35",
            "Corte + barba · 45 min · R$ 70",
          ].map((s) => (
            <div
              key={s}
              className="rounded-[12px] px-3 py-2.5 text-sm ring-1 ring-black/[0.06]"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MockServicos({ className }: { className?: string }) {
  const servicos = [
    { nome: "Corte masculino", dur: "30 min", valor: "R$ 45" },
    { nome: "Barba", dur: "20 min", valor: "R$ 35" },
    { nome: "Corte + barba", dur: "45 min", valor: "R$ 70" },
  ]
  return (
    <div
      className={cn("card-surface rounded-[20px] p-4 sm:p-5", className)}
      aria-hidden="true"
    >
      <p className="text-sm font-semibold">Serviços</p>
      <ul className="mt-3 divide-y divide-border/80">
        {servicos.map((s) => (
          <li
            key={s.nome}
            className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
          >
            <div>
              <p className="text-sm font-medium">{s.nome}</p>
              <p className="text-xs text-muted-foreground">{s.dur}</p>
            </div>
            <p className="text-sm font-semibold tabular-nums">{s.valor}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
