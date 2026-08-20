import { useEffect } from 'react'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Packages from './components/Packages'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import AgentCard from './components/AgentCard'
import Tips from './components/Tips'
import VideoSection from './components/VideoSection'
import Downloads from './components/Downloads'
import FloatingWA from './components/FloatingWA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-visible', 'true')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05 },
    )
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative">
      <Hero />
      <TrustBar />
      <Services />
      <Packages />
      {/* Proof lands straight after the prices, while intent is highest. */}
      <Gallery />
      <WhyUs />
      <AgentCard />
      <Tips />
      <VideoSection />
      <Downloads />
      <Footer />
      <FloatingWA />
    </main>
  )
}
