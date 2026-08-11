export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent">
      <span className="h-1 w-1 rounded-full bg-accent/70" />
      {label}
    </span>
  )
}
