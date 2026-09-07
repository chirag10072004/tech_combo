import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiLayers,
  FiUsers,
  FiCode,
  FiAward,
  FiArrowUpRight,
} from "react-icons/fi";

const AboutStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const stats = [
    {
      value: "1,200+",
      label: "Projects Delivered",
      icon: <FiLayers />,
    },
    {
      value: "125+",
      label: "Happy Clients",
      icon: <FiUsers />,
    },
    {
      value: "50+",
      label: "Software Engineers",
      icon: <FiCode />,
    },
    {
      value: "5+",
      label: "Years Experience",
      icon: <FiAward />,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gray-300 py-20 sm:py-24"
    >
      {/* Soft background glow only */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                By The Numbers
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              Experience you can
              <br />
              <span className="text-neutral-500">
                measure.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-500 font-serif md:text-right">
            Every number represents the people, products and
            partnerships we've built over the years.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">

          {/* LEFT FEATURED CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl bg-[#F2F0EB] lg:col-span-6"
          >
            {/* Decorative circle */}
            <div
              className="
                absolute
                -right-32
                -top-32
                h-80
                w-80
                rounded-full
                border-[55px]
                border-orange-500/[0.08]
                transition-transform
                duration-700
                group-hover:scale-125
              "
            />

            <div className="relative flex min-h-[360px] h-full flex-col justify-between p-8 sm:p-10">

              {/* Top */}
              <div className="flex items-start justify-between">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#111111]
                    text-xl
                    text-white
                    transition-all
                    duration-500
                    group-hover:bg-orange-500
                    group-hover:rotate-6
                  "
                >
                  {stats[0].icon}
                </div>

                <span className="text-xs font-bold tracking-[0.2em] text-neutral-400">
                  01 / 04
                </span>
              </div>

              {/* Number */}
              <div>
                <p className="mb-3 text-sm font-medium text-neutral-500">
                  {stats[0].label}
                </p>

                <div className="flex items-end justify-between">

                  <h3
                    className="
                      text-7xl
                      font-black
                      leading-none
                      tracking-[-0.06em]
                      text-[#111111]
                      transition-all
                      duration-500
                      group-hover:translate-x-2
                      sm:text-8xl
                    "
                  >
                    {stats[0].value}
                  </h3>

                  <div
                    className="
                      mb-2
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-300
                      text-neutral-600
                      transition-all
                      duration-500
                      group-hover:border-orange-500
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                  >
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-4 lg:col-span-6">

            {stats.slice(1).map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 35 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.1,
                }}
                className="group relative cursor-pointer"
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/[0.08]
                    bg-[#1A1A1A]
                    transition-all
                    duration-500

                    hover:translate-x-3
                    hover:border-orange-500/30
                    hover:bg-[#202020]
                    hover:shadow-[-10px_0_40px_rgba(249,115,22,0.08)]
                  "
                >

                  {/* Orange side indicator */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[3px]
                      origin-left
                      scale-y-0
                      bg-orange-500
                      transition-transform
                      duration-500
                      group-hover:scale-y-100
                    "
                  />

                  <div className="flex min-h-[108px] items-center justify-between p-6 sm:p-7">

                    {/* Left Content */}
                    <div className="flex items-center gap-5">

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-[#151515]
                          text-lg
                          text-neutral-400
                          transition-all
                          duration-500
                          group-hover:border-orange-500/40
                          group-hover:bg-orange-500
                          group-hover:text-white
                          group-hover:scale-105
                        "
                      >
                        {stat.icon}
                      </div>

                      {/* Text */}
                      <div>
                        <h3
                          className="
                            text-3xl
                            font-black
                            tracking-tight
                            text-white
                            transition-transform
                            duration-500
                            group-hover:translate-x-1
                          "
                        >
                          {stat.value}
                        </h3>

                        <p className="mt-1 text-sm text-neutral-500">
                          {stat.label}
                        </p>
                      </div>

                    </div>

                    {/* Right Arrow */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/[0.08]
                        text-neutral-600
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                        group-hover:border-orange-500/40
                        group-hover:text-orange-500
                      "
                    >
                      <FiArrowUpRight
                        className="
                          transition-transform
                          duration-500
                          group-hover:rotate-45
                        "
                      />
                    </div>

                  </div>

                  {/* Bottom progress line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/[0.04]">
                    <div
                      className="
                        h-full
                        w-0
                        bg-orange-500
                        transition-all
                        duration-700
                        group-hover:w-full
                      "
                    />
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="
            mt-8
            flex
            flex-col
            justify-between
            gap-3
            border-t
            border-white/[0.08]
            pt-5
            sm:flex-row
          "
        >
          <span className="text-xs uppercase tracking-widest text-neutral-600">
            Built through experience
          </span>

          <span className="text-xs uppercase tracking-widest text-neutral-600">
            2021 — 2026
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutStats;