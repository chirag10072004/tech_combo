import React, { useState } from "react";

const techData = {
  Cloud: [
    {
      name: "AWS",
      logo: "https://static.cdnlogo.com/logos/a/19/aws.svg",
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
    },
    {
      name: "Microsoft Azure",
      logo: "https://static.cdnlogo.com/logos/m/58/microsoft-azure.svg",
    },
  ],

  DevOps: [
    {
      name: "Docker",
      logo: "https://cdn.simpleicons.org/docker/2496ED",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
    },
    {
      name: "Jenkins",
      logo: "https://cdn.simpleicons.org/jenkins/D24939",
    },
    {
      name: "Nginx",
      logo: "https://cdn.simpleicons.org/nginx/009639",
    },
  ],

  Infrastructure: [
    {
      name: "Terraform",
      logo: "https://cdn.simpleicons.org/terraform/7B42BC",
    },
    {
      name: "Docker",
      logo: "https://cdn.simpleicons.org/docker/2496ED",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
    },
    {
      name: "Nginx",
      logo: "https://cdn.simpleicons.org/nginx/009639",
    },
  ],
};

const tabs = [
  {
    number: "01",
    name: "Cloud",
  },
  {
    number: "02",
    name: "DevOps",
  },
  {
    number: "03",
    name: "Infrastructure",
  },
];

const Cloud_Tech = () => {
  const [activeTab, setActiveTab] = useState("Cloud");

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
              CLOUD TECH STACK
            </span>
            <span className="w-8 h-[1px] bg-[#2864d7]" />
          </div>

          <h2 className="text-[#07111f] text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1] tracking-[-0.05em]">
            <span className="text-[#2864d7]">Cloud Technologies</span> We Work With
          </h2>

          <p className="mt-7 text-[#69717d] text-base sm:text-lg leading-7 max-w-[650px] mx-auto">
            We leverage industry-leading cloud platforms and DevOps technologies to build secure, automated, scalable, and highly reliable infrastructure.
          </p>
        </div>

        {/* ================= TABS ================= */}
        <div className="flex justify-center mt-12 sm:mt-14">
          <div className="inline-flex items-center p-1.5 bg-white rounded-full border border-[#e3e8ef] shadow-sm">
            {tabs.map((tab) => {
              const active = activeTab === tab.name;

              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`
                    relative
                    flex items-center
                    gap-2.5
                    px-5 sm:px-7
                    py-3
                    rounded-full
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-[#2864d7] text-white shadow-[0_8px_25px_rgba(40,100,215,0.25)]"
                        : "text-[#737b86] hover:text-[#2864d7]"
                    }
                  `}
                >
                  <span
                    className={`
                      text-[10px]
                      font-bold
                      ${
                        active
                          ? "text-white/60"
                          : "text-[#a6adb6]"
                      }
                    `}
                  >
                    {tab.number}
                  </span>
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= TECHNOLOGIES ================= */}
        <div
          key={activeTab}
          className="
            mt-16
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-6
            gap-x-5
            gap-y-8
            sm:gap-y-10
          "
        >
          {techData[activeTab].map((tech, index) => (
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

export default Cloud_Tech;