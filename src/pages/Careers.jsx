import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import CareersSection from '../Components/Careers/Careers'
import CareersHero from '../Components/Careers/CareersHero'

const Careers = () => {
  return (
    <>

<Navbar/>
       <div className=' '>
        <CareersHero/>
        <CareersSection/>
  
       </div>
<Footer/>
      

    
    </>
  )
}

export default Careers