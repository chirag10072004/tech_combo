import React from "react";

const technologies = [
  {
    name: "SOC 2",
    logo: "https://cdn.simpleicons.org/society6/082b55",
  },
  {
    name: "ISO 27001",
    logo: "https://static.cdnlogo.com/logos/i/47/iso.svg",
  },
  {
    name: "GDPR",
    logo: "https://cdn.simpleicons.org/europeanunion/082b55",
  },
  {
    name: "Cloudflare",
    logo: "https://cdn.simpleicons.org/cloudflare/F38020",
  },
  {
    name: "HashiCorp Vault",
    logo: "https://cdn.simpleicons.org/vault/FFEC6E",
  },
  {
    name: "OWASP",
    logo: "https://cdn.simpleicons.org/owasp/082b55",
  },
  {
    name: "Wireshark",
    logo: "https://cdn.simpleicons.org/wireshark/1679A7",
  },
];

const Cyber_Tech = () => {
  return (
    <section className="relative bg-[#f7f9fc] py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[-180px] right-[-120px] w-[450px] h-[450px] rounded-full bg-[#2864d7]/[0.06] blur-3xl" />
      <div className="absolute bottom-[-200px] left-[-150px] w-[450px] h-[450px] rounded-full bg-[#168bd2]/[0.04] blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[850px] mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#2864d7]" />
            <span className="text-[#2864d7] text-xs font-bold tracking-[0.2em]">
              SECURITY FRAMEWORKS & TOOLS
            </span>
            <span className="w-8 h-[1px] bg-[#2864d7]" />
          </div>

          <h2 className="text-[#07111f] text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1] tracking-[-0.05em]">
            <span className="text-[#2864d7]">Technologies</span> We Use
            <br />
            To Secure Your Business
          </h2>

          <p className="mt-7 text-[#69717d] text-base sm:text-lg leading-7 max-w-[650px] mx-auto">
            We combine proven security frameworks, cloud platforms, and industry-standard tools to detect threats, protect sensitive data, and build resilient digital infrastructure.
          </p>
        </div>

        {/* ================= TECHNOLOGIES ================= */}
        <div
          className="
            mt-16
            grid
            grid-cols-2
            sm:grid-cols-4
            lg:grid-cols-7
            gap-x-5
            gap-y-8
            sm:gap-y-10
          "
        >
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`
                group
                relative
                flex
                flex-col
                items-center
                text-center
                transition-all
                duration-500
                ${
                  index % 2 === 1
                    ? "lg:translate-y-8"
                    : ""
                }
              `}
            >
              {/* Logo Circle */}
              <div
                className="
                  relative
                  w-[100px]
                  h-[100px]
                  sm:w-[115px]
                  sm:h-[115px]
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-[0_12px_40px_rgba(20,40,70,0.07)]
                  border
                  border-white
                  transition-all
                  duration-500
                  group-hover:-translate-y-3
                  group-hover:shadow-[0_25px_55px_rgba(40,100,215,0.15)]
                "
              >
                {/* Outer Ring */}
                <div
                  className="
                    absolute
                    inset-[-7px]
                    rounded-full
                    border
                    border-[#2864d7]/0
                    group-hover:border-[#2864d7]/20
                    transition-all
                    duration-500
                  "
                />

                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="
                    w-11
                    h-11
                    sm:w-14
                    sm:h-14
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Connector */}
              <div
                className="
                  w-px
                  h-7
                  bg-gradient-to-b
                  from-[#2864d7]/30
                  to-transparent
                  mt-3
                "
              />

              {/* Name */}
              <p
                className="
                  text-[#17202d]
                  text-sm
                  font-semibold
                  leading-5
                  max-w-[130px]
                  transition-colors
                  duration-300
                  group-hover:text-[#2864d7]
                "
              >
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-20 flex items-center gap-5">
          <div className="flex-1 h-px bg-[#dfe5ec]" />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2864d7]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#2864d7]" />
          </div>
          <div className="flex-1 h-px bg-[#dfe5ec]" />
        </div>
      </div>
    </section>
  );
};

export default Cyber_Tech;