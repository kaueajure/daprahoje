import * as React from "react"
import { cva, type VariantProps, cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-[12px] border border-transparent text-sm font-medium whitespace-nowrap transition-all duration-150 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border-border bg-card hover:bg-muted hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 gap-2 px-4",
        xs: "h-8 gap-1 rounded-[10px] px-2.5 text-xs",
        sm: "h-9 gap-1.5 rounded-[10px] px-3 text-[0.8125rem]",
        lg: "h-12 gap-2 px-5 text-[0.9375rem]",
        icon: "size-11",
        "icon-xs": "size-8 rounded-[10px]",
        "icon-sm": "size-9 rounded-[10px]",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      type={type}
      data-slot="button"
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}

export { Button, buttonVariants }
