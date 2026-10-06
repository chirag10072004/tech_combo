
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section
      className="relative flex min-h-0 items-center overflow-hidden mt-18 bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:min-h-[85vh] lg:py-20"
      style={{
        backgroundImage: "url('/assets/Home/hero.png')",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.48) 45%, rgba(0,0,0,0.18) 100%)",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col  justify-center space-y-5 text-center sm:space-y-6 lg:col-span-6 lg:text-left">


            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[34px] font-bold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-tight lg:text-[54px] lg:leading-tight"
            >
              Building Digital
              <br />
              <span className="text-green-300">
                Solutions That
              </span>
              <br className="hidden sm:block" />
              <span className="sm:ml-2 lg:ml-0">
                Power Business
              </span>
              <br />
              <span className="text-green-300">Growth</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xl text-sm font-normal leading-6 text-gray-200 sm:text-base sm:leading-7 lg:mx-0 lg:text-lg"
            >
              TechCombo delivers innovative digital solutions,
              including custom software, AI, cloud, and mobile
              applications, helping businesses grow and scale.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4 lg:justify-start"
            >
              <Link
                to="/services"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                <span>Our Services</span>
                <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="flex w-full items-center justify-center rounded-full border border-white/60 bg-white px-7 py-3.5 text-sm font-semibold text-[#082b55] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Right Spacer - Desktop only */}
          <div className="hidden min-h-[450px] lg:col-span-6 lg:block" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;