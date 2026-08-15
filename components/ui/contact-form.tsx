'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setStatus('sent')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        required
        placeholder="Nombre"
        className="w-full rounded-lg border border-border bg-bg/60 px-4 py-2.5 text-sm text-ink outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-dim)]"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="w-full rounded-lg border border-border bg-bg/60 px-4 py-2.5 text-sm text-ink outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-dim)]"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Mensaje"
        className="w-full rounded-lg border border-border bg-bg/60 px-4 py-2.5 text-sm text-ink outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-dim)]"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg bg-gradient-to-r from-accent to-violet px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_var(--color-accent)] transition hover:brightness-110 disabled:opacity-50"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje →'}
      </button>

      {status === 'sent' && (
        <p className="font-mono text-sm text-accent">mensaje enviado. ¡gracias!</p>
      )}
      {status === 'error' && (
        <p className="font-mono text-sm text-amber">hubo un error. intenta de nuevo.</p>
      )}
    </form>
  )
}