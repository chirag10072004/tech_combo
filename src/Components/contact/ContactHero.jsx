import React from 'react'
import { motion } from 'framer-motion'

const ContactHero = () => {
  return (
    <section className="relative lg:pt-40 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} 
            className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="text-sm font-bold uppercase tracking-widest text-primary-blue">
                Contact Us
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let's <span className="text-primary-blue">Connect</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Have a project in mind or need expert guidance? We'd love to hear from you. Fill out the form or reach us using the information below.
            </p>
          </motion.div>

          {/* Right Column - Premium 3D-style SVG Illustration */}
          
        </div>
      </div>
    </section>
  )
}

export default ContactHero
