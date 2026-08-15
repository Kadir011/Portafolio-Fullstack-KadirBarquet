'use client'

import { useEffect, useRef } from 'react'
import { animate, spring } from 'animejs'

export function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
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

    // animejs "sigue" al puntero con un ease de salida: reemplaza el
    // lerp manual por frame — cada llamada retarget-ea la animación en curso.
    animate(el, {
      perspective: 1000,
      rotateX: ((y - centerY) / centerY) * -5,
      rotateY: ((x - centerX) / centerX) * 5,
      duration: 400,
      ease: 'out(3)',
    })

    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgb(255 255 255 / 0.06), transparent 55%)`
      glareRef.current.style.opacity = '1'
    }
  }

  function handleMouseLeave() {
    if (!reduced.current && ref.current) {
      animate(ref.current, {
        perspective: 1000,
        rotateX: 0,
        rotateY: 0,
        ease: spring({ stiffness: 90, damping: 10 }),
      })
    }
    if (glareRef.current) glareRef.current.style.opacity = '0'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card relative overflow-hidden rounded-2xl ${className}`}
    >
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
      {children}
    </div>
  )
}