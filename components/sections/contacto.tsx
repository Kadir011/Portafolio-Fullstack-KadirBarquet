import { ContactForm } from '@/components/ui/contact-form'

export function Contacto() {
  return (
    <section id="contacto" className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h2 className="text-center font-display text-2xl font-semibold sm:text-left">
        Contacto
      </h2>
      <p className="mt-2 text-center text-muted sm:text-left">
        ¿Tienes un proyecto o una oportunidad en mente? Escríbeme.
      </p>

      <div className="glow-card mt-8 p-6 sm:p-8">
        <ContactForm />

        <div className="mt-6 flex flex-col gap-2 border-t border-border pt-5 font-mono text-xs text-muted sm:flex-row sm:justify-center sm:gap-6">
          <p>
            <span className="text-ink">Email:</span> barquetbravokadir@gmail.com
          </p>
          <p>
            <span className="text-ink">Ubicación:</span> Guayaquil, Ecuador
          </p>
        </div>
      </div>
    </section>
  )
}