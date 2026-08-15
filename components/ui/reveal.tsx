'use client'

import {
  useEffect,
  useRef,
  Children,
  isValidElement,
} from 'react'
import { animate, stagger, createScope, type Scope } from 'animejs'

interface RevealProps {
  children: React.ReactNode
  stagger?: boolean
  step?: number // ms entre cada hijo cuando stagger=true
}

export function Reveal({ children, stagger: staggered = false, step = 90 }: RevealProps) {
  const root = useRef<HTMLDivElement>(null)
  const scope = useRef<Scope | null>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        if (reduced) {
          el.querySelectorAll<HTMLElement>('.reveal').forEach((node) => {
            node.style.opacity = '1'
            node.style.transform = 'none'
          })
          return
        }

        scope.current = createScope({ root: el }).add(() => {
          animate('.reveal', {
            opacity: [0, 1],
            translateY: [28, 0],
            duration: 800,
            delay: stagger(step),
            ease: 'outQuint',
          })
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      scope.current?.revert()
    }
  }, [step])

  if (!staggered) {
    return (
      <div ref={root}>
        <div className="reveal">{children}</div>
      </div>
    )
  }

  const items = Children.toArray(children)

  return (
    <div ref={root}>
      {items.map((child, i) =>
        isValidElement(child) ? (
          <div key={child.key ?? i} className="reveal">
            {child}
          </div>
        ) : (
          child
        )
      )}
    </div>
  )
}
