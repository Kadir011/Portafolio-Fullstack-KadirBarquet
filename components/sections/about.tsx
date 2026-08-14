import { GraduationCap, BadgeCheck } from 'lucide-react'
import { TechBadge } from '@/components/ui/tech-badge'
import { TiltCard } from '@/components/ui/tilt-card'
import { Reveal } from '@/components/ui/reveal'
import { timelineAcademico, experiencia, stack } from '@/lib/data/about'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold">About</h2>
      <p className="mt-2 text-muted">
        Educación, trayectoria y las tecnologías con las que construyo en producción.
      </p>

      {/* ── Formación: educación + certificaciones en un solo timeline ── */}
      <div className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
          Formación
        </h3>

        <div role="list" className="relative mt-6 border-l border-border pl-6">
          <Reveal stagger step={90}>
            {timelineAcademico.map((item) => (
              <div
                key={item.titulo}
                role="listitem"
                className={`log-item relative pb-6 last:pb-0 ${
                  item.kind === 'certificacion' ? 'log-item--hollow' : ''
                }`}
              >
                <TiltCard>
                  <div className="timeline-card">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h4 className="flex items-center gap-1.5 font-display text-sm font-semibold">
                        {item.kind === 'educacion' ? (
                          <GraduationCap size={14} className="text-accent" />
                        ) : (
                          <BadgeCheck size={14} className="text-muted" />
                        )}
                        {item.titulo}
                      </h4>
                      <span className="rounded border border-border bg-bg px-2 py-0.5 font-mono text-[11px] text-muted">
                        {item.periodo}
                      </span>
                    </div>

                    <p className="mt-0.5 font-mono text-xs text-muted">
                      {item.subtitulo}
                    </p>

                    {item.estado && (
                      <span className="mt-2 inline-block rounded border border-amber/30 bg-amber/10 px-1.5 py-0.5 font-mono text-[10px] text-amber">
                        {item.estado}
                      </span>
                    )}

                    {item.detalle && (
                      <p className="mt-2 text-sm text-muted">{item.detalle}</p>
                    )}
                  </div>
                </TiltCard>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* ── Experiencia ── */}
      <div className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
          Experiencia
        </h3>
        <div className="mt-4 space-y-6 border-l border-border pl-6">
          <Reveal stagger step={100}>
            {experiencia.map((exp) => (
              <div key={exp.company} className="log-item pb-2 last:pb-0">
                <TiltCard>
                  <div className="timeline-card">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h4 className="font-display font-semibold">{exp.role}</h4>
                      <span className="rounded border border-border bg-bg px-2 py-0.5 font-mono text-[11px] text-muted">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-mono text-sm text-accent">@{exp.company}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted">
                      {exp.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-0.5 font-mono text-accent">→</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* ── Skills / Stack ── */}
      <div className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
          Skills
        </h3>
        <p className="mt-3 font-mono text-sm text-muted">
          <span className="text-accent">import</span> {'{ '}
          {stack.join(', ')}
          {' }'} <span className="text-accent">from</span> &apos;produccion&apos;
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Reveal stagger step={40}>
            {stack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
