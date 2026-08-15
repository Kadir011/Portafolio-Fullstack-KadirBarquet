import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HorizontalScroll } from '@/components/layout/horizontal-scroll'
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
        <HorizontalScroll>
          <div id="inicio" className="hscroll-panel">
            <Hero />
          </div>

          <div id="sobre-mi" className="hscroll-panel">
            <Reveal>
              <About />
            </Reveal>
          </div>

          <div id="formacion" className="hscroll-panel">
            <Reveal>
              <Formacion />
            </Reveal>
          </div>

          <div id="proyectos" className="hscroll-panel">
            <Reveal>
              <Proyectos />
            </Reveal>
          </div>

          <div id="contacto" className="hscroll-panel">
            <Reveal>
              <Contacto />
            </Reveal>
          </div>
        </HorizontalScroll>
      </main>
      <Footer />
    </>
  )
}