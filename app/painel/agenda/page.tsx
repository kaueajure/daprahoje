import { ClientOnly } from "@/components/client-only"
import { AgendaView } from "@/components/agenda-view"
import { CarregandoTela } from "@/components/carregando"

export default function AgendaPage() {
  return (
    <ClientOnly fallback={<CarregandoTela />}>
      <AgendaView />
    </ClientOnly>
  )
}
