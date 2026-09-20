"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectCtx {
  value: string
  setValue: (v: string) => void
  open: boolean
  setOpen: (v: boolean) => void
  items: Record<string, string>
}

const Ctx = React.createContext<SelectCtx | null>(null)

function Select({
  value,
  onValueChange,
  items = {},
  children,
}: {
  value?: string
  onValueChange?: (value: string) => void
  items?: Record<string, string>
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  return (
    <Ctx.Provider
      value={{
        value: value ?? "",
        setValue: (v) => onValueChange?.(v),
        open,
        setOpen,
        items,
      }}
    >
      <div className="relative">{children}</div>
    </Ctx.Provider>
  )
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const ctx = React.useContext(Ctx)!
  return (
    <button
      type="button"
      data-slot="select-trigger"
      className={cn(
        "flex h-11 w-full items-center justify-between gap-2 rounded-[12px] border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/20",
        className,
      )}
      onClick={() => ctx.setOpen(!ctx.open)}
      {...props}
    >
      {children}
      <ChevronDown className="size-4 opacity-50" />
    </button>
  )
}

function SelectValue({ placeholder }: { placeholder?: string }) {
  const ctx = React.useContext(Ctx)!
  const label = ctx.items[ctx.value]
  return (
    <span className={cn(!label && "text-muted-foreground")}>
      {label || placeholder || "Selecionar"}
    </span>
  )
}

function SelectContent({ children }: { children: React.ReactNode }) {
  const ctx = React.useContext(Ctx)!
  if (!ctx.open) return null
  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-40 cursor-default"
        aria-label="Fechar"
        onClick={() => ctx.setOpen(false)}
      />
      <div className="card-surface absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-[12px] p-1">
        {children}
      </div>
    </>
  )
}

function SelectItem({
  value,
  children,
}: {
  value: string
  children: React.ReactNode
}) {
  const ctx = React.useContext(Ctx)!
  return (
    <button
      type="button"
      className={cn(
        "flex w-full rounded-[10px] px-3 py-2 text-left text-sm transition-colors hover:bg-muted",
        ctx.value === value && "bg-muted font-medium",
      )}
      onClick={() => {
        ctx.setValue(value)
        ctx.setOpen(false)
      }}
    >
      {children}
    </button>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
