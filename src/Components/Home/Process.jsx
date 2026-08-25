import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Requirement Analysis',
    description:
      'We understand your business goals and gather requirements.',
    image: '/assets/Home/svg01.svg',
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    description:
      'We plan the architecture, technology and project roadmap.',
    image: '/assets/Home/svg02.svg',
  },
  {
    number: '03',
    title: 'Design & Development',
    description:
      'We design and develop clean, scalable digital solutions.',
    image: '/assets/Home/svg03.svg',
  },
  {
    number: '04',
    title: 'Testing & Quality',
    description:
      'We test everything for reliability, security and performance.',
    image: '/assets/Home/svg04.svg',
  },
  {
    number: '05',
    title: 'Deployment & Support',
    description:
      'We launch the product and provide ongoing support.',
    image: '/assets/Home/svg05.svg',
  },
]

const Process = () => {
  const [activeStep, setActiveStep] = useState(0)

  const active = steps[activeStep]

  return (
    <section
      id="process"
      className="relative bg-[#F3F7F8] overflow-hidden"
    >
      <div className="min-h-screen flex items-center py-16 sm:py-20 lg:py-0">

        <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[180px_1fr]
              gap-10
              lg:gap-14
              items-start
            "
          >

            {/* ================= LEFT SIDE ================= */}

            <div className="pt-0 lg:pt-1">

              <h2
                className="
                  text-[22px]
                  sm:text-[24px]
                  font-bold
                  text-[#151922]
                  whitespace-nowrap
                  mb-6
                  lg:mb-7
                "
              >
                How we work?
              </h2>

              {/* STEPS */}

              <div className="flex flex-col items-start lg:items-center">

                {steps.map((step, index) => {

                  const isActive = index === activeStep

                  return (
                    <React.Fragment key={step.number}>

                      {/* ONLY NUMBER IS CLICKABLE */}

                      <button
                        type="button"
                        onClick={() => setActiveStep(index)}
                        aria-label={`View step ${index + 1}: ${step.title}`}
                        className="
                          relative
                          z-10
                          cursor-pointer
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[#293EFF]
                          rounded-full
                        "
                      >

                        <motion.div
                          animate={{
                            backgroundColor: isActive
                              ? '#293EFF'
                              : '#F3F7F8',

                            color: isActive
                              ? '#FFFFFF'
                              : '#252525',

                            scale: isActive ? 1.08 : 1,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="
                            w-[36px]
                            h-[36px]
                            sm:w-[34px]
                            sm:h-[34px]
                            rounded-full
                            border
                            border-[#E3E8EA]
                            flex
                            items-center
                            justify-center
                            text-[13px]
                            sm:text-[14px]
                            font-medium
                          "
                        >
                          {index + 1}
                        </motion.div>

                      </button>

                      {/* LINE */}

                      {index !== steps.length - 1 && (
                        <div
                          className="
                            w-px
                            h-[14px]
                            bg-[#DDE4E6]
                            ml-[18px]
                            lg:ml-0
                          "
                        />
                      )}

                    </React.Fragment>
                  )
                })}

              </div>

            </div>

            {/* ================= RIGHT SIDE ================= */}

            <div
              className="
                flex
                justify-center
                w-full
                pointer-events-none
              "
            >

              <motion.div
                className="
                  w-full
                  max-w-[680px]

                  min-h-[340px]

                  sm:min-h-[340px]

                  bg-[#F3F7F8]

                  border
                  border-[#E3E8EA]

                  rounded-[12px]

                  flex
                  flex-col
                  items-center

                  overflow-hidden

                  px-4
                  sm:px-6
                  lg:px-0

                  py-6
                  sm:py-0
                "
              >

                {/* ================= IMAGE ================= */}

                <div
                  className="
                    w-full
                    h-[170px]
                    sm:h-[200px]
                    lg:h-[220px]

                    flex
                    items-center
                    justify-center
                  "
                >

                  <AnimatePresence mode="wait">

                    <motion.img
                      key={active.image}
                      src={active.image}
                      alt={active.title}

                      initial={{
                        opacity: 0,
                        y: 15,
                        scale: 0.95,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}

                      exit={{
                        opacity: 0,
                        y: -10,
                        scale: 0.97,
                      }}

                      transition={{
                        duration: 0.35,
                        ease: 'easeOut',
                      }}

                      className="
                        w-[190px]
                        h-[160px]

                        sm:w-[240px]
                        sm:h-[190px]

                        lg:w-[280px]
                        lg:h-[220px]

                        object-contain
                      "
                    />

                  </AnimatePresence>

                </div>

                {/* ================= TEXT ================= */}

                <AnimatePresence mode="wait">

                  <motion.div
                    key={active.number}

                    initial={{
                      opacity: 0,
                      y: 10,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    exit={{
                      opacity: 0,
                      y: -5,
                    }}

                    transition={{
                      duration: 0.3,
                    }}

                    className="
                      text-center

                      px-2
                      sm:px-6
                      lg:px-8

                      pb-6
                      sm:pb-8
                    "
                  >

                    <h3
                      className="
                        text-[19px]
                        sm:text-[21px]
                        lg:text-[22px]

                        font-bold
                        text-[#222222]

                        leading-tight
                      "
                    >
                      {active.title}
                    </h3>

                    <p
                      className="
                        mt-2

                        text-[11px]
                        sm:text-[12px]

                        font-medium
                        text-gray-500

                        leading-[17px]

                        max-w-[500px]
                        mx-auto
                      "
                    >
                      {active.description}
                    </p>

                  </motion.div>

                </AnimatePresence>

              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Process