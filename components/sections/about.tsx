import { Code2, Layers, Award } from 'lucide-react'
import { TechBadge } from '@/components/ui/tech-badge'
import { TiltCard } from '@/components/ui/tilt-card'

const stats = [
  { icon: Code2, value: '3+', label: 'años de experiencia' },
  { icon: Layers, value: '4', label: 'proyectos entregados' },
  { icon: Award, value: '4', label: 'certificaciones' },
]

const stack = [
  'Python', 'Django', 'FastAPI',
  'Node.js', 'React',
  'PostgreSQL', 'Supabase',
  'Docker',
]

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold">Sobre mí</h2>
      <p className="mt-2 text-muted">
        Backend-first, orientado a sistemas que no se caen en producción.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <TiltCard key={stat.label}>
            <div className="stat-card">
              <span className="stat-card-icon">
                <stat.icon size={18} />
              </span>
              <p className="mt-4 font-display text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 font-mono text-xs text-muted">{stat.label}</p>
            </div>
          </TiltCard>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
          skills
        </h3>
        <p className="mt-3 font-mono text-sm text-muted">
          <span className="text-accent">import</span> {'{ '}
          {stack.join(', ')}
          {' }'} <span className="text-accent">from</span> &apos;produccion&apos;
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </section>
  )
}