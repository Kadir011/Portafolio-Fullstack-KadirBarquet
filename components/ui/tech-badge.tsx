export function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/50 hover:text-blue-300">
      {label}
    </span>
  )
}
