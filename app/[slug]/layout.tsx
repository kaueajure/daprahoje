import { DadosProviders } from "@/components/dados-providers"

export default function PublicoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DadosProviders>{children}</DadosProviders>
}
