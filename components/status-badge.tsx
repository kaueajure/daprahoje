import { cn } from "@/lib/utils"
import type { StatusAgendamento } from "@/lib/types"

const CONFIG: Record<
  StatusAgendamento,
  { label: string; className: string }
> = {
  confirmado: {
    label: "Confirmado",
    className: "bg-confirmed text-confirmed-foreground",
  },
  agendado: {
    label: "Agendado",
    className: "bg-pending text-pending-foreground",
  },
  concluido: {
    label: "Concluído",
    className: "bg-done text-done-foreground",
  },
  cancelado: {
    label: "Cancelado",
    className: "bg-canceled text-canceled-foreground",
  },
  ausente: {
    label: "Não compareceu",
    className: "bg-absent text-absent-foreground",
  },
}

export function StatusBadge({
  status,
  className,
}: {
  status: StatusAgendamento
  className?: string
}) {
  const c = CONFIG[status]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium",
        c.className,
        className,
      )}
    >
      {c.label}
    </span>
  )
}

export function statusLabel(status: StatusAgendamento): string {
  return CONFIG[status].label
}
