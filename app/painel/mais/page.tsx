import { ClientOnly } from "@/components/client-only"
import { MaisView } from "@/components/mais-view"
import { CarregandoTela } from "@/components/carregando"

export default function MaisPage() {
  return (
    <ClientOnly fallback={<CarregandoTela />}>
      <MaisView />
    </ClientOnly>
  )
}
