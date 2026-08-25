import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import {
  FiCloud,
  FiCpu,
  FiLayers,
  FiRefreshCw,
  FiTrendingUp,
  FiSend,
  FiArrowRight,
} from "react-icons/fi";

// Image placeholder constant - replace with your image asset path when ready
const cloudImg = '/assets/services/Cloud.png';

const services = [
  {
    icon: FiCloud,
    title: "AWS, GCP & Azure Architecture",
    description:
      "Design and deploy secure, scalable multi-cloud infrastructure customized for your high-load workloads.",
  },
  {
    icon: FiCpu,
    title: "DevOps & CI/CD Automation",
    description:
      "Streamline software release pipelines with zero-downtime automated deployment workflows.",
  },
  {
    icon: FiLayers,
    title: "Containerization & Microservices",
    description:
      "Decouple monolith architectures into resilient microservices using Docker and Kubernetes orchestration.",
  },
  {
    icon: FiRefreshCw,
    title: "Automated Backups & Disaster Recovery",
    description:
      "Implement robust automated backup mechanisms and real-time failover strategies to guarantee zero data loss.",
  },
  {
    icon: FiTrendingUp,
    title: "Cloud Cost Optimization & Performance",
    description:
      "Continuously monitor infrastructure performance and eliminate cloud expenditure waste.",
  },
];

const technologies = [
  "AWS",
  "Google Cloud",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "Nginx",
];

export default function CloudSolutions() {
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
          <span className="text-slate-700">Cloud Solutions</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-green-600">
              Our Service
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Cloud Solutions
              <span className="block text-green-600">& DevOps</span>
            </h1>
            <div className="my-6 h-1 w-10 rounded-full bg-green-600" />
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Migrate, scale, and optimize your systems on robust, cost-effective cloud networks with enterprise-grade security and automated infrastructure deployment.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                <FiSend size={18} />
                Request Service
                <FiArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-green-50 blur-2xl" />
            <img
              src={cloudImg}
              alt="Cloud solutions"
              className="relative z-10 w-full max-w-xl rounded-2xl object-cover shadow-lg"
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
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
              Ready to Scale?
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Migrate to the Cloud Today
            </h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Consult with our cloud experts to build a scalable and cost-effective cloud strategy.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white transition hover:bg-green-500"
          >
            <FiSend size={18} />
            Request Service
            <FiArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
