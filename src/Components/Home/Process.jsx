import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "We understand your business goals, challenges and requirements to define exactly what needs to be built.",
    image: "/assets/Home/process/Requirment.png",
  },
  {
    number: "02",
    title: "Planning & Strategy",
    description:
      "We plan the architecture, technology stack and project roadmap to create a clear development direction.",
    image: "/assets/Home/process/planning.png",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "Our team designs and develops clean, scalable and user-focused digital solutions.",
    image: "/assets/Home/process/Devlopment.png",
  },
  {
    number: "04",
    title: "Testing & Quality",
    description:
      "Every solution goes through testing for reliability, security, performance and overall quality.",
    image: "/assets/Home/process/Testing.png",
  },
  {
    number: "05",
    title: "Deployment & Support",
    description:
      "We deploy the final product and continue providing support, improvements and maintenance.",
    image: "/assets/Home/process/Deploy.png",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const active = steps[activeStep];

  return (
    <section id="process" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">

        {/* HEADER */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
            Our Process
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            How We Work
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            From the first idea to the final launch, we follow a clear and
            structured approach.
          </p>
        </div>

        {/* PROCESS */}
        <div className="grid overflow-hidden rounded-3xl border border-gray-200 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT IMAGE */}
          <div className="relative flex min-h-[420px] items-center justify-center bg-gray-50 p-8 sm:p-12">

            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.title}
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.4 }}
                className="h-[280px] w-full object-contain sm:h-[340px]"
              />
            </AnimatePresence>

            {/* BIG NUMBER */}
            <span className="absolute left-6 top-6 text-7xl font-black text-gray-200 sm:left-10 sm:top-8 sm:text-8xl">
              {active.number}
            </span>

          </div>

          {/* RIGHT STEPS */}
          <div className="bg-white">

            {steps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`
                    w-full border-b border-gray-200 p-6 text-left
                    transition-all duration-300 last:border-b-0
                    sm:p-7
                    ${isActive ? "bg-gray-300 text-black" : "hover:bg-gray-50"}
                  `}
                >
                  <div className="flex items-start gap-5">

                    <span
                      className={`
                        pt-1 text-sm font-bold
                        ${isActive ? "text-black" : "text-gray-300"}
                      `}
                    >
                      {step.number}
                    </span>

                    <div>
                      <h3
                        className={`
                          text-lg font-bold sm:text-xl
                          ${isActive ? "text-black  " : "text-gray-900"}
                        `}
                      >
                        {step.title}
                      </h3>

                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-3 text-sm leading-6 text-gray-800"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </div>

                  </div>
                </button>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;