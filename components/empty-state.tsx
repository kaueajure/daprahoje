import { Button } from "@/components/ui/button"

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}) {
  return (
    <div className="card-surface rounded-[14px] border-dashed px-5 py-8 text-center md:py-10">
      <p className="text-base font-medium">{title}</p>
      {description && (
        <p className="mx-auto mt-1.5 max-w-sm text-sm text-muted-foreground text-pretty">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <Button className="mt-4" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
