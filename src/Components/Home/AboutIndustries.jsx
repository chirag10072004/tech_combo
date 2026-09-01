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
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <p className="mb-3 text-xs font-bold tracking-widest text-blue-600">
            OUR EXPERTISE
          </p>

          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
            Industries We{" "}
            <span className="text-blue-600">Build For</span>
          </h2>
        </div>


        {/* Industry Cards */}
        <div
          className="flex gap-3 overflow-x-auto pb-3 md:h-[430px] md:overflow-hidden"
          onMouseLeave={() => setActive(null)}
        >

          {industries.map((industry, index) => {
            const isActive = active === index;
            const hasActive = active !== null;

            return (
              <div
                key={industry.name}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`
                  relative h-[285px] w-[72vw]
                  flex-shrink-0 cursor-pointer
                  overflow-hidden rounded-2xl
                  transition-all duration-500
                  md:h-full md:w-auto
                  ${isActive
                    ? "md:flex-[1.7]"
                    : "md:flex-1"
                  }
                `}
              >

                {/* Image */}
                <img
                  src={industry.image}
                  alt={industry.name}
                  className={`
                    h-full w-full object-contain object-bottom
                    transition-all duration-500
                    ${isActive
                      ? "scale-105 grayscale-0 opacity-100"
                      : hasActive
                        ? "grayscale opacity-35"
                        : "grayscale-0 opacity-100"
                    }
                  `}
                />

                {/* Active Overlay */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                )}

                {/* Number */}
                <span
                  className={`
                    absolute left-4 top-4 text-xs font-bold
                    ${isActive
                      ? "text-white"
                      : "text-gray-500"
                    }
                  `}
                >
                  0{index + 1}
                </span>

                {/* Name */}
                <div className="absolute bottom-5 left-5">
                  <h3
                    className={`
                      text-lg font-bold
                      ${isActive
                        ? "text-white"
                        : "text-gray-600"
                      }
                    `}
                  >
                    {industry.name}
                  </h3>
                </div>

              </div>
            );
          })}

        </div>


        {/* Mobile Dots */}
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                h-1.5 rounded-full
                ${active === index
                  ? "w-6 bg-blue-600"
                  : "w-1.5 bg-gray-300"
                }
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutIndustries;