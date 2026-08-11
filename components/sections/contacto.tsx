import { ContactForm } from '@/components/ui/contact-form'

export function Contacto() {
  return (
    <section id="contacto" className="mx-auto max-w-2xl px-6 py-16">
      <h2 className="font-display text-2xl font-semibold">Contacto</h2>
      <p className="mt-2 text-muted">
        ¿Tienes un proyecto o una oportunidad en mente? Escríbeme.
      </p>
      <ContactForm />
    </section>
  )
}
