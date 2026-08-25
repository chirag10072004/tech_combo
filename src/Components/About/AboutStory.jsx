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
    <section className="bg-[#f8faf9] px-6 py-20 md:px-10 lg:px-20">

      {/* Heading */}
      <div className="mx-auto mb-20 max-w-7xl">

        <div className="mb-4 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-emerald-500" />

          <p className="text-xs font-bold tracking-[4px] text-emerald-600">
            OUR JOURNEY
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <h2 className="text-5xl font-semibold leading-tight text-gray-900 md:text-6xl">
            Creating
            <br />
            <span className="text-gray-400">
              Our Story.
            </span>
          </h2>

          <p className="max-w-md self-end text-sm leading-7 text-gray-500 md:ml-auto">
            From a simple vision to building digital solutions for
            businesses worldwide, every milestone has shaped who we are
            today.
          </p>

        </div>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-6xl">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-300 md:block" />

        {journeyData.map((item, index) => {

          const isLeft = index % 2 === 0

          return (
            <div
              key={item.year}
              className="relative mb-12 md:mb-16"
            >

              {/* Center Dot */}
              <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">

                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-[#f8faf9]">

                  <div
                    className={`h-3 w-3 rounded-full ${
                      isLeft
                        ? 'bg-emerald-500'
                        : 'bg-blue-500'
                    }`}
                  />

                </div>

              </div>

              {/* Card Position */}
              <div
                className={`flex ${
                  isLeft
                    ? 'justify-start md:pr-[52%]'
                    : 'justify-end md:pl-[52%]'
                }`}
              >

                <JourneyCard
                  item={item}
                  green={isLeft}
                />

              </div>

            </div>
          )
        })}

      </div>

      {/* End */}
      <div className="mt-10 flex justify-center">

        <div className="flex flex-col items-center">

          <div className="h-8 w-px bg-gray-300" />

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">

            <FiArrowUpRight
              size={20}
              className="text-emerald-500"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

const JourneyCard = ({ item, green }) => {
  return (
    <div className="group relative w-full">

      {/* Connector */}
      <div
        className={`absolute top-1/2 hidden h-px w-12 -translate-y-1/2 md:block ${
          green
            ? '-right-12 bg-emerald-200'
            : '-left-12 bg-blue-200'
        }`}
      />

      {/* Card */}
      <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">

        {/* Background Year */}
        <span
          className={`pointer-events-none absolute -right-2 -top-5 text-8xl font-black leading-none ${
            green
              ? 'text-emerald-500/[0.06]'
              : 'text-blue-500/[0.06]'
          }`}
        >
          {item.year === 'Today' ? '∞' : item.year}
        </span>

        {/* Year */}
        <div className="relative z-10">

          <span
            className={`rounded-full border px-3 py-1 text-xs font-bold ${
              green
                ? 'border-emerald-100 bg-emerald-50 text-emerald-600'
                : 'border-blue-100 bg-blue-50 text-blue-600'
            }`}
          >
            {item.year}
          </span>

        </div>

        {/* Content */}
        <div className="relative z-10 mt-6">

          <h3 className="text-xl font-semibold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {item.description}
          </p>

        </div>

        {/* Bottom Arrow */}
        <div className="relative z-10 mt-6 flex justify-end">

          <FiArrowUpRight
            size={18}
            className={`transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
              green
                ? 'text-emerald-500'
                : 'text-blue-500'
            }`}
          />

        </div>

      </div>

    </div>
  )
}

export default AboutStory