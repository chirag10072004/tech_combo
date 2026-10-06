import React from "react";
import { Check, AlertCircle } from "lucide-react";

const ProductSections = ({ product }) => {
  if (!product) return null;

  const isAssess = product.id === "hireassess";

  const mainImage =
    product.solutionImage ||
    product.caseStudyImage ||
    product.image ||
    product.heroImage ||
    product.imageUrl;

  return (
    <div
      className="
        w-full
        px-6
        sm:px-10
        lg:px-16
        xl:px-20
        2xl:px-24
        font-normal
        text-slate-700
      "
    >
      {/* =====================================================
          OVERVIEW + CUSTOMER
      ====================================================== */}
      <section
        className="
          grid
          grid-cols-1
          gap-10
          md:grid-cols-[1.45fr_0.7fr]
          lg:gap-16
        "
      >
        {/* =================================================
            OVERVIEW
        ================================================== */}
        <div>
          <h2 className="mb-5 text-xl font-medium tracking-tight text-slate-900">
            Overview
          </h2>

          <div
            className="
              flex
              min-h-[240px]
              items-start
              rounded-lg
              bg-white/55
              px-8
              py-8
            "
          >
            <p
              className="
                text-[16px]
                font-normal
                leading-[1.85]
                text-slate-600
                sm:text-[17px]
              "
            >
              {product.overview}
            </p>
          </div>
        </div>

        {/* =================================================
            CUSTOMER
        ================================================== */}
        <div>
          <h2 className="mb-5 text-xl font-medium tracking-tight text-slate-900">
            Customer
          </h2>

          <p className="text-sm font-normal leading-7 text-slate-600 sm:text-[15px]">
            {product.customer}
          </p>

          {product.customerBadges?.length > 0 && (
            <div className="mt-6 space-y-3">
              {product.customerBadges.map((badge, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2.5
                    text-sm
                    font-normal
                    text-slate-600
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CHALLENGE
      ====================================================== */}
      <section className="mt-14 lg:mt-16">
        <h2 className="mb-5 text-xl font-medium tracking-tight text-slate-900">
          Challenge
        </h2>

        <p className="mb-6 text-sm font-normal leading-7 text-slate-600 sm:text-[15px]">
          {product.challengeDescription ||
            product.challenge ||
            "The client required a unified and scalable platform to improve operational efficiency, simplify workflows and provide better visibility across the complete process."}
        </p>

        {product.challenges?.length > 0 && (
          <div className="rounded-lg bg-white/55 px-6 py-6">
            <div className="grid grid-cols-1 gap-x-14 gap-y-4 md:grid-cols-2">
              {product.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span
                    className="
                      mt-1
                      flex
                      h-4
                      w-4
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-500
                    "
                  >
                    <Check className="h-2.5 w-2.5 stroke-[3] text-white" />
                  </span>

                  <span className="text-sm font-normal leading-6 text-slate-600">
                    {challenge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* =====================================================
          LARGE CASE STUDY IMAGE
      ====================================================== */}
      {mainImage && (
        <section className="mt-12 lg:mt-14">
          <div className="overflow-hidden rounded-lg">
            <img
              src={mainImage}
              alt={`${product.name} product`}
              className="
                h-[240px]
                w-full
                object-cover
                object-center
                sm:h-[320px]
                md:h-[380px]
                lg:h-[420px]
              "
            />
          </div>
        </section>
      )}

      {/* =====================================================
          SOLUTION
      ====================================================== */}
      <section className="mt-14 lg:mt-16">
        <h2 className="mb-5 text-xl font-medium tracking-tight text-slate-900">
          Solution
        </h2>

        <p className="mb-6 text-sm font-normal leading-7 text-slate-600 sm:text-[15px]">
          {product.solution}
        </p>

        {product.features?.length > 0 && (
          <div className="rounded-lg bg-white/55 px-6 py-6">
            <div className="space-y-6">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span
                    className="
                      mt-1
                      flex
                      h-4
                      w-4
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-500
                    "
                  >
                    <Check className="h-2.5 w-2.5 stroke-[3] text-white" />
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-800 sm:text-[15px]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-sm font-normal leading-6 text-slate-500">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Workflow */}
        {product.workflow?.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-normal text-slate-500">
            <span className="font-medium text-slate-700">
              Workflow:
            </span>

            {product.workflow.map((step, index) => (
              <React.Fragment key={index}>
                <span
                  className={
                    index === product.workflow.length - 1
                      ? "font-medium text-blue-600"
                      : ""
                  }
                >
                  {step}
                </span>

                {index < product.workflow.length - 1 && (
                  <span className="text-blue-400">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </section>

      {/* =====================================================
          SAMPLE TYPES / SERVICES
      ====================================================== */}
      {product.sampleTypes?.length > 0 && (
        <section className="mt-14 lg:mt-16">
          <h2 className="mb-4 text-xl font-medium tracking-tight text-slate-900">
            {product.sampleTypesTitle ||
              (isAssess
                ? "Assessment Types"
                : "Verification Services")}
          </h2>

          {product.sampleTypesDesc && (
            <p className="mb-6 text-sm font-normal leading-7 text-slate-500 sm:text-[15px]">
              {product.sampleTypesDesc}
            </p>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.sampleTypes.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-lg
                  border
                  border-white/70
                  bg-white/45
                  px-5
                  py-5
                  transition-all
                  duration-300
                  hover:bg-white/70
                "
              >
                <span className="mb-3 block text-xs font-medium text-blue-600">
                  0{index + 1}
                </span>

                <h3 className="text-sm font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-normal leading-6 text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================
          EXPERTISE
      ====================================================== */}
      <section className="mt-14 lg:mt-16">
        <h2 className="mb-5 text-xl font-medium tracking-tight text-slate-900">
          Expertise
        </h2>

        <div
          className="
            grid
            grid-cols-1
            overflow-hidden
            rounded-lg
            bg-[#dbe5f7]
            md:grid-cols-2
          "
        >
          {/* Technologies */}
          <div
            className="
              px-6
              py-6
              md:border-r
              md:border-blue-200/60
            "
          >
            <h3 className="mb-4 text-sm font-medium text-slate-500">
              Tools & Technologies
            </h3>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {product.technologies?.map((technology, index) => (
                <span
                  key={index}
                  className="text-sm font-normal text-slate-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div className="px-6 py-6">
            <h3 className="mb-4 text-sm font-medium text-slate-500">
              Third Party Integrations
            </h3>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {product.integrations?.map((integration, index) => (
                <span
                  key={index}
                  className="text-sm font-normal text-slate-700"
                >
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULT
      ====================================================== */}
      <section className="mt-14 lg:mt-16">
        <h2 className="mb-5 text-xl font-medium tracking-tight text-slate-900">
          Result
        </h2>

        <p className="text-sm font-normal leading-7 text-slate-600 sm:text-[15px]">
          {product.resultDesc}
        </p>

        {/* Metrics */}
        {product.metrics?.length > 0 && (
          <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {product.metrics.map((metric, index) => (
              <div
                key={index}
                className="
                  rounded-lg
                  border
                  border-white/70
                  bg-white/45
                  px-5
                  py-6
                "
              >
                <div className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
                  {metric.value}
                </div>

                <div className="mt-2 text-sm font-normal leading-5 text-slate-500">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footnotes */}
        {product.footnotes?.length > 0 && (
          <div
            className="
              mt-6
              flex
              flex-col
              gap-3
              border-t
              border-slate-300/30
              pt-4
              text-xs
              font-normal
              text-slate-400
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {product.footnotes.map((note, index) => (
                <span key={index}>
                  • {note}
                </span>
              ))}
            </div>

            <div className="hidden items-center gap-1 sm:flex">
              <AlertCircle className="h-3.5 w-3.5" />
              Product metrics as stated on live website
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductSections;