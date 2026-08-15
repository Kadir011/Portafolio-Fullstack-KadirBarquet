'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

interface BlobConfig {
  color: string // rgb "R G B", combina con la opacidad del gradiente
  top: string
  left: string
  size: string
  duration: number // ms de un ciclo completo de "respiración"
  drift: number // px de desplazamiento suave en cada eje
}

// Una paleta por sección: todas dentro de la familia del azul eléctrico
// de la marca, pero con un matiz distinto para que cada panel tenga
// su propia atmósfera sin salirse del sistema de color.
const VARIANTS = {
  inicio: [
    { color: '61 127 255', top: '8%', left: '18%', size: '46vmax', duration: 9000, drift: 26 },
    { color: '99 102 241', top: '55%', left: '78%', size: '38vmax', duration: 11000, drift: 22 },
  ],
  'sobre-mi': [
    { color: '79 70 229', top: '10%', left: '82%', size: '40vmax', duration: 10000, drift: 24 },
    { color: '61 127 255', top: '70%', left: '12%', size: '34vmax', duration: 8000, drift: 20 },
  ],
  formacion: [
    { color: '56 152 255', top: '15%', left: '50%', size: '42vmax', duration: 9500, drift: 22 },
    { color: '61 127 255', top: '80%', left: '85%', size: '32vmax', duration: 12000, drift: 18 },
  ],
  proyectos: [
    { color: '61 127 255', top: '5%', left: '8%', size: '44vmax', duration: 8500, drift: 26 },
    { color: '45 212 255', top: '65%', left: '92%', size: '36vmax', duration: 10500, drift: 20 },
  ],
  contacto: [
    { color: '99 102 241', top: '20%', left: '20%', size: '38vmax', duration: 9800, drift: 24 },
    { color: '61 127 255', top: '75%', left: '75%', size: '34vmax', duration: 11500, drift: 20 },
  ],
} satisfies Record<string, BlobConfig[]>

export function SectionBackdrop({ variant }: { variant: keyof typeof VARIANTS }) {
  const root = useRef<HTMLDivElement>(null)
  const blobs = VARIANTS[variant]

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const nodes = el.querySelectorAll<HTMLElement>('.section-blob')

    nodes.forEach((node, i) => {
      const cfg = blobs[i]
      if (!cfg) return

      // "Respiración": escala + opacidad oscilando en loop infinito,
      // con un leve desplazamiento para que no se sienta estático.
      animate(node, {
        scale: [1, 1.18, 1],
        opacity: [0.08, 0.16, 0.08],
        translateX: [0, cfg.drift, 0],
        translateY: [0, -cfg.drift * 0.7, 0],
        duration: cfg.duration,
        loop: true,
        ease: 'inOutSine',
        delay: i * 250,
      })
    })
  }, [blobs])

  return (
    <div ref={root} className="section-backdrop" aria-hidden="true">
      {blobs.map((b, i) => (
        <div
          key={i}
          className="section-blob"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            translate: '-50% -50%',
            background: `radial-gradient(circle, rgb(${b.color} / 0.14), transparent 65%)`,
            opacity: 0.08,
          }}
        />
      ))}
    </div>
  )
}
