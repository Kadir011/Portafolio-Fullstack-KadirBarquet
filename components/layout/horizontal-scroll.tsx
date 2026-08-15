'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

export function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const el: HTMLDivElement = container
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function onWheel(e: WheelEvent) {
      const target = e.target as HTMLElement
      const panel = target.closest('.panel-scroll') as HTMLElement | null

      // Si el panel activo tiene contenido más alto que la pantalla,
      // dejamos que se desplace verticalmente primero — solo al llegar
      // a su tope/fondo el wheel empieza a mover el carrusel horizontal.
      if (panel) {
        const needsInternalScroll = panel.scrollHeight > panel.clientHeight + 1
        if (needsInternalScroll) {
          const atTop = panel.scrollTop <= 0
          const atBottom =
            panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 1
          const scrollingDown = e.deltaY > 0
          if ((scrollingDown && !atBottom) || (!scrollingDown && !atTop)) {
            return
          }
        }
      }

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      const tag = (document.activeElement?.tagName || '').toLowerCase()
      if (tag === 'input' || tag === 'textarea') return

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        el.scrollBy({ left: window.innerWidth, behavior: 'smooth' })
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        el.scrollBy({ left: -window.innerWidth, behavior: 'smooth' })
      }
    }

    // Parallax sutil: el fondo de cada panel se desplaza un poco menos
    // que el panel mismo mientras se cruza, dando sensación de profundidad
    // al pasar de sección — es la "transición grande" ligada al scroll.
    let ticking = false
    function onScrollParallax() {
      if (reduced || ticking) return
      ticking = true
      requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>('.section-backdrop').forEach((backdrop) => {
          const rect = backdrop.getBoundingClientRect()
          const center = rect.left + rect.width / 2
          const offset = (center - window.innerWidth / 2) / window.innerWidth
          const clamped = Math.max(-1, Math.min(1, offset))
          animate(backdrop, {
            translateX: `${clamped * -30}px`,
            duration: 200,
            ease: 'outQuad',
          })
        })
        ticking = false
      })
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('scroll', onScrollParallax, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('scroll', onScrollParallax)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div id="hscroll-container" ref={ref} className="hscroll-container">
      {children}
    </div>
  )
}