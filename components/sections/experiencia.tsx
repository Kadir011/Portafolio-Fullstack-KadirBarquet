const experiencia = [
  {
    role: 'Desarrollador Full-Stack',
    company: 'Freelance / Autónomo',
    period: 'sep 2022 — presente',
    points: [
      'Diseñé una plataforma POS + E-Commerce con 10+ módulos integrados, eliminando el 100% de ventas duplicadas bajo concurrencia mediante idempotencia end-to-end',
      'Aumenté en 30% la eficiencia operativa reduciendo tiempos de procesamiento transaccional',
      'Implementé RBAC + JWT para control de acceso en módulos administrativos',
    ],
  },
  {
    role: 'Desarrollador de Software',
    company: 'EMOVIM EP',
    period: 'sep 2025 — nov 2025',
    points: [
      'Lideré un equipo de 2 desarrolladores en la digitalización del sistema institucional de permisos vehiculares mediante códigos QR',
      'Definí la arquitectura y el modelo de datos desde el levantamiento de requerimientos hasta el despliegue',
      'Reduje errores operativos en 15% mediante validaciones automatizadas inexistentes en el proceso manual',
    ],
  },
]

export function Experiencia() {
  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold">Experiencia</h2>
      <p className="mt-2 text-muted">
        Resultados medibles en sistemas de producción, no solo tareas.
      </p>

      <div className="mt-10 space-y-8 border-l border-border pl-6">
        {experiencia.map((exp) => (
          <div key={exp.company} className="log-item">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="font-display font-semibold">{exp.role}</h3>
              <span className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted">
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
        ))}
      </div>
    </section>
  )
}
