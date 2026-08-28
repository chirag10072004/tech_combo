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
    <section
      id="process"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">

        {/* ================= HEADER ================= */}

        <div className="mb-14 text-center sm:mb-16">


          <h2
            className="
              mt-3
              text-[28px]
              font-black
              leading-tight
              tracking-[-1px]
              text-[#111827]
              sm:text-4xl
              lg:text-5xl
            "
          >
            How We Work
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-xs
              leading-5
              text-gray-500
              sm:text-sm
              sm:leading-6
            "
          >
            A simple, transparent process designed to turn your idea
            into a reliable digital product.
          </p>

        </div>

        {/* ================= STEP NAVIGATION ================= */}

        <div className="relative mb-14 sm:mb-16">

          {/* Main Timeline */}

          <div
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[21px]
              hidden
              h-px
              bg-[#E5E7EB]
              md:block
            "
          />

          {/* Green Progress */}

          <motion.div
            className="
              absolute
              left-[10%]
              top-[20px]
              hidden
              h-[2px]
              bg-[#3F8F68]
              md:block
            "
            animate={{
              width: `${(activeStep / (steps.length - 1)) * 80}%`,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          />

          <div
            className="
              relative
              flex
              justify-between
              gap-2
              md:px-[6%]
            "
          >
            {steps.map((step, index) => {

              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <div
                  key={step.number}
                  className="flex flex-1 flex-col items-center"
                >

                  {/* NUMBER */}

                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`View ${step.title}`}
                    className="relative z-10 focus:outline-none"
                  >

                    <motion.div
                      animate={{
                        scale: isActive ? 1.1 : 1,

                        backgroundColor:
                          isActive || isCompleted
                            ? "#3F8F68"
                            : "#FFFFFF",

                        color:
                          isActive || isCompleted
                            ? "#FFFFFF"
                            : "#6B7280",

                        borderColor:
                          isActive || isCompleted
                            ? "#3F8F68"
                            : "#E5E7EB",
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-[11px]
                        font-bold
                        sm:h-11
                        sm:w-11
                        sm:text-xs
                      "
                    >
                      {step.number}
                    </motion.div>

                  </button>

                  {/* STEP TITLE */}

                  <span
                    className={`
                      mt-3
                      hidden
                      text-center
                      text-[10px]
                      font-semibold
                      sm:text-xs
                      md:block

                      ${isActive
                        ? "text-[#111827]"
                        : "text-gray-400"
                      }
                    `}
                  >
                    {step.title}
                  </span>

                </div>
              );
            })}
          </div>

        </div>

        {/* ================= ACTIVE CONTENT ================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#E8EAED]
            bg-white
          "
        >

          <div
            className="
              grid
              min-h-[390px]
              grid-cols-1
              lg:grid-cols-[1fr_1fr]
            "
          >

            {/* ================= IMAGE ================= */}

            <div
              className="
                relative
                flex
                min-h-[260px]
                items-center
                justify-center
                overflow-hidden
                bg-white
                lg:min-h-[420px]
              "
            >

              <AnimatePresence mode="wait">

                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.title}

                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}

                  exit={{
                    opacity: 0,
                    y: -15,
                    scale: 0.95,
                  }}

                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}

                  className="
                    relative
                    z-10
                    h-[220px]
                    w-[270px]
                    object-contain

                    sm:h-[250px]
                    sm:w-[310px]

                    md:h-[280px]
                    md:w-[350px]

                    lg:h-[330px]
                    lg:w-[400px]
                  "
                />

              </AnimatePresence>

            </div>

            {/* ================= CONTENT ================= */}

            <div
              className="
                flex
                flex-col
                justify-center
                px-6
                py-10
                sm:px-10
                sm:py-12
                lg:px-14
              "
            >

              <AnimatePresence mode="wait">

                <motion.div
                  key={active.number}

                  initial={{
                    opacity: 0,
                    x: 25,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                  }}

                  exit={{
                    opacity: 0,
                    x: -20,
                  }}

                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >

                  {/* STEP NUMBER */}

                  <div
                    className="
                      text-sm
                      font-bold
                      tracking-[3px]
                      text-[#3F8F68]
                    "
                  >
                    STEP {active.number}
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-black
                      tracking-[-0.7px]
                      text-[#111827]
                      sm:text-3xl
                    "
                  >
                    {active.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-4
                      max-w-lg
                      text-sm
                      leading-6
                      text-gray-500
                      sm:text-[15px]
                      sm:leading-7
                    "
                  >
                    {active.description}
                  </p>

                  {/* SMALL GREEN LINE */}

                  <div className="mt-7 flex items-center gap-3">

                    <div className="h-[2px] w-10 bg-[#3F8F68]" />

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-gray-400
                      "
                    >
                      {active.number} / 05
                    </span>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;