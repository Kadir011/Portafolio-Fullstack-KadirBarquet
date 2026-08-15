'use client'

import Image from 'next/image'
import { Download } from 'lucide-react'
import { SocialLinks } from '@/components/ui/social-links'
import { PhotoTilt } from '@/components/ui/photo-tilt'

const facts = [
  { label: '+3 años de experiencia' },
  { label: 'Liderazgo técnico de equipo' },
  { label: 'Guayaquil, Ecuador' },
]

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
      <div className="animate-fade-in-up flex justify-center">
        <PhotoTilt>
          <div className="device-frame">
            <Image
              src="/images/kadirbarquet.jpg"
              alt="Kadir Barquet Bravo"
              width={128}
              height={128}
              priority
              className="h-28 w-28 rounded-2xl object-cover sm:h-32 sm:w-32"
            />
            <span className="status-dot" aria-hidden="true" />
          </div>
        </PhotoTilt>
      </div>

      <p className="animate-fade-in-up animate-delay-100 mt-7 font-mono text-xs text-accent">
        <span className="text-muted">$</span> KB
      </p>

      <h1 className="animate-fade-in-up animate-delay-100 mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Kadir <span className="text-accent">Barquet Bravo</span>
      </h1>

      <p className="animate-fade-in-up animate-delay-100 mt-3 font-mono text-sm text-muted">
        full_stack_developer <span className="text-border-hover">·</span> backend-first
      </p>

      <p className="animate-fade-in-up animate-delay-200 mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">
        Construyo sistemas comerciales y plataformas transaccionales con
        Django, Node.js y React — priorizando consistencia de datos,
        idempotencia y arquitectura lista para producción.
      </p>

      <div className="animate-fade-in-up animate-delay-200 mt-6 flex flex-wrap justify-center gap-2">
        {facts.map((fact) => (
          <span
            key={fact.label}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted"
          >
            <span className="h-1 w-1 rounded-full bg-accent" />
            {fact.label}
          </span>
        ))}
      </div>

      <div className="animate-fade-in-up animate-delay-300 mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        <a
          href="#proyectos"
          onClick={(e) => {
            e.preventDefault()
            document
              .getElementById('proyectos')
              ?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
          }}
          className="group rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-[#05130d] transition-all duration-200 hover:brightness-110 active:brightness-95"
        >
          Ver proyectos
          <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </a>

        <a
          href="/cv/CV-Kadir-Barquet.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-lg border border-border-hover px-5 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:border-accent/50 hover:text-accent"
        >
          <Download size={16} />
          Descargar CV
        </a>
      </div>

      <SocialLinks className="animate-fade-in-up animate-delay-300 mt-6 justify-center" />
    </section>
  )
}