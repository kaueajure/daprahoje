import { AgendamentoFormProvider } from "@/components/agendamento-form-provider"
import { AppShell } from "@/components/app-shell"

export default function PainelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AgendamentoFormProvider>
      <AppShell>{children}</AppShell>
    </AgendamentoFormProvider>
  )
}
