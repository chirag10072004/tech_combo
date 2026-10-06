import React from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

const ProductHero = ({ product, onPrev, onNext }) => {
  if (!product) return null;

  const isAssess = product.id === "hireassess";

  const productImage =
    product.image ||
    product.heroImage ||
    product.imageUrl ||
    (isAssess
      ? "/assets/Industry/HIREA.png"
      : "/assets/Industry/HIREV.png");

  return (
    <section className="w-full overflow-hidden rounded-[18px] border border-white/80 bg-white/50 shadow-lg">
      <div className="grid h-[560px] lg:h-[470px] lg:grid-cols-2">

        {/* LEFT */}
        <div className="relative flex h-full flex-col overflow-hidden bg-gradient-to-br from-[#f7f1eb] via-[#edf0f3] to-[#dce9f5] px-7 py-8 sm:px-9 lg:px-11">

          {/* Soft background glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#d9bfae]/25 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

          {/* Content */}
          <div className="relative z-10">

            {/* Category */}
            <p className="mb-4 text-sm font-medium text-blue-600">
              {product.category ||
                (isAssess
                  ? "Assessment Platform"
                  : "Background Verification")}
            </p>

            {/* Heading */}
            <h1 className="max-w-[780px] text-[36px] font-medium leading-[1.05] tracking-tight text-[#101010] sm:text-[42px] lg:text-[44px] xl:text-[48px]">
              {product.headline}

              {product.headlineHighlight && (
                <>
                  {" "}
                  <span className="text-[#3047ed]">
                    {product.headlineHighlight}
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-[#353c44]">
              {product.description}
            </p>

            {/* Tags */}
            {product.tags?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2.5">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 rounded-[9px] border border-white bg-white/75 px-3.5 py-2.5 text-[13px] text-[#252a30] shadow-sm"
                  >
                    {index === 0 ? (
                      <FileText className="h-3.5 w-3.5 text-blue-600" />
                    ) : index === 1 ? (
                      <SlidersHorizontal className="h-3.5 w-3.5 text-blue-600" />
                    ) : (
                      <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    )}
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Case Study */}
            <div className="mt-7">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[17px] font-medium text-[#3047ed]"
              >
                <span className="relative">
                  View Case Study
                  <span className="absolute -bottom-2 left-0 h-[2px] w-12 bg-[#3047ed] transition-all group-hover:w-full" />
                </span>

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#e6edf4] px-6 py-8 sm:px-9 lg:px-10">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/40 blur-3xl" />

          <img
            src={productImage}
            alt={product.name || "Product"}
            className="relative z-10 max-h-[78%] max-w-[92%] object-contain drop-shadow-[0_20px_35px_rgba(20,40,70,0.12)] transition-transform duration-500 hover:scale-[1.02]"
            onError={(e) => {
              console.error("Product image failed to load:", productImage);
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;