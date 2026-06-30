import { ArrowRight, BookOpen, BriefcaseBusiness, CheckCircle2, Compass, GraduationCap, Layers3, Library, ShieldCheck, Target, Users, Wrench } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const pillars = [
  { icon: Wrench, title: 'Technical Education', text: 'Master offshore systems, drilling equipment, subsea technologies and operational fundamentals.' },
  { icon: BriefcaseBusiness, title: 'Career Development', text: 'Build the skills required for promotions, leadership positions and long-term professional growth.' },
  { icon: Library, title: 'Industry Resources', text: 'Access handbooks, technical libraries, case studies, roadmaps and practical learning materials.' },
]

const serve = [
  { title: 'Starting Offshore', text: 'For students, technicians and engineers preparing for their first offshore opportunity.' },
  { title: 'Growing Your Career', text: 'For offshore professionals seeking technical mastery, leadership and higher-value positions.' },
  { title: 'Leading Operations', text: 'For experienced professionals committed to operational excellence and continuous development.' },
]

const ecosystem = ['Technical Handbooks', 'Professional Courses', 'Technical Question Bank', 'Competency Preparation', 'Industry Case Studies', 'Career Roadmaps', 'Video Library', 'Professional Community']
const roadmap = ['Engineering Student', 'Technician', 'Specialist', 'Assistant Subsea Engineer', 'Subsea Engineer', 'Senior Subsea Engineer', 'Offshore Supervisor', 'Industry Leader']
const experience = ['Deepwater Operations', 'BOP Systems', 'Hydril Equipment', 'NOV Equipment', 'Cameron Equipment', 'Subsea Operations', 'Well Control', 'International Offshore Projects']

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#F7F9FC]">
      <Navbar />

      <section className="hero-bg noise relative px-6 pt-36 text-white lg:px-8 lg:pt-44">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 pb-24 lg:grid-cols-[1.08fr_0.92fr] lg:pb-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-gold" /> Building World-Class Offshore Professionals
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Build a World-Class Offshore Career.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Develop the technical expertise, operational knowledge and professional confidence required to succeed in today's offshore energy industry.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#early-access" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-navy transition hover:bg-white">
                Join Early Access <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a href="#academy" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10">
                Explore The Academy
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gold/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/10 p-3 shadow-premium backdrop-blur">
              <div className="aspect-[4/3] rounded-[1.7rem] bg-gradient-to-br from-ocean via-navy to-black p-8">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/20 p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Deepwater Operations</div>
                  <div>
                    <div className="mb-4 h-24 w-full rounded-2xl bg-white/10" />
                    <p className="text-2xl font-black tracking-tight">Technical excellence begins with structured preparation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="academy" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Industry Challenge</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-navy sm:text-5xl">Excellence Is Never Accidental.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The offshore industry demands professionals who combine technical competence, operational discipline and continuous learning. OPA provides a structured path for professionals committed to reaching their highest potential.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold"><Icon /></div>
                <h3 className="text-xl font-black text-navy">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="bg-navy px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Who We Serve</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Designed For Every Stage Of Your Offshore Journey.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serve.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                <Compass className="mb-6 h-9 w-9 text-gold" />
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="handbooks" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Learning Ecosystem</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-navy sm:text-5xl">More Than Courses.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Offshore Pro Academy is being built as a complete development ecosystem combining technical handbooks, professional training, field resources, career pathways and competency preparation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {ecosystem.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 font-bold text-navy shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-navy p-8 text-white shadow-premium lg:p-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Technical Handbooks</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Built Like Industry Manuals.</h2>
              <p className="mt-6 text-lg leading-8 text-white/68">
                OPA Technical Handbooks are designed to become long-term professional references. Each handbook combines operational experience, engineering principles, practical case studies, inspection guidance and structured learning.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <BookOpen className="mb-6 h-12 w-12 text-gold" />
              <h3 className="text-2xl font-black">Volume I</h3>
              <p className="mt-2 text-gold">BOP Systems Fundamentals</p>
              <div className="mt-8 grid gap-3 text-sm text-white/70">
                {['Well Control Fundamentals', 'BOP Stack Components', 'Hydraulic Control Systems', 'Subsea Operations', 'Inspection & Troubleshooting'].map((i) => <span key={i}>• {i}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-ocean p-10 text-white shadow-premium">
            <Layers3 className="h-12 w-12 text-gold" />
            <h3 className="mt-8 text-3xl font-black tracking-tight">Built On Practical Offshore Knowledge.</h3>
            <p className="mt-5 leading-8 text-white/70">Every lesson is designed to bridge the gap between technical theory and practical execution in real offshore environments.</p>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Real Offshore Experience</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-navy sm:text-5xl">Learn from operational experience, not theory alone.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {experience.map((item) => <div key={item} className="rounded-2xl bg-white p-4 font-bold text-navy shadow-sm">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">Professional Roadmap</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">One Career. Continuous Development.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {roadmap.map((item, index) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-4xl font-black text-gold">{String(index + 1).padStart(2, '0')}</div>
                <div className="mt-5 font-black">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="px-6 py-24 lg:px-8">
        <div id="early-access" className="mx-auto max-w-5xl rounded-[2.5rem] bg-white p-8 text-center shadow-premium lg:p-14">
          <GraduationCap className="mx-auto h-12 w-12 text-gold" />
          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-navy sm:text-5xl">Download The Offshore Career Blueprint.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Receive a professional guide covering career pathways, industry certifications, technical roadmaps, career planning and future opportunities.
          </p>
          <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input aria-label="Email" placeholder="Enter your best email" className="min-h-14 flex-1 rounded-full border border-slate-200 px-6 outline-none focus:border-gold" />
            <button className="min-h-14 rounded-full bg-navy px-8 font-bold text-white transition hover:bg-gold hover:text-navy" type="button">Join Early Access</button>
          </form>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-4xl font-black tracking-[-0.04em] text-navy">Frequently Asked Questions</h2>
          <div className="mt-10 grid gap-4">
            {['How do I begin an offshore career?', 'Who is Offshore Pro Academy designed for?', 'Do I need previous offshore experience?', 'Will there be live technical programs?', 'Will new Technical Handbooks be released?'].map((q) => (
              <details key={q} className="rounded-2xl bg-white p-6 shadow-sm">
                <summary className="cursor-pointer font-black text-navy">{q}</summary>
                <p className="mt-4 leading-7 text-slate-600">OPA is being built to support professionals at different stages with structured technical education, resources and career development guidance.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy to-ocean px-6 py-24 text-center text-white lg:px-8">
        <Target className="mx-auto h-12 w-12 text-gold" />
        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">Invest In The Most Valuable Asset Of Your Career.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Your knowledge. Join Offshore Pro Academy and become part of a professional community committed to technical excellence and continuous development.</p>
        <a href="#early-access" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-black text-navy transition hover:bg-white">Join Early Access <Users className="h-5 w-5" /></a>
      </section>

      <Footer />
    </main>
  )
}
