import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type CVAConfig = {
  variants?: Record<string, Record<string, string>>
  defaultVariants?: Record<string, string>
}

type CVAProps = Record<string, string | null | undefined> & {
  className?: string
}

/** Minimal cva substitute (sem dependência externa). */
export function cva(base: string, config?: CVAConfig) {
  return (props?: CVAProps) => {
    const classes = [base]
    const variants = config?.variants ?? {}
    const defaults = config?.defaultVariants ?? {}
    for (const key of Object.keys(variants)) {
      const value = props?.[key] ?? defaults[key]
      if (value && variants[key][value]) classes.push(variants[key][value])
    }
    if (props?.className) classes.push(props.className)
    return cn(...classes)
  }
}

export type VariantProps<T extends (...args: never[]) => unknown> = Omit<
  NonNullable<Parameters<T>[0]>,
  "className"
>
