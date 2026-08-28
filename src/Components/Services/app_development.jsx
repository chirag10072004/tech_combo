import React, { useEffect } from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import App_Hero from './APP_DEV/App_hero'
import App_What_We_Provide from './APP_DEV/App_what_we_provide'
import App_Tech from './APP_DEV/App_Tech'
import WhyChooseUs from './WhyChooseUs'
import ServicesCTA from './ServicesCTA'

const AppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20 lg:pt-24">
        <App_Hero />
      </div>

      {/* Services Provided */}
      <App_What_We_Provide />

      {/* Tech Stack */}
      <App_Tech />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Call To Action */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AppDevelopment
