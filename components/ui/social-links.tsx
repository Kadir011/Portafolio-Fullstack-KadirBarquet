import { Mail } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const links = [
  {
    href: 'https://www.linkedin.com/in/kadir-barquet-bravo/',
    label: 'LinkedIn',
    icon: FaLinkedin,
  },
  {
    href: 'https://github.com/Kadir011',
    label: 'GitHub',
    icon: FaGithub,
  },
  {
    href: 'mailto:barquetbravokadir@gmail.com',
    label: 'Email',
    icon: Mail,
  },
]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, icon: Icon }) => (
        
        <a  key={label}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="rounded-full border border-neutral-800 bg-neutral-900/60 p-2.5 text-neutral-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/50 hover:text-blue-400"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}
