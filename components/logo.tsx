import { cn } from "@/lib/utils"

const LOGO_WEBP = "/brand/logo.webp"
const LOGO_PNG = "/brand/logo.png"

/** Proporção natural do monograma (480×206 ≈ 2.33:1). */
const LOGO_W = 480
const LOGO_H = 206

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
    <picture>
      <source srcSet={LOGO_WEBP} type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element -- WebP/PNG leve com width/height (sem CLS) */}
      <img
        src={LOGO_PNG}
        alt="Da Pra Hoje"
        width={LOGO_W}
        height={LOGO_H}
        draggable={false}
        decoding="async"
        className={cn(
          "block shrink-0 object-contain select-none",
          FRAME[size],
          className,
        )}
      />
    </picture>
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
