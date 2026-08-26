import { GraduationCap, Briefcase, Award } from 'lucide-react'

const timeline = [
  {
    icon: GraduationCap,
    type: 'educación',
    title: 'Ingeniería en Software',
    subtitle: 'Universidad Estatal de Milagro',
    period: '2020 — 2026',
    points: ['Grado sustentado (jul 2026) · título en trámite'],
  },
  {
    icon: Briefcase,
    type: 'experiencia',
    title: 'Desarrollador Full-Stack',
    subtitle: 'Freelance / Autónomo',
    period: 'sep 2022 — presente',
    points: [
      'POS + E-Commerce con 10+ módulos, con idempotencia end-to-end para prevenir duplicidad de ventas bajo concurrencia',
      'RBAC + JWT y pipeline CI/CD para arquitectura desacoplada frontend/backend',
    ],
  },
  {
    icon: Briefcase,
    type: 'experiencia',
    title: 'Desarrollador de Software',
    subtitle: 'EMOVIM EP (Prácticas Preprofesionales)',
    period: 'sep 2025 — nov 2025',
    points: [
      'Coordiné técnicamente a un equipo de 2 devs en la digitalización del sistema de permisos vehiculares vía QR',
      'Reduje errores operativos mediante validaciones automatizadas, cumpliendo el alcance dentro del plazo institucional',
    ],
  },
]

const certificaciones = [
  { name: 'Foundational C# with Microsoft', entity: 'FreeCodeCamp & Microsoft Learn', year: '2026' },
  { name: 'Python', entity: 'FreeCodeCamp', year: '2026' },
  { name: 'Desarrollo Back-end', entity: 'Capacítate para el Empleo', year: '2026' },
  { name: 'Desarrollo Front-end', entity: 'Capacítate para el Empleo', year: '2026' },
]

export function Formacion() {
  return (
    <section id="formacion" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold">Formación</h2>
      <p className="mt-2 text-muted">
        Educación y experiencia, en orden cronológico.
      </p>

      <div className="timeline mt-12">
        {timeline.map((item) => (
          <div key={item.title} className="timeline-item">
            <div className="glow-card p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-accent">
                  <item.icon size={13} />
                  {item.type}
                </span>
                <span className="rounded border border-border bg-bg px-2 py-0.5 font-mono text-[11px] text-muted">
                  {item.period}
                </span>
              </div>
              <h3 className="mt-3 font-display font-semibold">{item.title}</h3>
              <p className="font-mono text-sm text-muted">{item.subtitle}</p>
              {item.points && (
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-0.5 font-mono text-accent">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-accent">
          <Award size={14} />
          certificaciones
        </h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {certificaciones.map((cert) => (
            <div
              key={cert.name}
              className="glow-card px-4 py-3"
            >
              <p className="text-sm font-medium text-ink">{cert.name}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {cert.entity} <span className="text-border-hover">·</span> {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}