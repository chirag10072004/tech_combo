import React from "react";

const technologies = [
  {
    name: "SOC 2",
    logo: "https://cdn.simpleicons.org/society6/082b55",
  },
  {
    name: "ISO 27001",
    logo: "https://cdn.simpleicons.org/iso/082b55",
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
    name: "Microsoft Sentinel",
    logo: "https://cdn.simpleicons.org/microsoft/5E5CE6",
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
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-12">

          <div>

            <p className="
              text-[#168bd2]
              text-xs
              font-bold
              tracking-[0.18em]
              uppercase
              mb-5
            ">
              SECURITY FRAMEWORKS & TOOLS
            </p>

            <h2 className="
              text-[#050b18]
              text-4xl
              sm:text-5xl
              lg:text-[64px]
              font-extrabold
              leading-[1]
              tracking-[-0.04em]
            ">
              <span className="text-[#2864d7]">
                Technologies
              </span>{" "}
              We Use
              <br />
              To Secure Your Business
            </h2>

          </div>

          <div className="flex items-center">

            <p className="
              text-[#5d626b]
              text-base
              sm:text-lg
              lg:text-xl
              leading-7
              max-w-[600px]
            ">
              We combine proven security frameworks, cloud platforms, and
              industry-standard tools to detect threats, protect sensitive
              data, and build resilient digital infrastructure.
            </p>

          </div>

        </div>


        {/* TECHNOLOGY GRID */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          border-t
          border-l
          border-[#e4e9ef]
        ">

          {technologies.map((tech) => (

            <div
              key={tech.name}
              className="
                group
                h-[190px]
                sm:h-[220px]
                lg:h-[250px]
                border-r
                border-b
                border-[#e4e9ef]
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:bg-[#f8fbfe]
                hover:border-[#2864d7]
              "
            >

              <div className="
                w-14
                h-14
                sm:w-16
                sm:h-16
                lg:w-20
                lg:h-20
                flex
                items-center
                justify-center
                mb-5
                transition-transform
                duration-300
                group-hover:scale-110
              ">

                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />

              </div>

              <p className="
                text-[#111827]
                text-xs
                sm:text-sm
                font-medium
                px-3
              ">
                {tech.name}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Cyber_Tech;