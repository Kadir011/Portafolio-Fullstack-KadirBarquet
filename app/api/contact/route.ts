import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

async function sendContactEmail(name: string, email: string, message: string) {
  const domain = process.env.MAILGUN_DOMAIN!
  const apiKey = process.env.MAILGUN_API_KEY!

  const body = new URLSearchParams({
    from: `Portafolio <postmaster@${domain}>`,
    to: 'barquetbravokadir@gmail.com',
    'h:Reply-To': email,
    subject: `Nuevo mensaje de ${name} — Portafolio`,
    text: `De: ${name} (${email})\n\n${message}`,
  })

  const res = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`api:${apiKey}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })

  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(`Mailgun error: ${res.status} — ${errorText}`)
  }
}

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 })
  }

  const supabase = await createClient()

  const { error: dbError } = await supabase
    .from('contact_messages')
    .insert({ name, email, message })

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }

  try {
    await sendContactEmail(name, email, message)
  } catch (emailError) {
    // El mensaje ya quedó guardado en Supabase aunque el email falle —
    // no bloqueamos la respuesta al usuario por esto.
    console.error('Error enviando email:', emailError)
  }

  return NextResponse.json({ ok: true })
}