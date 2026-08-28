import React, { useState } from "react";

const techData = {
    Mobile: [
        {
            name: "Swift",
            logo: "https://cdn.simpleicons.org/swift/F05138",
        },
        {
            name: "Kotlin",
            logo: "https://cdn.simpleicons.org/kotlin/7F52FF",
        },
        {
            name: "React Native",
            logo: "https://cdn.simpleicons.org/react/61DAFB",
        },
        {
            name: "Flutter",
            logo: "https://cdn.simpleicons.org/flutter/02569B",
        },
        {
            name: "Dart",
            logo: "https://cdn.simpleicons.org/dart/0175C2",
        },
    ],

    Backend: [
        {
            name: "Node.js",
            logo: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
        {
            name: "Java",
            logo: "https://cdn.simpleicons.org/java/ED8B00",
        },
        {
            name: "Python",
            logo: "https://cdn.simpleicons.org/python/3776AB",
        },
        {
            name: "Firebase",
            logo: "https://cdn.simpleicons.org/firebase/FFCA28",
        },
        {
            name: "PHP",
            logo: "https://cdn.simpleicons.org/php/777BB4",
        },
    ],

    Database: [
        {
            name: "PostgreSQL",
            logo: "https://cdn.simpleicons.org/postgresql/4169E1",
        },
        {
            name: "MySQL",
            logo: "https://cdn.simpleicons.org/mysql/4479A1",
        },
        {
            name: "MongoDB",
            logo: "https://cdn.simpleicons.org/mongodb/47A248",
        },
        {
            name: "Firebase",
            logo: "https://cdn.simpleicons.org/firebase/FFCA28",
        },
        {
            name: "SQLite",
            logo: "https://cdn.simpleicons.org/sqlite/003B57",
        },
        {
            name: "Redis",
            logo: "https://cdn.simpleicons.org/redis/DC382D",
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
        name: "Backend",
    },
    {
        number: "03",
        name: "Database",
    },
];


const App_Tech = () => {

    const [activeTab, setActiveTab] = useState("Mobile");

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">

            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">


                {/* ================= HEADER ================= */}

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-10
                    lg:gap-20
                    mb-12
                ">

                    {/* LEFT */}

                    <div>

                        <p className="
                            text-[#168bd2]
                            text-xs
                            font-bold
                            tracking-[0.18em]
                            uppercase
                            mb-5
                        ">
                            APP TECH STACK
                        </p>


                        <h2 className="
                            text-[#050b18]
                            text-4xl
                            sm:text-5xl
                            lg:text-[64px]
                            font-extrabold
                            leading-[1]
                            tracking-[-0.04em]
                        ">

                            <span className="text-[#2864d7]">
                                Technologies
                            </span>{" "}
                            We Use

                            <br />

                            For App Development

                        </h2>

                    </div>


                    {/* RIGHT */}

                    <div className="flex items-center">

                        <p className="
                            text-[#5d626b]
                            text-base
                            sm:text-lg
                            lg:text-xl
                            leading-7
                            max-w-[600px]
                        ">
                            We use proven mobile technologies and modern
                            development frameworks to build secure, scalable,
                            high-performance applications for iOS and Android.
                        </p>

                    </div>

                </div>


                {/* ================= TABS ================= */}

                <div className="
                    grid
                    grid-cols-3
                    max-w-[650px]
                    border-b
                    border-[#e5eaf0]
                    mb-10
                ">

                    {tabs.map((tab) => {

                        const isActive = activeTab === tab.name;

                        return (

                            <button
                                key={tab.name}
                                type="button"
                                onClick={() => setActiveTab(tab.name)}
                                className={`
                                    relative
                                    text-left
                                    pb-5
                                    transition-all
                                    duration-300
                                    ${
                                        isActive
                                            ? "text-[#2864d7]"
                                            : "text-[#666b73] hover:text-[#2864d7]"
                                    }
                                `}
                            >

                                <div className="
                                    text-xl
                                    sm:text-2xl
                                    font-medium
                                ">
                                    {tab.number}
                                </div>


                                <div className="
                                    mt-3
                                    text-sm
                                    sm:text-base
                                    font-medium
                                ">
                                    {tab.name}
                                </div>


                                {isActive && (

                                    <span className="
                                        absolute
                                        left-0
                                        bottom-[-1px]
                                        w-full
                                        h-[3px]
                                        bg-[#2864d7]
                                    " />

                                )}

                            </button>

                        );

                    })}

                </div>


                {/* ================= TECHNOLOGY GRID ================= */}

                <div className="
                    grid
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    border-t
                    border-l
                    border-[#e4e9ef]
                ">

                    {techData[activeTab].map((tech) => (

                        <div
                            key={tech.name}
                            className="
                                group
                                h-[210px]
                                sm:h-[240px]
                                lg:h-[280px]
                                border-r
                                border-b
                                border-[#e4e9ef]
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center
                                transition-all
                                duration-300
                                hover:bg-[#f8fbfe]
                                hover:border-[#2864d7]
                            "
                        >

                            {/* LOGO */}

                            <div className="
                                w-16
                                h-16
                                sm:w-20
                                sm:h-20
                                flex
                                items-center
                                justify-center
                                mb-5
                                transition-transform
                                duration-300
                                group-hover:scale-110
                            ">

                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="
                                        w-full
                                        h-full
                                        object-contain
                                    "
                                />

                            </div>


                            {/* NAME */}

                            <p className="
                                text-[#111827]
                                text-xs
                                sm:text-sm
                                font-medium
                                px-3
                            ">
                                {tech.name}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};


export default App_Tech;