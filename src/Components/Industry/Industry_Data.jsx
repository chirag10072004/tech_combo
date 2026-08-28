import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'

const industries = [
  {
    name: 'E-Commerce Industry',
    description:
      'We help e-commerce businesses build fast, scalable and customer-focused digital experiences. From online stores and marketplaces to custom commerce platforms, our software solutions help businesses streamline operations, improve customer engagement and support long-term growth.',
    points: [
      'Custom E-Commerce Platforms',
      'Online Store Development',
      'Marketplace Development',
      'Payment Gateway Integration',
      'Inventory Management Systems',
      'E-Commerce Mobile Apps',
    ],
    button: 'Build Better Commerce',
    image: '/assets/Industry/E_commarce.png',
  },

  {
    name: 'FinTech Industry',
    description:
      'We develop secure and scalable software solutions for businesses operating in the financial technology space. Our solutions help organizations modernize financial workflows, improve digital experiences and build reliable platforms for payments, financial management and business operations.',
    points: [
      'FinTech Software Development',
      'Digital Payment Solutions',
      'Financial Management Platforms',
      'Payment Gateway Integration',
      'Business Finance Applications',
      'Financial Data Dashboards',
    ],
    button: 'Build FinTech Solutions',
    image: '/assets/Industry/fintech.png',
  },

  {
    name: 'Healthcare Industry',
    description:
      'We help healthcare organizations use technology to improve digital experiences, simplify operations and make information more accessible. Our software solutions support healthcare businesses with scalable platforms, applications and data-driven tools.',
    points: [
      'Healthcare Software Development',
      'Healthcare Management Systems',
      'Patient Management Platforms',
      'Telehealth Solutions',
      'Healthcare Mobile Applications',
      'Healthcare Data Dashboards',
    ],
    button: 'Transform Healthcare',
    image: '/assets/Industry/Healhcare.png',
  },

  {
    name: 'Education Industry',
    description:
      'We build modern digital learning and education platforms that make teaching, learning and administration more efficient. Our solutions help educational organizations deliver engaging experiences across web and mobile while supporting scalable digital operations.',
    points: [
      'Learning Management Systems',
      'Online Education Platforms',
      'Virtual Classroom Solutions',
      'Student Management Systems',
      'Education Mobile Apps',
      'Online Assessment Platforms',
    ],
    button: 'Build Better Learning',
    image: '/assets/Industry/Education.png',
  },

  {
    name: 'Manufacturing Industry',
    description:
      'We help manufacturing businesses improve operational efficiency through connected software, automation and data-driven solutions. Our platforms provide better visibility into production, inventory, workflows and business performance.',
    points: [
      'Manufacturing Software Solutions',
      'Production Management Systems',
      'Inventory Management Software',
      'Business Process Automation',
      'Real-Time Data Dashboards',
      'Custom Enterprise Applications',
    ],
    button: 'Modernize Manufacturing',
    image: '/assets/Industry/Manfactoring.png',
  },
]

const Industry_Data = () => {
  return (
    <section className="bg-white pt-2 sm:pt-4 lg:pt-6 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {industries.map((industry, index) => {

          const reverse = index % 2 !== 0

          return (
            <div
              key={industry.name}
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-8
                lg:gap-14
                items-center

                min-h-[400px]

                py-10
                sm:py-12
                lg:py-14

                border-b
                border-gray-100
              "
            >

              {/* TEXT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: reverse ? 80 : -80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  ease: 'easeOut',
                }}
                className={`
                  order-2
                  ${reverse ? 'lg:order-2' : 'lg:order-1'}
                `}
              >

                <h2
                  className="
                    text-[22px]
                    sm:text-[26px]
                    lg:text-[28px]

                    font-extrabold
                    text-[#111827]

                    leading-tight
                  "
                >
                  {industry.name}
                </h2>

                <div className="mt-3 w-12 h-[3px] bg-[#293EFF]" />

                <p
                  className="
                    mt-5
                    max-w-[600px]

                    text-[12px]
                    sm:text-[13px]
                    lg:text-[14px]

                    leading-[1.7]
                    text-gray-600
                  "
                >
                  {industry.description}
                </p>

                {/* POINTS */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2

                    gap-x-8
                    gap-y-2

                    mt-6

                    max-w-[600px]
                  "
                >

                  {industry.points.map((point) => (
                    <div
                      key={point}
                      className="
                        flex
                        items-center
                        gap-2

                        text-[11px]
                        sm:text-[12px]

                        text-[#172033]
                      "
                    >

                      <FiCheckCircle
                        className="
                          flex-shrink-0
                          text-[#293EFF]
                          text-[13px]
                        "
                      />

                      <span>
                        {point}
                      </span>

                    </div>
                  ))}

                </div>

                {/* BUTTON */}

                <button
                  type="button"
                  className="
                    mt-6

                    border
                    border-[#293EFF]

                    text-[#293EFF]

                    text-[11px]
                    sm:text-[12px]

                    font-medium

                    px-3
                    py-2

                    rounded-[3px]

                    hover:bg-[#293EFF]
                    hover:text-white

                    transition-all
                    duration-200
                  "
                >
                  {industry.button}
                </button>

              </motion.div>

              {/* IMAGE */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: reverse ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: 'easeOut',
                }}
                className={`
                  order-1

                  ${reverse ? 'lg:order-1' : 'lg:order-2'}

                  w-full

                  h-[280px]
                  sm:h-[320px]
                  lg:h-[380px]

                  flex
                  items-center
                  justify-center
                `}
              >

                <img
                  src={industry.image}
                  alt={industry.name}
                  className="
                    w-full
                    h-full
                    object-contain
                  "
                />

              </motion.div>

            </div>
          )
        })}

      </div>

    </section>
  )
}

export default Industry_Data