
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const AboutHero = () => {
  return (
    <section
      className="relative min-h-[85vh] pt-32 pb-20 flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/Home/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle dark gradient on the left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.40) 32%, rgba(0,0,0,0.12) 58%, transparent 78%)',
        }}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left space-y-6">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-tight"
            >
              Building Digital <br />
              <span className='text-green-300'>Solutions That </span>
               <br />
              Power <span className="">Business</span>
              <br />
              <span className="text-green-300">Growth</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
         TechCombo delivers innovative digital solutions, including custom software, AI, cloud, and mobile applications, helping businesses grow and scale.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link
                to="/services"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Our Services</span>
                <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-green-300 border border-white/60 bg-white hover:bg-green-50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 min-h-[300px] lg:min-h-[450px]" />

        </div>
      </div>
    </section>
  )
}

export default AboutHero