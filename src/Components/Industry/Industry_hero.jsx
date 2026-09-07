import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Industry_hero = () => {
  const features = [
    'Future-Ready Products Built for Scale',
    '20+ Business Domains Transformed',
    'Proven Solutions for Challenges',
    'Trusted by Global Industry Leaders',
  ]

  const particles = Array.from({ length: 18 })

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-[105px]">

      {/* ================= ANIMATED BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Moving Blue Gradient */}
        <motion.div
          animate={{
            x: ['-10%', '15%', '-10%'],
            y: ['0%', '10%', '0%'],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -top-[250px]
            -left-[200px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-300/20
            blur-[100px]
          "
        />

        {/* Moving Orange Gradient */}
        <motion.div
          animate={{
            x: ['10%', '-15%', '10%'],
            y: ['0%', '12%', '0%'],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -top-[180px]
            right-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-200/25
            blur-[100px]
          "
        />

        {/* ================= MOVING GRID ================= */}

        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '70px 70px'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            inset-0
            opacity-[0.35]
            [background-image:linear-gradient(to_right,#D7E0EA_1px,transparent_1px),linear-gradient(to_bottom,#D7E0EA_1px,transparent_1px)]
            [background-size:70px_70px]
            [mask-image:linear-gradient(to_bottom,black,transparent_85%)]
          "
        />

        {/* ================= ROTATING RINGS ================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            -right-[250px]
            -top-[330px]
            h-[700px]
            w-[700px]
            rounded-full
            border
            border-blue-200/60
          "
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            -right-[200px]
            -top-[280px]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-blue-200/40
          "
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            -right-[150px]
            -top-[230px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-orange-200/40
          "
        />

        {/* ================= FLOATING PARTICLES ================= */}

        {particles.map((_, index) => (
          <motion.span
            key={index}
            className="
              absolute
              h-1.5
              w-1.5
              rounded-full
              bg-blue-400/50
            "
            style={{
              left: `${5 + (index * 17) % 90}%`,
              top: `${10 + (index * 23) % 75}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.7, 1.2, 0.7],
            }}
            transition={{
              duration: 3 + (index % 4),
              delay: index * 0.25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* ================= FLOWING LIGHT ================= */}

        <motion.div
          animate={{
            x: ['-30%', '130%'],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            top-[65%]
            h-[1px]
            w-[350px]
            bg-gradient-to-r
            from-transparent
            via-blue-400/50
            to-transparent
            rotate-[-12deg]
          "
        />

        <motion.div
          animate={{
            x: ['130%', '-30%'],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            top-[40%]
            h-[1px]
            w-[300px]
            bg-gradient-to-r
            from-transparent
            via-orange-400/40
            to-transparent
            rotate-[15deg]
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-24
            bg-gradient-to-t
            from-[#F8FAFC]
            to-transparent
          "
        />

      </div>


      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1200px]
          px-6
          py-14
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-14
        "
      >

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-[2px] w-9 bg-[#1683E8]" />

          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#1683E8]
            "
          >
            Industries We Serve
          </span>
        </motion.div>


        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            max-w-[850px]
            text-[34px]
            font-bold
            leading-[1.12]
            tracking-[-1.2px]
            text-[#07152B]
            sm:text-[43px]
            lg:text-[46px]
          "
        >
          Engineering{' '}
          <span className="text-[#FF8A00]">
            Innovation
          </span>{' '}
          across Industries
        </motion.h1>


        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 88 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-5 h-[3px] bg-[#1683E8]"
        />


        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-7
            max-w-[900px]
            text-[15px]
            leading-[1.75]
            text-[#334155]
            sm:text-[17px]
            lg:text-[18px]
          "
        >
          Building scalable, future-ready products for diverse industries,
          each with its own challenges and goals.
        </motion.p>


        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="
            mt-7
            grid
            max-w-[900px]
            grid-cols-1
            gap-y-3
            sm:grid-cols-2
            sm:gap-x-10
          "
        >
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2.5"
            >
              <FiCheckCircle
                className="
                  flex-shrink-0
                  text-[17px]
                  text-[#1683E8]
                "
              />

              <span
                className="
                  text-[13px]
                  font-medium
                  text-[#07152B]
                  sm:text-[14px]
                "
              >
                {feature}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  )
}

export default Industry_hero