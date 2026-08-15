import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HorizontalScroll } from '@/components/layout/horizontal-scroll'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Formacion } from '@/components/sections/formacion'
import { Proyectos } from '@/components/sections/proyectos'
import { Contacto } from '@/components/sections/contacto'
import { Reveal } from '@/components/ui/reveal'
import { SectionBackdrop } from '@/components/ui/section-backdrop'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HorizontalScroll>
          <div id="inicio" className="hscroll-panel">
            <SectionBackdrop variant="inicio" />
            <div className="panel-scroll">
              <Hero />
            </div>
          </div>

          <div id="sobre-mi" className="hscroll-panel">
            <SectionBackdrop variant="sobre-mi" />
            <div className="panel-scroll">
              <Reveal>
                <About />
              </Reveal>
            </div>
          </div>

          <div id="formacion" className="hscroll-panel">
            <SectionBackdrop variant="formacion" />
            <div className="panel-scroll">
              <Reveal>
                <Formacion />
              </Reveal>
            </div>
          </div>

          <div id="proyectos" className="hscroll-panel">
            <SectionBackdrop variant="proyectos" />
            <div className="panel-scroll">
              <Reveal>
                <Proyectos />
              </Reveal>
            </div>
          </div>

          <div id="contacto" className="hscroll-panel">
            <SectionBackdrop variant="contacto" />
            <div className="panel-scroll">
              <Reveal>
                <Contacto />
              </Reveal>
            </div>
          </div>
        </HorizontalScroll>
      </main>
      <Footer />
    </>
  )
}
