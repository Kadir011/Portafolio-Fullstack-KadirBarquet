import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Formacion } from '@/components/sections/formacion'
import { Proyectos } from '@/components/sections/proyectos'
import { Contacto } from '@/components/sections/contacto'
import { Reveal } from '@/components/ui/reveal'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Formacion />
        </Reveal>
        <Reveal>
          <Proyectos />
        </Reveal>
        <Reveal>
          <Contacto />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}