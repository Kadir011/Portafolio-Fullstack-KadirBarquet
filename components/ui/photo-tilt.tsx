'use client'

import { useEffect, useRef } from 'react'
import { animate, spring } from 'animejs'

export function PhotoTilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced.current) return
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    animate(el, {
      perspective: 700,
      rotateX: ((y - centerY) / centerY) * -8,
      rotateY: ((x - centerX) / centerX) * 8,
      scale: 1.04,
      duration: 500,
      ease: 'out(3)',
    })
  }

  function handleMouseLeave() {
    if (reduced.current) return
    const el = ref.current
    if (!el) return
    animate(el, {
      perspective: 700,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: spring({ stiffness: 80, damping: 9 }),
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="photo-3d"
    >
      {children}
    </div>
  )
}
