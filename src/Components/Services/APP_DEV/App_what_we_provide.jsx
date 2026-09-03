import React from "react";
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
        category: "Mobile Development",
        title: "Native iOS & Android Development",
        description:
            "High-performance native mobile apps built specifically for iOS (Swift) and Android (Kotlin) platforms.",
        icon: FiSmartphone,
        bg: "bg-[#edf6ff]",
        iconBg: "bg-[#dff0ff]",
        iconColor: "text-[#168bd2]",
    },
    {
        category: "Cross-Platform",
        title: "Cross-Platform Apps (React Native / Flutter)",
        description:
            "Deliver native-like experiences on both iOS and Android from a single unified codebase.",
        icon: FiRefreshCw,
        bg: "bg-[#eefaf6]",
        iconBg: "bg-[#dcf5eb]",
        iconColor: "text-[#159b72]",
    },
    {
        category: "Data & Synchronization",
        title: "Offline-First Synchronization",
        description:
            "Ensure seamless user experience with reliable local database storage and background data sync.",
        icon: FiDatabase,
        bg: "bg-[#fff0f4]",
        iconBg: "bg-[#ffe1e9]",
        iconColor: "text-[#e84770]",
    },
    {
        category: "App Publishing",
        title: "App Store Compliance & Publishing",
        description:
            "End-to-end guidance for Apple App Store and Google Play Store submission and compliance.",
        icon: FiUploadCloud,
        bg: "bg-[#f3efff]",
        iconBg: "bg-[#e8e0ff]",
        iconColor: "text-[#7956d8]",
    },
    {
        category: "UI / UX Design",
        title: "Mobile UI/UX Design & Prototyping",
        description:
            "Intuitive, user-centered mobile design interfaces designed for maximum user retention and engagement.",
        icon: FiPenTool,
        bg: "bg-[#fff7e9]",
        iconBg: "bg-[#ffedca]",
        iconColor: "text-[#df9600]",
    },
];

const App_what_we_provide = () => {
    return (
        <section className="overflow-hidden bg-[#fdfaf5] px-5 py-15 sm:px-8 sm:py-24 lg:px-16 lg:py-28">

            <div className="mx-auto max-w-[1400px]">

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">


                    {/* ================= LEFT ================= */}

                    <div className="lg:h-[650px]">

                        <div className="lg:sticky lg:top-24">

                            <p
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-[#168bd2]
                                    sm:text-xs
                                "
                            >
                                WHAT WE PROVIDE
                            </p>


                            <h2
                                className="
                                    mt-4
                                    text-5xl
                                    font-extrabold
                                    leading-[0.95]
                                    tracking-[-0.045em]
                                    text-[#082b55]
                                    sm:text-6xl
                                    lg:text-[72px]
                                "
                            >
                                What We
                                <br />

                                <span className="text-[#ff512f]">
                                    Provide
                                </span>
                            </h2>


                            <p
                                className="
                                    mt-6
                                    max-w-[470px]
                                    text-base
                                    leading-7
                                    text-[#55708e]
                                    sm:text-lg
                                "
                            >
                                We build powerful mobile experiences that combine
                                performance, usability, and scalable technology.
                            </p>

                        </div>

                    </div>


                    {/* ================= RIGHT ================= */}

                    <div className="relative">

                        <div
                            className="
                                space-y-4
                                lg:h-[650px]
                                lg:overflow-y-auto
                                lg:pr-4
                                lg:[scrollbar-color:#cbd5e1_transparent]
                                lg:[scrollbar-width:thin]
                            "
                        >

                            {services.map((service, index) => {

                                const Icon = service.icon;

                                return (
                                    <div
                                        key={index}
                                        className={`
                                            group
                                            relative
                                            overflow-hidden
                                            rounded-xl
                                            border
                                            border-black/[0.06]
                                            ${service.bg}
                                            p-6
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:bg-white
                                            hover:shadow-[0_12px_30px_rgba(8,43,85,0.08)]
                                            sm:p-7
                                        `}
                                    >

                                        {/* ================= TOP ================= */}

                                        <div className="flex items-start justify-between">

                                            {/* Icon */}

                                            <div
                                                className={`
                                                    flex
                                                    h-9
                                                    w-9
                                                    items-center
                                                    justify-center
                                                    rounded-lg
                                                    ${service.iconBg}
                                                    ${service.iconColor}
                                                `}
                                            >
                                                <Icon size={16} />
                                            </div>


                                            {/* Small Number */}

                                            <span
                                                className={`
                                                    text-[10px]
                                                    font-bold
                                                    ${service.iconColor}
                                                    opacity-60
                                                `}
                                            >
                                                0{index + 1}
                                            </span>

                                        </div>


                                        {/* ================= CATEGORY ================= */}

                                        <div className="mt-4">

                                            <span
                                                className={`
                                                    inline-flex
                                                    rounded-full
                                                    px-2.5
                                                    py-1
                                                    text-[9px]
                                                    font-bold
                                                    ${service.iconBg}
                                                    ${service.iconColor}
                                                `}
                                            >
                                                {service.category}
                                            </span>

                                        </div>


                                        {/* ================= TITLE ================= */}

                                        <h3
                                            className="
                                                mt-3
                                                max-w-[600px]
                                                text-lg
                                                font-bold
                                                leading-[1.3]
                                                tracking-[-0.015em]
                                                text-[#082b55]
                                                sm:text-xl
                                            "
                                        >
                                            {service.title}
                                        </h3>


                                        {/* ================= DESCRIPTION ================= */}

                                        <p
                                            className="
                                                mt-2.5
                                                max-w-[650px]
                                                text-sm
                                                leading-6
                                                text-[#667f96]
                                                sm:text-[15px]
                                            "
                                        >
                                            {service.description}
                                        </p>


                                        {/* ================= BOTTOM ================= */}

                                                    

                                        {/* ================= DECORATIVE NUMBER ================= */}

                                        <span
                                            className="
                                                pointer-events-none
                                                absolute
                                                -bottom-8
                                                -right-2
                                                text-[100px]
                                                font-black
                                                leading-none
                                                tracking-[-8px]
                                                text-black/[0.025]
                                                transition-all
                                                duration-500
                                                group-hover:text-[#168bd2]/[0.035]
                                            "
                                        >
                                            {index + 1}
                                        </span>

                                    </div>
                                );
                            })}

                        </div>


                        {/* ================= SCROLL INDICATOR ================= */}

                        <div
                            className="
                                hidden
                                flex-col
                                items-center
                                justify-center
                                pt-4
                                lg:flex
                            "
                        >

                            <div className="text-xs font-semibold text-[#55708e]">
                                Scroll Here
                            </div>

                            <span className="animate-bounce text-2xl text-[#168bd2]">
                                ↓
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default App_what_we_provide;