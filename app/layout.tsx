import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PageLoader } from '@/components/ui/page-loader'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kadir Barquet — Full Stack Developer',
  description:
    'Portafolio de Kadir Barquet, desarrollador full-stack especializado en Django, Node.js, React y sistemas con IA integrada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <div className="animated-bg" aria-hidden="true">
          <div className="animated-bg-extra" />
        </div>
        <PageLoader>{children}</PageLoader>
      </body>
    </html>
  )
}
