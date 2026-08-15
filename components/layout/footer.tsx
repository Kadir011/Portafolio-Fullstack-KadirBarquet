import { SocialLinks } from '@/components/ui/social-links'

export function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg/80 px-4 py-2.5 backdrop-blur sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p className="font-mono text-[11px] text-muted">
          © {new Date().getFullYear()}{' '}
          <span className="text-border-hover">~/</span>kadir-barquet — Guayaquil, Ecuador
        </p>
        <SocialLinks className="gap-3" />
      </div>
    </footer>
  )
}