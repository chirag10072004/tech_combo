import React from 'react'

const CareersHero = () => {
  return (
    <section className="bg-white pt-16 lg:pt-16">

      <div className="mx-auto max-w-[1600px] px-5 lg:px-10">

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">

          {/* LEFT */}
          <div className="py-10 lg:py-16">

            <p className="mb-3 max-w-[650px] pl-1 text-base font-medium tracking-wider text-gray-600 lg:text-xl">
              WE HAVE RANGE OF AMAZING OPPORTUNITIES AVAILABLE
            </p>

            <h1 className="mb-8 text-5xl font-bold leading-tight text-[#182230] sm:text-6xl">
              Join Our Team
            </h1>

            {/* Contact Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">

              {/* EMAIL */}
              <a
                href="mailto:hr@techcombo.in"
                className="flex h-[70px] w-full items-center gap-3 rounded-full border border-[#35e0bd] bg-amber-50 px-3 sm:w-[260px]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#40dfc2]">
                  ✉
                </div>

                <span className="text-sm font-semibold text-gray-900 sm:text-base">
                  hr@techcombo.in
                </span>
              </a>


              {/* PHONE */}
              <a
                href="tel:+919876543210"
                className="flex h-[70px] w-full items-center gap-3 rounded-full border border-blue-300 bg-amber-50 px-3 sm:w-[260px]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#40dfc2]">
                  📞
                </div>

                <span className="text-base font-semibold text-gray-900">
                  +91 9876543210
                </span>
              </a>

            </div>

          </div>


          {/* RIGHT - IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <img
              src="/assets/Home/process/Requirment.png"
              alt="Career Hero"
              className="w-full max-w-[500px] lg:max-w-[550px]"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default CareersHero