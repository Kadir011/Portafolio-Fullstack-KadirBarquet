'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { animate, stagger, createScope, type Scope } from 'animejs'
import { SocialLinks } from '@/components/ui/social-links'
import { PhotoTilt } from '@/components/ui/photo-tilt'

const facts = [
  { label: 'Backend-first · Django & Node.js' },
  { label: 'Coordinación técnica de equipo' },
  { label: 'Guayaquil, Ecuador' },
]

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const scope = useRef<Scope | null>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.querySelectorAll<HTMLElement>('.hero-item').forEach((item) => (item.style.opacity = '1'))
      return
    }

    scope.current = createScope({ root: el }).add(() => {
      animate('.hero-item', {
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 700,
        delay: stagger(90),
        ease: 'outQuint',
      })
    })

    return () => scope.current?.revert()
  }, [])

  return (
    <section
      ref={root}
      className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 md:flex-row md:items-center md:gap-14 md:py-24"
    >
      {/* Halos de color detrás de la foto — el fondo "wireframe" del boceto */}
      <div
        className="glow-blob left-1/2 top-10 h-72 w-72 -translate-x-1/2 bg-accent/25 md:left-0 md:top-1/2 md:h-80 md:w-80 md:-translate-x-1/4 md:-translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="glow-blob bottom-0 right-1/2 h-56 w-56 translate-x-1/3 bg-violet/20 md:bottom-auto md:right-0 md:top-1/3 md:h-64 md:w-64 md:translate-x-1/4"
        aria-hidden="true"
      />

      <div className="hero-item flex shrink-0 justify-center md:justify-start">
        <PhotoTilt>
          <div className="device-frame">
            <Image
              src="/images/kadirbarquet.jpg"
              alt="Kadir Barquet Bravo"
              width={220}
              height={220}
              priority
              className="h-44 w-44 rounded-2xl object-cover sm:h-52 sm:w-52 md:h-64 md:w-64"
            />
            <span className="status-dot" aria-hidden="true" />
          </div>
        </PhotoTilt>
      </div>

      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <p className="hero-item font-mono text-xs text-accent">
          <span className="text-muted">$</span> KB
        </p>

        <h1 className="hero-item mt-2 text-balance font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">
          Kadir <span className="text-accent">Barquet</span>
        </h1>

        <p className="hero-item mt-3 font-mono text-sm uppercase tracking-wide text-muted sm:text-base">
          full-stack software developer <span className="text-border-hover">·</span> backend-first
        </p>

        <p className="hero-item mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg md:mx-0">
          Construyo sistemas comerciales y plataformas transaccionales con
          Django, Node.js y React — priorizando consistencia de datos,
          idempotencia y arquitectura lista para producción.
        </p>

        <div className="hero-item mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
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

        <div className="hero-item mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
          
          <a  href="#proyectos"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('proyectos')
                ?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
            }}
            className="group rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-medium text-bg shadow-[0_0_24px_-6px_var(--color-accent)] transition-all duration-200 hover:brightness-110 active:brightness-95"
          >
            Ver proyectos
            <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>

          
          <a  href="/cv/CV-Kadir-Barquet.pdf"
            download
            className="flex items-center justify-center gap-2 rounded-lg border border-border-hover px-5 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:border-accent/50 hover:text-accent"
          >
            <Download size={16} />
            Descargar CV
          </a>
        </div>

        <SocialLinks className="hero-item mt-6 justify-center md:justify-start" />
      </div>
    </section>
  )
}