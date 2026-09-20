"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

type ToastItem = {
  id: number
  message: string
  type: "success" | "error"
}

let pushToast: ((message: string, type: ToastItem["type"]) => void) | null =
  null
let seq = 0

export const toast = {
  success(message: string) {
    pushToast?.(message, "success")
  },
  error(message: string) {
    pushToast?.(message, "error")
  },
}

export function Toaster() {
  const [items, setItems] = React.useState<ToastItem[]>([])
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    pushToast = (message, type) => {
      const id = ++seq
      setItems((prev) => [...prev, { id, message, type }])
      window.setTimeout(() => {
        setItems((prev) => prev.filter((t) => t.id !== id))
      }, 2800)
    }
    return () => {
      pushToast = null
    }
  }, [])

  if (!mounted) return null

  return createPortal(
    <div className="pointer-events-none fixed inset-x-0 top-3 z-[100] flex flex-col items-center gap-2 px-4">
      {items.map((t) => (
        <div
          key={t.id}
          className={cn(
            "card-surface pointer-events-auto rounded-[14px] px-4 py-3 text-sm font-medium shadow-sm",
            t.type === "error" && "text-destructive",
          )}
          role="status"
        >
          {t.message}
        </div>
      ))}
    </div>,
    document.body,
  )
}
