"use client"

import * as React from "react"
import { ArrowLeft, Check, Clock } from "lucide-react"

import { useDados } from "@/lib/store"
import { useAgora } from "@/lib/use-now"
import { montarAgendaDoDia, horariosLivres, temConflito } from "@/lib/schedule"
import {
  addDias,
  dataCurta,
  dataExtenso,
  formatarDuracao,
  formatarValor,
  hojeStr,
} from "@/lib/format"
import { cn } from "@/lib/utils"
import { LogoMark } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Etapa = "horario" | "servico" | "dados" | "ok"

export function PublicoView({ slug }: { slug: string }) {
  const dados = useDados()
  const { montado, agoraMin } = useAgora()

  const [etapa, setEtapa] = React.useState<Etapa>("horario")
  const [hora, setHora] = React.useState("")
  const [servicoId, setServicoId] = React.useState("")
  const [nome, setNome] = React.useState("")
  const [telefone, setTelefone] = React.useState("")
  const [dataSel, setDataSel] = React.useState(() => hojeStr())

  const hoje = hojeStr()
  const encontrado = dados.perfil.slug === slug
  const servicosAtivos = dados.servicos.filter((s) => s.ativo)

  const agenda = montarAgendaDoDia(
    dataSel,
    dados.disponibilidade,
    dados.agendamentos,
    dados.bloqueios,
  )
  const filtroAgora = dataSel === hoje && montado ? agoraMin : undefined
  const servico = servicosAtivos.find((s) => s.id === servicoId)
  const livres = horariosLivres(
    agenda,
    filtroAgora,
    servico?.duracaoMin ?? 30,
  )

  const proximoFuturo = React.useMemo(() => {
    for (let i = 0; i <= 14; i++) {
      const d = addDias(hoje, i)
      const ag = montarAgendaDoDia(
        d,
        dados.disponibilidade,
        dados.agendamentos,
        dados.bloqueios,
      )
      const l = horariosLivres(ag)
      if (l.length > 0) return { data: d, hora: l[0] }
    }
    return null
  }, [hoje, dados.disponibilidade, dados.agendamentos, dados.bloqueios])

  if (!encontrado) {
    return (
      <div className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center gap-3 px-6 text-center">
        <LogoMark size="xl" />
        <p className="text-xl font-semibold">Página não encontrada</p>
        <p className="text-muted-foreground">
          Confira o link com o profissional.
        </p>
      </div>
    )
  }

  const temSlots = livres.length > 0
  const ehHoje = dataSel === hoje

  function confirmar() {
    if (!hora || !servico || !nome.trim()) return

    if (
      temConflito({
        data: dataSel,
        hora,
        duracaoMin: servico.duracaoMin,
        agendamentos: dados.agendamentos,
        bloqueios: dados.bloqueios,
      })
    ) {
      return
    }

    const existente = dados.clientes.find(
      (c) => c.nome.toLowerCase() === nome.trim().toLowerCase(),
    )
    let clienteId = existente?.id ?? null
    if (!existente) {
      const novo = dados.salvarCliente({
        nome: nome.trim(),
        telefone: telefone.trim(),
      })
      clienteId = novo.id
    }

    dados.salvarAgendamento({
      data: dataSel,
      hora,
      clienteId,
      clienteNome: nome.trim(),
      clienteTelefone: telefone.trim(),
      servicoId: servico.id,
      servicoNome: servico.nome,
      duracaoMin: servico.duracaoMin,
      valor: servico.valor,
      status: "agendado",
      origem: "cliente",
    })
    setEtapa("ok")
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col px-4 py-5">
      <header className="flex flex-col items-center text-center">
        <LogoMark size="xl" />
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
          {dados.perfil.negocio}
        </h1>
        <p className="text-sm text-muted-foreground">
          {dados.perfil.categoria}
          {dados.perfil.cidade ? ` · ${dados.perfil.cidade}` : ""}
        </p>
      </header>

      {etapa === "ok" ? (
        <Sucesso
          negocio={dados.perfil.negocio}
          hora={hora}
          data={dataSel}
          servicoNome={servico?.nome ?? ""}
          onNovo={() => {
            setEtapa("horario")
            setHora("")
            setServicoId("")
            setNome("")
            setTelefone("")
            setDataSel(hoje)
          }}
        />
      ) : (
        <>
          <section className="card-surface mt-6 rounded-[16px] p-5 text-center">
            <p className="text-[22px] font-semibold tracking-tight">
              Horários disponíveis hoje
            </p>
            {ehHoje && temSlots ? (
              <>
                <p className="mt-1 text-sm text-muted-foreground">
                  Próximo horário às{" "}
                  <span className="font-medium text-foreground">
                    {livres[0]}
                  </span>
                </p>
              </>
            ) : ehHoje && !temSlots ? (
              <>
                <p className="mt-1 text-base font-medium">
                  Não há horários disponíveis hoje.
                </p>
                {proximoFuturo && (
                  <div className="mt-3">
                    <p className="text-[12px] text-muted-foreground">
                      Próximo disponível
                    </p>
                    <p className="mt-1 flex items-center justify-center gap-1.5 text-sm font-medium">
                      <Clock className="size-4" />
                      {dataCurta(proximoFuturo.data)} às {proximoFuturo.hora}
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mt-3"
                      onClick={() => {
                        setDataSel(proximoFuturo.data)
                        setEtapa("horario")
                      }}
                    >
                      Ver horários de amanhã
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground">
                Horários para {dataExtenso(dataSel)}
              </p>
            )}
          </section>

          {(temSlots || !ehHoje) && (
            <div className="mt-5 flex flex-1 flex-col">
              <Passos etapa={etapa} />

              {etapa === "horario" && (
                <StepBloco titulo="Escolha um horário">
                  {!ehHoje && (
                    <button
                      type="button"
                      onClick={() => setDataSel(hoje)}
                      className="mb-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      ← Voltar para hoje
                    </button>
                  )}
                  {temSlots ? (
                    <div className="grid grid-cols-3 gap-2">
                      {livres.map((h) => (
                        <button
                          key={h}
                          type="button"
                          onClick={() => {
                            setHora(h)
                            setEtapa("servico")
                          }}
                          className="rounded-[12px] border border-border bg-card py-2.5 text-sm font-semibold tabular-nums transition-colors duration-150 hover:bg-primary hover:text-primary-foreground"
                        >
                          {h}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Sem horários neste dia.
                    </p>
                  )}
                </StepBloco>
              )}

              {etapa === "servico" && (
                <StepBloco
                  titulo="Qual serviço?"
                  onVoltar={() => setEtapa("horario")}
                >
                  <div className="flex flex-col gap-2">
                    {servicosAtivos.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          setServicoId(s.id)
                          setEtapa("dados")
                        }}
                        className="card-surface flex items-center justify-between rounded-[14px] p-3.5 text-left transition-colors duration-150 hover:bg-muted/40"
                      >
                        <div>
                          <p className="font-medium">{s.nome}</p>
                          <p className="text-sm text-muted-foreground">
                            {formatarDuracao(s.duracaoMin)}
                          </p>
                        </div>
                        <span className="font-semibold tabular-nums">
                          {formatarValor(s.valor)}
                        </span>
                      </button>
                    ))}
                  </div>
                </StepBloco>
              )}

              {etapa === "dados" && (
                <StepBloco
                  titulo="Só falta você"
                  onVoltar={() => setEtapa("servico")}
                >
                  <div className="mb-4 rounded-[12px] bg-secondary px-3.5 py-3 text-sm">
                    <span className="font-semibold tabular-nums">{hora}</span>
                    {" · "}
                    {servico?.nome}
                    {" · "}
                    {formatarValor(servico?.valor ?? 0)}
                  </div>
                  <div className="grid gap-3">
                    <div className="grid gap-2">
                      <Label htmlFor="pub-nome">Seu nome</Label>
                      <Input
                        id="pub-nome"
                        placeholder="Como podemos te chamar?"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="pub-tel">WhatsApp</Label>
                      <Input
                        id="pub-tel"
                        inputMode="tel"
                        placeholder="(00) 00000-0000"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                      />
                    </div>
                    <Button
                      size="lg"
                      className="mt-1 w-full"
                      disabled={!nome.trim()}
                      onClick={confirmar}
                    >
                      Confirmar horário
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      3 de 3 — sem criar conta
                    </p>
                  </div>
                </StepBloco>
              )}
            </div>
          )}
        </>
      )}

      <footer className="mt-auto flex items-center justify-center gap-2 pt-10 pb-4 text-xs text-muted-foreground">
        <span>feito com</span>
        <LogoMark size="xs" />
        <span className="sr-only">Da Pra Hoje</span>
      </footer>
    </div>
  )
}

function Passos({ etapa }: { etapa: Etapa }) {
  const ordem: Etapa[] = ["horario", "servico", "dados"]
  const idx = ordem.indexOf(etapa)
  return (
    <div className="mb-4">
      <p className="mb-2 text-xs text-muted-foreground">
        {idx + 1} de 3
      </p>
      <div className="flex items-center gap-1.5">
        {ordem.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-150",
              i <= idx ? "bg-foreground" : "bg-border",
            )}
          />
        ))}
      </div>
    </div>
  )
}

function StepBloco({
  titulo,
  onVoltar,
  children,
}: {
  titulo: string
  onVoltar?: () => void
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        {onVoltar && (
          <button
            type="button"
            onClick={onVoltar}
            aria-label="Voltar"
            className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
          </button>
        )}
        <h2 className="text-lg font-semibold">{titulo}</h2>
      </div>
      {children}
    </div>
  )
}

function Sucesso({
  negocio,
  hora,
  data,
  servicoNome,
  onNovo,
}: {
  negocio: string
  hora: string
  data: string
  servicoNome: string
  onNovo: () => void
}) {
  const ehHoje = data === hojeStr()
  return (
    <div className="mt-10 flex flex-1 flex-col items-center text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Check className="size-8" strokeWidth={2.5} />
      </span>
      <h2 className="mt-5 text-2xl font-semibold tracking-tight">
        Agendamento confirmado
      </h2>
      <p className="mt-2 text-muted-foreground">{servicoNome}</p>
      <p className="mt-1 text-lg font-medium tabular-nums">
        {ehHoje ? "Hoje" : dataCurta(data)} às {hora}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{negocio}</p>
      <Button className="mt-8 w-full max-w-xs" size="lg" onClick={onNovo}>
        Concluir
      </Button>
    </div>
  )
}
