import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import {
  FiSmartphone,
  FiTablet,
  FiDatabase,
  FiUploadCloud,
  FiLayout,
  FiSend,
  FiArrowRight,
} from "react-icons/fi";

// Image placeholder constant - replace with your image asset path when ready
const appDevImg = '/assets/services/APP_D.jpg';

const services = [
  {
    icon: FiSmartphone,
    title: "Native iOS & Android Development",
    description:
      "High-performance native mobile apps built specifically for iOS (Swift) and Android (Kotlin) platforms.",
  },
  {
    icon: FiTablet,
    title: "Cross-Platform Apps (React Native / Flutter)",
    description:
      "Deliver native-like experiences on both iOS and Android from a single unified codebase.",
  },
  {
    icon: FiDatabase,
    title: "Offline-First Synchronization",
    description:
      "Ensure seamless user experience with reliable local database storage and background data sync.",
  },
  {
    icon: FiUploadCloud,
    title: "App Store Compliance & Publishing",
    description:
      "End-to-end guidance for Apple App Store and Google Play Store submission and compliance.",
  },
  {
    icon: FiLayout,
    title: "Mobile UI/UX Design & Prototyping",
    description:
      "Intuitive, user-centered mobile design interfaces designed for maximum user retention and engagement.",
  },
];

const technologies = [
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "iOS",
  "Android",
  "Firebase",
  "GraphQL",
];

export default function AppDevelopment() {
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
          <span className="text-slate-700">App Development</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-green-600">
              Our Service
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              App Development
              <span className="block text-green-600">Solutions</span>
            </h1>
            <div className="my-6 h-1 w-10 rounded-full bg-green-600" />
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Deliver feature-rich, high-performance mobile applications designed for speed, scalability, and exceptional user engagement across iOS and Android ecosystems.
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
              src={appDevImg}
              alt="App development"
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
            <h2 className="mt-2 text-4xl font-bold text-slate-950 ">
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
                  <h3 className="mb-3 text-2xl  font-bold text-black">
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
              Have an App Idea in Mind?
            </h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Tell us what mobile application you want to build and we will help you bring it to life.
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
