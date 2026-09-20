import type { Metadata, Viewport } from 'next'
import { DataProvider } from '@/lib/store'
import { Toaster } from '@/components/ui/toast'
import './globals.css'

export const metadata: Metadata = {
  title: 'Da Pra Hoje — sua agenda, sem complicação',
  description:
    'A agenda online simples e rápida para quem trabalha com hora marcada. Veja num piscar de olhos quem está agendado hoje e quais horários ainda estão livres.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <DataProvider>
          {children}
          <Toaster />
        </DataProvider>
      </body>
    </html>
  )
}
