import React from "react";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiEye,
  FiAward,
  FiCheck,
} from "react-icons/fi";

const AboutMissionValues = () => {
  const values = [
    "Innovation",
    "Customer Success",
    "Quality",
    "Continuous Learning",
    "Transparency",
    "Integrity",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >


          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#071329] md:text-5xl">
            Technology with purpose,
            <br />
            <span className="text-gray-400">
              built for real-world impact.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            We combine innovation, expertise and collaboration to
            create technology solutions that help businesses grow,
            evolve and succeed.
          </p>
        </motion.div>


        {/* IMAGE + VISION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid items-center gap-12 md:grid-cols-2"
        >

          {/* IMAGE SPACE */}
          <div className="relative h-[300px] overflow-hidden rounded-2xl  bg-white md:h-[380px]">

            {/* Replace this with your image */}

            <img
              src="/assets/About/value.png"
              alt="Our Journey"
              className="h-full w-full object-cover"
            />

          </div>


          {/* VISION */}
          <div className="md:pl-6">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <FiEye size={24} />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-[#071329]">
              Our Vision
            </h3>

            <p className="max-w-lg text-sm leading-7 text-slate-500">
              Become a trusted global technology partner,
              recognized globally for engineering world-class
              software products and digital systems.
            </p>

            <div className="mt-6 h-[2px] w-12 bg-purple-500" />

          </div>

        </motion.div>


        {/* MISSION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid items-center gap-12 md:grid-cols-3"
        >

          {/* ICON */}
          <div className="flex justify-center md:justify-start">

            <div className="relative flex h-32 w-32 items-center justify-center">

              <div className="absolute inset-0 rounded-full border border-dashed border-gray-200" />

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                <FiTarget size={28} />
              </div>

            </div>

          </div>


          {/* MISSION */}
          <div className="md:col-span-2">

            <h3 className="mb-4 text-3xl font-bold text-[#071329]">
              Our Mission
            </h3>

            <p className="max-w-2xl text-sm leading-7 text-slate-500">
              Empower businesses through innovative technology
              solutions that drive growth and efficiency, creating
              a measurable digital footprint.
            </p>

            <div className="mt-6 h-[2px] w-12 bg-orange-400" />

          </div>

        </motion.div>


        {/* VALUES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 border-t border-gray-200 pt-14"
        >

          

            <div className="flex mb-10 gap-4">

              
            <FiAward
              size={30}
              className="hidden text-blue-500 sm:block"
            />

              <h3 className="text-3xl font-bold text-[#071329]">
                Our Values
              </h3>
            </div>

          


          {/* VALUES */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
            {values.map((value) => (
              <div
              key={value}
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-slate-50"
              >
             <span className="h-1.5 w-1.5 rounded-full bg-slate-400 transition-all duration-200 group-hover:scale-125 group-hover:bg-slate-900" />

             <span className="text-sm font-medium text-slate-600 transition-colors duration-200 group-hover:text-slate-900">
            {value}
            </span>
           </div>
            ))}
         </div>
        </motion.div>

      </div>

    </section>
  );
};

export default AboutMissionValues;