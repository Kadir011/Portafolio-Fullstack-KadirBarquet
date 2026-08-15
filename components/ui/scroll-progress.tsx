'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)
  const ticking = useRef(false)

  useEffect(() => {
    const container = document.getElementById('hscroll-container')
    if (!container) return
    const el: HTMLElement = container
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function update() {
      const max = el.scrollWidth - el.clientWidth
      const progress = max > 0 ? (el.scrollLeft / max) * 100 : 0
      if (barRef.current) {
        if (reduced) {
          barRef.current.style.width = `${progress}%`
        } else {
          // pequeño tween por evento de scroll: suaviza el "salto" del
          // ancho de la barra en vez de fijarlo en seco cada frame.
          animate(barRef.current, {
            width: `${progress}%`,
            duration: 200,
            ease: 'outQuad',
          })
        }
      }
      ticking.current = false
    }

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(update)
      }
    }

    update()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  )
}
