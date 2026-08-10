import { SocialLinks } from '@/components/ui/social-links'

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8 text-center">
      <SocialLinks className="justify-center" />
      <p className="mt-4 text-sm text-neutral-500">
        © {new Date().getFullYear()} Kadir Barquet Bravo — Guayaquil, Ecuador
      </p>
    </footer>
  )
}
