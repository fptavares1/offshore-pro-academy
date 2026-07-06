import { Anchor, BookMarked, Gauge, Layers, Route } from 'lucide-react'
import Container from '@/components/ui/Container'

const trustItems = [
  { icon: Anchor, label: 'Deepwater Operations' },
  { icon: Gauge, label: 'BOP Systems' },
  { icon: Layers, label: 'Subsea Engineering' },
  { icon: BookMarked, label: 'Well Control' },
  { icon: Route, label: 'Career Development' },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-navy py-8">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-white/85">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
