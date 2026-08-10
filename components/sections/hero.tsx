import Image from 'next/image'
import { Download } from 'lucide-react'
import { SocialLinks } from '@/components/ui/social-links'

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
      <div className="animate-fade-in-up flex justify-center">
        <div className="photo-3d-wrapper">
          <div className="photo-3d photo-glow rounded-full p-1">
            <Image
              src="/images/kadirbarquet.jpg"
              alt="Kadir Barquet Bravo"
              width={128}
              height={128}
              priority
              className="h-28 w-28 rounded-full border-4 border-neutral-950 object-cover sm:h-32 sm:w-32"
            />
          </div>
        </div>
      </div>

      <p className="animate-fade-in-up animate-delay-100 mt-6 text-sm font-medium text-blue-400">
        Full Stack Developer · Especializado en Backend
      </p>

      <h1 className="animate-fade-in-up animate-delay-100 gradient-text mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Kadir Barquet Bravo
      </h1>

      <p className="animate-fade-in-up animate-delay-200 mx-auto mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg">
        Construyo sistemas comerciales y plataformas transaccionales con
        Django, Node.js y React — priorizando consistencia de datos,
        idempotencia y arquitectura lista para producción.
      </p>

      <div className="animate-fade-in-up animate-delay-200 mt-6 flex flex-wrap justify-center gap-2 text-xs text-neutral-400">
        <span className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1">
          +3 años de experiencia
        </span>
        <span className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1">
          Liderazgo técnico de equipo
        </span>
        <span className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1">
          Guayaquil, Ecuador
        </span>
      </div>

      <div className="animate-fade-in-up animate-delay-300 mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        
      <a href="#proyectos"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 active:translate-y-0"
        >
          Ver proyectos
        </a>
        
        <a href="/cv/CV-Kadir-Barquet.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-lg border border-neutral-700 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-500 active:translate-y-0"
        >
          <Download size={16} />
          Descargar CV
        </a>
      </div>

      <SocialLinks className="animate-fade-in-up animate-delay-300 mt-6 justify-center" />
    </section>
  )
}
