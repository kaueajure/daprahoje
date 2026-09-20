"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { rotasPainel } from "@/lib/routes"
import { CTA_DEMO_LABEL } from "@/lib/site"
import { LogoMark } from "@/components/logo"
import { buttonVariants } from "@/components/ui/button"

const NAV = [
  { href: "#produto", label: "Produto" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#faq", label: "FAQ" },
] as const

export function SiteHeader() {
  const [aberto, setAberto] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const btnRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    if (!aberto) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false)
        btnRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [aberto])

  React.useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [aberto])

  function fechar() {
    setAberto(false)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled || aberto
          ? "border-border/80 bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Da Pra Hoje — início"
        >
          <LogoMark size="md" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Seções">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[10px] px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href={rotasPainel.hoje}
            className={cn(buttonVariants({ size: "sm" }), "min-h-9")}
          >
            {CTA_DEMO_LABEL}
          </Link>
        </div>

        <button
          ref={btnRef}
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[10px] text-foreground transition-colors duration-150 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!aberto}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav
          className="mx-auto flex max-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col gap-1 overflow-y-auto overscroll-contain px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6"
          aria-label="Menu mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={fechar}
              className="rounded-[12px] px-3 py-3 text-[15px] font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 border-t border-border pt-3">
            <Link
              href={rotasPainel.hoje}
              onClick={fechar}
              className={cn(buttonVariants(), "h-11 w-full")}
            >
              {CTA_DEMO_LABEL}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
