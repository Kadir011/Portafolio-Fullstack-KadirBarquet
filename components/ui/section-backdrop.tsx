'use client'

import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

const COLS = 14
const ROWS = 9

// Punto de origen de la onda dentro de la grilla lógica (COLS x ROWS),
// distinto por sección — así cada panel "respira" desde un lugar propio.
const VARIANTS = {
  inicio: 'center',
  'sobre-mi': [2, 2],
  formacion: [COLS - 2, 2],
  proyectos: 'center',
  contacto: [Math.round(COLS / 2), ROWS - 2],
} satisfies Record<string, 'center' | [number, number]>

export function SectionBackdrop({ variant }: { variant: keyof typeof VARIANTS }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const options = { grid: [COLS, ROWS] as [number, number], from: VARIANTS[variant] }

    // Ejemplo tomado de la home de animejs.com: stagger() con la opción
    // "grid" hace que cada punto reciba un delay/valor distinto según su
    // distancia al origen — con loop + alternate, eso se lee como una
    // onda expansiva que va y viene sin parar.
    const animation = animate('.dot-cell', {
      scale: stagger([1, 2.6], options),
      opacity: stagger([0.12, 0.6], options),
      duration: 1500,
      delay: stagger(200, options),
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    })

    return () => {
      animation.revert()
    }
  }, [variant])

  const cells = Array.from({ length: COLS * ROWS })

  return (
    <div ref={root} className="section-backdrop" aria-hidden="true">
      <div
        className="dot-grid-backdrop"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {cells.map((_, i) => (
          <span key={i} className="dot-cell" />
        ))}
      </div>
    </div>
  )
}
