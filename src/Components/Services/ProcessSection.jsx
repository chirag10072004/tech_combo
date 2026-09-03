import React, { useState } from "react";

const ProcessSection = () => {
  const [flipped, setFlipped] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Requirement Analysis",
      desc: "We gather and analyze your requirements to create a robust software roadmap.",
      image: "/assets/Home/process/Requirment.png",
    },
    {
      number: "02",
      title: "Planning & Strategy",
      desc: "We design the architecture, select the tech stack, and structure project phases.",
      image: "/assets/Home/process/planning.png",
    },
    {
      number: "03",
      title: "Design & Development",
      desc: "Our engineers build clean, high-performance, and scalable digital solutions.",
      image: "/assets/Home/process/Devlopment.png",
    },
    {
      number: "04",
      title: "Testing & QA",
      desc: "We perform rigorous quality assurance checks to ensure reliable, bug-free software solutions.",
      image: "/assets/Home/process/Testing.png",
    },
    {
      number: "05",
      title: "Deployment & Support",
      desc: "We deploy the application smoothly and provide 24/7 post-launch maintenance.",
      image: "/assets/Home/process/Deploy.png",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-6">

        {/* HEADING */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
            Our Process
          </p>

          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            How We Work
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group h-[400px] cursor-pointer [perspective:1000px]"
              onClick={() =>
                setFlipped(flipped === index ? null : index)
              }
            >
              <div
                className={`
                  relative h-full w-full
                  transition-transform duration-700
                  [transform-style:preserve-3d]

                  /* CLICK */
                  ${flipped === index ? "[transform:rotateY(180deg)]" : ""}

                  /* HOVER */
                  group-hover:[transform:rotateY(180deg)]
                `}
              >

                {/* BACK / IMAGE
                    This is visible initially
                */}
                <div
                  className="
                    absolute inset-0
                    overflow-hidden rounded-2xl
                    bg-slate-900
                    [backface-visibility:hidden]
                  "
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-sm font-bold text-white/70">
                      {step.number}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* FRONT / CONTENT
                    This appears after flip
                */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl
                    border border-slate-200
                    bg-white p-6
                    [backface-visibility:hidden]
                    [transform:rotateY(180deg)]
                  "
                >
                  <div className="flex h-full flex-col">

                    <span className="text-sm font-bold text-slate-400">
                      {step.number}
                    </span>

                    <div className="mt-auto">

                      <h3 className="text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <div className="my-5 h-px bg-slate-200" />

                      <p className="text-base leading-7 text-slate-600 font-normal">
                        {step.desc}
                      </p>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;