export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  problem: string
  role: 'flagship' | 'featured'
  status: 'live' | 'local'
  liveUrl?: string
  githubUrl: string
  stack: string[]
  highlights: string[]
  image?: string
}
