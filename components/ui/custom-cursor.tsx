'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const hovered = useRef(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || reduced) return

    document.documentElement.classList.add('custom-cursor-active')

    function onMove(e: MouseEvent) {
      // El punto sigue el mouse al instante; el marco lo persigue con
      // un ease de resorte — cada evento retarget-ea la animación en curso.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }

      if (boxRef.current) {
        animate(boxRef.current, {
          translateX: e.clientX,
          translateY: e.clientY,
          duration: 500,
          ease: 'out(3)',
          composition: 'replace',
        })
      }

      const el = document.elementFromPoint(e.clientX, e.clientY)
      const isInteractive = !!el?.closest(INTERACTIVE_SELECTOR)
      if (isInteractive !== hovered.current) {
        hovered.current = isInteractive
        boxRef.current?.classList.toggle('is-hovering', isInteractive)
      }
    }

    function onLeave() {
      dotRef.current?.classList.add('is-hidden')
      boxRef.current?.classList.add('is-hidden')
    }

    function onEnter() {
      dotRef.current?.classList.remove('is-hidden')
      boxRef.current?.classList.remove('is-hidden')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot is-hidden" aria-hidden="true" />
      <div ref={boxRef} className="cursor-box is-hidden" aria-hidden="true" />
    </>
  )
}
