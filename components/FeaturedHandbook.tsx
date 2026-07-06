import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'

const chapters = [
  'Well Control Fundamentals',
  'BOP Stack Components',
  'Hydraulic Control Systems',
  'Subsea Operations',
  'Inspection & Troubleshooting',
]

export default function FeaturedHandbook() {
  return (
    <section id="handbooks" className="py-24">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] bg-navy text-white shadow-premium">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-14">
              <SectionHeader
                eyebrow="Featured Handbook"
                title="BOP Systems Fundamentals"
                description="Volume I of the OPA Technical Handbook series — a comprehensive reference covering BOP stack architecture, hydraulic control systems, subsea operations, and field troubleshooting."
                theme="dark"
              />

              <ul className="mt-10 grid gap-3">
                {chapters.map((chapter) => (
                  <li key={chapter} className="flex items-center gap-3 text-white/75">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                    {chapter}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="#early-access" className="group px-8 py-4 text-base">
                  Get Early Access
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            <div className="relative flex items-center justify-center bg-gradient-to-br from-ocean/40 to-black/40 p-8 lg:p-14">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="card-glass relative w-full max-w-sm rounded-[2rem] p-8">
                <BookOpen className="h-12 w-12 text-gold" />
                <p className="mt-6 text-sm font-black uppercase tracking-[0.25em] text-gold">
                  Volume I
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-tight">
                  BOP Systems Fundamentals
                </h3>
                <div className="mt-8 space-y-3">
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-3/4 rounded-full bg-gold" />
                  </div>
                  <p className="text-sm text-white/60">Technical reference · Field-ready content</p>
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                    Coverage
                  </p>
                  <p className="mt-2 font-bold text-white/85">
                    Surface & subsea BOP · Hydril · Cameron · NOV
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
