import React, { useState } from "react";
import {
    FiArrowUpRight,
    FiSmartphone,
    FiLayers,
    FiRefreshCw,
    FiUploadCloud,
    FiPenTool,
} from "react-icons/fi";

const serviceData = {
    Mobile: [
        {
            title: "Native iOS & Android Development",
            description:
                "High-performance native mobile apps built specifically for iOS using Swift and Android using Kotlin.",
            icon: FiSmartphone,
            bg: "bg-[#edf6ff]",
            iconBg: "bg-[#dff0ff]",
            iconColor: "text-[#168bd2]",
        },
        {
            title: "Cross-Platform Apps",
            description:
                "Build native-like experiences for both iOS and Android using a single React Native or Flutter codebase.",
            icon: FiLayers,
            bg: "bg-[#eefaf6]",
            iconBg: "bg-[#dcf5eb]",
            iconColor: "text-[#159b72]",
        },
        {
            title: "Offline-First Synchronization",
            description:
                "Reliable local storage and background synchronization to keep your application working seamlessly.",
            icon: FiRefreshCw,
            bg: "bg-[#fff0f4]",
            iconBg: "bg-[#ffe1e9]",
            iconColor: "text-[#e84770]",
        },
        {
            title: "App Store Compliance & Publishing",
            description:
                "Complete support for Apple App Store and Google Play Store submission, compliance and publishing.",
            icon: FiUploadCloud,
            bg: "bg-[#f4f0ff]",
            iconBg: "bg-[#e9e1ff]",
            iconColor: "text-[#7956d8]",
        },
        {
            title: "Mobile UI/UX Design",
            description:
                "User-focused mobile interfaces and prototypes designed for usability, retention and engagement.",
            icon: FiPenTool,
            bg: "bg-[#fff7e9]",
            iconBg: "bg-[#ffedca]",
            iconColor: "text-[#df9600]",
        },
    ],

    Solutions: [
        {
            title: "Enterprise Mobile Applications",
            description:
                "Scalable mobile solutions designed to support complex business workflows and enterprise operations.",
            icon: FiLayers,
            bg: "bg-[#edf6ff]",
            iconBg: "bg-[#dff0ff]",
            iconColor: "text-[#168bd2]",
        },
        {
            title: "Business Process Automation",
            description:
                "Transform repetitive business processes into efficient digital workflows with intelligent automation.",
            icon: FiRefreshCw,
            bg: "bg-[#eefaf6]",
            iconBg: "bg-[#dcf5eb]",
            iconColor: "text-[#159b72]",
        },
        {
            title: "Custom Mobile Platforms",
            description:
                "Purpose-built digital platforms designed around your specific business requirements and users.",
            icon: FiSmartphone,
            bg: "bg-[#fff0f4]",
            iconBg: "bg-[#ffe1e9]",
            iconColor: "text-[#e84770]",
        },
        {
            title: "API & Backend Integration",
            description:
                "Connect mobile applications with secure APIs, databases, cloud services and third-party systems.",
            icon: FiUploadCloud,
            bg: "bg-[#f4f0ff]",
            iconBg: "bg-[#e9e1ff]",
            iconColor: "text-[#7956d8]",
        },
        {
            title: "Product Design & Prototyping",
            description:
                "Turn product ideas into intuitive interfaces and interactive prototypes ready for development.",
            icon: FiPenTool,
            bg: "bg-[#fff7e9]",
            iconBg: "bg-[#ffedca]",
            iconColor: "text-[#df9600]",
        },
    ],
};

const tabs = [
    {
        number: "01",
        name: "Mobile",
    },
    {
        number: "02",
        name: "Solutions",
    },
];

const App_what_we_provide = () => {
    const [activeTab, setActiveTab] = useState("Mobile");

    return (
        <section className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24 lg:py-28">

            {/* ================= BACKGROUND ================= */}

            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#2864d7]/[0.045] blur-3xl" />

            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#168bd2]/[0.035] blur-3xl" />


            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">


                {/* ================= HEADER ================= */}

                <div className="mx-auto max-w-[850px] text-center">

                    <div className="mb-6 inline-flex items-center gap-3">

                        <span className="h-px w-8 bg-[#2864d7]" />

                        <span className="text-xs font-bold tracking-[0.2em] text-[#2864d7]">
                            WHAT WE PROVIDE
                        </span>

                        <span className="h-px w-8 bg-[#2864d7]" />

                    </div>


                    <h2
                        className="
                            text-4xl
                            font-extrabold
                            leading-[1]
                            tracking-[-0.05em]
                            text-[#07111f]
                            sm:text-5xl
                            lg:text-[64px]
                        "
                    >
                        Next Gen App Development

                        <br />

                        <span className="text-[#2864d7]">
                            Services & Solutions
                        </span>
                    </h2>


                    <p
                        className="
                            mx-auto
                            mt-7
                            max-w-[650px]
                            text-base
                            leading-7
                            text-[#69717d]
                            sm:text-lg
                        "
                    >
                        We build powerful mobile experiences that combine
                        performance, usability and scalable technology for
                        modern businesses.
                    </p>

                </div>


                {/* ================= TABS ================= */}

                <div className="mt-12 flex justify-center sm:mt-14">

                    <div
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            border
                            border-[#e3e8ef]
                            bg-white
                            p-1.5
                            shadow-sm
                        "
                    >

                        {tabs.map((tab) => {

                            const active = activeTab === tab.name;

                            return (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`
                                        flex
                                        items-center
                                        gap-2.5
                                        rounded-full
                                        px-6
                                        py-3
                                        text-sm
                                        font-semibold
                                        transition-all
                                        duration-300
                                        sm:px-8

                                        ${
                                            active
                                                ? "bg-[#2864d7] text-white shadow-[0_8px_25px_rgba(40,100,215,0.25)]"
                                                : "text-[#737b86] hover:text-[#2864d7]"
                                        }
                                    `}
                                >

                                    <span
                                        className={`
                                            text-[10px]
                                            font-bold
                                            ${
                                                active
                                                    ? "text-white/60"
                                                    : "text-[#a6adb6]"
                                            }
                                        `}
                                    >
                                        {tab.number}
                                    </span>

                                    {tab.name}

                                </button>
                            );
                        })}

                    </div>

                </div>


                {/* ================= SERVICES ================= */}

                <div
                    key={activeTab}
                    className="
                        mt-14
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        sm:gap-6
                        lg:mt-16
                    "
                >

                    {serviceData[activeTab].map((service, index) => {

                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className={`
                                    group
                                    relative
                                    min-h-[290px]
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-black/[0.05]
                                    ${service.bg}
                                    p-7
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:bg-white
                                    hover:shadow-[0_20px_50px_rgba(20,40,70,0.10)]
                                    sm:p-8
                                `}
                            >

                                {/* Background Number */}

                                <span
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-2
                                        -top-5
                                        text-[100px]
                                        font-black
                                        leading-none
                                        tracking-[-8px]
                                        text-black/[0.025]
                                        transition-all
                                        duration-500
                                        group-hover:text-[#2864d7]/[0.045]
                                    "
                                >
                                    0{index + 1}
                                </span>


                                {/* ================= ICON ================= */}

                                <div
                                    className={`
                                        relative
                                        z-10
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-xl
                                        ${service.iconBg}
                                        ${service.iconColor}
                                        transition-transform
                                        duration-500
                                        group-hover:scale-110
                                    `}
                                >
                                    <Icon size={19} />
                                </div>


                                {/* ================= CATEGORY ================= */}

                                <div className="relative z-10 mt-5">

                                    <span
                                        className={`
                                            inline-flex
                                            rounded-full
                                            px-3
                                            py-1.5
                                            text-[10px]
                                            font-bold
                                            ${service.iconBg}
                                            ${service.iconColor}
                                        `}
                                    >
                                        {activeTab} Service
                                    </span>

                                </div>


                                {/* ================= TITLE ================= */}

                                <h3
                                    className="
                                        relative
                                        z-10
                                        mt-4
                                        max-w-[350px]
                                        text-xl
                                        font-bold
                                        leading-[1.25]
                                        tracking-[-0.02em]
                                        text-[#082b55]
                                    "
                                >
                                    {service.title}
                                </h3>


                                {/* ================= DESCRIPTION ================= */}

                                <p
                                    className="
                                        relative
                                        z-10
                                        mt-3
                                        max-w-[390px]
                                        text-sm
                                        leading-6
                                        text-[#667f96]
                                    "
                                >
                                    {service.description}
                                </p>


                                {/* ================= BOTTOM ================= */}

                                <div className="relative z-10 mt-6">

                                    <span
                                        className={`
                                            inline-flex
                                            items-center
                                            gap-1.5
                                            text-[10px]
                                            font-bold
                                            ${service.iconColor}
                                        `}
                                    >
                                        Discover More

                                        <FiArrowUpRight
                                            size={13}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                            "
                                        />

                                    </span>

                                </div>

                            </div>
                        );
                    })}

                </div>


                {/* ================= BOTTOM LINE ================= */}

                <div className="mt-16 flex items-center gap-5">

                    <div className="h-px flex-1 bg-[#dfe5ec]" />

                    <div className="flex items-center gap-2">

                        <span className="h-1.5 w-1.5 rounded-full bg-[#2864d7]" />

                        <span className="h-1.5 w-1.5 rounded-full bg-[#2864d7]" />

                    </div>

                    <div className="h-px flex-1 bg-[#dfe5ec]" />

                </div>

            </div>

        </section>
    );
};

export default App_what_we_provide;