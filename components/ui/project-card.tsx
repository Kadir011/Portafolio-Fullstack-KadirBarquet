import Image from 'next/image'
import type { Project } from '@/types/project'
import { TechBadge } from './tech-badge'

export function ProjectCard({ project }: { project: Project }) {
  const isFlagship = project.role === 'flagship'

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/80 ${
        isFlagship ? 'ring-1 ring-blue-500/30' : ''
      }`}
    >
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-neutral-800 bg-neutral-900">
          <Image
            src={project.image}
            alt={`Captura de pantalla de ${project.name}`}
            fill
            className="object-cover object-top transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      <div className={`p-5 sm:p-6 ${isFlagship ? 'md:p-8' : ''}`}>
        {isFlagship && (
          <span className="mb-3 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            Proyecto de titulación
          </span>
        )}

        <h3 className={isFlagship ? 'text-2xl font-semibold' : 'text-xl font-semibold'}>
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-neutral-400">{project.tagline}</p>

        {project.problem && (
          <p className="mt-4 text-sm text-neutral-300">{project.problem}</p>
        )}

        {project.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-neutral-400">
            {project.highlights.slice(0, isFlagship ? 4 : 2).map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-blue-400">→</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        {project.stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row">
          {project.status === 'live' && project.liveUrl ? (
            
            <a  href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:translate-y-0"
            >
              Ver demo
            </a>
          ) : (
            <span className="rounded-lg bg-neutral-800 px-4 py-2 text-center font-medium text-neutral-500">
              Próximamente
            </span>
          )}
          
          <a  href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-neutral-700 px-4 py-2 text-center font-medium text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-500 active:translate-y-0"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}