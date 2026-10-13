import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiEye, FiAward } from "react-icons/fi";

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
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gray-100 py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-5 sm:mb-6"
        >
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#071329] sm:text-4xl md:text-5xl">
            Technology with purpose,
            <br />
            <span className="text-gray-400">
              built for real-world impact.
            </span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:leading-7">
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
          viewport={{ once: true, amount: 0.15 }}
          className="grid items-center gap-4 sm:gap-6 md:grid-cols-2 md:gap-8"
        >
          {/* IMAGE */}
          <div className="relative h-[210px] overflow-hidden rounded-2xl bg-white sm:h-[260px] md:h-[300px]">
            <img
              src="/assets/About/value.png"
              alt="Our Journey"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>

          {/* VISION */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 md:p-7">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <FiEye size={22} />
            </div>

            <h3 className="mb-2 text-2xl font-bold text-[#071329] sm:text-3xl">
              Our Vision
            </h3>

            <p className="max-w-lg text-sm leading-6 text-slate-600 sm:leading-7">
              Become a trusted global technology partner,
              recognized for engineering world-class software
              products and digital systems.
            </p>

            <div className="mt-4 h-1 w-12 rounded-full bg-purple-500" />
          </div>
        </motion.div>

        {/* MISSION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-4 grid items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 sm:mt-5 sm:grid-cols-[72px_1fr] sm:gap-5 sm:p-5"
        >
          {/* ICON */}
          <div className="flex justify-start">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <FiTarget size={26} />
            </div>
          </div>

          {/* MISSION CONTENT */}
          <div>
            <h3 className="mb-1.5 text-2xl font-bold text-[#071329] sm:text-3xl">
              Our Mission
            </h3>

            <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:leading-7">
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
          viewport={{ once: true, amount: 0.15 }}
          className="mt-4 border-t border-gray-200 pt-4 sm:mt-5 sm:pt-5"
        >
          <div className="mb-3 flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiAward size={23} />
            </div>

            <h3 className="text-2xl font-bold text-[#071329] sm:text-3xl">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50/50"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-[#071329]">
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