'use client'

import { useEffect, useRef } from 'react'

export function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const el: HTMLDivElement = container

    function onWheel(e: WheelEvent) {
      const target = e.target as HTMLElement
      const panel = target.closest('.hscroll-panel') as HTMLElement | null

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

    el.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      el.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div id="hscroll-container" ref={ref} className="hscroll-container">
      {children}
    </div>
  )
}