"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  CalendarDays,
  Home,
  MoreHorizontal,
  Plus,
  Briefcase,
  Settings,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useDados } from "@/lib/store"
import { Logo, LogoMark } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { useAgendamentoForm } from "@/components/agendamento-form-provider"

const NAV_DESKTOP = [
  { href: "/", label: "Hoje", icon: Home },
  { href: "/agenda", label: "Agenda", icon: CalendarDays },
  { href: "/clientes", label: "Clientes", icon: Users },
  { href: "/servicos", label: "Serviços", icon: Briefcase },
]

const NAV_MOBILE = [
  { href: "/", label: "Hoje", icon: Home },
  { href: "/agenda", label: "Agenda", icon: CalendarDays },
  { href: "/clientes", label: "Clientes", icon: Users },
  { href: "/mais", label: "Mais", icon: MoreHorizontal },
]

function ativo(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { abrirNovo } = useAgendamentoForm()
  const { perfil } = useDados()

  return (
    <div className="flex min-h-dvh w-full">
      {/* Sidebar — desktop */}
      <aside className="sticky top-0 hidden h-dvh w-[200px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-2.5 py-3 lg:w-[220px] md:flex">
        <div className="px-1.5 py-1.5">
          <Logo />
        </div>

        <Button
          className="mt-4 w-full justify-start"
          size="sm"
          onClick={() => abrirNovo()}
        >
          <Plus className="size-4" />
          Novo agendamento
        </Button>

        <nav className="mt-4 flex flex-col gap-0.5">
          {NAV_DESKTOP.map((item) => {
            const on = ativo(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-sm font-medium transition-colors duration-150",
                  on
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto space-y-2 px-0.5 pb-1">
          <Link
            href="/configuracoes"
            className={cn(
              "flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-sm font-medium transition-colors duration-150",
              ativo(pathname, "/configuracoes")
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Settings className="size-4" />
            Configurações
          </Link>

          <div className="rounded-[12px] bg-secondary/80 px-2.5 py-2.5 text-sm">
            <p className="text-[11px] font-medium text-muted-foreground">
              Página pública
            </p>
            <Link
              href={`/${perfil.slug}`}
              className="mt-0.5 block truncate text-[13px] font-medium underline-offset-2 hover:underline"
            >
              /{perfil.slug}
            </Link>
          </div>
        </div>
      </aside>

      {/* Conteúdo */}
      <div className="flex min-w-0 flex-1 flex-col bg-background">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <LogoMark className="size-8" />
            <span className="text-base font-semibold tracking-tight">
              Da Pra Hoje
            </span>
          </Link>
          <Button size="sm" onClick={() => abrirNovo()}>
            <Plus className="size-4" />
            Novo
          </Button>
        </header>

        <main className="flex-1 px-4 pt-4 pb-24 md:px-6 md:pt-5 md:pb-6 lg:px-8">
          {children}
        </main>
      </div>

      {/* Bottom nav — mobile */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-4">
          {NAV_MOBILE.map((item) => {
            const on = ativo(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors duration-150",
                  on ? "text-foreground" : "text-muted-foreground",
                )}
              >
                <item.icon
                  className={cn("size-5", on && "stroke-[2.35]")}
                />
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
