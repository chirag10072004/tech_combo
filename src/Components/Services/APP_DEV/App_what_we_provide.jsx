import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FiArrowUpRight,
    FiSmartphone,
    FiRefreshCw,
    FiDatabase,
    FiUploadCloud,
    FiPenTool,
} from "react-icons/fi";

const services = [
    {
        number: "01",
        title: "Native iOS & Android Development",
        description:
            "High-performance native mobile apps built specifically for iOS (Swift) and Android (Kotlin) platforms. We create responsive, reliable applications optimized for performance and seamless user experiences.",
        icon: FiSmartphone,
        tag: "MOBILE DEVELOPMENT",
    },
    {
        number: "02",
        title: "Cross-Platform Apps (React Native / Flutter)",
        description:
            "Deliver native-like experiences on both iOS and Android from a single unified codebase. We build scalable cross-platform applications that reduce development time while maintaining consistent performance.",
        icon: FiRefreshCw,
        tag: "CROSS-PLATFORM",
    },
    {
        number: "03",
        title: "Offline-First Synchronization",
        description:
            "Ensure seamless user experiences with reliable local database storage and background data synchronization. Our solutions keep applications functional offline while maintaining accurate and consistent data.",
        icon: FiDatabase,
        tag: "DATA & SYNCHRONIZATION",
    },
    {
        number: "04",
        title: "App Store Compliance & Publishing",
        description:
            "End-to-end guidance for Apple App Store and Google Play Store submission and compliance. We help prepare, optimize, and publish mobile applications while ensuring they meet platform requirements.",
        icon: FiUploadCloud,
        tag: "APP PUBLISHING",
    },
    {
        number: "05",
        title: "Mobile UI/UX Design & Prototyping",
        description:
            "Intuitive, user-centered mobile interfaces designed for engagement and usability. We transform ideas into interactive prototypes and polished designs that deliver consistent experiences across mobile devices.",
        icon: FiPenTool,
        tag: "UI / UX DESIGN",
    },
];

const App_what_we_provide = () => {
    const [activeCard, setActiveCard] = useState(null);

    const toggleCard = (number) => {
        if (window.innerWidth >= 1024) return;

        setActiveCard((current) =>
            current === number ? null : number
        );
    };

    return (
        <section className="relative overflow-hidden bg-[#fdfaf5] py-12 sm:py-14 lg:py-16">
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
                            We build powerful mobile experiences that
                            combine performance, usability, and
                            scalable technology to help businesses
                            connect with their customers.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="text-sm font-semibold tracking-wide text-[#082b55]">
                                Seamless experiences. Built for mobile.
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

export default App_what_we_provide;