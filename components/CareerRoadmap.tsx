import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'

const careerStages = [
  {
    stage: '01',
    title: 'Student',
    description: 'Build foundational knowledge in offshore engineering and operations.',
  },
  {
    stage: '02',
    title: 'Technician',
    description: 'Develop hands-on skills with equipment, systems, and field procedures.',
  },
  {
    stage: '03',
    title: 'Assistant Subsea Engineer',
    description: 'Support subsea operations with growing technical responsibility.',
  },
  {
    stage: '04',
    title: 'Subsea Engineer',
    description: 'Lead subsea system performance, troubleshooting, and compliance.',
  },
  {
    stage: '05',
    title: 'Senior Subsea Engineer',
    description: 'Drive technical decisions, mentoring, and complex project delivery.',
  },
  {
    stage: '06',
    title: 'Offshore Supervisor',
    description: 'Oversee operations with leadership, safety, and operational excellence.',
  },
]

export default function CareerRoadmap() {
  return (
    <section id="roadmap" className="bg-navy py-24 text-white">
      <Container>
        <SectionHeader
          eyebrow="Career Roadmap"
          title="From Student to Offshore Supervisor."
          description="A structured progression path designed for professionals committed to continuous development across every stage of their offshore career."
          theme="dark"
        />

        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="grid grid-cols-6 gap-4">
            {careerStages.map(({ stage, title, description }) => (
              <article key={title} className="relative pt-14 text-center">
                <div className="absolute left-1/2 top-4 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-gold bg-navy">
                  <span className="flex h-full items-center justify-center text-[10px] font-black text-gold">
                    {stage}
                  </span>
                </div>
                <h3 className="text-sm font-black leading-snug">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-white/55">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-12 space-y-6 lg:hidden">
          <div className="absolute bottom-4 left-4 top-4 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
          {careerStages.map(({ stage, title, description }) => (
            <article key={title} className="relative pl-12">
              <div className="absolute left-2 top-6 h-5 w-5 rounded-full border-2 border-gold bg-navy" />
              <div className="card-glass rounded-[1.5rem] p-6">
                <span className="text-sm font-black text-gold">{stage}</span>
                <h3 className="mt-2 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
