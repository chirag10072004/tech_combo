import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaEnvelope } from 'react-icons/fa'

const AboutCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Box */}
        <div className="bg-gradient-to-r from-green-600 via-blue-700 to-indigo-900 rounded-3xl p-8 sm:p-12 lg:p-16">

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left Side */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Let's Build Something
                <br />
                Amazing Together
              </h2>

              <p className="mt-4 text-blue-100 max-w-xl">
                Whether you're launching a startup MVP, modernizing enterprise
                software, or building AI-powered products, TechCombo is ready
                to turn your vision into reality.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Quote Button */}
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Get Free Quote
                <FaArrowRight />
              </Link>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-white/40 text-white rounded-full font-semibold hover:bg-white/10 transition"
              >
                <FaEnvelope />
                Contact Our Team
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutCTA