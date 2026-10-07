import React, { useState } from "react";

const ProcessSection = () => {
  const [flipped, setFlipped] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Requirement Analysis",
      subtitle: "Understanding your vision",
      desc: "We gather and analyze your requirements to create a robust software roadmap.",
      points: ["Business goals", "Project requirements"],
      image: "/assets/Home/process/requirment.png",
    },
    {
      number: "02",
      title: "Planning & Strategy",
      subtitle: "Creating the right direction",
      desc: "We design the architecture, select the tech stack, and structure project phases.",
      points: ["Tech stack", "Project roadmap"],
      image: "/assets/Home/process/planning.png",
    },
    {
      number: "03",
      title: "Design & Development",
      subtitle: "Turning ideas into reality",
      desc: "Our engineers build clean, high-performance, and scalable digital solutions.",
      points: ["UI/UX design", "Development"],
      image: "/assets/Home/process/development.png",
    },
    {
      number: "04",
      title: "Testing & QA",
      subtitle: "Ensuring reliable quality",
      desc: "We perform rigorous quality assurance checks to ensure reliable, bug-free software solutions.",
      points: ["Quality testing", "Bug fixing"],
      image: "/assets/Home/process/tester.png",
    },
    {
      number: "05",
      title: "Deployment & Support",
      subtitle: "Launching with confidence",
      desc: "We deploy the application smoothly and provide 24/7 post-launch maintenance.",
      points: ["Deployment", "Ongoing support"],
      image: "/assets/Home/process/deploye.png",
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-14">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <div className="mb-11">

          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#51c982]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#42b875]">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[#0b172a] sm:text-5xl">
            How We Work
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#64748b] sm:text-[15px]">
            A simple and structured process that turns your ideas into
            reliable digital solutions.
          </p>

        </div>

        {/* ================= CARDS ================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {steps.map((step, index) => (

            <div
              key={step.number}
              className="group h-[365px] cursor-pointer [perspective:1200px]"
              onClick={() =>
                setFlipped(flipped === index ? null : index)
              }
            >

              <div
                className={`
                  relative h-full w-full
                  transition-transform duration-700
                  [transform-style:preserve-3d]

                  ${
                    flipped === index
                      ? "[transform:rotateY(180deg)]"
                      : ""
                  }

                  lg:group-hover:[transform:rotateY(180deg)]
                `}
              >

                {/* ================= IMAGE SIDE ================= */}

                <div
                  className="
                    absolute inset-0
                    overflow-hidden
                    rounded-[20px]
                    bg-[#0b172a]
                    [backface-visibility:hidden]
                  "
                >

                  <img
                    src={step.image}
                    alt={step.title}
                    className="
                      h-full w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

                  {/* Number */}

                  <div className="absolute left-5 top-5">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-sm">

                      <span className="text-[11px] font-semibold text-white">
                        {step.number}
                      </span>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="absolute bottom-0 left-0 right-0 p-5">

                    <div className="mb-3 h-[2px] w-8 bg-[#63d88f]" />

                    <h3 className="max-w-[200px] text-[19px] font-semibold leading-[1.2] text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-4 text-white/65">
                      {step.subtitle}
                    </p>

                    <div className="mt-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#6ee19a]">
                      Click to explore →
                    </div>

                  </div>

                </div>

                {/* ================= CONTENT SIDE ================= */}

                <div
                  className="
                    absolute inset-0
                    overflow-hidden
                    rounded-[20px]
                    border border-[#dfe8e2]
                    bg-[#f8fbf9]
                    p-6
                    [backface-visibility:hidden]
                    [transform:rotateY(180deg)]
                  "
                >

                  {/* Small decorative circle */}

                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#55cf84]/10" />

                  <div className="relative flex h-full flex-col">

                    {/* Number */}

                    <span className="text-[11px] font-bold tracking-[0.15em] text-[#46bb76]">
                      {step.number}
                    </span>

                    {/* Main */}

                    <div className="mt-auto">

                      <div className="mb-3 h-[3px] w-8 rounded-full bg-[#55ca83]" />

                      <h3 className="text-[21px] font-bold leading-tight tracking-tight text-[#0b172a]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-[11px] font-medium text-[#4f8b68]">
                        {step.subtitle}
                      </p>

                      <div className="my-4 h-px bg-[#dfe8e2]" />

                      <p className="text-[12px] leading-5 text-[#5f6f82]">
                        {step.desc}
                      </p>

                      {/* Small points */}

                      <div className="mt-4 space-y-2">

                        {step.points.map((point) => (

                          <div
                            key={point}
                            className="flex items-center gap-2"
                          >

                            <span className="h-1.5 w-1.5 rounded-full bg-[#55ca83]" />

                            <span className="text-[10px] font-medium text-[#64748b]">
                              {point}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>

                    {/* Bottom */}

                    <div className="mt-5 flex items-center justify-between border-t border-[#dfe8e2] pt-4">

                      <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#94a3b8]">
                        Our Process
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#55ca83] text-xs text-white">
                        →
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM FLOW ================= */}

        <div className="mt-9 flex items-center gap-4">

          <div className="h-px flex-1 bg-[#e2e8f0]" />

          <p className="whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.15em] text-[#94a3b8]">
            Idea → Strategy → Build → Test → Launch
          </p>

          <div className="h-px flex-1 bg-[#e2e8f0]" />

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;