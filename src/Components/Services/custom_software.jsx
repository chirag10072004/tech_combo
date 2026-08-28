import React, { useEffect } from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Custom_Hero from './CUSTOM/Custom_hero'
import Custom_What_We_Provide from './CUSTOM/Custom_what_we_provide'
import Custom_Tech from './CUSTOM/Custom_tech'
import WhyChooseUs from './WhyChooseUs'
import ServicesCTA from './ServicesCTA'

const CustomSoftwareDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20 lg:pt-24">
        <Custom_Hero />
      </div>

      {/* Services Provided */}
      <Custom_What_We_Provide />

      {/* Tech Stack */}
      <Custom_Tech />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Call To Action */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default CustomSoftwareDevelopment
