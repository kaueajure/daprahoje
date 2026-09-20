import Link from "next/link"
import { MessageCircle } from "lucide-react"

import { rotasPainel } from "@/lib/routes"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  MockAgendaLista,
  MockHojeCard,
  MockPublicoCard,
  MockServicos,
} from "@/components/landing/product-mocks"
import { Reveal } from "@/components/landing/reveal"
import { LogoMark } from "@/components/logo"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 landing-hero-glow"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-8 lg:pt-16 lg:pb-24">
        <Reveal>
          <LogoMark size="xl" className="mb-5" />
          <h1 className="max-w-[18ch] font-semibold tracking-tight">
            <span className="block text-lg text-foreground sm:text-xl">
              Da Pra Hoje
            </span>
            <span className="mt-2 block text-[2.35rem] leading-[1.06] sm:text-[3rem] lg:text-[3.35rem]">
              Dá pra hoje?
            </span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sua agenda responde em segundos. Veja o próximo atendimento, os
            horários livres e deixe o cliente marcar sozinho — sem complicação.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={rotasPainel.hoje}
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-[15px]")}
            >
              Começar agora
            </Link>
            <a
              href="#como-funciona"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "h-12 px-6 text-[15px]",
              )}
            >
              Ver como funciona
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Feito para barbeiros, manicures, tatuadores e quem vive de horário
            marcado.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -inset-3 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(72,184,120,0.12),transparent_55%)] sm:-inset-4" />
          <MockHojeCard className="relative mx-auto max-w-md lg:ml-auto lg:max-w-none" />
        </Reveal>
      </div>
    </section>
  )
}

export function LandingProblem() {
  return (
    <section className="border-t border-border/70 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            O cliente pergunta. Você some na agenda.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Todo dia a mesma mensagem: “Tem horário hoje?”. Abrir o WhatsApp,
            conferir duração, achar encaixe e responder — enquanto o próximo
            cliente está na cadeira.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
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
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-[20px] border border-border bg-foreground p-5 text-primary-foreground sm:p-6">
              <p className="text-[13px] font-medium text-primary-foreground/65">
                Com o Da Pra Hoje
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed sm:text-[15px]">
                {[
                  "Abrir o app e ver o dia inteiro",
                  "Horários livres já calculados",
                  "Cliente agenda pelo seu link",
                  "Você só confirma e atende",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--brand)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function LandingDaPraHoje() {
  return (
    <section id="produto" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground uppercase">
            O diferencial
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            A pergunta que organiza o seu dia
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            O Da Pra Hoje calcula a disponibilidade com base nos seus serviços,
            horários e bloqueios. Em segundos você sabe se cabe mais um cliente
            — e quais são os horários.
          </p>
          <p className="mt-4 text-base font-medium">
            Não é um relatório. É a resposta que você precisa no meio do
            expediente.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="card-surface rounded-[24px] p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Dá pra hoje?</p>
                <p className="mt-1 text-3xl font-semibold tracking-tight text-[color:var(--brand)] sm:text-4xl">
                  Tem sim.
                </p>
              </div>
              <MessageCircle
                className="size-5 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              3 horários livres nesta tarde
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
        </Reveal>
      </div>
    </section>
  )
}

export function LandingHowItWorks() {
  const passos = [
    {
      n: "1",
      titulo: "Configure sua agenda",
      texto: "Cadastre serviços, duração, valores e o horário de funcionamento.",
    },
    {
      n: "2",
      titulo: "Organize os atendimentos",
      texto: "Veja clientes, horários e o que ainda está livre no dia.",
    },
    {
      n: "3",
      titulo: "Compartilhe seu link",
      texto: "O cliente abre sua página e agenda sem criar conta.",
    },
    {
      n: "4",
      titulo: "Veja se dá pra hoje",
      texto: "Os horários disponíveis ficam claros assim que você abre o app.",
    },
  ]

  return (
    <section
      id="como-funciona"
      className="scroll-mt-20 border-t border-border/70 bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Como funciona
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Quatro passos. Sem treinamento, sem dezenas de menus.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((p, i) => (
            <Reveal key={p.n} delay={i * 60}>
              <li className="h-full rounded-[18px] border border-border bg-background p-5">
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
            </Reveal>
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
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            O produto, do jeito que ele é
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Telas pensadas para o dia a dia — não para impressionar em
            apresentação.
          </p>
        </Reveal>

        <div className="mt-12 space-y-16 lg:space-y-20">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <h3 className="text-xl font-semibold tracking-tight">Hoje</h3>
              <p className="mt-2 text-muted-foreground">
                Próximo atendimento, resumo do dia, horários livres e a agenda
                na mesma tela. Abrir → olhar → entender → agir.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <MockHojeCard />
            </Reveal>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal className="lg:order-2">
              <h3 className="text-xl font-semibold tracking-tight">Agenda</h3>
              <p className="mt-2 text-muted-foreground">
                Ocupados, livres e bloqueios no mesmo lugar. Sem grade
                confusa — só o que importa para o turno.
              </p>
            </Reveal>
            <Reveal delay={80} className="lg:order-1">
              <MockAgendaLista />
            </Reveal>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <h3 className="text-xl font-semibold tracking-tight">
                Serviços e clientes
              </h3>
              <p className="mt-2 text-muted-foreground">
                Duração e valor definidos. Histórico do cliente à mão quando
                precisar — sem virar um CRM pesado.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <MockServicos />
            </Reveal>
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
        <Reveal>
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground uppercase">
            Página pública
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Seu link. O cliente agenda.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cada profissional tem uma página como{" "}
            <span className="font-medium text-foreground">
              daparahoje.com/joaobarber
            </span>
            . O cliente vê a disponibilidade, escolhe o serviço e marca — sem
            ligar, sem ficar no vai-e-volta do WhatsApp.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground sm:text-[15px]">
            {[
              "Sem criar conta para o cliente",
              "Horários já alinhados com a sua agenda",
              "Você recebe o agendamento no painel",
            ].map((t) => (
              <li key={t} className="flex gap-2.5">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <MockPublicoCard className="mx-auto max-w-md lg:ml-auto lg:max-w-none" />
        </Reveal>
      </div>
    </section>
  )
}

export function LandingAudience() {
  const categorias = [
    "Barbearias",
    "Cabeleireiros",
    "Manicures",
    "Tatuadores",
    "Esteticistas",
    "Design de sobrancelha",
    "Massagistas",
    "Personal trainers",
    "Fotógrafos",
    "Autônomos com hora marcada",
  ]

  return (
    <section id="para-quem" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Feito para quem vive de agenda
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Se o seu dia gira em torno de horários marcados, o Da Pra Hoje foi
            pensado para a sua rotina — no celular, entre um atendimento e
            outro.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <ul className="mt-8 flex flex-wrap gap-2">
            {categorias.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function LandingBenefits() {
  const itens = [
    {
      titulo: "Saiba exatamente quando cabe mais um cliente",
      texto: "Horários livres calculados com a duração real dos seus serviços.",
    },
    {
      titulo: "Deixe o cliente escolher sem mandar mensagem",
      texto: "Página pública com disponibilidade — ele agenda, você atende.",
    },
    {
      titulo: "Abra a agenda e entenda o dia em segundos",
      texto: "Próximo horário, resumo e timeline sem caçar informação.",
    },
    {
      titulo: "Use de verdade no meio do trabalho",
      texto: "Interface compacta, mobile-first, sem ruído visual.",
    },
  ]

  return (
    <section className="border-t border-border/70 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Benefícios que importam no expediente
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {itens.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 50}>
              <article className="h-full rounded-[18px] border border-border bg-background p-5 sm:p-6">
                <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {item.texto}
                </p>
              </article>
            </Reveal>
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
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Não é um ERP. É a agenda que você consegue usar.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sem dezenas de menus. Sem gráficos que ninguém abre. Sem
            configuração interminável. Só o necessário para trabalhar com
            horário marcado — com clareza.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function LandingCta() {
  return (
    <section className="border-y border-border/70 bg-foreground text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            E aí, dá pra hoje?
          </h2>
          <p className="mt-3 max-w-lg text-base text-primary-foreground/70 sm:text-lg">
            Organize sua agenda e descubra em segundos se cabe mais um
            atendimento.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <Link
            href={rotasPainel.hoje}
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "h-12 bg-card px-7 text-[15px] text-foreground hover:bg-card/90",
            )}
          >
            Começar agora
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

const FAQ_ITENS = [
  {
    q: "O que é o Da Pra Hoje?",
    a: "É uma agenda online simples para profissionais que trabalham com horário marcado. Você organiza atendimentos, vê horários livres e compartilha uma página para o cliente agendar.",
  },
  {
    q: "Para quem o Da Pra Hoje foi criado?",
    a: "Para autônomos e pequenos negócios: barbeiros, cabeleireiros, manicures, tatuadores, esteticistas, massagistas, personal trainers, fotógrafos e outros que vivem de agenda.",
  },
  {
    q: "Como funciona o agendamento online?",
    a: "Você configura serviços e horários no painel. O cliente acessa seu link público, escolhe um horário disponível e um serviço, e confirma com nome e telefone.",
  },
  {
    q: "Meu cliente precisa criar uma conta?",
    a: "Não. O agendamento pela página pública não exige cadastro do cliente.",
  },
  {
    q: "Posso compartilhar minha agenda com meus clientes?",
    a: "Sim. Cada profissional tem um link próprio, como daparahoje.com/seunome, que pode ser enviado no WhatsApp, Instagram ou bio.",
  },
  {
    q: "Posso configurar meus horários de atendimento?",
    a: "Sim. Você define os dias e horários de funcionamento e pode criar bloqueios pontuais quando precisar.",
  },
  {
    q: "O sistema funciona pelo celular?",
    a: "Sim. O painel foi pensado mobile-first para uso durante o expediente, e também funciona bem no computador.",
  },
  {
    q: "O Da Pra Hoje serve para barbearias e manicures?",
    a: "Sim. Qualquer profissional ou pequeno negócio que trabalhe com horários marcados pode usar — incluindo barbearias, manicures e demais áreas de beleza e serviços.",
  },
]

export function LandingFaq() {
  return (
    <section id="faq" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Respostas diretas sobre a agenda online do Da Pra Hoje.
          </p>
        </Reveal>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {FAQ_ITENS.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none pr-8 text-[15px] font-medium tracking-tight outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span
                    className="mt-0.5 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
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
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" aria-label="Da Pra Hoje">
            <LogoMark size="lg" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Agenda online simples para quem trabalha com horário marcado.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Produto</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#produto" className="hover:text-foreground">
                Dá pra hoje?
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-foreground">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#recursos" className="hover:text-foreground">
                Recursos
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-foreground">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Acesso</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href={rotasPainel.hoje} className="hover:text-foreground">
                Entrar no painel
              </Link>
            </li>
            <li>
              <Link href={rotasPainel.hoje} className="hover:text-foreground">
                Começar agora
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Da Pra Hoje</p>
          <p>Agenda online para profissionais autônomos</p>
        </div>
      </div>
    </footer>
  )
}

export { FAQ_ITENS }
