
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Requirement Analysis",
    subtitle: "Understanding your vision",
    description:
      "We understand your business goals, challenges and requirements to define exactly what needs to be built.",
    image: "/assets/Home/process2/requirement.png",
    color: "#0ea5e9",
  },
  {
    number: "02",
    title: "Planning & Strategy",
    subtitle: "Building the roadmap",
    description:
      "We plan the architecture, technology stack and project roadmap to create a clear development direction.",
    image: "/assets/Home/process2/planing.png",
    color: "#8b5cf6",
  },
  {
    number: "03",
    title: "Design & Development",
    subtitle: "Turning ideas into reality",
    description:
      "Our team designs and develops clean, scalable and user-focused digital solutions.",
    image: "/assets/Home/process2/coding.png",
    color: "#10b981",
  },
  {
    number: "04",
    title: "Testing & Quality",
    subtitle: "Precision at every step",
    description:
      "Every solution goes through testing for reliability, security, performance and overall quality.",
    image: "/assets/Home/process2/test.png",
    color: "#f59e0b",
  },
  {
    number: "05",
    title: "Deployment & Support",
    subtitle: "Ready for the real world",
    description:
      "We deploy the final product and continue providing support, improvements and maintenance.",
    image: "/assets/Home/process2/cloud.png",
    color: "#3b82f6",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const Process = () => {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (index) => {
    setActiveStep((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f5f8fc] py-24 sm:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 45, 0], y: [0, 35, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/50 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-200/40 blur-[120px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mt-1 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            From Vision to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-violet-600 bg-clip-text text-transparent">
              Reality
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            A thoughtful approach to every project, combining
            innovative ideas, modern technology and expert execution.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 85 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group relative h-full"
              >
                {/* Card */}
                <div
                  className={`relative h-full overflow-hidden rounded-[20px] border bg-white transition-all duration-500 ${
                    isActive
                      ? "border-blue-300 shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
                      : "border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:border-blue-200 hover:shadow-xl"
                  }`}
                >
                  {/* Clickable image */}
                  <button
                    type="button"
                    onClick={() => toggleStep(index)}
                    aria-expanded={isActive}
                    aria-label={`${isActive ? "Collapse" : "View"} ${step.title}`}
                    className="relative block aspect-[16/10] w-full overflow-hidden text-left"
                  >
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      animate={{ scale: isActive ? 1.07 : 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-black/10" />


                    {/* Arrow */}
                    <motion.span
                      animate={{
                        rotate: isActive ? 45 : 0,
                        backgroundColor: isActive ? step.color : "#ffffffE8",
                        color: isActive ? "#ffffff" : "#1e293b",
                      }}
                      transition={{ duration: 0.35 }}
                      className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full shadow-lg"
                    >
                      <FiArrowUpRight size={22} />
                    </motion.span>

                    {/* Click label */}
                    <span className="absolute bottom-6 left-5 text-xs font-semibold uppercase tracking-wider text-white">
                      {isActive ? "Click to close" : "Click to explore"}
                    </span>
                  </button>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <div className="mb-4 flex items-center gap-2">
                      <span
                        className="h-1 rounded-full transition-all duration-500 group-hover:w-10"
                        style={{
                          width: isActive ? 40 : 24,
                          backgroundColor: step.color,
                        }}
                      />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <button
                      type="button"
                      onClick={() => toggleStep(index)}
                      aria-expanded={isActive}
                      className="flex w-full items-center justify-between gap-3 text-left"
                    >
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-2xl">
                        {step.title}
                      </h3>
                      <motion.span
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 text-slate-400"
                      >
                        <FiArrowUpRight size={20} />
                      </motion.span>
                    </button>

                    {/* Click-to-reveal description */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="description"
                          initial={{
                            height: 0,
                            opacity: 0,
                            y: -10,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            y: -8,
                          }}
                          transition={{
                            height: { duration: 0.4, ease: "easeInOut" },
                            opacity: { duration: 0.3 },
                            y: { duration: 0.3 },
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-sm leading-7 text-slate-500">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Phase {step.number}
                      </span>

                      <button
                        type="button"
                        onClick={() => toggleStep(index)}
                        className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                        style={{ color: step.color }}
                      >
                        {isActive ? "Show less" : "Explore"}
                        <FiArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Animated bottom accent */}
                  <motion.div
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      backgroundColor: step.color,
                      transformOrigin: "left",
                    }}
                    className="absolute bottom-0 left-0 h-[3px] w-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-1 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Process;