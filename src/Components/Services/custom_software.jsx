import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import {
  FiCode as Code2,
  FiSettings as Settings2,
  FiCpu as MonitorCog,
  FiLayers as Blocks,
  FiDatabase as Database,
  FiSend as Send,
  FiArrowRight as ArrowRight,
  FiCheckCircle as CheckCircle2,
} from "react-icons/fi";

const webDevelopmentImg = '/assets/services/custom_services.png';

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailor-made software applications engineered from scratch to match your business requirements.",
  },
  {
    icon: Settings2,
    title: "Custom Workflow Automation Tools",
    description:
      "Automate repetitive tasks and streamline processes to improve efficiency and reduce operational cost.",
  },
  {
    icon: MonitorCog,
    title: "Legacy Application Modernization",
    description:
      "Upgrade outdated applications to modern technologies for better performance and scalability.",
  },
  {
    icon: Blocks,
    title: "Third-party API & CRM Integrations",
    description:
      "Seamlessly integrate third-party services, APIs, and CRM platforms to connect your business systems.",
  },
  {
    icon: Database,
    title: "Scalable Database Schema Design",
    description:
      "Design optimized and scalable database structures to support your growing data and business needs.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
];

export default function CustomSoftwareDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-20">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">

        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>

          <span>›</span>

          <Link to="/services" className="hover:text-green-600">
            Services
          </Link>

          <span>›</span>

          <span className="text-slate-700">
            Custom Software Development
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-green-600">
              Our Service
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Custom Software
              <span className="block">Development</span>
            </h1>

            <div className="my-6 h-1 w-10 rounded-full bg-green-600" />

            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Tailor-made software applications engineered from scratch to
              fit your unique business needs. We build robust, secure, and
              scalable solutions that help you work smarter and grow faster.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                <Send size={18} />
                Request Service
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">

            {/* Background decoration */}
            <div className="absolute h-80 w-80 rounded-full bg-green-50 blur-2xl" />

            {/* Replace this image with your own */}
            <img
              src={webDevelopmentImg}
              alt="Custom software development"
              className="relative z-10 w-full max-w-xl object-contain"
            />

          </div>
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-slate-50 px-6 py-16 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-green-600">
              Our Expertise
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
              What We Provide
            </h2>

            <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-green-600" />
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {service.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="px-6 py-14 lg:px-8">

        <div className="mx-auto max-w-7xl rounded-3xl bg-green-50 px-6 py-10">

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-950">
              Technologies We Use
            </h2>

            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-green-600" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">

            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-slate-100 bg-white px-6 py-4 text-center font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 pb-16 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl bg-slate-950 px-8 py-10 text-white md:flex-row md:px-12">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-400">
              Let's Build Something
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="mt-3 max-w-xl text-slate-300">
              Tell us what you're trying to build and we'll help you turn
              your idea into a powerful software solution.
            </p>
          </div>

          <Link
            to="/contact"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white transition hover:bg-green-500"
          >
            <Send size={18} />
            Request Service
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}