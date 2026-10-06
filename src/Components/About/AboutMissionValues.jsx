
import React from "react";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiEye,
  FiAward,
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
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative overflow-hidden bg-blue-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-9"
        >
          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#071329] md:text-5xl">
            Technology with purpose,
            <br />
            <span className="text-gray-400">
              built for real-world impact.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
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
          className="grid items-center gap-7 md:grid-cols-2 md:gap-10"
        >
          {/* IMAGE */}
          <div className="relative h-[280px] overflow-hidden rounded-2xl bg-white md:h-[340px]">
            <img
              src="/assets/About/value.png"
              alt="Our Journey"
              className="h-full w-full object-cover"
            />
          </div>

          {/* VISION */}
          <div className="md:pl-4">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <FiEye size={23} />
            </div>

            <h3 className="mb-3 text-2xl font-bold text-[#071329] sm:text-3xl">
              Our Vision
            </h3>

            <p className="max-w-lg text-sm leading-7 text-slate-500">
              Become a trusted global technology partner,
              recognized globally for engineering world-class
              software products and digital systems.
            </p>

            <div className="mt-5 h-[2px] w-12 bg-purple-500" />
          </div>
        </motion.div>

        {/* MISSION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-9 grid items-center gap-5 md:mt-10 md:grid-cols-3 md:gap-8"
        >
          {/* ICON */}
          <div className="flex justify-center md:justify-start">
            <div className="relative flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-gray-300" />

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                <FiTarget size={26} />
              </div>
            </div>
          </div>

          {/* MISSION */}
          <div className="md:col-span-2">
            <h3 className="mb-3 text-2xl font-bold text-[#071329] sm:text-3xl">
              Our Mission
            </h3>

            <p className="max-w-2xl text-sm leading-7 text-slate-500">
              Empower businesses through innovative technology
              solutions that drive growth and efficiency, creating
              a measurable digital footprint.
            </p>
          </div>
        </motion.div>

        {/* VALUES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 border-t border-blue-100 pt-7"
        >
          <div className="mb-5 flex items-center gap-3">
            <FiAward
              size={27}
              className="text-blue-500"
            />

            <h3 className="text-2xl font-bold text-[#071329] sm:text-3xl">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-2 sm:grid-cols-3 sm:gap-x-8">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                }}
                className="group flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-white/70"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 transition-all duration-200 group-hover:scale-125 group-hover:bg-blue-600" />

                <span className="text-sm font-medium text-slate-600 transition-colors duration-200 group-hover:text-[#071329]">
                  {value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMissionValues;