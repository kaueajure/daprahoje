"use client"

import * as React from "react"
import { hojeStr, toMin } from "./format"

/**
 * Retorna o "agora" apenas após a montagem no cliente, evitando divergência
 * de hidratação entre servidor e navegador.
 */
export function useAgora() {
  const [now, setNow] = React.useState<Date | null>(null)

  React.useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])

  return {
    montado: now !== null,
    hoje: hojeStr(),
    agoraMin: now ? toMin(`${now.getHours()}:${now.getMinutes()}`) : 0,
    data: now,
  }
}
