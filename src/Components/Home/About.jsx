import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import { motion } from 'framer-motion'

const OfficeImg = '/assets/Home/office.png'

const About = () => {

  const checklist = [
    'Client-focused approach',
    'Agile development process',
    'On-time delivery',
    'Quality & security assured',
  ]

  return (
    <section
      id="about"
      className="py-24 bg-white overflow-hidden scroll-mt-24"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Image - comes from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >

            <div className="overflow-hidden rounded-2xl shadow-xl">

              <img
                src={OfficeImg}
                alt="TechCombo Office Team Working"
                className="w-full h-full object-cover"
              />

            </div>

          </motion.div>


          {/* Content - comes from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Building Technology Solutions
              <br className="hidden sm:block" />
              That Empower Businesses
            </h2>


            {/* Line */}
            <div className="w-12 h-1 bg-green-600 rounded mt-5" />


            {/* Description */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              We are a team of passionate technologists, designers, and
              problem-solvers who love turning ideas into reality. Our mission
              is to deliver high-quality, scalable, and innovative solutions
              that create real business impact.
            </p>


            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

              {checklist.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div className="h-5 w-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600">

                    <FiCheck className="h-3 w-3" />

                  </div>

                  <span className="text-gray-600">
                    {item}
                  </span>

                </div>

              ))}

            </div>


            {/* Button */}
            <div className="mt-8">

              <Link
                to="/about"
                className="inline-block px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-green-500 transition"
              >
                More About Us
              </Link>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About