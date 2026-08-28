import React from "react";

const technologies = [
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Next.js",
    logo: "https://cdn.simpleicons.org/nextdotjs/000000",
  },
  {
    name: "Node.js",
    logo: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "Python",
    logo: "https://cdn.simpleicons.org/python/3776AB",
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
    name: "AWS",
    logo: "https://cdn.simpleicons.org/amazonwebservices/232F3E",
  },
];

const Custom_Tech = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">

        {/* HEADER */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-20
          mb-12
        ">

          <div>

            <p className="
              text-[#168bd2]
              text-xs
              font-bold
              tracking-[0.18em]
              uppercase
              mb-5
            ">
              TECHNOLOGIES WE USE
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
              To Build Better Software
            </h2>

          </div>


          <div className="flex items-center">

            <p className="
              text-[#5d626b]
              text-base
              sm:text-lg
              lg:text-xl
              leading-7
              max-w-[600px]
            ">
              We choose proven technologies and modern development
              frameworks to build secure, scalable, maintainable, and
              high-performance software applications.
            </p>

          </div>

        </div>


        {/* TECHNOLOGY GRID */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          border-t
          border-l
          border-[#e4e9ef]
        ">

          {technologies.map((tech) => (

            <div
              key={tech.name}
              className="
                group
                h-[190px]
                sm:h-[220px]
                lg:h-[250px]
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
                w-14
                h-14
                sm:w-16
                sm:h-16
                lg:w-20
                lg:h-20
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

export default Custom_Tech;