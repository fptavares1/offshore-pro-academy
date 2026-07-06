import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import LearningEcosystem from '@/components/LearningEcosystem'
import FeaturedHandbook from '@/components/FeaturedHandbook'
import CareerRoadmap from '@/components/CareerRoadmap'
import EarlyAccessCTA from '@/components/EarlyAccessCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-steel">
      <Navbar />
      <Hero />
      <TrustStrip />
      <LearningEcosystem />
      <FeaturedHandbook />
      <CareerRoadmap />
      <EarlyAccessCTA />
      <Footer />
    </main>
  )
}
