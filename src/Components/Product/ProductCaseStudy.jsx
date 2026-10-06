import React, { useState } from "react";
import { BarChart3, ShieldCheck } from "lucide-react";
import { productsData } from "./productData";
import ProductHero from "./ProductHero";
import ProductSections from "./ProductSections";

const ProductCaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProduct = productsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? productsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === productsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#eaf1f7] font-sans text-slate-900">

      {/* =====================================================
          SOFT BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        {/* Warm top-left glow */}
        <div
          className="
            absolute
            -left-32
            -top-32
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#d8bda9]/35
            blur-3xl
          "
        />

        {/* Pink center glow */}
        <div
          className="
            absolute
            left-[25%]
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#dfc5d2]/25
            blur-3xl
          "
        />

        {/* Blue right glow */}
        <div
          className="
            absolute
            -right-32
            -top-20
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#9fb8d4]/35
            blur-3xl
          "
        />

        {/* Bottom blue glow */}
        <div
          className="
            absolute
            bottom-[-180px]
            left-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-200/25
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 px-4 pb-20 pt-24 sm:px-6 sm:pt-28 lg:px-8">

        <div className="mx-auto max-w-[1500px]">

          {/* =================================================
              SMALL PRODUCT SWITCHER
          ================================================== */}
          <div className="mb-5 flex items-center justify-between">

            <div
              className="
                inline-flex
                items-center
                gap-1
                rounded-xl
                border
                border-white/80
                bg-white/55
                p-1
                shadow-sm
                backdrop-blur-md
              "
            >
              {productsData.map((product, index) => {
                const active = currentIndex === index;

                return (
                  <button
                    key={product.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      px-3
                      py-2
                      text-xs
                      font-medium
                      transition-all
                      duration-300
                      sm:px-4
                      sm:text-sm
                      ${active
                        ? "bg-white text-[#2949e8] shadow-sm"
                        : "text-slate-500 hover:bg-white/60 hover:text-slate-800"
                      }
                    `}
                  >
                    {product.id === "hireassess" ? (
                      <BarChart3 className="h-3.5 w-3.5" />
                    ) : (
                      <ShieldCheck className="h-3.5 w-3.5" />
                    )}

                    {product.name}
                  </button>
                );
              })}
            </div>

            {/* Product counter */}
            <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex">
              <span className="font-medium text-slate-700">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>

              <span className="text-slate-300">/</span>

              <span>
                {String(productsData.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* =================================================
              HERO
          ================================================== */}
          <ProductHero
            product={currentProduct}
            onPrev={handlePrev}
            onNext={handleNext}
          />

          {/* =================================================
              CASE STUDY SECTIONS
          ================================================== */}
          <div className="mt-6">
            <ProductSections product={currentProduct} />
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProductCaseStudy;