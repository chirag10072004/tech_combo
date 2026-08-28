import React, { useState } from "react";

const techData = {
    Frontend: [
        {
            name: "React JS",
            logo: "https://cdn.simpleicons.org/react/61DAFB",
        },
        {
            name: "Angular",
            logo: "https://cdn.simpleicons.org/angular/DD0031",
        },
        {
            name: "Java",
            logo: "https://cdn.simpleicons.org/java/ED8B00",
        },
        {
            name: "Vue JS",
            logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
        },
        {
            name: "Next.js",
            logo: "https://cdn.simpleicons.org/nextdotjs/000000",
        },
        {
            name: "Svelte / SvelteKit",
            logo: "https://cdn.simpleicons.org/svelte/FF3E00",
        },
    ],

    Backend: [
        {
            name: "Node.js",
            logo: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
        {
            name: "Express.js",
            logo: "https://cdn.simpleicons.org/express/000000",
        },
        {
            name: "Python",
            logo: "https://cdn.simpleicons.org/python/3776AB",
        },
        {
            name: "Django",
            logo: "https://cdn.simpleicons.org/django/092E20",
        },
        {
            name: "PHP",
            logo: "https://cdn.simpleicons.org/php/777BB4",
        },
        {
            name: "Laravel",
            logo: "https://cdn.simpleicons.org/laravel/FF2D20",
        },
    ],

    Database: [
        {
            name: "MySQL",
            logo: "https://cdn.simpleicons.org/mysql/4479A1",
        },
        {
            name: "PostgreSQL",
            logo: "https://cdn.simpleicons.org/postgresql/4169E1",
        },
        {
            name: "MongoDB",
            logo: "https://cdn.simpleicons.org/mongodb/47A248",
        },
        {
            name: "SQLite",
            logo: "https://cdn.simpleicons.org/sqlite/003B57",
        },
        {
            name: "Microsoft SQL Server",
            logo: "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",
        },
        {
            name: "Redis",
            logo: "https://cdn.simpleicons.org/redis/DC382D",
        },
        {
            name: "Firebase",
            logo: "https://cdn.simpleicons.org/firebase/FFCA28",
        },
    ],
};

const tabs = [
    {
        number: "01",
        name: "Frontend",
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

const Tech = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">

                {/* HEADER */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-12">

                    <div>
                        <p className="text-[#168bd2] text-xs font-bold tracking-[0.18em] uppercase mb-5">
                            TECH STACK
                        </p>

                        <h2 className="text-[#050b18] text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1] tracking-[-0.04em]">
                            <span className="text-[#2864d7]">
                                Tech Stack
                            </span>{" "}
                            We Leverage
                            <br />
                            For Web Development
                        </h2>
                    </div>

                    <div className="flex items-center">
                        <p className="text-[#5d626b] text-base sm:text-lg lg:text-xl leading-7 max-w-[600px]">
                            To deliver best-quality enterprise-grade web development
                            services, our developers use cutting-edge frameworks and
                            technologies. We select the right stack to build fast,
                            scalable, secure, and user-friendly digital experiences.
                        </p>
                    </div>

                </div>


                {/* TABS */}
                <div className="grid grid-cols-3 max-w-[650px] border-b border-[#e5eaf0] mb-10">

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
                  ${isActive
                                        ? "text-[#2864d7]"
                                        : "text-[#666b73] hover:text-[#2864d7]"
                                    }
                `}
                            >
                                <div className="text-xl sm:text-2xl font-medium">
                                    {tab.number}
                                </div>

                                <div className="mt-3 text-sm sm:text-base font-medium">
                                    {tab.name}
                                </div>

                                {isActive && (
                                    <span className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-[#2864d7]" />
                                )}
                            </button>
                        );
                    })}

                </div>


                {/* TECHNOLOGY GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-[#e4e9ef]">

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
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <p className="text-[#111827] text-xs sm:text-sm font-medium px-3">
                                {tech.name}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Tech;