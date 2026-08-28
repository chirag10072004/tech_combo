import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

const AboutTechStack = () => {
  const techs = [
    {
      name: "React",
      category: "Frontend",
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: <SiNextdotjs />,
      color: "#111111",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: <SiTypescript />,
      color: "#3178C6",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <FaNodeJs />,
      color: "#339933",
    },
    {
      name: "Python",
      category: "Backend",
      icon: <FaPython />,
      color: "#3776AB",
    },
    {
      name: "Java",
      category: "Backend",
      icon: <FaJava />,
      color: "#ED8B00",
    },
    {
      name: "AWS",
      category: "Cloud",
      icon: <FaAws />,
      color: "#FF9900",
    },
    {
      name: "Azure",
      category: "Cloud",
      icon: <TbBrandAzure />,
      color: "#0089D6",
    },
    {
      name: "Docker",
      category: "DevOps",
      icon: <FaDocker />,
      color: "#2496ED",
    },
    {
      name: "Kubernetes",
      category: "DevOps",
      icon: <SiKubernetes />,
      color: "#326CE5",
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: <SiMongodb />,
      color: "#47A248",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: <SiPostgresql />,
      color: "#4169E1",
    },
    {
      name: "MySQL",
      category: "Database",
      icon: <SiMysql />,
      color: "#4479A1",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
    },
    {
      name: "AI / ML",
      category: "Intelligence",
      icon: <FaBrain />,
      color: "#C026D3",
    },
  ];

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#f6f5f2] py-20 sm:py-24 lg:py-28">

      {/* Subtle Decorative Shape */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-black/[0.04]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl sm:mb-14"
        >

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-black" />

            <span className="text-[10px] font-bold uppercase tracking-[3px] text-black/50">
              Technology
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-[#111] sm:text-5xl lg:text-6xl">
            Technology that
            <span className="block text-black/40">
              powers our solutions.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-black/50 sm:text-base">
            We work with modern technologies across frontend, backend,
            cloud, databases and artificial intelligence to build
            reliable digital products.
          </p>

        </motion.div>

        {/* Technology Pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.04 }}
          className="flex flex-wrap gap-3"
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              }}
              className="
                group
                relative
                flex
                items-center
                gap-3
                overflow-hidden
                rounded-2xl
                border
                border-black/[0.08]
                bg-white
                px-5
                py-3.5
                transition-all
                duration-300
                hover:border-black/[0.15]
              "
            >

              {/* Icon */}
              <span
                className="text-lg transition-transform duration-300 group-hover:scale-110"
                style={{
                  color: tech.color,
                }}
              >
                {tech.icon}
              </span>

              {/* Text */}
              <div className="flex items-center gap-2">

                <span className="text-xs font-semibold text-[#111] sm:text-sm">
                  {tech.name}
                </span>

                <span className="hidden text-[9px] uppercase tracking-[1px] text-black/30 sm:block">
                  {tech.category}
                </span>

              </div>

              {/* Tiny Accent */}
              <span
                className="absolute bottom-0 left-5 right-5 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{
                  backgroundColor: tech.color,
                }}
              />

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 border-t border-black/[0.08] pt-7"
        >

          <p className="text-xs text-black/40 sm:text-sm">
            From idea to deployment — the right technology for every
            stage of your product.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutTechStack;