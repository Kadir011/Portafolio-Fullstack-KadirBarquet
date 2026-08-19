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