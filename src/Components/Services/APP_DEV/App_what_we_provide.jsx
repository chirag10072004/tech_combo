import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    title: "Native iOS & Android Development",
    description:
      "High-performance native mobile apps built specifically for iOS (Swift) and Android (Kotlin) platforms.",
  },
  {
    title: "Cross-Platform Apps (React Native / Flutter)",
    description:
      "Deliver native-like experiences on both iOS and Android from a single unified codebase.",
  },
  {
    title: "Offline-First Synchronization",
    description:
      "Ensure seamless user experience with reliable local database storage and background data sync.",
  },
  {
    title: "App Store Compliance & Publishing",
    description:
      "End-to-end guidance for Apple App Store and Google Play Store submission and compliance.",
  },
  {
    title: "Mobile UI/UX Design & Prototyping",
    description:
      "Intuitive, user-centered mobile design interfaces designed for maximum user retention and engagement.",
  },
];

const App_what_we_provide = () => {
  return (
    <section className="bg-[#fdfaf5] py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* ================= LEFT ================= */}
          <div className="lg:h-[650px] lg:flex lg:items-start">
            <div className="lg:sticky lg:top-24">

              <p className="
                text-[#168bd2]
                text-[10px]
                sm:text-xs
                font-bold
                tracking-[0.18em]
                uppercase
              ">
                WHAT WE PROVIDE
              </p>

              <h2 className="
                mt-4
                text-[#082b55]
                font-extrabold
                tracking-[-0.045em]
                leading-[0.95]
                text-5xl
                sm:text-6xl
                lg:text-[72px]
              ">
                What We
                <br />

                <span className="text-[#ff512f]">
                  Provide
                </span>
              </h2>

              <p className="
                mt-6
                text-[#55708e]
                text-base
                sm:text-lg
                leading-7
                max-w-[470px]
              ">
                We build powerful mobile experiences that combine
                performance, usability, and scalable technology.
              </p>

            </div>
          </div>


          {/* ================= RIGHT SCROLL ================= */}
          <div
            className="
              lg:h-[650px]
              lg:overflow-y-auto
              lg:pr-4
              space-y-5

              lg:[scrollbar-width:thin]
              lg:[scrollbar-color:#cbd5e1_transparent]
            "
          >

            {services.map((service, index) => (

              <div
                key={index}
                className="
                  group
                  bg-white
                  border
                  border-[#e5e7eb]
                  rounded-2xl
                  p-6
                  sm:p-8
                  min-h-[230px]

                  transition-all
                  duration-300

                  hover:border-[#168bd2]
                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(8,43,85,0.08)]
                "
              >

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <span className="
                    text-[#168bd2]
                    text-xs
                    font-bold
                    tracking-[0.15em]
                  ">
                    0{index + 1}
                  </span>

                  <div className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-[#dce5ed]
                    flex
                    items-center
                    justify-center
                    text-[#082b55]

                    transition-all
                    duration-300

                    group-hover:bg-[#168bd2]
                    group-hover:text-white
                    group-hover:border-[#168bd2]
                  ">
                    <FiArrowUpRight size={19} />
                  </div>

                </div>


                {/* TITLE */}
                <h3 className="
                  mt-7
                  text-[#082b55]
                  text-xl
                  sm:text-2xl
                  font-bold
                  leading-snug
                  max-w-[600px]
                ">
                  {service.title}
                </h3>


                {/* DESCRIPTION */}
                <p className="
                  mt-4
                  text-[#667f96]
                  text-sm
                  sm:text-base
                  leading-7
                  max-w-[620px]
                ">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default App_what_we_provide;