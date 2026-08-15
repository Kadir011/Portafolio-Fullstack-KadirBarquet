'use client'

import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const box = useRef({ x: 0, y: 0 })
  const raf = useRef<number | null>(null)
  const hovered = useRef(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || reduced) return

    document.documentElement.classList.add('custom-cursor-active')

    function onMove(e: MouseEvent) {
      target.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
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

    function loop() {
      box.current.x += (target.current.x - box.current.x) * 0.18
      box.current.y += (target.current.y - box.current.y) * 0.18
      if (boxRef.current) {
        boxRef.current.style.transform = `translate3d(${box.current.x}px, ${box.current.y}px, 0) translate(-50%, -50%)`
      }
      raf.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)
    raf.current = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot is-hidden" aria-hidden="true" />
      <div ref={boxRef} className="cursor-box is-hidden" aria-hidden="true" />
    </>
  )
}