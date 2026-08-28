import React from "react";
import { motion } from "framer-motion";

const Cloud_hero = () => {
  return (
    <section className="min-h-screen bg-[#fdfaf5] overflow-hidden flex items-center">

      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-20 py-8 sm:py-14 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* ================= IMAGE SPACE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              w-screen
              -ml-5
              min-h-[320px]
              sm:min-h-[400px]
              md:min-h-[480px]
              lg:min-h-[550px]
              flex
              items-center
              justify-center
              order-1
              lg:order-2
              lg:w-full
              lg:ml-0
            "
          >
            <motion.img
              src="/assets/services/Cloud.png"
              alt="Cloud Solutions"
              className="
                block
                w-[360px]
                sm:w-[430px]
                md:w-[500px]
                lg:w-[600px]
                h-auto
                object-contain
              "
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>


          {/* ================= CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              w-full
              order-2
              lg:order-1
            "
          >

            {/* SMALL HEADING */}

            <p className="
              text-[#168bd2]
              text-[10px]
              sm:text-xs
              font-bold
              tracking-[0.16em]
              uppercase
              mb-4
            ">
              OUR SERVICE
            </p>


            {/* MAIN HEADING */}

            <h1 className="
              text-[#082b55]
              font-extrabold
              tracking-[-0.035em]
              leading-[1.05]
              text-[38px]
              sm:text-[46px]
              md:text-[52px]
              lg:text-[56px]
              xl:text-[64px]
            ">

              Cloud Solutions
              <br />

              & DevOps That{" "}
              <span className="text-[#ff512f]">
                Scale
              </span>

              <br />

              Your Business

            </h1>


            {/* DESCRIPTION */}

            <p className="
              mt-5
              sm:mt-6
              text-[#55708e]
              text-[15px]
              sm:text-base
              lg:text-lg
              leading-6
              sm:leading-7
              max-w-[620px]
            ">
              Migrate, scale, and optimize your systems on robust,
              cost-effective cloud networks with enterprise-grade security
              and automated infrastructure deployment.
            </p>


            {/* BUTTONS */}

            <div className="
              mt-7
              flex
              flex-col
              sm:flex-row
              gap-3
            ">

              <button className="
                w-full
                sm:w-auto
                bg-[#ff512f]
                text-white
                font-semibold
                px-7
                py-3.5
                rounded-lg
                shadow-[0_10px_25px_rgba(255,81,47,0.20)]
                hover:bg-[#f44828]
                hover:-translate-y-0.5
                transition-all
                duration-300
              ">
                Request Services
              </button>


              <button className="
                w-full
                sm:w-auto
                border
                border-[#082b55]
                text-[#082b55]
                font-semibold
                px-7
                py-3.5
                rounded-lg
                hover:bg-[#082b55]
                hover:text-white
                transition-all
                duration-300
              ">
                Talk to our experts
              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Cloud_hero;