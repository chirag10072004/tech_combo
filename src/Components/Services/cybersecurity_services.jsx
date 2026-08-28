import React, { useEffect } from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Cyber_Hero from './CYBER/Cyber_hero'
import Cyber_What_We_Provide from './CYBER/Cyber_what_we_provide'
import Cyber_Tech from './CYBER/Cyber_Tech'
import WhyChooseUs from './WhyChooseUs'
import ServicesCTA from './ServicesCTA'

const CybersecurityServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20 lg:pt-24">
        <Cyber_Hero />
      </div>

      {/* Services Provided */}
      <Cyber_What_We_Provide />

      {/* Tech Stack */}
      <Cyber_Tech />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Call To Action */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default CybersecurityServices
