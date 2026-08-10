'use client'

import { useEffect, useState } from 'react'

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div
        className={`loader-overlay ${!loading ? 'loader-hidden' : ''}`}
        aria-hidden={!loading}
      >
        <div className="loader-monogram">
          <span className="loader-monogram-inner">KB</span>
        </div>
      </div>

      <div className={`page-content ${!loading ? 'page-content-visible' : ''}`}>
        {children}
      </div>
    </>
  )
}
