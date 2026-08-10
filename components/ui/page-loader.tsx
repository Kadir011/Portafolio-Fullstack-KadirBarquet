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
        <span className="splash-monogram">KB</span>
      </div>

      <div className={`page-content ${!loading ? 'page-content-visible' : ''}`}>
        {children}
      </div>
    </>
  )
}
