import { useReveal } from '@/hooks/useReveal'
import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import Kits from '@/sections/Kits'
import HowItWorks from '@/sections/HowItWorks'
import Destinations from '@/sections/Destinations'
import CtaBanner from '@/sections/CtaBanner'
import Footer from '@/sections/Footer'

export default function Home() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="min-h-screen bg-[#f5f2ea]">
      <Nav />
      <main>
        <Hero />
        <Kits />
        <HowItWorks />
        <Destinations />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
