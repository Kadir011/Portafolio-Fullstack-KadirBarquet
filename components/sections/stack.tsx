import { TechBadge } from '@/components/ui/tech-badge'

const stack = [
  'Python', 'Django', 'FastAPI',
  'Node.js', 'React',
  'PostgreSQL', 'Supabase',
  'Docker',
]

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold">Stack</h2>
      <p className="mt-2 font-mono text-sm text-muted">
        <span className="text-accent">import</span> {'{ '}
        {stack.join(', ')}
        {' }'} <span className="text-accent">from</span> &apos;produccion&apos;
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
    </section>
  )
}
