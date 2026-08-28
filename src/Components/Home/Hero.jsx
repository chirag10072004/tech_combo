import React, { useEffect, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
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

  const nextSlide = () => {
    if (isChanging) return;

    setIsChanging(true);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsChanging(false);
    }, 400);
  };

  const prevSlide = () => {
    if (isChanging) return;

    setIsChanging(true);

    setTimeout(() => {
      setCurrent(
        (prev) => (prev - 1 + slides.length) % slides.length
      );
      setIsChanging(false);
    }, 400);
  };

  // Auto slide - 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        key={slide.image}
        src={slide.image}
        alt={slide.title}
        className={`
          absolute inset-0
          h-full w-full
          object-cover
          object-[75%_center]
          md:object-center
          transition-all duration-700
          ${isChanging
            ? "scale-105 opacity-0"
            : "scale-100 opacity-100"
          }
        `}
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/30" />

      {/* ================= BOTTOM GRADIENT ================= */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* ================= HERO CONTENT ================= */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          mx-auto
          max-w-[1500px]
          px-4
          pb-24
          sm:px-6
          sm:pb-14
          md:px-12
          md:pb-14
          lg:px-16
        "
      >

        {/* Category */}
        <p
          className={`
            mb-3
            text-[9px]
            font-medium
            tracking-[3px]
            text-white/80
            transition-all
            duration-500
            sm:text-xs
            sm:tracking-[4px]
            ${isChanging
              ? "translate-y-3 opacity-0"
              : "translate-y-0 opacity-100"
            }
          `}
        >
          {slide.category}
        </p>

        {/* Main Heading */}
        <h1
          className={`
            whitespace-nowrap
            text-[4rem]
            font-black
            leading-[0.85]
            tracking-[-0.06em]
            text-white
            transition-all
            duration-500
            sm:text-[6rem]
            md:text-[9rem]
            lg:text-[10.5rem]
            ${isChanging
              ? "translate-y-5 opacity-0"
              : "translate-y-0 opacity-100"
            }
          `}
        >
          {slide.title}
        </h1>

        {/* ================= DESCRIPTION + CTA ================= */}
        <div
          className={`
            mt-6
            transition-all
            duration-500
            sm:mt-7
            ${isChanging
              ? "translate-y-3 opacity-0"
              : "translate-y-0 opacity-100"
            }
          `}
        >

          {/* Description */}
          <p
            className="
              max-w-xl
              text-xs
              font-medium
              leading-5
              text-white/75
              sm:text-sm
              sm:leading-6
              md:text-base
              md:leading-7
            "
          >
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">

            {/* Explore Services */}
            <a
              href="/services"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-5
                py-2.5
                text-xs
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-orange-500
                hover:text-white
                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              Explore Services

              <FiArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Contact Us */}
            <a
              href="/contact"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/30
                px-5
                py-2.5
                text-xs
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-white
                hover:bg-white
                hover:text-black
                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              Contact Us

              <FiArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>

          {/* ================= SERVICE KEYWORDS ================= */}
          <div
            className="
              mt-5
              flex
              max-w-3xl
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-[10px]
              font-medium
              tracking-wide
              text-white/60
              sm:mt-6
              sm:gap-x-5
              sm:text-xs
              md:text-sm
            "
          >

            <span className="transition-colors hover:text-white">
              Custom Software
            </span>

            <span className="h-1 w-1 rounded-full bg-orange-500" />

            <span className="transition-colors hover:text-white">
              Cloud Solutions
            </span>

            <span className="h-1 w-1 rounded-full bg-orange-500" />

            <span className="transition-colors hover:text-white">
              Web & Mobile
            </span>

            <span className="h-1 w-1 rounded-full bg-orange-500" />

            <span className="transition-colors hover:text-white">
              Cybersecurity
            </span>

          </div>
        </div>
      </div>

      {/* ================= SLIDER BUTTONS ================= */}
      <div
        className="
          absolute
          bottom-5
          right-4
          z-20
          flex
          items-center
          gap-2
          sm:bottom-7
          sm:right-6
          md:right-10
          lg:right-14
        "
      >

        {/* Previous */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
            sm:h-10
            sm:w-10
          "
        >
          <FiChevronLeft size={18} />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            transition-all
            duration-300
            hover:bg-orange-500
            hover:text-white
            sm:h-10
            sm:w-10
          "
        >
          <FiChevronRight size={18} />
        </button>

      </div>

      {/* ================= PROGRESS BAR ================= */}
      <div className="absolute bottom-0 left-0 z-20 h-[2px] w-full bg-white/20">

        <div
          key={current}
          className="h-full bg-white"
          style={{
            animation: "heroProgress 5s linear",
          }}
        />

      </div>

      {/* ================= ANIMATION ================= */}
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