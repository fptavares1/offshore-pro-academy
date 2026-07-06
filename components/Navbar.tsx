'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from '@/components/ui/Button'

const links = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Handbooks', href: '#handbooks' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Early Access', href: '#early-access' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" aria-label="Offshore Pro Academy home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-white/75 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#early-access">Join Early Access</Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-base font-semibold text-white/80 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <Button href="#early-access" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Join Early Access
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
