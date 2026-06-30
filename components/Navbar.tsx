import Logo from './Logo'

const links = ['Academy', 'Handbooks', 'Roadmap', 'Resources', 'About']

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" aria-label="Offshore Pro Academy home"><Logo /></a>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-white/75 transition hover:text-white">
              {link}
            </a>
          ))}
        </div>
        <a href="#early-access" className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-white">
          Join Early Access
        </a>
      </nav>
    </header>
  )
}
