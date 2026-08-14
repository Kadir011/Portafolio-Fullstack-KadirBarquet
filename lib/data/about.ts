export interface TimelineEntry {
  kind: 'educacion' | 'certificacion'
  titulo: string
  subtitulo: string // institución o emisor
  periodo: string
  estado?: 'en trámite' | 'en curso'
  detalle?: string
}

export const timelineAcademico: TimelineEntry[] = [
  {
    kind: 'educacion',
    titulo: 'Ingeniería en Software',
    subtitulo: 'Nombre de tu universidad', // TODO: reemplaza con el nombre real
    periodo: 'Sustentado 30/07/2026',
    estado: 'en trámite',
    detalle:
      'Trabajo de titulación: ApruebaYA — plataforma de tutorías con simulacros de examen generados por IA.',
  },
  {
    kind: 'certificacion',
    titulo: 'Foundational C# with Microsoft',
    subtitulo: 'freeCodeCamp & Microsoft Learn',
    periodo: '2026',
  },
  {
    kind: 'certificacion',
    titulo: 'Python',
    subtitulo: 'freeCodeCamp',
    periodo: '2026',
  },
  {
    kind: 'certificacion',
    titulo: 'Desarrollo Back-end',
    subtitulo: 'Capacítate para el Empleo',
    periodo: '2026',
  },
  {
    kind: 'certificacion',
    titulo: 'Desarrollo Front-end',
    subtitulo: 'Capacítate para el Empleo',
    periodo: '2026',
  },
]

export interface ExperienciaEntry {
  role: string
  company: string
  period: string
  points: string[]
}

export const experiencia: ExperienciaEntry[] = [
  {
    role: 'Desarrollador Full-Stack',
    company: 'Freelance / Autónomo',
    period: 'sep 2022 — presente',
    points: [
      'Diseñé una plataforma POS + E-Commerce con 10+ módulos integrados, eliminando el 100% de ventas duplicadas bajo concurrencia mediante idempotencia end-to-end',
      'Aumenté en 30% la eficiencia operativa reduciendo tiempos de procesamiento transaccional',
      'Implementé RBAC + JWT para control de acceso en módulos administrativos',
    ],
  },
  {
    role: 'Desarrollador de Software',
    company: 'EMOVIM EP',
    period: 'sep 2025 — nov 2025',
    points: [
      'Lideré un equipo de 2 desarrolladores en la digitalización del sistema institucional de permisos vehiculares mediante códigos QR',
      'Definí la arquitectura y el modelo de datos desde el levantamiento de requerimientos hasta el despliegue',
      'Reduje errores operativos en 15% mediante validaciones automatizadas inexistentes en el proceso manual',
    ],
  },
]

export const stack = [
  'Python', 'Django', 'FastAPI',
  'Node.js', 'React',
  'PostgreSQL', 'Supabase',
  'Docker',
]
