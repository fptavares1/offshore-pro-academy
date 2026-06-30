import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">
            Offshore Pro Academy is being built as a professional development platform for offshore oil and gas professionals committed to technical excellence and long-term growth.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white">Platform</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/65">
            <a href="#academy">Academy</a>
            <a href="#handbooks">Technical Handbooks</a>
            <a href="#resources">Resources</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Company</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/65">
            <a href="#about">About</a>
            <a href="#early-access">Contact</a>
            <a href="#early-access">Newsletter</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/45">
        © 2026 Offshore Pro Academy. All rights reserved.
      </div>
    </footer>
  )
}
