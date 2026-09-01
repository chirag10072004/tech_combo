import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
    ["AWS, GCP & Azure Architecture", "Design and deploy secure, scalable multi-cloud infrastructure customized for your high-load workloads."],
    ["DevOps & CI/CD Automation", "Streamline software release pipelines with zero-downtime automated deployment workflows."],
    ["Containerization & Microservices", "Decouple monolith architectures into resilient microservices using Docker and Kubernetes orchestration."],
    ["Automated Backups & Disaster Recovery", "Implement robust automated backup mechanisms and real-time failover strategies to guarantee zero data loss."],
    ["Cloud Cost Optimization & Performance", "Continuously monitor infrastructure performance and eliminate cloud expenditure waste."],
];

const Cloud_what_we_provide = () => (
    <section className="bg-[#fdfaf5] py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                {/* LEFT */}
                <div className="lg:sticky lg:top-24 h-fit">
                    <p className="text-[#168bd2] text-xs font-bold tracking-[0.18em] uppercase">
                        OUR EXPERTISE
                    </p>

                    <h2 className="mt-4 text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-[0.95] tracking-[-0.045em] text-[#082b55]">
                        What We <br />
                        <span className="text-[#ff512f]">Provide</span>
                    </h2>

                    <p className="mt-6 text-[#55708e] text-base sm:text-lg leading-7 max-w-[470px]">
                        From cloud architecture to automated infrastructure, we help
                        businesses build secure, scalable, reliable, and cost-efficient
                        cloud environments.
                    </p>
                </div>

                {/* RIGHT - SCROLL */}
                <div>
                    <div className="lg:h-[650px] lg:overflow-y-auto space-y-5 pr-4 pb-12">
                        {services.map(([title, description], i) => (
                            <div
                                key={i}
                                className="group bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#168bd2] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(8,43,85,0.08)]"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-[#168bd2] text-xs font-bold">
                                        0{i + 1}
                                    </span>

                                    <span className="text-[#082b55] text-xl transition group-hover:translate-x-1 group-hover:-translate-y-1">
                                        <FiArrowUpRight />
                                    </span>
                                </div>

                                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-[#082b55]">
                                    {title}
                                </h3>

                                <p className="mt-4 text-sm sm:text-base leading-7 text-[#667f96]">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex flex-col items-center text-amber-700 pt-4">
                        <span>Scroll Here</span>
                        <span className="text-3xl text-violet-800 animate-bounce">↓</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Cloud_what_we_provide;