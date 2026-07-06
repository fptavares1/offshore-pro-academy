import {
  Bot,
  BookOpen,
  GraduationCap,
  HelpCircle,
  Map,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'

const ecosystemItems = [
  {
    icon: BookOpen,
    title: 'Technical Handbooks',
    description: 'Industry-grade reference manuals built for long-term professional use.',
  },
  {
    icon: GraduationCap,
    title: 'Academy',
    description: 'Structured programs covering subsea systems, operations, and leadership.',
  },
  {
    icon: HelpCircle,
    title: 'Question Bank',
    description: 'Technical assessments to reinforce competency and exam readiness.',
  },
  {
    icon: Map,
    title: 'Career Roadmaps',
    description: 'Clear progression paths from student to senior offshore leadership.',
  },
  {
    icon: Bot,
    title: 'OPA AI',
    description: 'Intelligent guidance for technical questions and career planning.',
  },
]

export default function LearningEcosystem() {
  return (
    <section id="ecosystem" className="bg-steel py-24">
      <Container>
        <SectionHeader
          eyebrow="Learning Ecosystem"
          title="Everything You Need to Grow Offshore."
          description="Offshore Pro Academy combines technical handbooks, structured training, assessments, career roadmaps, and AI-powered guidance into one professional development platform."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemItems.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="card-premium group rounded-[2rem] border border-slate-200/80 bg-white p-8 transition hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-navy">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            </article>
          ))}

          <article className="card-premium flex flex-col justify-center rounded-[2rem] border border-gold/30 bg-gradient-to-br from-navy to-ocean p-8 text-white sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">
              Integrated Platform
            </p>
            <p className="mt-4 text-2xl font-black tracking-tight">
              One ecosystem. Continuous professional development.
            </p>
            <p className="mt-4 leading-7 text-white/70">
              Every resource is designed to work together — from foundational handbooks to
              advanced career planning.
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}
