import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type CVAConfig<V extends Record<string, Record<string, string>>> = {
  variants?: V
  defaultVariants?: Partial<{ [K in keyof V]: keyof V[K] & string }>
}

type CVAProps<V extends Record<string, Record<string, string>>> = Partial<{
  [K in keyof V]: (keyof V[K] & string) | null
}> & {
  className?: string
}

/** Minimal cva substitute (sem dependência externa). */
export function cva<V extends Record<string, Record<string, string>>>(
  base: string,
  config?: CVAConfig<V>,
) {
  return (props?: CVAProps<V>) => {
    const classes = [base]
    const variants = (config?.variants ?? {}) as V
    const defaults = (config?.defaultVariants ?? {}) as Partial<{
      [K in keyof V]: keyof V[K] & string
    }>

    for (const key of Object.keys(variants) as Array<keyof V & string>) {
      const chosen = (props?.[key] ?? defaults[key]) as string | null | undefined
      const map = variants[key]
      if (chosen && map && chosen in map) {
        classes.push(map[chosen])
      }
    }

    if (props?.className) classes.push(props.className)
    return cn(...classes)
  }
}

export type VariantProps<T extends (...args: never[]) => unknown> = Omit<
  NonNullable<Parameters<T>[0]>,
  "className"
>
