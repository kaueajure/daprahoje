"use client"

import Link from "next/link"
import { Briefcase, ChevronRight, ExternalLink, Settings } from "lucide-react"

import { useDados } from "@/lib/store"
import { rotasPainel } from "@/lib/routes"
import { LogoMark } from "@/components/logo"

const ITENS = [
  {
    href: rotasPainel.servicos,
    label: "Serviços",
    desc: "Preços e duração",
    icon: Briefcase,
  },
  {
    href: rotasPainel.configuracoes,
    label: "Configurações",
    desc: "Horários e perfil",
    icon: Settings,
  },
]

export function MaisView() {
  const { perfil } = useDados()

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <header>
        <h1 className="text-[24px] font-semibold tracking-tight md:text-[28px]">
          Mais
        </h1>
        <p className="text-sm text-muted-foreground">
          Serviços, ajustes e sua página pública.
        </p>
      </header>

      <div className="card-surface flex items-center gap-3 rounded-[16px] px-4 py-3.5">
        <LogoMark size="md" className="shrink-0" />
        <div className="min-w-0 flex-1 leading-snug">
          <p className="truncate text-[15px] font-medium">{perfil.negocio}</p>
          <p className="truncate text-sm text-muted-foreground">
            {perfil.categoria}
            {perfil.cidade ? ` · ${perfil.cidade}` : ""}
          </p>
        </div>
      </div>

      <ul className="card-surface divide-y divide-border/80 overflow-hidden rounded-[16px]">
        {ITENS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-muted/50"
            >
              <span className="flex size-10 items-center justify-center rounded-[12px] bg-secondary">
                <item.icon className="size-4.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <ChevronRight className="size-4 text-muted-foreground" />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={`/${perfil.slug}`}
        className="card-surface flex items-center gap-3 rounded-[16px] px-4 py-3.5 transition-colors duration-150 hover:bg-muted/40"
      >
        <ExternalLink className="size-4.5" />
        <div className="min-w-0 flex-1">
          <p className="font-medium">Página pública</p>
          <p className="truncate text-sm text-muted-foreground">
            /{perfil.slug}
          </p>
        </div>
        <ChevronRight className="size-4 text-muted-foreground" />
      </Link>
    </div>
  )
}
