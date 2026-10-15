import React, { useEffect } from 'react'
import SEO from '../Components/SEO'
import Navbar from '../Components/Home/Navbar'
import ServicesHero from '../Components/Services/ServicesHero'
import HomeServices from '../Components/Home/Services'
import ProcessSection from '../Components/Services/ProcessSection'
import ServicesCTA from '../Components/Services/ServicesCTA'
import Footer from '../Components/Home/Footer'
import WhyChooseUs from '../Components/Services/WhyChooseUs'

const Services = () => {
  // Reset scroll position on page mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans">
      <SEO
        title="Our Services | TechCombo - Custom Software, Cloud & Web Solutions"
        description="Explore TechCombo's comprehensive technology services: custom software development, mobile apps, web solutions, cloud engineering, and cybersecurity."
        keywords="IT services, software engineering, web design, mobile apps, cloud computing, cybersecurity"
        canonical="/services"
      />
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <ServicesHero />

      {/* Core Services Section */}
      <HomeServices />

      {/* Process Section */}
      <ProcessSection />

      <WhyChooseUs/>

      {/* Call to Action Section */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Services
