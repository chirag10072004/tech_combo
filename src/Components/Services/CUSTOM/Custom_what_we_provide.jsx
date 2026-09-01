import React from "react";

const services = [
    {
        title: "Custom Software Development",
        description:
            "Tailor-made software applications engineered from scratch to match your business requirements.",
    },
    {
        title: "Custom Workflow Automation Tools",
        description:
            "Automate repetitive tasks and streamline processes to improve efficiency and reduce operational cost.",
    },
    {
        title: "Legacy Application Modernization",
        description:
            "Upgrade outdated applications to modern technologies for better performance and scalability.",
    },
    {
        title: "Third-party API & CRM Integrations",
        description:
            "Seamlessly integrate third-party services, APIs, and CRM platforms to connect your business systems.",
    },
    {
        title: "Scalable Database Schema Design",
        description:
            "Design optimized and scalable database structures to support your growing data and business needs.",
    },
];

const Custom_What_We_Provide = () => {
    return (
        <section className="bg-[#fdfaf5] py-20 sm:py-24 lg:py-28">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* LEFT */}
                    <div className="lg:sticky lg:top-24 lg:self-start h-fit">

                        <p className="text-[#168bd2] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase">
                            OUR EXPERTISE
                        </p>

                        <h2 className="mt-4 text-[#082b55] text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-[0.95] tracking-[-0.045em]">
                            What We
                            <br />
                            <span className="text-[#ff512f]">Provide</span>
                        </h2>

                        <p className="mt-7 text-[#55708e] text-base sm:text-lg leading-7 max-w-[500px]">
                            Purpose-built software solutions designed around your
                            workflows, systems, and long-term business goals.
                        </p>

                    </div>

                    {/* RIGHT - SCROLLABLE */}
                    <div className="relative">

                        <div className="lg:h-[650px] lg:overflow-y-auto space-y-5 pr-3 pb-12">

                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="
                                        group
                                        bg-white
                                        border border-[#e5e7eb]
                                        rounded-2xl
                                        p-6 sm:p-8
                                        transition-all duration-300
                                        hover:border-[#168bd2]
                                        hover:-translate-y-1
                                        hover:shadow-[0_15px_40px_rgba(8,43,85,0.08)]
                                    "
                                >

                                    <div className="flex items-center justify-between">

                                        <span className="text-[#168bd2] text-sm font-bold">
                                            0{index + 1}
                                        </span>

                                        <span className="
                                            text-[#082b55]
                                            text-xl
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                            group-hover:-translate-y-1
                                        ">
                                            ↗
                                        </span>

                                    </div>

                                    <h3 className="mt-6 text-[#082b55] text-xl sm:text-2xl font-bold leading-tight">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-[#667f96] leading-6 text-sm sm:text-base">
                                        {service.description}
                                    </p>

                                </div>
                            ))}

                        </div>

                        {/* SCROLL INDICATOR */}
                        <div className="hidden lg:flex flex-col items-center justify-center text-amber-700 pt-5">
                            <span>Scroll Here</span>

                            <span className="text-3xl text-violet-800 animate-bounce">
                                ↓
                            </span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Custom_What_We_Provide;