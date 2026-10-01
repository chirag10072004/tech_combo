import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FiArrowUpRight,
    FiCode,
    FiLayers,
    FiShoppingCart,
    FiZap,
    FiSmartphone,
} from "react-icons/fi";

const services = [
    {
        number: "01",
        title: "Custom Web Application Development",
        description:
            "Modern Single Page Applications (SPA) and SaaS platforms built with React, Next.js, and Node.js. We develop scalable, high-performance web applications tailored to your business requirements and designed for seamless user experiences.",
        icon: FiCode,
        tag: "WEB DEVELOPMENT",
    },
    {
        number: "02",
        title: "Headless CMS & Enterprise Websites",
        description:
            "Blazing-fast, SEO-optimized content platforms and corporate websites engineered for conversions. We build flexible digital experiences with modern headless CMS architecture, streamlined content management, and scalable infrastructure.",
        icon: FiLayers,
        tag: "ENTERPRISE SOLUTIONS",
    },
    {
        number: "03",
        title: "E-Commerce Systems & Gateways",
        description:
            "Scalable online shopping experiences integrated with Stripe, PayPal, Razorpay, and custom backends. We create secure e-commerce platforms with seamless payment processing, intuitive shopping experiences, and reliable order management.",
        icon: FiShoppingCart,
        tag: "E-COMMERCE",
    },
    {
        number: "04",
        title: "Web Speed Tuning & Optimization",
        description:
            "Achieve 95+ Google Lighthouse scores with code-splitting, asset compression, and caching strategies. We optimize loading performance, improve Core Web Vitals, and enhance responsiveness to deliver faster and smoother digital experiences.",
        icon: FiZap,
        tag: "PERFORMANCE OPTIMIZATION",
    },
    {
        number: "05",
        title: "Progressive Web Apps (PWA)",
        description:
            "Web applications that deliver app-like functionality, offline capabilities, and push notifications. We build responsive, installable PWAs that combine the accessibility of the web with the convenience and performance of native applications.",
        icon: FiSmartphone,
        tag: "NEXT-GEN WEB",
    },
];

const AppWhatWeProvide = () => {
    const [activeCard, setActiveCard] = useState(null);

    const toggleCard = (number) => {
        if (window.innerWidth >= 1024) return;

        setActiveCard((current) =>
            current === number ? null : number
        );
    };

    return (
        <section className="relative overflow-hidden bg-[#fdfaf5] py-20 sm:py-24 lg:py-28">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-[100px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-[110px]" />

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
                            <span className="text-[#ff512f]">
                                Provide.
                            </span>
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
                            Powerful web solutions designed to help
                            your business grow, perform better, and
                            deliver exceptional digital experiences
                            through modern technologies.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="text-sm font-semibold tracking-wide text-[#082b55]">
                                Built for performance. Designed for growth.
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isActive =
                            activeCard === service.number;

                        return (
                            <motion.div
                                key={service.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: (index % 3) * 0.1,
                                    ease: "easeOut",
                                }}
                                onClick={() =>
                                    toggleCard(service.number)
                                }
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
                                        <Icon
                                            size={23}
                                            strokeWidth={1.7}
                                        />
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

                                    {/* Description */}
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

export default AppWhatWeProvide;