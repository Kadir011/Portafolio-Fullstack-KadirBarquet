import { proyectos } from '@/lib/data/proyectos'
import { ProjectCard } from '@/components/ui/project-card'
import { TiltCard } from '@/components/ui/tilt-card'

export function Proyectos() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold">Proyectos</h2>
      <p className="mt-2 text-neutral-400">
        Sistemas completos, desplegados y funcionando — no ejercicios de
        tutorial.
      </p>

      <div className="mt-10 grid gap-6">
        {proyectos.map((project) => (
          <TiltCard key={project.slug}>
            <ProjectCard project={project} />
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
