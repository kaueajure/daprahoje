"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Briefcase,
  CalendarDays,
  Home,
  MoreHorizontal,
  Plus,
  Settings,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { rotasPainel } from "@/lib/routes"
import { useDados } from "@/lib/store"
import { Logo, LogoMark } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { useAgendamentoForm } from "@/components/agendamento-form-provider"

const NAV_DESKTOP = [
  { href: rotasPainel.hoje, label: "Hoje", icon: Home },
  { href: rotasPainel.agenda, label: "Agenda", icon: CalendarDays },
  { href: rotasPainel.clientes, label: "Clientes", icon: Users },
  { href: rotasPainel.servicos, label: "Serviços", icon: Briefcase },
]

const NAV_MOBILE = [
  { href: rotasPainel.hoje, label: "Hoje", icon: Home },
  { href: rotasPainel.agenda, label: "Agenda", icon: CalendarDays },
  { href: rotasPainel.clientes, label: "Clientes", icon: Users },
  { href: rotasPainel.mais, label: "Mais", icon: MoreHorizontal },
]

function ativo(pathname: string, href: string) {
  if (href === rotasPainel.hoje) {
    return pathname === rotasPainel.hoje || pathname === `${rotasPainel.hoje}/`
  }
  return pathname === href || pathname.startsWith(href + "/")
}

/** Onde faz sentido criar agendamento — não em Clientes/Serviços/etc. */
function paginaDeAgenda(pathname: string) {
  return (
    pathname === rotasPainel.hoje ||
    pathname === `${rotasPainel.hoje}/` ||
    pathname.startsWith(rotasPainel.agenda)
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { abrirNovo } = useAgendamentoForm()
  const { perfil } = useDados()
  const mostrarAgendar = paginaDeAgenda(pathname)

  return (
    <div className="flex min-h-dvh w-full">
      {/* Sidebar — desktop */}
      <aside className="sticky top-0 hidden h-dvh w-[200px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-2.5 py-3 lg:w-[220px] md:flex">
        <Link
          href={rotasPainel.hoje}
          className="mb-1 flex h-10 items-center rounded-[10px] px-2.5 transition-opacity hover:opacity-80"
        >
          <Logo size="sidebar" />
        </Link>

        {mostrarAgendar && (
          <Button
            className="mt-3 w-full justify-start"
            size="sm"
            onClick={() => abrirNovo()}
          >
            <Plus className="size-4" />
            Novo agendamento
          </Button>
        )}

        <nav
          className={cn(
            "flex flex-col gap-0.5",
            mostrarAgendar ? "mt-3" : "mt-4",
          )}
        >
          {NAV_DESKTOP.map((item) => {
            const on = ativo(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center gap-2.5 rounded-[10px] px-2.5 text-sm font-medium transition-colors duration-150",
                  on
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon className="size-4 shrink-0" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto space-y-2 pb-1">
          <Link
            href={rotasPainel.configuracoes}
            className={cn(
              "flex h-10 items-center gap-2.5 rounded-[10px] px-2.5 text-sm font-medium transition-colors duration-150",
              ativo(pathname, rotasPainel.configuracoes)
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Settings className="size-4 shrink-0" />
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
        {/* Header mobile — marca centralizada */}
        <header className="sticky top-0 z-30 flex h-12 items-center justify-center border-b border-border bg-background/90 px-4 backdrop-blur-md md:hidden">
          <Link
            href={rotasPainel.hoje}
            className="flex h-full items-center justify-center"
            aria-label="Da Pra Hoje"
          >
            <LogoMark size="md" />
          </Link>
        </header>

        <main className="flex-1 px-4 pt-4 pb-24 md:px-6 md:pt-5 md:pb-6 lg:px-8">
          {children}
        </main>
      </div>

      {/* FAB mobile — só em Hoje / Agenda */}
      {mostrarAgendar && (
        <button
          type="button"
          onClick={() => abrirNovo()}
          aria-label="Novo agendamento"
          className="fixed right-4 bottom-[4.75rem] z-40 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-opacity duration-150 hover:opacity-90 md:hidden"
        >
          <Plus className="size-5" strokeWidth={2.25} />
        </button>
      )}

      {/* Bottom nav — mobile */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
        <div className="mx-auto grid h-14 max-w-lg grid-cols-4">
          {NAV_MOBILE.map((item) => {
            const on = ativo(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium leading-none transition-colors duration-150",
                  on ? "text-foreground" : "text-muted-foreground",
                )}
              >
                <item.icon
                  className={cn("size-[22px] shrink-0", on && "stroke-[2.35]")}
                />
                <span className="pt-0.5">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
