'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, stagger } from 'animejs'

const links = [
  { href: '#sobre-mi', label: 'sobre-mi' },
  { href: '#formacion', label: 'formacion' },
  { href: '#proyectos', label: 'proyectos' },
  { href: '#contacto', label: 'contacto' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (open) {
      const targetHeight = menu.scrollHeight

      if (reduced) {
        menu.style.height = `${targetHeight}px`
        return
      }

      animate(menu, { height: [0, targetHeight], duration: 350, ease: 'outQuint' })
      animate('.mobile-nav-item', {
        opacity: [0, 1],
        translateX: [-8, 0],
        duration: 350,
        delay: stagger(50, { start: 100 }),
        ease: 'outQuint',
      })
    } else {
      if (reduced) {
        menu.style.height = '0px'
        return
      }
      animate(menu, { height: 0, duration: 220, ease: 'inQuad' })
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#inicio" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-muted">~/</span>kadir
        </a>

        {/* Links — visibles desde sm: */}
        <ul className="hidden gap-6 font-mono text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                <span className="text-border-hover">#</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa — solo mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="flex flex-col gap-1.5 sm:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Menú desplegable mobile — el alto y el stagger de entrada
          de cada link los anima animejs (ver useEffect de arriba) */}
      <div
        ref={menuRef}
        style={{ height: 0 }}
        className={`overflow-hidden sm:hidden ${open ? 'border-t border-border' : ''}`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3 font-mono text-sm">
          {links.map((link) => (
            <li key={link.href} className="mobile-nav-item">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-muted transition hover:bg-surface hover:text-accent"
              >
                <span className="text-border-hover">#</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
