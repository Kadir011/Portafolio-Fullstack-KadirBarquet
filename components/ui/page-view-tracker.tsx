'use client'

import { useEffect } from 'react'

const SESSION_KEY = 'pv_portafolio'
const PROJECT_SLUG = 'portafolio'

export function PageViewTracker() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // sessionStorage no disponible (modo privado, navegador restringido, etc.)
      // seguimos e igual intentamos registrar la vista
    }

    fetch('/api/pageview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ project_slug: PROJECT_SLUG }),
    }).catch(() => {
      // Falla silenciosa: el tracking nunca debe romper la experiencia del usuario
    })
  }, [])

  return null
}
