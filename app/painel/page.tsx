import { ClientOnly } from "@/components/client-only"
import { HojeView } from "@/components/hoje-view"
import { CarregandoTela } from "@/components/carregando"

export default function HojePage() {
  return (
    <ClientOnly fallback={<CarregandoTela />}>
      <HojeView />
    </ClientOnly>
  )
}
