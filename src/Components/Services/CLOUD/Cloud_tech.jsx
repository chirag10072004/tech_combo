import React, { useState } from "react";

const techData = {
  Cloud: [
    {
      name: "AWS",
      logo: "https://cdn.simpleicons.org/amazonaws/232F3E",
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
    },
    {
      name: "Microsoft Azure",
      logo: "https://cdn.simpleicons.org/microsoftazure/0078D4",
    },
  ],

  DevOps: [
    {
      name: "Docker",
      logo: "https://cdn.simpleicons.org/docker/2496ED",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
    },
    {
      name: "Jenkins",
      logo: "https://cdn.simpleicons.org/jenkins/D24939",
    },
    {
      name: "Nginx",
      logo: "https://cdn.simpleicons.org/nginx/009639",
    },
  ],

  Infrastructure: [
    {
      name: "Terraform",
      logo: "https://cdn.simpleicons.org/terraform/7B42BC",
    },
    {
      name: "Docker",
      logo: "https://cdn.simpleicons.org/docker/2496ED",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
    },
    {
      name: "Nginx",
      logo: "https://cdn.simpleicons.org/nginx/009639",
    },
  ],
};


const tabs = [
  {
    number: "01",
    name: "Cloud",
  },
  {
    number: "02",
    name: "DevOps",
  },
  {
    number: "03",
    name: "Infrastructure",
  },
];


const Cloud_Tech = () => {

  const [activeTab, setActiveTab] = useState("Cloud");

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
                Cloud
              </span>{" "}
              Technologies

              <br />

              We Work With

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
              We leverage industry-leading cloud platforms and DevOps
              technologies to build secure, automated, scalable, and
              highly reliable infrastructure.
            </p>

          </div>

        </div>


        {/* ================= TABS ================= */}

        <div className="
          grid
          grid-cols-3
          max-w-[700px]
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


export default Cloud_Tech;