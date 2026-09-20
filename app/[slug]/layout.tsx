import type { Metadata } from "next"
import { DadosProviders } from "@/components/dados-providers"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

/**
 * Páginas `/{slug}` ainda dependem de localStorage (demo).
 * Enquanto não houver persistência no servidor, permanecem noindex.
 * Soft 404 para slug inexistente: a UI mostra “não encontrada”,
 * mas o HTTP não é 404 real até existir backend + notFound().
 */
export default function PublicoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DadosProviders>{children}</DadosProviders>
}
