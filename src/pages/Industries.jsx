import React from 'react'
import SEO from '../Components/SEO'
import Industry_hero from '../Components/Industry/Industry_hero'
import Industry_Data from '../Components/Industry/Industry_Data'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'

const Industries = () => {
  return (
    <div>
      <SEO
        title="Industries We Serve | TechCombo Tech Solutions"
        description="Discover how TechCombo delivers tailored software and digital transformation solutions across Healthcare, Fintech, E-commerce, EdTech, and more."
        keywords="IT solutions by industry, fintech software, healthcare IT, ecommerce solutions"
        canonical="/industries"
      />
      <Navbar />

      <Industry_hero />
      <Industry_Data />

      <Footer />
    </div>
  )
}

export default Industries