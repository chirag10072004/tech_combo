import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const journeyData = [
  {
    year: '2020',
    title: 'Founded',
    description:
      'Company founded with a vision to deliver quality IT solutions.',
  },
  {
    year: '2021',
    title: 'Expansion',
    description:
      'Expanded software development capabilities and development team.',
  },
  {
    year: '2022',
    title: 'Innovation',
    description:
      'Started delivering cloud solutions, AI integration, and enterprise applications.',
  },
  {
    year: '2023',
    title: 'Global Delivery',
    description:
      'Successfully completed 100+ business projects across multiple industries.',
  },
  {
    year: 'Today',
    title: 'Scale & Growth',
    description:
      'Building scalable software products, AI solutions, and digital platforms for businesses worldwide.',
  },
]

const AboutStory = () => {
  return (
    <section className="bg-[#f6f8f8] px-5 py-20 md:px-8 lg:px-16 lg:py-20">

      <div className="mx-auto max-w-[1350px]">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-emerald-500" />

              <span className="text-[11px] font-bold uppercase tracking-[4px] text-emerald-600">
                Our Journey
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
              Creating
              <br />
              <span className="text-gray-400">
                Our Story.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500 md:pb-1">
            From our first idea to where we are today, every milestone
            represents a step forward in how we build, innovate and grow.
          </p>

        </div>


        {/* Main Container */}
        <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.07)]">

          <div className="grid lg:grid-cols-[310px_1fr]">


            {/* LEFT DARK PANEL */}
            <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-[#071b3a] p-7 md:p-9 lg:min-h-[650px] lg:p-10">

              {/* Decorative circles */}
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full border border-white/[0.06]" />

              <div className="absolute -bottom-32 -left-24 h-64 w-64 rounded-full border border-white/[0.05]" />

              <div className="absolute right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-emerald-400/[0.04] blur-2xl" />


              {/* Top */}
              <div className="relative z-10">

                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>

                <p className="max-w-[220px] text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400">
                  From vision to reality
                </p>

                <h3 className="mt-5 max-w-[230px] text-3xl font-semibold leading-tight text-white">
                  Every year
                  <br />
                  <span className="text-white/40">
                    tells a story.
                  </span>
                </h3>

                <p className="mt-6 max-w-[230px] text-xs leading-6 text-white/50">
                  A collection of milestones that shaped our company,
                  our capabilities and the way we work.
                </p>

              </div>


              {/* Bottom */}
              <div className="relative z-10 mt-12">

                <div className="mb-5 h-px w-full bg-white/10" />

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-[10px] uppercase tracking-[2px] text-white/40">
                      Journey
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      2020 — Present
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500">
                    <FiArrowUpRight
                      size={17}
                      className="text-white"
                    />
                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT GRID */}
            <div className="grid sm:grid-cols-2">

              {journeyData.map((item, index) => {

                const isLast = index === journeyData.length - 1

                return (
                  <div
                    key={item.year}
                    className={`
                      group relative min-h-[260px] overflow-hidden border-gray-200 p-7
                      transition duration-300 hover:bg-[#fafdfc]
                      md:p-8
                      ${index % 2 !== 0 ? 'sm:border-l' : ''}
                      ${index < 4 ? 'border-b' : ''}
                      ${isLast ? 'sm:col-span-2 sm:min-h-[220px]' : ''}
                    `}
                  >

                    {/* Huge Background Year */}
                    <span
                      className="
                        pointer-events-none absolute
                        -right-3 -top-5
                        text-[90px]
                        font-black
                        leading-none
                        tracking-[-6px]
                        text-gray-100
                        transition duration-500
                        group-hover:text-emerald-50
                      "
                    >
                      {item.year === 'Today' ? '∞' : item.year}
                    </span>


                    {/* Card Content */}
                    <div className="relative z-10 flex h-full flex-col">

                      {/* Top row */}
                      <div className="flex items-center justify-between">

                        <span className="
                          inline-flex
                          rounded-full
                          border border-gray-200
                          bg-white
                          px-3 py-1
                          text-[10px]
                          font-bold
                          tracking-[1px]
                          text-gray-500
                        ">
                          {item.year}
                        </span>

                        <div
                          className="
                            flex h-8 w-8
                            items-center justify-center
                            rounded-full
                            border border-gray-200
                            bg-white
                            transition duration-300
                            group-hover:border-emerald-200
                            group-hover:bg-emerald-50
                          "
                        >
                          <FiArrowUpRight
                            size={15}
                            className="
                              text-gray-400
                              transition duration-300
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:text-emerald-500
                            "
                          />
                        </div>

                      </div>


                      {/* Main */}
                      <div className="mt-auto pt-12">

                        <div className="mb-3 flex items-center gap-2">

                          <span
                            className="
                              h-1.5 w-1.5
                              rounded-full
                              bg-emerald-500
                            "
                          />

                          <span className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-400">
                            Milestone
                          </span>

                        </div>

                        <h3 className="
                          text-xl
                          font-semibold
                          tracking-tight
                          text-gray-900
                        ">
                          {item.title}
                        </h3>

                        <p className="
                          mt-2
                          max-w-lg
                          text-xs
                          leading-6
                          text-gray-500
                        ">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>
                )
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutStory