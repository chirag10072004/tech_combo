
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import AppDevelopment from "./app_development";
import CloudSolutions from "./cloud_solutions";
import CybersecurityServices from "./cybersecurity_services";
import WebDevelopment from "./web_development";
import CustomSoftware from "./custom_software";

import "swiper/css";
import "swiper/css/pagination";

const aiImage = "/assets/services/AI_IMAGE.jpg";
const appDevelopmentImg = "/assets/services/APP_D.jpg";
const cloudImg = "/assets/services/Cloud.png";
const customSoftwareImg = "/assets/services/Custom_S_D.jpg";
const cyberSecurityImg = "/assets/services/Cyber_S.png";
const webDevelopmentImg = "/assets/services/Web_D.jpg";

const backgroundImage = "/assets/Home/about-banner.jpg";

const ServicesShowcase = () => {
  const servicesList = [
    {
      id: 1,
      title: "Web Development",
      image: webDevelopmentImg,
      path: "/web-development",
      component: WebDevelopment,
      desc: "We build fast, secure, and fully responsive websites and web applications...",
      features: [
        "Responsive layouts for all devices",
        "SEO-friendly structure & semantic HTML",
        "Headless CMS & Single Page Applications",
        "Highly optimized fast load speeds",
      ],
    },
    {
      id: 2,
      title: "Cloud Solutions",
      image: cloudImg,
      path: "/cloud-solutions",
      component: CloudSolutions,
      desc: "Deploy your systems on robust and secure cloud networks...",
      features: [
        "AWS, GCP & Azure cloud setup",
        "Automated backups & disaster recovery",
        "Load balancing & auto-scaling strategies",
        "Cost optimization & performance tuning",
      ],
    },
    {
      id: 3,
      title: "App Development",
      image: appDevelopmentImg,
      path: "/app-development",
      component: AppDevelopment,
      desc: "Deliver feature-rich and intuitive mobile applications...",
      features: [
        "Native iOS & Android deployment",
        "React Native & hybrid app development",
        "Offline-first synchronization systems",
        "App store compliance & publishing",
      ],
    },
    {
      id: 4,
      title: "Cybersecurity Services",
      image: cyberSecurityImg,
      path: "/cybersecurity",
      component: CybersecurityServices,
      desc: "Safeguard your digital assets and customer data...",
      features: [
        "Vulnerability assessments & pen testing",
        "Data encryption & secure protocol audits",
        "Compliance alignments (GDPR, ISO, HIPAA)",
        "24/7 incident response readiness",
      ],
    },
    {
      id: 5,
      title: "Custom Software Development",
      image: customSoftwareImg,
      path: "/custom-software",
      component: CustomSoftware,
      desc: "Tailor-made software applications engineered from scratch...",
      features: [
        "Custom workflow automation tools",
        "Third-party API & CRM integrations",
        "Legacy application modernization",
        "Scalable database schema design",
      ],
    },
  ];

  return (
    <section
      id="services-showcase"
      className="relative w-full overflow-hidden scroll-mt-24 bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      {/* White background overlay */}
      <div className="pointer-events-none absolute inset-0 " />

      {/* Background gradients */}
      <div className="pointer-events-none absolute left-10 top-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="mt-2 h-[2px] w-8 rounded bg-green-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-[#071329] sm:text-4xl"
          >
            Services We Provide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-xl text-sm font-normal text-slate-600 sm:text-base"
          >
            Explore our professional services designed to digitize and
            expand your business operations.
          </motion.p>
        </div>

        {/* Services slider */}
        <div className="relative mt-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass:
                "swiper-pagination-bullet-active bg-green-600 !w-8",
              bulletClass:
                "swiper-pagination-bullet !bg-slate-300 transition-all duration-300 !w-2.5 !h-2.5",
            }}
            spaceBetween={40}
            slidesPerView={1}
            className="services-swiper rounded-[24px] border border-black bg-white/90 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.02)] backdrop-blur-sm sm:p-10 lg:p-12"
          >
            {servicesList.map((service) => (
              <SwiperSlide key={service.id} className="pb-10">
                <div className="grid grid-cols-1 items-center gap-10 px-4 pt-8 sm:px-12 lg:grid-cols-12 lg:px-16">
                  {/* Left content */}
                  <div className="space-y-6 lg:col-span-7">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#071329] sm:text-3xl">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                      {service.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-2.5 text-sm text-slate-600"
                        >
                          <span className="mt-0.5 flex-shrink-0 rounded-full bg-blue-50 p-0.5 text-green-600">
                            <FiCheck className="h-3.5 w-3.5" />
                          </span>

                          <span className="font-light leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Request Service */}
                    <div className="pt-4">
                      <Link
                        to={service.path}
                        className="inline-flex items-center space-x-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                      >
                        <span>Request Service</span>
                        <FiArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="relative flex justify-center lg:col-span-5">
                    <div className="group relative flex w-full max-w-[440px] flex-col overflow-hidden rounded-[18px] border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(7,19,41,0.08)]">
                      {/* Browser header */}
                      <div className="relative flex w-full items-center border-b border-slate-100 bg-slate-50 px-4 py-2.5">
                        <div className="absolute flex space-x-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                        </div>

                        <div className="flex-grow" />
                      </div>

                      {/* Service image */}
                      <div className="relative aspect-[1.5] w-full overflow-hidden bg-slate-50">
                        <img
                          src={service.image}
                          alt={`${service.title} illustration`}
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-green-600/5 transition-colors duration-300 group-hover:bg-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Pagination styling */}
      <style>{`
        .services-swiper .swiper-pagination-bullets {
          bottom: 24px !important;
        }

        .services-swiper .swiper-pagination-bullet {
          background-color: #cbd5e1 !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.3s ease !important;
        }

        .services-swiper .swiper-pagination-bullet-active {
          background-color: #2563EB !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesShowcase;