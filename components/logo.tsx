import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[10px] bg-primary text-primary-foreground",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-[55%] w-[55%]">
        <circle
          cx="12"
          cy="12"
          r="8.25"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 7.5v5l3.2 1.9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export function Logo({
  className,
  showMark = true,
}: {
  className?: string
  showMark?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showMark && <LogoMark className="size-8" />}
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        Da Pra Hoje
      </span>
    </span>
  )
}
