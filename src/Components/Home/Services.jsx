import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const Services = () => {
  const [active, setActive] = useState(null)

  const services = [
    {
      num: '01',
      label: 'SOFTWARE',
      title: 'Custom Software Development',
      desc: 'End-to-end custom software solutions tailored to your unique business needs and requirements',
      link: '/custom-software',
    },
    {
      num: '02',
      label: 'MOBILE',
      title: 'App Development',
      desc: 'Custom mobile applications designed for speed, scalability, and exceptional user engagement',
      link: '/app-development',
    },
    {
      num: '03',
      label: 'CLOUD',
      title: 'Cloud Solutions',
      desc: 'Scalable, secure, and cost-effective cloud infrastructure solutions on AWS, Azure & GCP',
      link: '/cloud-solutions',
    },
    {
      num: '04',
      label: 'WEB',
      title: 'Web Development',
      desc: 'Modern, responsive websites that deliver great user experiences and performance',
      link: '/web-development',
    },
    {
      num: '05',
      label: 'SECURITY',
      title: 'Cybersecurity Services',
      desc: 'Protect your business with robust security audits, compliance, and threat mitigation models',
      link: '/cybersecurity',
    }
  ]

  return (
    <section className="bg-[#97e183] px-6 py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#061b3a]">
            Our IT Services
          </h2>

          <div className="w-12 h-1 bg-green-700 rounded-full mx-auto my-4" />

          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#183b2b]">
            We take software tasks from requirements to deployment and support,
            enabling your business growth.
          </p>
         </div>

        {/* Desktop Cards */}
        <div className="hidden lg:flex gap-5 h-[500px]">

          {services.map((service, i) => {
            const open = active === i

            return (
              <div
                key={service.num}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`
                  relative min-w-0 overflow-hidden cursor-pointer
                  rounded-[32px] px-10 pt-8 pb-8
                  transition-all duration-500 ease-in-out
                  ${open
                    ? 'flex-[2.5] bg-white border-2 border-[#b5d52b] shadow-[0_20px_45px_rgba(52,127,196,0.15)]'
                    : 'flex-1 bg-[#edf5fa] border border-transparent'
                  }
                `}
              >

                {/* Number */}
                <span
                  className={`
                    block text-[88px] font-bold leading-none select-none
                    transition-colors duration-500
                    ${open
                      ? 'text-[#eef3d5]'
                      : 'text-[#dce9f2]'
                    }
                  `}
                >
                  {service.num}
                </span>

                {/* Service Label */}
                <span
                  className={`
                    absolute z-20 font-bold text-[10px] tracking-wide
                    whitespace-nowrap
                    transition-all duration-500 ease-in-out

                    ${open
                      ? `
                        left-10 top-[175px]
                        px-5 py-2
                        rounded-full
                        bg-[#b5d52b]
                        text-[#061b3a]
                        text-[12px]
                      `
                      : `
                        left-0 top-1/2 -translate-y-1/2
                        px-5 py-4
                        rounded-l-2xl
                        bg-[#347fc4]
                        text-white
                        [writing-mode:vertical-rl]
                        rotate-180
                      `
                    }
                  `}
                >
                  {service.label}
                </span>

                {/* Content */}
                <div
                  className={`
                    absolute left-10 right-10 bottom-8
                    min-w-0
                    ${open ? 'max-w-[620px]' : 'max-w-[220px]'}
                  `}
                >

                  <h3
                    className={`
                      font-bold leading-tight
                      transition-all duration-500
                      ${open
                        ? 'text-3xl text-[#347fc4]'
                        : 'text-[20px] text-[#061b3a]'
                      }
                    `}
                  >
                    {service.title}
                  </h3>

                  {/* Expanded Content */}
                  <div
                    className={`
                      transition-all duration-500 overflow-hidden
                      ${open
                        ? 'max-h-[180px] opacity-100'
                        : 'max-h-0 opacity-0'
                      }
                    `}
                  >
                    <p className="mt-5 text-sm leading-6 text-[#64809c]">
                      {service.desc}
                    </p>

                    <Link
                      to={service.link}
                      onClick={(e) => e.stopPropagation()}
                      className="
                        mt-6 inline-flex items-center gap-2
                        text-sm font-semibold text-blue-600
                      "
                    >
                      Learn More
                      <FiArrowRight />
                    </Link>
                  </div>

                </div>

              </div>
            )
          })}

        </div>

        {/* Mobile */}
        <div className="grid gap-5 md:grid-cols-2 lg:hidden">

          {services.map((service) => (
            <div
              key={service.num}
              className="rounded-[28px] bg-white p-7 overflow-hidden"
            >

              <span className="text-6xl font-bold text-[#edf3f7]">
                {service.num}
              </span>

              <h3 className="mt-8 text-2xl font-bold text-[#061b3a]">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-500">
                {service.desc}
              </p>

              <Link
                to={service.link}
                className="mt-5 inline-flex items-center gap-2 text-blue-600"
              >
                Learn More
                <FiArrowRight />
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Services