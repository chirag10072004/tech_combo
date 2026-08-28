import React from "react";

const services = [
    {
        title: "Custom Web Application Development",
        description:
            "Modern Single Page Applications (SPA) and SaaS platforms built with React, Next.js, and Node.js.",
    },
    {
        title: "Headless CMS & Enterprise Websites",
        description:
            "Blazing-fast, SEO-optimized content platforms and corporate websites engineered for conversions.",
    },
    {
        title: "E-Commerce Systems & Gateways",
        description:
            "Scalable online shopping experiences integrated with Stripe, PayPal, Razorpay, and custom backends.",
    },
    {
        title: "Web Speed Tuning & Optimization",
        description:
            "Achieve 95+ Google Lighthouse scores with code-splitting, asset compression, and caching strategies.",
    },
    {
        title: "Progressive Web Apps (PWA)",
        description:
            "Web apps that offer app-like functionality, offline capabilities, and instant push notifications.",
    },
];

const AppWhatWeProvide = () => {
    return (
        <section className="bg-[#fdfaf5] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* LEFT */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <p className="text-[#168bd2] text-sm font-bold tracking-widest uppercase">
                            What We Provide
                        </p>

                        <h2 className="mt-4 text-5xl lg:text-7xl font-extrabold text-[#082b55] leading-tight">
                            What We
                            <br />
                            <span className="text-[#ff512f]">Provide</span>
                        </h2>

                        <p className="mt-6 text-[#55708e] text-lg max-w-md">
                            Powerful web solutions designed to help your business grow,
                            perform better, and deliver exceptional digital experiences.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-5">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#168bd2] transition"
                            >
                                <div className="flex justify-between items-start">


                                    <span className="text-[#082b55] text-xl">
                                        ↗
                                    </span>
                                </div>

                                <h3 className="mt-5 text-xl sm:text-2xl font-bold text-[#082b55]">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-[#667f96] leading-6">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AppWhatWeProvide;