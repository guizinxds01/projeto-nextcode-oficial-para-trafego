import Navbar from './components/Navbar'
import BackgroundAnimation from './components/BackgroundAnimation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Benefits from './components/Benefits'
import Cases from './components/Cases'
import HowItWorks from './components/HowItWorks'
import Demonstration from './components/Demonstration'
import Offer from './components/Offer'
import Objections from './components/Objections'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-inter relative text-white overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Problem />
        <Benefits />
        <Cases />
        <HowItWorks />
        <Demonstration />
        <Offer />
        <Objections />
        <FinalCTA />
        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  )
}
