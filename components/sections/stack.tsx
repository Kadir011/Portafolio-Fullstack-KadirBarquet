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
      <h2 className="text-2xl font-semibold">Stack</h2>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
    </section>
  )
}
