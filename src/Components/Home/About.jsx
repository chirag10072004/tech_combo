
import React from "react";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";

const OfficeImg = "/assets/Home/office.png";
const BackgroundImg = "/assets/Home/cloud.png";

const About = () => {
    const checklist = [
        "Client-focused approach",
        "Agile development process",
        "On-time delivery",
        "Quality & security assured",
    ];

    return (
        <section
            id="about"
            className="relative overflow-hidden scroll-mt-24 bg-cover bg-center bg-no-repeat py-14"
            style={{
                backgroundImage: `url("${BackgroundImg}")`,
            }}
        >
            {/* Background overlay */}
            <div className="pointer-events-none absolute inset-0 bg-white/80" />

            {/* Background decorations */}
            <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:col-span-6"
                    >
                        <div className="w-full overflow-hidden rounded-2xl border border-white/60 bg-white/50 shadow-xl">
                            <img
                                src={OfficeImg}
                                alt="TechCombo Office Team Working"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-full lg:col-span-6"
                    >
                        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                            Building Technology Solutions
                            <br className="hidden sm:block" />
                            That Empower Businesses
                        </h2>

                        {/* Line */}
                        <div className="mt-5 h-1 w-12 rounded bg-green-600" />

                        {/* Description */}
                        <p className="mt-6 leading-relaxed text-gray-700">
                            We are a team of passionate technologists,
                            designers, and problem-solvers who love
                            turning ideas into reality. Our mission is
                            to deliver high-quality, scalable, and
                            innovative solutions that create real
                            business impact.
                        </p>

                        {/* Checklist */}
                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {checklist.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-green-200 bg-green-50 text-green-600">
                                        <FiCheck className="h-3 w-3" />
                                    </div>

                                    <span className="text-gray-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <div className="mt-8">
                            <Link
                                to="/about"
                                className="inline-block rounded-full bg-black px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg"
                            >
                                More About Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;