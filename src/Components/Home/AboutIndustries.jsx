import React, { useState } from "react";

const industries = [
  {
    name: "E-Commerce",
    image: "/assets/Home/industry/e_commarce.png",
  },
  {
    name: "Fintech",
    image: "/assets/Home/industry/fintech.png",
  },
  {
    name: "Healthcare",
    image: "/assets/Home/industry/healthcare.png",
  },
  {
    name: "Education",
    image: "/assets/Home/industry/teacher.png",
  },
  {
    name: "Manufacturing",
    image: "/assets/Home/industry/manufactor.png",
  },
];

const AboutIndustries = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16 md:py-20">

      {/* ================= HEADING ================= */}

      <div className="mb-12 px-4 text-center sm:mb-14 md:mb-10">

        <h2
          className="
            text-[23px]
            font-black
            leading-tight
            tracking-[-0.5px]
            text-[#111827]
            sm:text-3xl
            md:text-4xl
          "
        >
          INDUSTRIES WE BUILD FOR
        </h2>

        <div
          className="
            mx-auto
            mt-3
            h-[3px]
            w-14
            rounded-full
            bg-[#293EFF]
            sm:w-16
          "
        />

      </div>

      {/* ================= PEOPLE ================= */}

      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-2
          sm:px-6
        "
      >

        <div
          className="
            flex
            items-end
            justify-center
            gap-0
            sm:gap-4
            md:gap-8
            lg:gap-10
          "
        >

          {industries.map((industry, index) => {

            const isActive = active === index;
            const isBlurred = active !== null && !isActive;

            return (
              <div
                key={industry.name}

                onMouseEnter={() => {
                  if (window.innerWidth >= 768) {
                    setActive(index);
                  }
                }}

                onMouseLeave={() => {
                  if (window.innerWidth >= 768) {
                    setActive(null);
                  }
                }}

                onClick={() => {
                  if (window.innerWidth < 768) {
                    setActive(isActive ? null : index);
                  }
                }}

                className="
                  relative
                  flex
                  h-[290px]
                  w-[68px]
                  flex-shrink-0
                  cursor-pointer
                  items-end
                  justify-center
                  sm:h-[330px]
                  sm:w-[85px]
                  md:h-[420px]
                  md:w-[150px]
                  lg:h-[500px]
                  lg:w-[190px]
                "
              >

                {/* ================= INDUSTRY LABEL ================= */}

                {isActive && (
                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      z-20
                      flex
                      -translate-x-1/2
                      flex-col
                      items-center
                    "
                  >

                    <span
                      className="
                        whitespace-nowrap
                        text-[11px]
                        font-extrabold
                        uppercase
                        leading-none
                        tracking-[0.2px]
                        text-[#111827]
                        sm:text-[14px]
                        sm:tracking-[0.5px]
                        md:text-[15px]
                        lg:text-[17px]
                      "
                    >
                      {industry.name}
                    </span>

                    {/* BLUE DOT */}

                    <div
                      className="
                        mt-2
                        h-2
                        w-2
                        rounded-full
                        bg-[#293EFF]
                        sm:mt-3
                        sm:h-[10px]
                        sm:w-[10px]
                      "
                    />

                    {/* LINE */}

                    <div
                      className="
                        h-8
                        w-[2px]
                        bg-[#CBD5E1]
                        sm:h-10
                        md:h-12
                      "
                    />

                  </div>
                )}

                {/* ================= PERSON ================= */}

                <img
                  src={industry.image}
                  alt={industry.name}
                  className={`
                    h-[270px]
                    w-full
                    object-contain
                    transition-all
                    duration-500
                    ease-in-out

                    sm:h-[280px]
                    md:h-[360px]
                    lg:h-[430px]

                    ${isActive
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
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default AboutIndustries;