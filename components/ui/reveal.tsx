'use client'

import {
  useEffect,
  useRef,
  useState,
  Children,
  isValidElement,
} from 'react'

interface RevealProps {
  children: React.ReactNode
  stagger?: boolean
  step?: number // ms entre cada hijo cuando stagger=true
}

export function Reveal({ children, stagger = false, step = 90 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (!stagger) {
    return (
      <div ref={ref} className={`reveal ${visible ? 'in-view' : ''}`}>
        {children}
      </div>
    )
  }

  const items = Children.toArray(children)

  return (
    <div ref={ref}>
      {items.map((child, i) =>
        isValidElement(child) ? (
          <div
            key={child.key ?? i}
            className={`reveal ${visible ? 'in-view' : ''}`}
            style={{ transitionDelay: visible ? `${i * step}ms` : '0ms' }}
          >
            {child}
          </div>
        ) : (
          child
        )
      )}
    </div>
  )
}
