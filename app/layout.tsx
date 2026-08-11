import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { PageLoader } from '@/components/ui/page-loader'
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
        <div className="ambient-glow" aria-hidden="true" />
        <PageLoader>{children}</PageLoader>
      </body>
    </html>
  )
}
