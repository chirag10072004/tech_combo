
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCloud,
  FiGitBranch,
  FiLayers,
  FiShield,
  FiActivity,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "AWS, GCP & Azure Architecture",
    description:
      "Design and deploy secure, scalable multi-cloud infrastructure customized for high-load workloads. Build a resilient cloud foundation that supports business growth, improves reliability, and adapts to changing demands.",
    icon: FiCloud,
    tag: "CLOUD INFRASTRUCTURE",
  },
  {
    number: "02",
    title: "DevOps & CI/CD Automation",
    description:
      "Streamline software delivery with automated CI/CD pipelines and efficient deployment workflows. Reduce manual effort, accelerate releases, and maintain consistency across development and production environments.",
    icon: FiGitBranch,
    tag: "AUTOMATION",
  },
  {
    number: "03",
    title: "Containerization & Microservices",
    description:
      "Transform monolithic applications into flexible, independently deployable microservices using Docker and Kubernetes. Improve application scalability, simplify maintenance, and make infrastructure more adaptable.",
    icon: FiLayers,
    tag: "MODERN ARCHITECTURE",
  },
  {
    number: "04",
    title: "Automated Backups & Disaster Recovery",
    description:
      "Protect critical business data with automated backups, recovery planning, and resilient infrastructure. Minimize downtime, strengthen business continuity, and prepare your systems for unexpected disruptions.",
    icon: FiShield,
    tag: "BUSINESS CONTINUITY",
  },
  {
    number: "05",
    title: "Cloud Cost Optimization & Performance",
    description:
      "Optimize cloud resources through continuous performance monitoring, resource analysis, and cost management. Improve infrastructure efficiency, eliminate unnecessary expenditure, and maintain reliable application performance.",
    icon: FiActivity,
    tag: "PERFORMANCE",
  },
];

const Cloud_what_we_provide = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Click interaction is only for mobile and tablet.
  const toggleCard = (number) => {
    if (window.innerWidth >= 1024) return;

    setActiveCard((current) =>
      current === number ? null : number
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] py-12 sm:py-14 lg:py-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-100/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">

        {/* Section heading */}
        <div className="mb-14 grid items-end gap-8 lg:mb-20 lg:grid-cols-2 lg:gap-16">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff512f]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168bd2] sm:text-sm">
                OUR EXPERTISE
              </p>
            </div>

            <h2 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[#082b55] sm:text-6xl lg:text-[76px]">
              What We
              <br />
              <span className="text-[#ff512f]">Provide.</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="max-w-[540px] text-base leading-8 text-[#55708e] sm:text-lg">
              From cloud architecture to automated infrastructure,
              we help businesses build secure, scalable, reliable,
              and cost-efficient cloud environments.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-semibold tracking-wide text-[#082b55]">
                Built for performance. Designed to scale.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeCard === service.number;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.1,
                  ease: "easeOut",
                }}
                onClick={toggleCard.bind(null, service.number)}
                className={`group relative flex min-h-[320px] cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-500 ease-out sm:min-h-[340px] sm:p-8 ${
                  isActive
                    ? "border-[#168bd2]/60 shadow-[0_20px_55px_rgba(8,43,85,0.10)]"
                    : "border-[#e2e8f0] hover:-translate-y-2 hover:border-[#168bd2]/50 hover:shadow-[0_20px_55px_rgba(8,43,85,0.10)]"
                }`}
              >
                {/* Card background */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 transition-opacity duration-500 ${
                    isActive
                      ? "opacity-100 lg:opacity-0"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Card top */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#168bd2]">
                    / {service.number}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 ${
                      isActive
                        ? "bg-[#082b55] text-white lg:bg-[#f0f7fc] lg:text-[#168bd2]"
                        : "bg-[#f0f7fc] text-[#168bd2] group-hover:bg-[#082b55] group-hover:text-white"
                    }`}
                  >
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Card content */}
                <div className="relative z-10 mt-8 flex-1">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff512f] sm:text-[11px]">
                    {service.tag}
                  </p>

                  <h3
                    className={`text-xl font-bold leading-snug tracking-tight transition-colors duration-300 sm:text-2xl ${
                      isActive
                        ? "text-[#168bd2] lg:text-[#082b55]"
                        : "text-[#082b55] group-hover:text-[#168bd2]"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description: hover on desktop, click on mobile/tablet */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0"
                        : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`pt-4 text-[14px] font-normal leading-7 tracking-[0.01em] text-[#526b83] transition-transform duration-500 ease-out sm:text-[15px] ${
                          isActive
                            ? "translate-y-0 lg:translate-y-3"
                            : "translate-y-3 group-hover:translate-y-0"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="relative z-10 mt-7 flex items-center justify-between border-t border-[#e9eef4] pt-5">
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-[#8aa0b5]">
                    TECHCOMBO
                  </span>

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "rotate-45 border-[#ff512f] bg-[#ff512f] text-white lg:rotate-0 lg:border-[#dce5ef] lg:bg-transparent lg:text-[#082b55]"
                        : "border-[#dce5ef] text-[#082b55] group-hover:border-[#ff512f] group-hover:bg-[#ff512f] group-hover:text-white"
                    }`}
                  >
                    <FiArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

    
      </div>
    </section>
  );
};

export default Cloud_what_we_provide;