'use client'

import { useState } from 'react'

const links = [
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="font-semibold tracking-tight">
          Kadir Barquet
        </a>

        {/* Links — visibles desde sm: */}
        <ul className="hidden gap-6 text-sm text-neutral-400 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a  href={link.href}
                className="relative transition hover:text-neutral-100 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
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
            className={`h-0.5 w-6 bg-neutral-200 transition-transform duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-neutral-200 transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-neutral-200 transition-transform duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Menú desplegable mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 sm:hidden ${
          open ? 'max-h-60 border-t border-neutral-800' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {links.map((link) => (
            <li key={link.href}>
              <a  href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-sm text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
