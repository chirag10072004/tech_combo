import React, { useEffect } from 'react'
import SEO from '../SEO'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Web_Hero from './WEB_DEV/web_hero'
import Web_What_We_Provide from './WEB_DEV/web_what_we_provide'
import Web_Tech from './WEB_DEV/Web_Tech'
import WhyChooseUs from './WhyChooseUs'
import ServicesCTA from './ServicesCTA'

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans">
      <SEO
        title="Web Development Services | TechCombo"
        description="High-performance, modern, and SEO-optimized web development services by TechCombo. Full-stack custom web applications and portals."
        keywords="Web development services, frontend development, backend development, React web development, fullstack agency"
        canonical="/web-development"
      />
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20 lg:pt-24">
        <Web_Hero />
      </div>

      {/* Services Provided */}
      <Web_What_We_Provide />

      {/* Tech Stack */}
      <Web_Tech />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Call To Action */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default WebDevelopment
