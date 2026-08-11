'use client'

import { useEffect, useRef } from 'react'

export function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef<number | null>(null)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced.current) return

    function loop() {
      current.current.x += (target.current.x - current.current.x) * 0.12
      current.current.y += (target.current.y - current.current.y) * 0.12

      const el = ref.current
      if (el) {
        el.style.transform = `perspective(1000px) rotateX(${current.current.x}deg) rotateY(${current.current.y}deg)`
      }

      raf.current = requestAnimationFrame(loop)
    }

    raf.current = requestAnimationFrame(loop)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
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

    target.current = {
      x: ((y - centerY) / centerY) * -5,
      y: ((x - centerX) / centerX) * 5,
    }

    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgb(255 255 255 / 0.06), transparent 55%)`
      glareRef.current.style.opacity = '1'
    }
  }

  function handleMouseLeave() {
    target.current = { x: 0, y: 0 }
    if (glareRef.current) glareRef.current.style.opacity = '0'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="tilt-card relative overflow-hidden rounded-2xl"
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
