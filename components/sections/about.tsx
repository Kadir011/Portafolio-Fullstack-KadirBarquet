import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiPytest,
  SiJsonwebtokens,
} from 'react-icons/si'
import { TiltCard } from '@/components/ui/tilt-card'

const stats = [
  { shape: 'blue', value: '3', label: 'sistemas en producción' },
  { shape: 'violet', value: '4', label: 'proyectos entregados' },
  { shape: 'cyan', value: '4', label: 'certificaciones' },
] as const

const skills = [
  { icon: SiPython, label: 'Python' },
  { icon: SiDjango, label: 'Django' },
  { icon: SiFastapi, label: 'FastAPI' },
  { icon: SiNodedotjs, label: 'Node.js' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiDocker, label: 'Docker' },
  { icon: SiJsonwebtokens, label: 'JWT / RBAC' },
  { icon: SiPytest, label: 'Pytest' },
]

const skillColors = ['var(--color-accent)', 'var(--color-violet)', 'var(--color-cyan)']

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold">Sobre mí</h2>
      <p className="mt-2 text-muted">
        Backend-first, orientado a sistemas que no se caen en producción.
      </p>

      <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6">
        {stats.map((stat) => (
          <TiltCard key={stat.label}>
            <div className="stat-orb-wrap p-4">
              <div className={`stat-orb stat-orb-${stat.shape}`}>{stat.value}</div>
              <span className="stat-orb-label">{stat.label}</span>
            </div>
          </TiltCard>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-center font-display text-lg font-semibold sm:text-left">
          Habilidades y Tecnologías
        </h3>
        <div className="mt-6 grid grid-cols-4 gap-x-2 gap-y-6 sm:gap-x-4">
          {skills.map((skill, i) => {
            const color = skillColors[i % skillColors.length]
            return (
              <div key={skill.label} className="skill-icon-wrap">
                <skill.icon
                  size={34}
                  className="skill-icon-glow"
                  style={{ color }}
                  aria-hidden="true"
                />
                <span className="font-mono text-[11px] text-muted">{skill.label}</span>
              </div>
            )
          })}
        </div>
        <p className="mt-6 text-center font-mono text-[11px] text-muted sm:text-left">
          Scrum · Kanban · Desarrollo asistido por agentes de IA con revisión y validación propia
        </p>
      </div>
    </section>
  )
}