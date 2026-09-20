"use client"

import * as React from "react"

/**
 * Renderiza os filhos apenas após a montagem no cliente.
 *
 * O app calcula "hoje" a partir do horário local, que pode divergir entre o
 * servidor (UTC) e o navegador do usuário. Adiar a renderização para depois da
 * montagem garante que servidor e cliente produzam o mesmo HTML inicial,
 * evitando erros de hidratação.
 */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
}) {
  const [montado, setMontado] = React.useState(false)

  React.useEffect(() => {
    setMontado(true)
  }, [])

  if (!montado) return <>{fallback}</>
  return <>{children}</>
}
