import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { PageLoader } from '@/components/ui/page-loader'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { PageViewTracker } from '@/components/ui/page-view-tracker'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

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
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-ink antialiased">
        <div className="grid-bg" aria-hidden="true" />
        <ScrollProgress />
        <CustomCursor />
        <PageViewTracker />
        <PageLoader>{children}</PageLoader>
      </body>
    </html>
  )
}
