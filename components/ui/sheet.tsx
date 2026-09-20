"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SheetCtx {
  open: boolean
  setOpen: (v: boolean) => void
}

const Ctx = React.createContext<SheetCtx | null>(null)

function Sheet({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}) {
  const [internal, setInternal] = React.useState(false)
  const isControlled = open !== undefined
  const value = isControlled ? open : internal
  const setOpen = (v: boolean) => {
    if (!isControlled) setInternal(v)
    onOpenChange?.(v)
  }

  React.useEffect(() => {
    if (!value) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [value])

  return <Ctx.Provider value={{ open: value, setOpen }}>{children}</Ctx.Provider>
}

function SheetContent({
  className,
  children,
  side,
  showCloseButton = true,
}: {
  className?: string
  children: React.ReactNode
  side?: "right" | "left" | "bottom" | "top"
  showCloseButton?: boolean
}) {
  const ctx = React.useContext(Ctx)
  const [mounted, setMounted] = React.useState(false)
  const [resolvedSide, setResolvedSide] = React.useState(side ?? "right")

  React.useEffect(() => {
    setMounted(true)
    if (side) {
      setResolvedSide(side)
      return
    }
    const mq = window.matchMedia("(max-width: 767px)")
    const apply = () => setResolvedSide(mq.matches ? "bottom" : "right")
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [side])

  if (!ctx?.open || !mounted) return null

  const sideClass =
    resolvedSide === "bottom"
      ? "inset-x-0 bottom-0 max-h-[92dvh] rounded-t-[20px] border-t"
      : resolvedSide === "left"
        ? "inset-y-0 left-0 h-full w-full max-w-md border-r sm:max-w-md"
        : "inset-y-0 right-0 h-full w-full max-w-md border-l sm:max-w-md"

  return createPortal(
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Fechar"
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
        onClick={() => ctx.setOpen(false)}
      />
      <div
        data-slot="sheet-content"
        className={cn(
          "absolute flex flex-col gap-0 bg-card text-card-foreground shadow-lg duration-200",
          sideClass,
          className,
        )}
        role="dialog"
        aria-modal="true"
      >
        {children}
        {showCloseButton && (
          <Button
            variant="ghost"
            size="icon-sm"
            className="absolute top-3 right-3"
            aria-label="Fechar"
            onClick={() => ctx.setOpen(false)}
          >
            <XIcon />
          </Button>
        )}
      </div>
    </div>,
    document.body,
  )
}

function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-1 p-4 pr-12 text-left", className)}
      {...props}
    />
  )
}

function SheetFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-lg font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
}

export {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
