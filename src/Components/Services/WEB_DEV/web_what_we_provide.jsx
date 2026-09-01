import React from "react";

const services = [
    ["Custom Web Application Development", "Modern Single Page Applications (SPA) and SaaS platforms built with React, Next.js, and Node.js."],
    ["Headless CMS & Enterprise Websites", "Blazing-fast, SEO-optimized content platforms and corporate websites engineered for conversions."],
    ["E-Commerce Systems & Gateways", "Scalable online shopping experiences integrated with Stripe, PayPal, Razorpay, and custom backends."],
    ["Web Speed Tuning & Optimization", "Achieve 95+ Google Lighthouse scores with code-splitting, asset compression, and caching strategies."],
    ["Progressive Web Apps (PWA)", "Web apps that offer app-like functionality, offline capabilities, and instant push notifications."],
];

const AppWhatWeProvide = () => (
    <section className="bg-[#fdfaf5] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="lg:sticky lg:top-24 h-fit">
                <p className="text-[#168bd2] text-sm font-bold tracking-widest uppercase">
                    What We Provide
                </p>

                <h2 className="mt-4 text-5xl lg:text-7xl font-extrabold text-[#082b55] leading-tight">
                    What We <br />
                    <span className="text-[#ff512f]">Provide</span>
                </h2>

                <p className="mt-6 text-[#55708e] text-lg max-w-md">
                    Powerful web solutions designed to help your business grow,
                    perform better, and deliver exceptional digital experiences.
                </p>
            </div>

            {/* RIGHT */}
            <div>
                <div className="lg:h-[650px] lg:overflow-y-auto space-y-5 pr-3 pb-12">
                    {services.map(([title, description], i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#168bd2] transition"
                        >
                            <span className="text-[#082b55] text-xl">↗</span>

                            <h3 className="mt-5 text-xl sm:text-2xl font-bold text-[#082b55]">
                                {title}
                            </h3>

                            <p className="mt-3 text-[#667f96] leading-6">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex flex-col items-center text-amber-700 pt-5">
                    <span>Scroll Here</span>
                    <span className="text-3xl text-violet-800 animate-bounce">↓</span>
                </div>
            </div>

        </div>
    </section>
);

export default AppWhatWeProvide;