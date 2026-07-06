import { ArrowRight, ShieldCheck } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function Hero() {
  return (
    <section className="hero-bg noise relative overflow-hidden pt-32 text-white lg:pt-40">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />

      <Container className="relative pb-24 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Premium Offshore Technical Education
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Build a World-Class Offshore Career.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Master technical education across subsea systems, BOP operations, well control, and
              offshore career development — structured for professionals who demand operational
              excellence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#early-access" className="group px-8 py-4 text-base">
                Join Early Access
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Button>
              <Button href="#ecosystem" variant="secondary" className="px-8 py-4 text-base">
                Explore The Ecosystem
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gold/15 blur-3xl" />
            <div className="card-glass relative overflow-hidden rounded-[2.2rem] p-3">
              <div className="aspect-[4/3] rounded-[1.7rem] bg-gradient-to-br from-ocean via-navy to-black p-8">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/25 p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                    Offshore Pro Academy
                  </div>
                  <div>
                    <div className="mb-4 grid grid-cols-3 gap-3">
                      {['BOP', 'Subsea', 'Well Control'].map((label) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/10 bg-white/10 px-3 py-4 text-center text-xs font-bold uppercase tracking-wider"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                    <p className="text-2xl font-black tracking-tight">
                      Structured learning for deepwater professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
