"use client"

import { DataProvider } from "@/lib/store"
import { Toaster } from "@/components/ui/toast"

/** Providers de dados — só painel e página pública, nunca a landing. */
export function DadosProviders({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      {children}
      <Toaster />
    </DataProvider>
  )
}
