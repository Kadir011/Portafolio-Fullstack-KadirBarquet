<div align="center">

# Kadir Barquet — Portafolio Full Stack

<strong>Portafolio personal como desarrollador Full Stack, especializado en Backend</strong>

<p>
  <a href="https://kadir-barquet-portfolio.vercel.app/"><img src="https://img.shields.io/badge/DEMO%20EN%20VIVO-kadir--barquet--portfolio.vercel.app-3b82f6?style=for-the-badge&logo=vercel&logoColor=white" alt="Demo en vivo"></a>
</p>

<p>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white" alt="Next.js 16"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4"></a>
  <a href="https://animejs.com/"><img src="https://img.shields.io/badge/anime.js-4-FF6B6B?logo=javascript&logoColor=white" alt="anime.js 4"></a>
  <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-Postgres-3FCF8E?logo=supabase&logoColor=white" alt="Supabase"></a>
  <a href="https://www.mailgun.com/"><img src="https://img.shields.io/badge/Mailgun-Email-C02231?logo=mailgun&logoColor=white" alt="Mailgun"></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white" alt="Vercel Deploy"></a>
</p>

<p>
  <img src="https://img.shields.io/badge/Estado-Desplegado-green" alt="Estado: desplegado">
</p>

</div>

---

## Tabla de contenidos

- [Kadir Barquet — Portafolio Full Stack](#kadir-barquet--portafolio-full-stack)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Características](#características)
  - [Tecnologías](#tecnologías)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
  - [Variables de entorno](#variables-de-entorno)
  - [Configuración de servicios externos](#configuración-de-servicios-externos)
    - [Supabase](#supabase)
    - [Mailgun](#mailgun)
  - [Despliegue en Vercel](#despliegue-en-vercel)
  - [Contenido y proyectos mostrados](#contenido-y-proyectos-mostrados)
  - [Autor](#autor)

---

## Descripción

Este repositorio contiene mi portafolio personal como desarrollador Full Stack. No es un ejercicio de plantilla: es una carta de presentación funcional, con formulario de contacto que guarda mensajes en una base de datos real y envía notificación por correo, descarga de CV, y una selección curada de mis proyectos más representativos (con enlaces a demo en vivo y repositorio).

El sitio está pensado para responder tres preguntas en los primeros segundos de cualquier visitante: **quién soy, qué construyo y con qué tecnologías** — sin depender de una plantilla genérica ni de texto de relleno.

> **Demo en vivo:** [kadir-barquet-portfolio.vercel.app](https://kadir-barquet-portfolio.vercel.app/)

## Características

**Presentación**

- Splash screen de entrada con fondo animado visible desde el primer frame y revelación del contenido mediante un efecto de cortina circular (`clip-path`)
- Fondo con blobs/halos de gradiente en movimiento continuo, con una variante de color distinta por sección (`SectionBackdrop`)
- Foto de perfil con anillo de gradiente rotando y tilt 3D interactivo que sigue el cursor
- Texto del nombre con gradiente animado
- Cursor personalizado y barra de progreso de scroll

**Interacción**

- Todas las micro-interacciones y transiciones (entrada del hero, reveal al hacer scroll, tilt 3D) están orquestadas con **anime.js**, usando `createScope` por componente para animar y limpiar de forma aislada
- Cards de proyectos con efecto 3D tilt (`rotateX`/`rotateY`) que sigue la posición del mouse
- Animaciones de aparición progresiva al hacer scroll, disparadas por `IntersectionObserver` nativo (sin librería de scroll-trigger)
- Botones con microinteracciones de elevación y sombra al hover
- Menú de navegación responsivo con hamburguesa animada en mobile

**Funcionalidad real**

- Formulario de contacto que persiste los mensajes en PostgreSQL (Supabase) y envía notificación por email (Mailgun)
- Descarga directa de CV en PDF
- Accesos directos a LinkedIn, GitHub y correo
- Todas las animaciones respetan `prefers-reduced-motion` para accesibilidad

## Tecnologías

<table>
  <tr><th>Capa</th><th>Tecnología</th><th>Propósito</th></tr>
  <tr>
    <td>Framework</td>
    <td><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white" alt="Next.js"></td>
    <td>App Router, Server Components, Route Handlers</td>
  </tr>
  <tr>
    <td>Lenguaje</td>
    <td><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript"></td>
    <td>Tipado estático en todo el proyecto</td>
  </tr>
  <tr>
    <td>Estilos</td>
    <td><img src="https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind"></td>
    <td>Utility-first CSS + tokens de color/tipografía propios en <code>globals.css</code></td>
  </tr>
  <tr>
    <td>Animación</td>
    <td><img src="https://img.shields.io/badge/anime.js-4-FF6B6B?logo=javascript&logoColor=white" alt="anime.js"></td>
    <td>Splash screen, reveal por scroll, tilt 3D y micro-interacciones, con <code>createScope</code> por componente</td>
  </tr>
  <tr>
    <td>Base de datos</td>
    <td><img src="https://img.shields.io/badge/PostgreSQL-Supabase-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL"></td>
    <td>Persistencia de mensajes de contacto (con Row Level Security)</td>
  </tr>
  <tr>
    <td>Email transaccional</td>
    <td><img src="https://img.shields.io/badge/Mailgun-API-C02231?logo=mailgun&logoColor=white" alt="Mailgun"></td>
    <td>Notificación por correo al recibir un mensaje de contacto (llamada directa a la API, sin SDK)</td>
  </tr>
  <tr>
    <td>Iconografía</td>
    <td><img src="https://img.shields.io/badge/lucide--react-black" alt="lucide-react"> <img src="https://img.shields.io/badge/react--icons-black" alt="react-icons"></td>
    <td><code>lucide-react</code> para íconos de UI; <code>react-icons</code> para íconos de marca (stack técnico, LinkedIn, GitHub)</td>
  </tr>
  <tr>
    <td>Despliegue</td>
    <td><img src="https://img.shields.io/badge/Vercel-black?logo=vercel&logoColor=white" alt="Vercel"></td>
    <td>Hosting, CI/CD automático por push</td>
  </tr>
</table>

## Estructura del proyecto

```
portafolio-kadir/
├── app/
│   ├── layout.tsx              # Layout raíz: fuentes, metadata, fondo, splash screen, cursor, scroll progress
│   ├── page.tsx                # Home: ensambla las secciones como paneles (una por bloque de scroll)
│   ├── globals.css             # Tailwind + tokens de color + animaciones base (blobs, timeline, stat-orb)
│   └── api/
│       ├── contact/
│       │   └── route.ts        # POST — guarda en Supabase + envía email vía Mailgun
│       └── download-cv/
│           └── route.ts        # GET — fuerza la descarga del CV
├── components/
│   ├── layout/
│   │   ├── navbar.tsx          # Navbar con menú hamburguesa (Client Component)
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx            # Foto, nombre, tagline, CTAs, redes — animado con anime.js
│   │   ├── about.tsx           # Stats, stack principal y metodología (incl. IA como asistente de desarrollo)
│   │   ├── formacion.tsx       # Timeline de educación y experiencia + certificaciones
│   │   ├── proyectos.tsx       # Grid de proyectos con TiltCard
│   │   └── contacto.tsx        # Formulario de contacto
│   └── ui/
│       ├── project-card.tsx    # Card individual de proyecto (con imagen)
│       ├── tech-badge.tsx      # Badge de tecnología
│       ├── contact-form.tsx    # Formulario (Client Component)
│       ├── social-links.tsx    # Íconos LinkedIn/GitHub (react-icons) + Email (lucide-react)
│       ├── tilt-card.tsx       # Wrapper de tilt 3D para las project cards
│       ├── photo-tilt.tsx      # Wrapper de tilt 3D para la foto de perfil
│       ├── reveal.tsx          # Wrapper de scroll-reveal (IntersectionObserver + anime.js)
│       ├── page-loader.tsx     # Splash screen de entrada
│       ├── custom-cursor.tsx   # Cursor personalizado
│       ├── scroll-progress.tsx # Barra de progreso de scroll
│       └── section-backdrop.tsx # Blobs/halos de gradiente, variante distinta por sección
├── lib/
│   ├── supabase/
│   │   ├── client.ts           # Cliente Supabase para el navegador
│   │   └── server.ts           # Cliente Supabase para el servidor
│   └── data/
│       └── proyectos.ts        # Array tipado con los proyectos mostrados
├── types/
│   └── project.ts              # Interface Project
├── public/
│   ├── images/
│   │   ├── kadirbarquet.jpg    # Foto de perfil
│   │   └── proyectos/          # Screenshots de cada proyecto
│   └── cv/
│       └── CV-Kadir-Barquet.pdf
├── .env.local                  # Variables de entorno (no versionado)
└── next.config.ts
```

## Requisitos

- Node.js 18.18 o superior (probado con Node 22.x)
- npm
- Cuenta gratuita en [Supabase](https://supabase.com/)
- Cuenta gratuita en [Mailgun](https://www.mailgun.com/)

## Instalación

```bash
git clone https://github.com/Kadir011/Portafolio-Fullstack-KadirBarquet.git
cd Portafolio-Fullstack-KadirBarquet

npm install
```

Copia el archivo de variables de entorno de ejemplo y complétalo (ver sección siguiente):

```bash
cp .env.example .env.local
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

La aplicación queda disponible en `http://localhost:3000`.

## Variables de entorno

| Variable | Descripción | Dónde se usa |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Project URL de Supabase | Cliente y servidor |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Clave pública (segura de exponer, respeta RLS) | Cliente (navegador) |
| `SUPABASE_SECRET_KEY` | Clave privada, nunca se expone al navegador | Solo servidor (Route Handlers) |
| `MAILGUN_API_KEY` | API key del proyecto en Mailgun | Solo servidor |
| `MAILGUN_DOMAIN` | Dominio de envío (sandbox o verificado) | Solo servidor |

> ⚠️ `.env.local` está en `.gitignore` por defecto en Next.js. Nunca commitees claves reales.

## Configuración de servicios externos

### Supabase

1. Crea un proyecto en [supabase.com](https://supabase.com/).
2. Ve a **Settings → API Keys** y copia el Project URL, la Publishable key y la Secret key.
3. Ejecuta este SQL en el **SQL Editor** para crear la tabla de mensajes de contacto con Row Level Security:

```sql
create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

create policy "Cualquiera puede enviar un mensaje"
  on contact_messages
  for insert
  to anon, authenticated
  with check (true);
```

La política permite `INSERT` público (necesario para que el formulario funcione) pero bloquea `SELECT`/`UPDATE`/`DELETE` con la clave pública — solo la `SUPABASE_SECRET_KEY` desde el servidor puede leer los mensajes.

### Mailgun

1. Crea una cuenta en [mailgun.com](https://www.mailgun.com/) y genera una API key en **Sending → API Keys**.
2. Si usas el dominio sandbox (`sandboxXXXX.mailgun.org`), ve a **Sending → Domain settings → Authorized Recipients** y autoriza el correo al que quieres recibir los mensajes del formulario — en modo sandbox, Mailgun solo entrega a destinatarios autorizados.
3. Para producción con dominio propio, verifica un subdominio (por ejemplo `mg.tudominio.com`) en **Sending → Add domain**, agregando los registros DNS que Mailgun solicita.

## Despliegue en Vercel

El proyecto está desplegado en **[kadir-barquet-portfolio.vercel.app](https://kadir-barquet-portfolio.vercel.app/)**, con CI/CD automático: cada push a `main` genera un nuevo deploy de producción, y cada pull request genera un preview deploy independiente.

Para desplegar tu propia copia:

1. Sube el repositorio a GitHub (si no lo está ya).
2. En [vercel.com](https://vercel.com/), selecciona **Add New → Project** e importa el repositorio.
3. Vercel detecta Next.js automáticamente — no requiere configuración de build adicional.
4. En **Settings → Environment Variables**, agrega las 5 variables listadas arriba (mismos valores que en `.env.local`).
5. Despliega.

## Contenido y proyectos mostrados

Los proyectos que aparecen en la sección **Proyectos** viven en [`lib/data/proyectos.ts`](./lib/data/proyectos.ts) como un array tipado — agregar, editar o quitar un proyecto no requiere tocar ningún componente:

- **[ApruebaYA](https://github.com/Kadir011/ApruebaYA-Proyecto-Grado)** — Plataforma de tutorías académicas con simulacros de examen generados por IA (proyecto de titulación)
- **[MySupermarket](https://github.com/Kadir011/Sistema-de-Ventas-Supermercado)** — Sistema POS + E-Commerce con arquitectura SOLID e idempotencia end-to-end
- **[ChatBot Survey Platform](https://github.com/Kadir011/Sistema-de-Encuestas-para-Chatbots-Academicos)** — Plataforma de recolección de datos sobre adopción de IA en educación
- **[Asistente Cultural](https://github.com/Kadir011/Asistente-Cultural)** — En desarrollo local, pendiente de despliegue

## Autor

<div align="center">

**Kadir Barquet Bravo**

Full Stack Developer — Guayaquil, Ecuador

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-kadir--barquet--bravo-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kadir-barquet-bravo/)
[![GitHub](https://img.shields.io/badge/GitHub-Kadir011-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Kadir011)
[![Email](https://img.shields.io/badge/Email-barquetbravokadir%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:barquetbravokadir@gmail.com)
[![Live](https://img.shields.io/badge/Live_Demo-kadir--barquet--portfolio-3b82f6?style=for-the-badge&logo=vercel&logoColor=white)](https://kadir-barquet-portfolio.vercel.app/)

</div>