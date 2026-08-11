import { SocialLinks } from '@/components/ui/social-links'

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center">
      <SocialLinks className="justify-center" />
      <p className="mt-4 font-mono text-xs text-muted">
        © {new Date().getFullYear()} <span className="text-border-hover">~/</span>kadir-barquet — Guayaquil, Ecuador
      </p>
    </footer>
  )
}
