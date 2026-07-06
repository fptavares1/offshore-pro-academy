import { ArrowRight, GraduationCap } from 'lucide-react'
import Container from '@/components/ui/Container'

export default function EarlyAccessCTA() {
  return (
    <section id="early-access" className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-navy to-ocean p-8 text-center text-white shadow-premium lg:p-16">
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-ocean/30 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <GraduationCap className="mx-auto h-12 w-12 text-gold" />
            <p className="mt-6 text-sm font-black uppercase tracking-[0.25em] text-gold">
              Early Access
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Be First to Access Offshore Pro Academy.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Join the waitlist for technical handbooks, academy programs, question banks, career
              roadmaps, and OPA AI — built for offshore professionals who invest in excellence.
            </p>

            <form className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                aria-label="Email address"
                type="email"
                placeholder="Enter your professional email"
                className="min-h-14 flex-1 rounded-full border border-white/15 bg-white/10 px-6 text-white outline-none placeholder:text-white/40 backdrop-blur focus:border-gold"
              />
              <button
                type="button"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gold px-8 font-bold text-navy transition hover:bg-white"
              >
                Join Early Access
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </form>

            <p className="mt-6 text-sm text-white/45">
              No spam. Professional updates on platform launch and new resources.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
