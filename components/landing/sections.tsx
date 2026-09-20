import Link from "next/link"
import { MessageCircle } from "lucide-react"

import { rotasPainel } from "@/lib/routes"
import {
  BRAND_POSITIVE_ANSWER,
  BRAND_QUESTION,
  CTA_DEMO_LABEL,
  CTA_DEMO_SECONDARY,
  SITE_HOST,
  SITE_NAME,
} from "@/lib/site"
import {
  LANDING_BENEFICIOS,
  LANDING_CATEGORIAS,
  LANDING_FAQ,
  LANDING_PASSOS,
} from "@/lib/landing-content"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  MockAgendaLista,
  MockHojeCard,
  MockPublicoCard,
  MockServicos,
} from "@/components/landing/product-mocks"
import { LogoMark } from "@/components/logo"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 landing-hero-glow"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-8 lg:pt-16 lg:pb-24">
        <div>
          <LogoMark size="xl" className="mb-5" />
          <p className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-[12px] font-medium text-muted-foreground">
            Demonstração disponível
          </p>
          <h1 className="mt-4 max-w-[16ch] text-balance text-[2.1rem] leading-[1.1] font-semibold tracking-tight sm:text-[2.75rem] lg:text-[3.1rem]">
            Sua agenda, fácil de entender.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Veja o próximo atendimento, o resumo do dia e onde ainda cabe mais
            um horário — feita para quem trabalha com hora marcada.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={rotasPainel.hoje}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 min-h-11 px-6 text-[15px]",
              )}
            >
              {CTA_DEMO_LABEL}
            </Link>
            <a
              href="#como-funciona"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "h-12 min-h-11 px-6 text-[15px]",
              )}
            >
              {CTA_DEMO_SECONDARY}
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-3 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(72,184,120,0.12),transparent_55%)] sm:-inset-4"
            aria-hidden="true"
          />
          <MockHojeCard className="relative mx-auto max-w-md lg:ml-auto lg:max-w-none" />
        </div>
      </div>
    </section>
  )
}

export function LandingProblem() {
  return (
    <section className="border-t border-border/70 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            O cliente pergunta. Você some na agenda.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Todo dia a mesma mensagem: “Tem horário hoje?”. Abrir o WhatsApp,
            conferir duração, achar encaixe e responder — enquanto o próximo
            cliente está na cadeira.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[20px] border border-border bg-background p-5 sm:p-6">
            <p className="text-[13px] font-medium text-muted-foreground">
              Antes
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {[
                "Abrir conversas no WhatsApp",
                "Conferir a agenda em outro lugar",
                "Calcular se o serviço cabe",
                "Responder manualmente, um por um",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/25" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[20px] border border-border bg-foreground p-5 text-primary-foreground sm:p-6">
            <p className="text-[13px] font-medium text-primary-foreground/70">
              Com o {SITE_NAME}
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed sm:text-[15px]">
              {[
                "Veja o dia em uma única tela",
                "Identifique espaços disponíveis",
                "Organize bloqueios e atendimentos",
                "Responda clientes sem fazer conta de cabeça",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--brand)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LandingDaPraHoje() {
  return (
    <section id="produto" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground uppercase">
            O diferencial
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Saiba se ainda cabe mais um atendimento
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A disponibilidade considera horário de funcionamento, atendimentos
            existentes, bloqueios e duração do serviço. Você abre o painel e já
            vê a resposta.
          </p>
          <p className="mt-4 text-base font-medium">
            A resposta que você precisa durante o expediente.
          </p>
        </div>

        <div className="card-surface rounded-[24px] p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">{BRAND_QUESTION}</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-[color:var(--brand)] sm:text-4xl">
                {BRAND_POSITIVE_ANSWER}
              </p>
            </div>
            <MessageCircle
              className="size-5 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            3 horários disponíveis
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["14:30", "16:00", "17:30"].map((h) => (
              <span
                key={h}
                className="rounded-[12px] bg-foreground px-4 py-2.5 text-sm font-medium text-background tabular-nums"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function LandingHowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-20 border-t border-border/70 bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Como funciona
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Quatro passos. Sem treinamento, sem dezenas de menus.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_PASSOS.map((p) => (
            <li
              key={p.n}
              className="h-full rounded-[18px] border border-border bg-background p-5"
            >
              <span className="text-sm font-semibold text-muted-foreground tabular-nums">
                {p.n}
              </span>
              <h3 className="mt-3 text-base font-semibold tracking-tight">
                {p.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function LandingProductDemo() {
  return (
    <section id="recursos" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Veja como o {SITE_NAME} funciona
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Representações da interface real — cada tela mostra uma parte
            diferente do sistema.
          </p>
        </div>

        <div className="mt-12 space-y-16 lg:space-y-20">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">Hoje</h3>
              <p className="mt-2 text-muted-foreground">
                Visão geral do dia: próximo atendimento, resumo e o que ainda
                está livre. Abrir → olhar → entender → agir.
              </p>
            </div>
            <MockHojeCard />
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="lg:order-2">
              <h3 className="text-xl font-semibold tracking-tight">Agenda</h3>
              <p className="mt-2 text-muted-foreground">
                Ordem dos horários com ocupados, livres e bloqueios — sem grade
                confusa.
              </p>
            </div>
            <div className="lg:order-1">
              <MockAgendaLista />
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">Serviços</h3>
              <p className="mt-2 text-muted-foreground">
                Duração e valor definidos. O essencial para montar o dia sem
                virar um CRM.
              </p>
            </div>
            <MockServicos />
          </div>
        </div>
      </div>
    </section>
  )
}

export function LandingPublicPage() {
  return (
    <section className="border-t border-border/70 bg-card/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground uppercase">
            Página pública
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            O agendamento do ponto de vista do cliente
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Uma página simples no formato{" "}
            <span className="font-medium text-foreground">
              {SITE_HOST}/joaobarber
            </span>
            : escolher horário, serviço e confirmar — sem criar conta.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Na demonstração, o fluxo funciona com dados locais no mesmo
            navegador.
          </p>
        </div>
        <MockPublicoCard className="mx-auto max-w-md lg:ml-auto lg:max-w-none" />
      </div>
    </section>
  )
}

export function LandingAudience() {
  return (
    <section id="para-quem" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Feito para quem vive de horário marcado
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Agenda online para barbeiros, manicures, tatuadores e outros
            autônomos — pensada para a rotina no celular, entre um atendimento e
            outro.
          </p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {LANDING_CATEGORIAS.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function LandingBenefits() {
  return (
    <section className="border-t border-border/70 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          Benefícios que importam durante o expediente
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {LANDING_BENEFICIOS.map((item) => (
            <article
              key={item.titulo}
              className="h-full rounded-[18px] border border-border bg-background p-5 sm:p-6"
            >
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                {item.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LandingSimplicity() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Não é um ERP. É a agenda que você consegue usar.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Foco no que importa no turno: velocidade para consultar, clareza
            para decidir e só o necessário para trabalhar com hora marcada.
          </p>
        </div>
      </div>
    </section>
  )
}

export function LandingCta() {
  return (
    <section className="border-y border-border/70 bg-foreground text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            E aí, dá pra hoje?
          </h2>
          <p className="mt-3 max-w-lg text-base text-primary-foreground/75 sm:text-lg">
            Abra o painel e explore o fluxo completo.
          </p>
        </div>
        <Link
          href={rotasPainel.hoje}
          className={cn(
            buttonVariants({ size: "lg", variant: "secondary" }),
            "h-12 min-h-11 bg-card px-7 text-[15px] text-foreground hover:bg-card/90",
          )}
        >
          {CTA_DEMO_LABEL}
        </Link>
      </div>
    </section>
  )
}

export function LandingFaq() {
  return (
    <section id="faq" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          Perguntas frequentes
        </h2>
        <p className="mt-3 text-muted-foreground">
          Dúvidas comuns sobre a agenda online do {SITE_NAME}.
        </p>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {LANDING_FAQ.map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="cursor-pointer list-none rounded-[10px] py-3.5 pr-2 text-[15px] font-medium tracking-tight outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span className="min-w-0 flex-1">{item.q}</span>
                  <span
                    className="mt-0.5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-3.5 pr-8 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" aria-label={SITE_NAME}>
            <LogoMark size="lg" decorative />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Agenda online simples para quem trabalha com horário marcado.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Produto</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="#produto"
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Diferencial
              </a>
            </li>
            <li>
              <a
                href="#como-funciona"
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Como funciona
              </a>
            </li>
            <li>
              <a
                href="#recursos"
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Recursos
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Acesso</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href={rotasPainel.hoje}
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {CTA_DEMO_LABEL}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
          <p>Agenda online para profissionais autônomos</p>
        </div>
      </div>
    </footer>
  )
}
