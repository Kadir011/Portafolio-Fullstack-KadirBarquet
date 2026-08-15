import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
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
        <div id="inicio" className="vscroll-panel">
          <SectionBackdrop variant="inicio" />
          <div className="panel-content">
            <Hero />
          </div>
        </div>

        <div id="sobre-mi" className="vscroll-panel">
          <SectionBackdrop variant="sobre-mi" />
          <div className="panel-content">
            <Reveal>
              <About />
            </Reveal>
          </div>
        </div>

        <div id="formacion" className="vscroll-panel">
          <SectionBackdrop variant="formacion" />
          <div className="panel-content">
            <Reveal>
              <Formacion />
            </Reveal>
          </div>
        </div>

        <div id="proyectos" className="vscroll-panel">
          <SectionBackdrop variant="proyectos" />
          <div className="panel-content">
            <Reveal>
              <Proyectos />
            </Reveal>
          </div>
        </div>

        <div id="contacto" className="vscroll-panel">
          <SectionBackdrop variant="contacto" />
          <div className="panel-content">
            <Reveal>
              <Contacto />
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}