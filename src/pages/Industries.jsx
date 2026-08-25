import React from 'react'
import Industry_hero from '../Components/Industry/Industry_hero'
import Industry_Data from '../Components/Industry/Industry_Data'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'

const Industries = () => {
  return (
    <div>
      <Navbar />

      <Industry_hero />
      <Industry_Data />

      <Footer />
    </div>
  )
}

export default Industries