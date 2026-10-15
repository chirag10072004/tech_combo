import React from 'react'
import SEO from '../Components/SEO'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import CareersSection from '../Components/Careers/Careers'
import CareersHero from '../Components/Careers/CareersHero'

const Careers = () => {
  return (
    <>
      <SEO
        title="Careers | Join the TechCombo Team"
        description="Build your career at TechCombo. Explore open software engineering, design, and developer roles and shape the future of tech."
        keywords="TechCombo careers, developer jobs, IT jobs, software engineer openings"
        canonical="/careers"
      />
      <Navbar />
       <div className=' '>
        <CareersHero/>
        <CareersSection/>
  
       </div>
<Footer/>
      

    
    </>
  )
}

export default Careers