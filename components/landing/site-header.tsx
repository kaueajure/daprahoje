"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { rotasPainel } from "@/lib/routes"
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

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
              className="rounded-[10px] px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={rotasPainel.hoje}
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Entrar
          </Link>
          <Link
            href={rotasPainel.hoje}
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Começar agora
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[10px] text-foreground transition-colors hover:bg-muted lg:hidden"
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
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6"
          aria-label="Menu mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={fechar}
              className="rounded-[12px] px-3 py-3 text-[15px] font-medium text-foreground hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 grid gap-2 border-t border-border pt-3">
            <Link
              href={rotasPainel.hoje}
              onClick={fechar}
              className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
            >
              Entrar
            </Link>
            <Link
              href={rotasPainel.hoje}
              onClick={fechar}
              className={cn(buttonVariants(), "w-full")}
            >
              Começar agora
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
