import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Hero from '../Components/Home/Hero'
import Achievement from '../Components/Home/Achievement'
import Services from '../Components/Home/Services'
import About from '../Components/Home/About'
import Technologies from '../Components/Home/Technologies'
import Process from '../Components/Home/Process'
import Footer from '../Components/Home/Footer'
import AboutIndustries from '../Components/Home/AboutIndustries'

const Home = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <Hero />

      <Achievement />

      <Services />

      <About />

      <Technologies />

 

      <Process />

      <AboutIndustries/>

      <Footer />
    </div>
  )
}

export default Home