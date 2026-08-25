import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const Industry_hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-[105px]">

      {/* Background curved lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[280px] left-[160px] w-[700px] h-[700px] rounded-full border border-[#E5EAF0]" />
        <div className="absolute -top-[240px] left-[230px] w-[700px] h-[700px] rounded-full border border-[#E5EAF0]" />
        <div className="absolute -top-[200px] left-[300px] w-[700px] h-[700px] rounded-full border border-[#E5EAF0]" />
        <div className="absolute -top-[160px] left-[370px] w-[700px] h-[700px] rounded-full border border-[#E5EAF0]" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          max-w-[1200px]
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          py-14
          sm:py-16
          lg:py-11
        "
      >

        {/* Heading */}
        <div>
          <h1
            className="
              text-[32px]
              sm:text-[40px]
              lg:text-[38px]
              xl:text-[40px]
              font-bold
              leading-[1.15]
              tracking-[-1px]
              text-[#07152B]
            "
          >
            Engineering{' '}
            <span className="text-[#FF8A00]">
              Innovation
            </span>{' '}
            across Industries
          </h1>

          {/* Blue underline */}
          <div
            className="
              mt-4
              w-[88px]
              h-[3px]
              bg-[#1683E8]
            "
          />
        </div>

        {/* Description */}
        <p
          className="
            mt-7
            max-w-[1000px]
            text-[16px]
            sm:text-[18px]
            lg:text-[18px]
            leading-[1.6]
            text-[#0B1B34]
          "
        >
          Building scalable, future-ready products for diverse industries,
          each with its own challenges and goals.
        </p>

        {/* Features */}
        <div
          className="
            mt-7
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-y-3
            sm:gap-y-3
            sm:max-w-[850px]
          "
        >

          {/* Feature 1 */}
          <div className="flex items-center gap-2.5">
            <FiCheckCircle
              className="
                flex-shrink-0
                text-[#1683E8]
                text-[17px]
              "
            />

            <span
              className="
                text-[15px]
                sm:text-[16px]
                text-[#07152B]
              "
            >
              Future-Ready Products Built for Scale
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-2.5">
            <FiCheckCircle
              className="
                flex-shrink-0
                text-[#1683E8]
                text-[17px]
              "
            />

            <span
              className="
                text-[15px]
                sm:text-[16px]
                text-[#07152B]
              "
            >
              20+ Business Domains Transformed
            </span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-2.5">
            <FiCheckCircle
              className="
                flex-shrink-0
                text-[#1683E8]
                text-[17px]
              "
            />

            <span
              className="
                text-[15px]
                sm:text-[16px]
                text-[#07152B]
              "
            >
              Proven Solutions for Challenges
            </span>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-2.5">
            <FiCheckCircle
              className="
                flex-shrink-0
                text-[#1683E8]
                text-[17px]
              "
            />

            <span
              className="
                text-[15px]
                sm:text-[16px]
                text-[#07152B]
              "
            >
              Trusted by Global Industry Leaders
            </span>
          </div>

        </div>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >
        </div>

      </div>

    </section>
  )
}

export default Industry_hero