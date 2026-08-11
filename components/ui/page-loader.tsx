'use client'

import { useEffect, useState } from 'react'

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div
        className={`splash-overlay ${!loading ? 'splash-hidden' : ''}`}
        aria-hidden={!loading}
      >
        <span className="splash-terminal">
          <span className="dim">$</span>
          whoami
          <span className="splash-cursor" />
        </span>
      </div>

      <div className={`page-content ${!loading ? 'page-content-visible' : ''}`}>
        {children}
      </div>
    </>
  )
}
