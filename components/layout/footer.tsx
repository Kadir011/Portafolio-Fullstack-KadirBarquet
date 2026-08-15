import { SocialLinks } from '@/components/ui/social-links'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-bg px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-mono text-[11px] text-muted">
          © {new Date().getFullYear()}{' '}
          <span className="text-border-hover">~/</span>kadir-barquet — Guayaquil, Ecuador
        </p>
        <SocialLinks className="gap-3" />
      </div>
    </footer>
  )
}