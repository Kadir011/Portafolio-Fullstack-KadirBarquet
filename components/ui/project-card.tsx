'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { animate, spring } from 'animejs'
import type { Project } from '@/types/project'
import { TechBadge } from './tech-badge'

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null)
  const isFlagship = project.role === 'flagship'
  const isLive = project.status === 'live'

  function handleMouseEnter() {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    animate(el, {
      translateY: -4,
      duration: 300,
      ease: spring({ stiffness: 200, damping: 16 }),
    })
  }

  function handleMouseLeave() {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    animate(el, {
      translateY: 0,
      duration: 400,
      ease: spring({ stiffness: 200, damping: 16 }),
    })
  }

  return (
    <article
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors duration-300 hover:border-border-hover hover:bg-surface ${
        isFlagship ? 'ring-1 ring-accent/25' : ''
      }`}
    >
      <div className="term-bar">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="ml-2 truncate font-mono text-xs text-muted">
          ~/proyectos/{project.slug}
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-muted">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isLive ? 'bg-accent' : 'bg-border-hover'
            }`}
          />
          {isLive ? 'live' : 'local'}
        </span>
      </div>

      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-bg">
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
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-accent-dim px-2.5 py-1 font-mono text-[11px] text-accent">
            proyecto de titulación
          </span>
        )}

        <h3 className={`font-display font-semibold ${isFlagship ? 'text-2xl' : 'text-xl'}`}>
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>

        {project.problem && (
          <p className="mt-4 text-sm text-ink/80">{project.problem}</p>
        )}

        {project.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-muted">
            {project.highlights.slice(0, isFlagship ? 4 : 2).map((h) => (
              <li key={h} className="flex gap-2">
                <span className="font-mono text-accent">→</span>
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
          {isLive && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-4 py-2 text-center font-medium text-bg transition-all duration-200 hover:brightness-110 active:brightness-95"
            >
              Ver demo
            </a>
          ) : (
            <span className="rounded-lg border border-border px-4 py-2 text-center font-mono text-xs text-muted">
              en desarrollo local
            </span>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border-hover px-4 py-2 text-center font-medium text-ink transition-all duration-200 hover:border-accent/50 hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
