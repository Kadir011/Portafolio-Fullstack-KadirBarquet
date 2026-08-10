import type { Project } from '@/types/project'

export const proyectos: Project[] = [
  {
    slug: 'apruebaya',
    name: 'ApruebaYA',
    tagline: 'Tutorías académicas + simulacros de examen generados por IA',
    description:
      'Plataforma web que conecta estudiantes universitarios ecuatorianos con tutores calificados, y genera automáticamente simulacros de examen personalizados a partir del material de cada sesión, usando IA.',
    problem:
      'Tomar una tutoría resuelve la duda del momento, pero rara vez el estudiante practica lo aprendido después — y el tutor no tiene forma sistemática de reforzarlo.',
    role: 'flagship',
    status: 'live',
    liveUrl: 'https://subjectsupport-latammvp-production.up.railway.app/',
    githubUrl: 'https://github.com/Kadir011/ApruebaYA-Proyecto-Grado/tree/front-apruebaya',
    stack: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Supabase', 'Bootstrap 5'],
    highlights: [
      'Microservicio FastAPI independiente para generación de simulacros con IA (DeepSeek, Grok)',
      'Restricción geográfica automática por IP',
      'Flujo de revisión: el tutor aprueba o edita el contenido generado antes de publicarlo',
      'Proyecto de titulación (estudio de caso)',
    ],
    image: '/images/proyectos/apruebaya.png',
  },
  {
    slug: 'sistema-ventas-supermercado',
    name: 'MySupermarket',
    tagline: 'Plataforma full-stack de POS + e-commerce con arquitectura SOLID',
    description:
      'Sistema Django en producción que corre punto de venta y tienda online sobre la misma base de datos, con idempotencia real a nivel de base de datos, sistema de descuentos con expiración y chatbot de IA con contexto en tiempo real del inventario.',
    problem:
      'Los pequeños supermercados que venden en tienda y online suelen terminar con dos sistemas separados que no comparten inventario en tiempo real, causando sobreventa e inconsistencias de precio.',
    role: 'featured',
    status: 'live',
    liveUrl: 'https://my-supermarket-6l71.onrender.com',
    githubUrl: 'https://github.com/Kadir011/Sistema-de-Ventas-Supermercado',
    stack: ['Python', 'Django', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Docker'],
    highlights: [
      'Idempotencia end-to-end: UUID único + constraint a nivel de base de datos',
      'Patrones Strategy (pagos), Singleton (idempotencia), Builder/Director (contexto del chatbot)',
      'Chatbot con Gemini AI, prompts diferenciados por rol (admin/cliente/invitado)',
      'Auditoría cross-browser con fixes documentados (Safari iOS, Firefox)',
    ],
    image: '/images/proyectos/mysupermarket.png',
  },
  {
    slug: 'encuestas-chatbots-academicos',
    name: 'ChatBot Survey Platform',
    tagline: 'Recolección y análisis de datos sobre uso de IA en educación',
    description:
      'Plataforma que centraliza encuestas diferenciadas por rol (estudiante/profesor) sobre el uso de chatbots de IA en contextos educativos, con estadísticas enriquecidas y exportación a Excel.',
    problem:
      'Las instituciones educativas quieren medir la adopción de IA entre estudiantes y profesores, pero esa información suele quedar dispersa en formularios sin estructura ni forma de cruzar variables.',
    role: 'featured',
    status: 'live',
    liveUrl: 'https://chatbot-surveys-frontend.vercel.app/',
    githubUrl: 'https://github.com/Kadir011/Sistema-de-Encuestas-para-Chatbots-Academicos',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL (Neon)', 'Tailwind CSS'],
    highlights: [
      'Arquitectura por capas: Repository + Factory + Observer (bus de eventos de dominio)',
      'Idempotencia por header HTTP + índice único (usuario + día)',
      'Transacciones con reintento automático ante deadlocks (backoff exponencial)',
      'Exportación a Excel y métricas en tiempo real vía /api/metrics',
    ],
    image: '/images/proyectos/chatbot-survey.png',
  },
  {
    slug: 'asistente-cultural',
    name: 'Asistente Cultural',
    tagline: 'Próximamente — en desarrollo local',
    description:
      'Proyecto en desarrollo, aún no desplegado.',
    problem: '',
    role: 'featured',
    status: 'local',
    githubUrl: 'https://github.com/Kadir011/Asistente-Cultural',
    stack: [],
    highlights: [],
  },
]
