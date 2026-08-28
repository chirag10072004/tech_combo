import React, { useEffect } from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Cloud_Hero from './CLOUD/Cloud_hero'
import Cloud_What_We_Provide from './CLOUD/Cloud_what_we_provide'
import Cloud_Tech from './CLOUD/Cloud_tech'
import WhyChooseUs from './WhyChooseUs'
import ServicesCTA from './ServicesCTA'

const CloudSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20 lg:pt-24">
        <Cloud_Hero />
      </div>

      {/* Services Provided */}
      <Cloud_What_We_Provide />

      {/* Tech Stack */}
      <Cloud_Tech />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Call To Action */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default CloudSolutions
