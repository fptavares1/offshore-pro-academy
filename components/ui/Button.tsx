import { type ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  onClick?: () => void
}

const variants = {
  primary:
    'bg-gold text-navy hover:bg-white',
  secondary:
    'border border-white/20 bg-white/5 text-white hover:bg-white/10',
  ghost:
    'border border-navy/10 bg-white text-navy hover:border-gold hover:text-gold',
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
