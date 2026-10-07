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
  {
    icon: FiCloud,
    pos: "top-6 left-5 sm:top-16 sm:left-12",
    delay: 0,
  },
  {
    icon: FiCode,
    pos: "top-6 right-5 sm:top-16 sm:right-12",
    delay: 0.5,
  },
  {
    icon: FiBarChart2,
    pos: "top-32 left-1 sm:top-52 sm:left-4",
    delay: 0.2,
  },
  {
    icon: FiShield,
    pos: "top-28 right-1 sm:top-48 sm:right-4",
    delay: 0.7,
  },
];

const ServicesHero = () => {
  return (
    <section
      className="
        relative flex min-h-0 items-center overflow-hidden
        pt-24 pb-8
        sm:pt-28 sm:pb-12
        lg:min-h-[90vh] lg:py-14
      "
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                text-[36px]
                font-bold
                leading-[1.08]
                tracking-tight
                text-[#071329]
                sm:text-5xl
                lg:text-[54px]
                lg:leading-tight
              "
            >
              Software Solutions
              <br />
              Built Around{" "}
              <span className="text-green-600">
                Your Business
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                mx-auto mt-4
                max-w-xl
                text-[15px]
                font-medium
                leading-6
                text-slate-600
                sm:mt-5
                sm:text-lg
                sm:leading-relaxed
                lg:mx-0
              "
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
              className="
                mt-6
                flex flex-col gap-3
                sm:mt-7 sm:flex-row sm:gap-4
                lg:justify-start
              "
            >
              <Link
                to="/contact"
                className="
                  flex items-center justify-center gap-2
                  rounded-full
                  bg-green-600
                  px-7 py-3.5
                  font-semibold text-white
                  shadow-sm
                  transition
                  hover:bg-green-700
                  sm:px-8 sm:py-4
                "
              >
                Discuss Your Project
                <FaArrowRight className="text-sm" />
              </Link>

              <Link
                to="/product"
                className="
                  rounded-full
                  border border-green-200
                  bg-white/80
                  px-7 py-3.5
                  text-center
                  font-semibold text-green-600
                  transition
                  hover:bg-green-50
                  sm:px-8 sm:py-4
                "
              >
                Explore Our Work
              </Link>
            </motion.div>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div
            className="
              relative mt-1
              flex h-[300px]
              items-center justify-center
              sm:h-[400px]
              lg:mt-0 lg:h-[500px]
            "
          >
            {/* Laptop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              {/* Screen */}
              <div
                className="
                  aspect-[1.6]
                  w-[255px]
                  rounded-t-2xl
                  bg-slate-900
                  p-2
                  shadow-2xl
                  sm:w-[320px]
                  lg:w-[360px]
                "
              >
                <div className="h-full rounded-lg bg-slate-950 p-3">

                  {/* Browser dots */}
                  <div className="mb-3 flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500" />
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                  </div>

                  {/* Dashboard */}
                  <div className="grid h-[85%] grid-cols-4 gap-2">

                    {/* Sidebar */}
                    <div className="space-y-2 border-r border-slate-800">
                      <div className="h-2 rounded bg-green-600/50" />
                      <div className="h-2 rounded bg-slate-800" />
                      <div className="h-2 w-3/4 rounded bg-slate-800" />
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
                        <FiCpu className="text-xl text-blue-500" />
                      </motion.div>

                      {/* Code */}
                      <div className="rounded bg-slate-900 p-2 font-mono text-[7px] text-blue-400">
                        <span className="text-pink-500">
                          const
                        </span>{" "}
                        service = () =&gt; {"{"}
                        <br />
                        &nbsp;&nbsp;
                        <span className="text-purple-400">
                          return
                        </span>{" "}
                        deploy({"{"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;scale:{" "}
                        <span className="text-yellow-500">
                          true
                        </span>
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
              <div
                className="
                  mx-auto h-2.5
                  w-[280px]
                  rounded-b-2xl
                  bg-slate-800
                  sm:w-[350px]
                  lg:w-[390px]
                "
              />
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
                <div
                  className="
                    rounded-xl
                    border border-green-100
                    bg-white/90
                    p-2.5
                    shadow-lg
                    backdrop-blur-md
                    sm:rounded-2xl sm:p-4
                  "
                >
                  <Icon className="text-xl text-green-600 sm:text-2xl" />
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