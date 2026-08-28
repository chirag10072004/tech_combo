import React, { useEffect } from 'react'
import Navbar from '../Components/Home/Navbar'
import ServicesHero from '../Components/Services/ServicesHero'
import HomeServices from '../Components/Home/Services'
import ProcessSection from '../Components/Services/ProcessSection'
import ServicesCTA from '../Components/Services/ServicesCTA'
import Footer from '../Components/Home/Footer'

const Services = () => {
  // Reset scroll position on page mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <ServicesHero />

      {/* Core Services Section */}
      <HomeServices />

      {/* Process Section */}
      <ProcessSection />

      {/* Call to Action Section */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Services
