import React from 'react'
import SEO from '../Components/SEO'

import Navbar from '../Components/Home/Navbar'
import Hero from '../Components/Home/Hero'
import Achievement from '../Components/Home/Achievement'
import About from '../Components/Home/About'
import Technologies from '../Components/Home/Technologies'
import Process from '../Components/Home/Process'
import Footer from '../Components/Home/Footer'
import AboutIndustries from '../Components/Home/AboutIndustries'
import ServicesShowcase from '../Components/Services/ServicesShowcase'
import AboutStats from '../Components/About/AboutStats'

const Home = () => {
  return (
    <>
      <SEO
        title="TechCombo | Premium IT Services & Web Solutions"
        description="TechCombo provides modern web development, mobile apps, custom software, AI solutions, and cloud services to help businesses accelerate growth."
        keywords="TechCombo, IT services, web development, mobile app development, custom software, cloud solutions, AI solutions"
        canonical="/"
      />

      <div className="min-h-screen text-white">
        <Navbar />

        <Hero />

        <AboutStats />

        <ServicesShowcase />

        <About />

        <Technologies />

        <Process />

        <AboutIndustries />

        <Footer />
      </div>
    </>
  )
}

export default Home
