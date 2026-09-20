export function CarregandoTela() {
  return (
    <div className="flex flex-col gap-4" aria-busy="true" aria-label="Carregando">
      <div className="space-y-2">
        <div className="h-4 w-32 animate-pulse rounded-md bg-muted" />
        <div className="h-8 w-56 animate-pulse rounded-md bg-muted" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-16 animate-pulse rounded-[14px] bg-muted" />
        <div className="h-16 animate-pulse rounded-[14px] bg-muted" />
        <div className="h-16 animate-pulse rounded-[14px] bg-muted" />
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="h-44 animate-pulse rounded-[16px] bg-muted" />
        <div className="h-44 animate-pulse rounded-[16px] bg-muted" />
      </div>
      <div className="h-64 animate-pulse rounded-[16px] bg-muted" />
    </div>
  )
}
