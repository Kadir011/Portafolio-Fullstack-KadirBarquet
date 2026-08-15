'use client'

import { useEffect, useRef, useState } from 'react'
import { createTimeline, createScope, type Scope } from 'animejs'

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const root = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const scope = useRef<Scope | null>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      const id = requestAnimationFrame(() => setLoading(false))
      return () => cancelAnimationFrame(id)
    }
    const content = contentRef.current
    if (!root.current || !content) return

    scope.current = createScope({ root: root.current }).add(() => {
      createTimeline({ defaults: { ease: 'outQuint' } })
        .add('.splash-terminal', { opacity: [0, 1], translateY: [4, 0], duration: 500 })
        .add('.splash-terminal', { opacity: 1, duration: 500 }, '+=250') // sostiene el "$ KB" un instante
        .add(
          '.splash-overlay',
          {
            opacity: [1, 0],
            duration: 500,
            onComplete: () => setLoading(false),
          },
          '+=50'
        )
        .add(
          content,
          {
            '--reveal-radius': ['0%', '150%'],
            duration: 1100,
            ease: 'outQuint',
          },
          '<'
        )
    })

    return () => scope.current?.revert()
  }, [])

  return (
    <div ref={root}>
      <div
        className={`splash-overlay ${!loading ? 'splash-hidden' : ''}`}
        aria-hidden={!loading}
      >
        <span className="splash-terminal" style={{ opacity: 0 }}>
          <span className="dim">$</span>
          KB
          <span className="splash-cursor" />
        </span>
      </div>

      <div ref={contentRef} className="page-content">
        {children}
      </div>
    </div>
  )
}
