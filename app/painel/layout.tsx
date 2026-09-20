import type { Metadata } from "next"
import { DadosProviders } from "@/components/dados-providers"
import { AgendamentoFormProvider } from "@/components/agendamento-form-provider"
import { AppShell } from "@/components/app-shell"

export const metadata: Metadata = {
  title: "Painel",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PainelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DadosProviders>
      <AgendamentoFormProvider>
        <AppShell>{children}</AppShell>
      </AgendamentoFormProvider>
    </DadosProviders>
  )
}
