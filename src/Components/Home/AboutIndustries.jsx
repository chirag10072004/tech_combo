import React, { useState } from 'react'

const industries = [
  {
    name: 'E-Commerce',
    image: '/assets/Home/industry/e_commarce.png',
  },
  {
    name: 'Fintech',
    image: '/assets/Home/industry/fintech.png',
  },
  {
    name: 'Healthcare',
    image: '/assets/Home/industry/healthcare.png',
  },
  {
    name: 'Education',
    image: '/assets/Home/industry/teacher.png',
  },
  {
    name: 'Manufacturing',
    image: '/assets/Home/industry/manufactor.png',
  },
]

const AboutIndustries = () => {
  const [active, setActive] = useState(null)

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 overflow-hidden">

      {/* ================= HEADING ================= */}

      <div className="text-center mb-12 sm:mb-14 md:mb-10 px-4">

        <h2
          className="
            text-[23px]
            sm:text-3xl
            md:text-4xl

            font-black
            tracking-[-0.5px]

            text-[#111827]

            leading-tight
          "
        >
          INDUSTRIES WE BUILD FOR
        </h2>

        <div
          className="
            mt-3
            mx-auto

            w-14
            sm:w-16

            h-[3px]

            bg-[#293EFF]
            rounded-full
          "
        />

      </div>

      {/* ================= PEOPLE ================= */}

      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-3
          sm:px-6
        "
      >

        <div
          className="
            flex
            justify-center
            items-end

            gap-1
            sm:gap-4
            md:gap-8
            lg:gap-10
          "
        >

          {industries.map((industry, index) => {

            const isActive = active === index
            const isBlurred = active !== null && !isActive

            return (
              <div
                key={industry.name}

                onMouseEnter={() => {
                  if (window.innerWidth >= 768) {
                    setActive(index)
                  }
                }}

                onMouseLeave={() => {
                  if (window.innerWidth >= 768) {
                    setActive(null)
                  }
                }}

                onClick={() => {
                  if (window.innerWidth < 768) {
                    setActive(isActive ? null : index)
                  }
                }}

                className="
                  relative

                  flex
                  items-end
                  justify-center

                  cursor-pointer

                  w-[52px]
                  sm:w-[85px]
                  md:w-[150px]
                  lg:w-[190px]

                  h-[260px]
                  sm:h-[330px]
                  md:h-[420px]
                  lg:h-[500px]

                  flex-shrink-0
                "
              >

                {/* ================= INDUSTRY LABEL ================= */}

                {isActive && (
                  <div
                    className="
                      absolute

                      top-0
                      left-1/2
                      -translate-x-1/2

                      flex
                      flex-col
                      items-center

                      z-20
                    "
                  >

                    <span
                      className="
                        whitespace-nowrap

                        text-[11px]
                        sm:text-[14px]
                        md:text-[15px]
                        lg:text-[17px]

                        font-extrabold
                        uppercase

                        tracking-[0.2px]
                        sm:tracking-[0.5px]

                        text-[#111827]

                        leading-none
                      "
                    >
                      {industry.name}
                    </span>

                    {/* BLUE DOT */}

                    <div
                      className="
                        mt-2
                        sm:mt-3

                        w-2
                        h-2

                        sm:w-[10px]
                        sm:h-[10px]

                        rounded-full

                        bg-[#293EFF]
                      "
                    />

                    {/* LINE */}

                    <div
                      className="
                        w-[2px]

                        h-8
                        sm:h-10
                        md:h-12

                        bg-[#CBD5E1]
                      "
                    />

                  </div>
                )}

                {/* ================= PERSON ================= */}

                <img
                  src={industry.image}
                  alt={industry.name}

                  className={`
                    w-full

                    h-[220px]
                    sm:h-[280px]
                    md:h-[360px]
                    lg:h-[430px]

                    object-contain

                    transition-all
                    duration-500
                    ease-in-out

                    ${
                      isActive
                        ? `
                          scale-110
                          opacity-100
                          blur-0
                        `
                        : isBlurred
                        ? `
                          scale-95
                          opacity-35
                          blur-[4px]
                        `
                        : `
                          scale-100
                          opacity-100
                          blur-0
                        `
                    }
                  `}
                />

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default AboutIndustries