import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  FiCode,
  FiCloud,
  FiShield,
  FiBarChart2,
  FiCpu,
} from "react-icons/fi";

const cards = [
  { icon: FiCloud, pos: "top-12 left-8 sm:top-16 sm:left-12", delay: 0 },
  { icon: FiCode, pos: "top-12 right-8 sm:top-16 sm:right-12", delay: 0.5 },
  { icon: FiBarChart2, pos: "top-40 left-2 sm:top-52 sm:left-4", delay: 0.2 },
  { icon: FiShield, pos: "top-36 right-2 sm:top-48 sm:right-4", delay: 0.7 },
];

const ServicesHero = () => {
  return (
    <section
      className="relative min-h-0 lg:min-h-[90vh] flex items-center overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: "url('/assets/Home/hero1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white/65 backdrop-blur-[3px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/55 to-green-50/50" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">


            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#071329] leading-tight"
            >
              Software Solutions
              <br />
              Built Around{" "}
              <span className="text-green-600">Your Business</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              We deliver end-to-end software development services tailored
              to your industry needs. From strategy and design to development
              and support, we build scalable digital products with modern
              technology and measurable results.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-7 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                Discuss Your Project
                <FaArrowRight className="text-sm" />
              </Link>

              <Link
                to="/product"
                className="px-8 py-4 rounded-full border border-green-200 bg-white/80 text-green-600 font-semibold text-center hover:bg-green-50 transition"
              >
                Explore Our Work
              </Link>
            </motion.div>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="relative flex justify-center items-center h-[340px] sm:h-[400px] lg:h-[500px] mt-0 lg:mt-0">

            {/* Laptop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              {/* Screen */}
              <div className="w-[270px] sm:w-[320px] lg:w-[360px] aspect-[1.6] bg-slate-900 rounded-t-2xl p-2 shadow-2xl">

                <div className="h-full bg-slate-950 rounded-lg p-3">

                  {/* Browser dots */}
                  <div className="flex gap-1 mb-3">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </div>

                  {/* Dashboard */}
                  <div className="grid grid-cols-4 gap-2 h-[85%]">

                    {/* Sidebar */}
                    <div className="border-r border-slate-800 space-y-2">
                      <div className="h-2 bg-green-600/50 rounded" />
                      <div className="h-2 bg-slate-800 rounded" />
                      <div className="h-2 bg-slate-800 rounded w-3/4" />
                    </div>

                    {/* Main */}
                    <div className="col-span-3 flex flex-col gap-3">

                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 8,
                          ease: "linear",
                        }}
                      >
                        <FiCpu className="text-blue-500 text-xl" />
                      </motion.div>

                      {/* Code */}
                      <div className="bg-slate-900 rounded p-2 font-mono text-[7px] text-blue-400">
                        <span className="text-pink-500">const</span>{" "}
                        service = () =&gt; {"{"}
                        <br />
                        &nbsp;&nbsp;
                        <span className="text-purple-400">return</span>{" "}
                        deploy({"{"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;scale:{" "}
                        <span className="text-yellow-500">true</span>
                        <br />
                        &nbsp;&nbsp;{"}"});
                        <br />
                        {"};"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="w-[295px] sm:w-[350px] lg:w-[390px] h-2.5 bg-slate-800 rounded-b-2xl mx-auto" />
            </motion.div>

            {/* Floating Cards */}
            {cards.map(({ icon: Icon, pos, delay }, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  delay,
                  ease: "easeInOut",
                }}
                className={`absolute ${pos} z-20`}
              >
                <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-green-100 shadow-lg">
                  <Icon className="text-green-600 text-xl sm:text-2xl" />
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;