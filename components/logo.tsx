import { cn } from "@/lib/utils"

const LOGO_SRC = "/brand/logo.png"

/** Proporção natural do monograma após trim (960×413 ≈ 2.32:1). */
const LOGO_W = 960
const LOGO_H = 413

/**
 * Alturas pensadas para o monograma largo:
 * confortáveis em header/sidebar sem competir com tipografia.
 */
const FRAME = {
  xs: "h-3.5 w-auto",
  sm: "h-5 w-auto",
  md: "h-6 w-auto",
  sidebar: "h-[26px] w-auto",
  lg: "h-7 w-auto",
  xl: "h-9 w-auto",
  "2xl": "h-10 w-auto",
} as const

export type LogoSize = keyof typeof FRAME

export function LogoMark({
  className,
  size = "md",
}: {
  className?: string
  size?: LogoSize
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- PNG original, sem conversão
    <img
      src={LOGO_SRC}
      alt="Da Pra Hoje"
      width={LOGO_W}
      height={LOGO_H}
      draggable={false}
      className={cn(
        "block shrink-0 object-contain select-none",
        FRAME[size],
        className,
      )}
    />
  )
}

export function Logo({
  className,
  size = "sidebar",
}: {
  className?: string
  size?: LogoSize
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <LogoMark size={size} />
      <span className="sr-only">Da Pra Hoje</span>
    </span>
  )
}
