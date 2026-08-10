import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Experiencia } from '@/components/sections/experiencia'
import { Proyectos } from '@/components/sections/proyectos'
import { Stack } from '@/components/sections/stack'
import { Contacto } from '@/components/sections/contacto'
import { Reveal } from '@/components/ui/reveal'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <Experiencia />
        </Reveal>
        <Reveal>
          <Proyectos />
        </Reveal>
        <Reveal>
          <Stack />
        </Reveal>
        <Reveal>
          <Contacto />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
