import React, { useEffect, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const slides = [
  {
    image: "/assets/Home/Hero_IMAGE_BACKGROUND.png",
    category: "DIGITAL TRANSFORMATION",
    title: "INTELLIGENCE",
    description:
      "Transform your business with intelligent digital solutions, innovative technology and powerful data-driven experiences.",
  },
  {
    image: "/assets/Home/custom.png",
    category: "CUSTOM SOFTWARE",
    title: "SOFTWARE",
    description:
      "Build powerful software solutions designed around your unique business needs.",
  },
  {
    image: "/assets/Home/cloud.png",
    category: "CLOUD SOLUTIONS",
    title: "CLOUD",
    description:
      "Scale your business with secure, flexible and reliable cloud solutions.",
  },
  {
    image: "/assets/Home/app_web.png",
    category: "WEB & APP DEVELOPMENT",
    title: "DIGITAL",
    description:
      "Create modern web and mobile experiences that drive business growth.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  // Next Slide
  const nextSlide = () => {
    setIsChanging(true);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsChanging(false);
    }, 400);
  };

  // Previous Slide
  const prevSlide = () => {
    setIsChanging(true);

    setTimeout(() => {
      setCurrent(
        (prev) => (prev - 1 + slides.length) % slides.length
      );
      setIsChanging(false);
    }, 250);
  };

  // slide every 6 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Image */}
      <img
        key={slide.image}
        src={slide.image}
        alt={slide.title}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
          isChanging
            ? "scale-105 opacity-0"
            : "scale-100 opacity-100"
        }`}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Left Vertical Label */}
      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-3 md:flex">

        <span className="h-24 w-px bg-white/30" />

        <div className="flex flex-col items-center text-[11px] tracking-[3px] text-white/70">

          <span>
            {String(current + 1).padStart(2, "0")}
          </span>

          <span className="my-2 text-orange-500">
            /
          </span>

          <span>
            {String(slides.length).padStart(2, "0")}
          </span>

         

        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1500px] px-6 pb-10 md:px-12 md:pb-14 lg:px-16">

        {/* Small Heading */}
        <p
          className={`mb-3 text-xs font-medium tracking-[4px] text-white/70 transition-all duration-500 ${
            isChanging
              ? "translate-y-3 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {slide.category}
        </p>

        {/* Main Heading */}
        <h1
          className={`text-[clamp(4rem,11vw,11rem)] font-black leading-[0.8] tracking-[-0.06em] text-white transition-all duration-500 ${
            isChanging
              ? "translate-y-5 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {slide.title}
        </h1>

        {/* Bottom Content */}
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          {/* Description */}
          <p
            className={`max-w-md text-sm leading-6 text-white/70 transition-all duration-500 ${
              isChanging
                ? "translate-y-3 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            {slide.description}
          </p>

          {/* Right Side */}
          <div className="flex items-center gap-6">

            {/* Slider Buttons */}
            <div className="flex items-center gap-2">

              {/* Previous */}
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FiChevronLeft size={18} />
              </button>

              {/* Next */}
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FiChevronRight size={18} />
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 z-20 h-[2px] bg-white/20 w-full">

        <div
          key={current}
          className="h-full bg-white"
          style={{
            animation: "heroProgress 6s linear",
          }}
        />

      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes heroProgress {
            from {
              width: 0%;
            }

            to {
              width: 100%;
            }
          }
        `}
      </style>

    </section>
  );
};

export default Hero;