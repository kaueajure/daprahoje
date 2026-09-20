import { ClientOnly } from "@/components/client-only"
import { PublicoView } from "@/components/publico-view"

export default async function PaginaPublica({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <ClientOnly>
      <PublicoView slug={slug} />
    </ClientOnly>
  )
}
