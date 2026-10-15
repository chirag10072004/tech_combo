import React, { useEffect } from 'react'
import SEO from '../Components/SEO'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import AboutHero from '../Components/About/AboutHero'
import AboutWhoWeAre from '../Components/About/AboutWhoWeAre'
import AboutStory from '../Components/About/AboutStory'
import AboutMissionValues from '../Components/About/AboutMissionValues'
import AboutWhyChoose from '../Components/About/AboutWhyChoose'
import AboutTechStack from '../Components/About/AboutTechStack'
import AboutStats from '../Components/About/AboutStats'
import AboutCTA from '../Components/About/AboutCTA'
import Achievement from '../Components/Home/Achievement'



const About = () => {
  // Ensure the page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans">
      <SEO
        title="About Us | TechCombo - Driving Digital Transformation"
        description="Learn about TechCombo's mission, values, and expert engineering team dedicated to providing innovative software and IT solutions."
        keywords="About TechCombo, IT company, software agency, tech team, mission, values"
        canonical="/about"
      />
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <AboutHero />

      {/* Who We Are */}
      <AboutWhoWeAre />

  

      {/* Our Story / Journey Timeline */}
      <AboutStory />

      {/* Mission Vision Values Cards */}
      <AboutMissionValues />

      {/* Why Choose Us Features */}
      <AboutWhyChoose />

     
      {/* Company Stats Counters */}
      
      <Achievement/>

      



      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About
