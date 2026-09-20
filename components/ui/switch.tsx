"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Switch({
  checked,
  onCheckedChange,
  className,
  id,
  disabled,
}: {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
  id?: string
  disabled?: boolean
}) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:opacity-50",
        checked ? "bg-primary" : "bg-muted",
        className,
      )}
    >
      <span
        className={cn(
          "pointer-events-none block size-5 rounded-full bg-card shadow-sm transition-transform duration-150",
          checked ? "translate-x-[22px]" : "translate-x-0.5",
        )}
      />
    </button>
  )
}

export { Switch }
