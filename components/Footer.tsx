import Container from '@/components/ui/Container'
import Logo from './Logo'

const platformLinks = [
  { label: 'Learning Ecosystem', href: '#ecosystem' },
  { label: 'Technical Handbooks', href: '#handbooks' },
  { label: 'Career Roadmap', href: '#roadmap' },
]

const companyLinks = [
  { label: 'Early Access', href: '#early-access' },
  { label: 'Contact', href: '#early-access' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Offshore Pro Academy is a professional development platform for offshore oil and
              gas professionals committed to technical excellence, operational discipline, and
              long-term career growth.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gold">Platform</h3>
            <div className="mt-5 grid gap-3">
              {platformLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gold">Connect</h3>
            <div className="mt-5 grid gap-3">
              {companyLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Offshore Pro Academy. All rights reserved.</p>
          <p>Building world-class offshore professionals.</p>
        </div>
      </Container>
    </footer>
  )
}
