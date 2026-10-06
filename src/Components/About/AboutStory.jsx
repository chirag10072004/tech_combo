import React, { useState } from "react";
import {
  FaBuilding,
  FaUsers,
  FaLightbulb,
  FaGlobe,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const AboutStory = () => {
  const [active, setActive] = useState(0);

  const milestones = [
    {
      year: "2020",
      number: "01",
      label: "The Beginning",
      title: "Founded",
      icon: <FaBuilding />,
      desc: "Company founded with a vision to deliver quality IT solutions and help businesses turn their ideas into reliable digital products.",
      details:
        "We started with a focused team, a clear vision, and a commitment to building technology that creates measurable business value.",
      stats: "Company Founded",
    },
    {
      year: "2021",
      number: "02",
      label: "Building Momentum",
      title: "Expansion",
      icon: <FaUsers />,
      desc: "Expanded software development capabilities and strengthened our development team to take on more complex projects.",
      details:
        "Our growing team allowed us to broaden our technical expertise and work with businesses across different industries.",
      stats: "Growing Team",
    },
    {
      year: "2022",
      number: "03",
      label: "Technology Forward",
      title: "Innovation",
      icon: <FaLightbulb />,
      desc: "Started delivering cloud solutions, AI integrations, enterprise applications, and modern digital experiences.",
      details:
        "We expanded beyond traditional software development and began adopting emerging technologies to solve increasingly complex business problems.",
      stats: "Devops + Cloud",
    },
    {
      year: "2023",
      number: "04",
      label: "Going Global",
      title: "Global Delivery",
      icon: <FaGlobe />,
      desc: "Successfully completed 100+ business projects across multiple industries and expanded our global delivery capabilities.",
      details:
        "Our experience across industries helped us develop repeatable engineering processes while continuing to deliver solutions tailored to each client's needs.",
      stats: "100+ Projects",
    },
    {
      year: "∞",
      number: "05",
      label: "The Next Chapter",
      title: "Scale & Growth",
      icon: <FaRocket />,
      desc: "Building scalable software products, AI solutions, and digital platforms for businesses worldwide.",
      details:
        "Today, our focus is on creating scalable technology, long-term partnerships, and digital products capable of growing alongside modern businesses.",
      stats: "Worldwide",
    },
  ];

  return (
    <section className="bg-blue-50 py-20 sm:py-24 lg:py-2">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-orange-500" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Our Story
              </p>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
              A journey built on{" "}
              <span className="text-blue-400">
                ideas, innovation
              </span>{" "}
              and growth.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            Every milestone represents a stage of our evolution — from our
            foundation to becoming a growing digital technology partner.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden h-[560px] overflow-hidden rounded-3xl bg-slate-950 shadow-xl md:flex">
          {milestones.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={item.year}
                onClick={() => setActive(index)}
                className={`relative flex h-full cursor-pointer overflow-hidden border-r border-white/10 transition-[flex] duration-700 last:border-0 ${
                  isActive ? "flex-[4]" : "flex-1"
                }`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-orange-950" />

                {/* Glow */}
                <div
                  className={`absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl transition-opacity duration-700 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative z-10 flex w-full flex-col p-6 lg:p-9">

                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p
                        className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                          isActive ? "text-blue-400" : "text-slate-600"
                        }`}
                      >
                        {item.label}
                      </p>

                      <div
                        className={`mt-2 font-bold transition-all duration-700 ${
                          isActive
                            ? "text-4xl text-white lg:text-5xl"
                            : "text-xl text-slate-500"
                        }`}
                      >
                        {item.year}
                      </div>
                    </div>

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs ${
                        isActive
                          ? "border-orange-400/40 bg-orange-500 text-white"
                          : "border-white/10 text-slate-700"
                      }`}
                    >
                      {item.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`mt-auto transition-all duration-700 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-lg text-white">
                      {item.icon}
                    </div>

                    <h3 className="text-3xl font-bold text-white lg:text-5xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                      {item.desc}
                    </p>

                    <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm">
                      {item.details}
                    </p>

                    <div className="mt-6 flex items-center gap-4">
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500">
                          Focus
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          {item.stats}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Year Buttons */}
        <div className="mt-4 hidden gap-2 md:flex">
          {milestones.map((item, index) => (
            <button
              key={item.year}
              onClick={() => setActive(index)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${
                active === index
                  ? "bg-orange-500 text-white"
                  : "bg-white text-slate-500 hover:bg-orange-50 hover:text-orange-500"
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="space-y-3 md:hidden">
          {milestones.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={item.year}
                className={`overflow-hidden rounded-2xl border ${
                  isActive
                    ? "border-orange-200 bg-slate-950"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setActive(index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.year}
                    </div>

                    <div>
                      <p
                        className={`text-[9px] font-bold uppercase tracking-[0.2em] ${
                          isActive ? "text-orange-400" : "text-slate-400"
                        }`}
                      >
                        {item.label}
                      </p>

                      <h3
                        className={`mt-1 text-lg font-bold ${
                          isActive ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-lg ${
                      isActive
                        ? "rotate-45 border-orange-400 bg-orange-500 text-white"
                        : "border-slate-200 text-slate-400"
                    }`}
                  >
                    +
                  </div>
                </button>

                {isActive && (
                  <div className="border-t border-white/10 px-5 pb-6 pt-5">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-sm leading-6 text-slate-300">
                          {item.desc}
                        </p>

                        <p className="mt-3 text-xs leading-5 text-slate-500">
                          {item.details}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500">
                          Focus
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          {item.stats}
                        </p>
                      </div>

                      <FaArrowRight className="text-sm text-orange-400" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutStory;