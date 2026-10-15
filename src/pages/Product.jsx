import React, { useEffect } from 'react'
import SEO from '../Components/SEO'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import ProductCaseStudy from '../Components/Product/ProductCaseStudy'

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#f1f6fc] text-slate-800 overflow-x-hidden font-sans">
      <SEO
        title="Products & Case Studies | TechCombo"
        description="Explore TechCombo's innovative digital products, client case studies, and scalable technology solutions built for real-world impact."
        keywords="TechCombo products, tech case studies, SaaS solutions, digital products"
        canonical="/product"
      />
      {/* Navigation */}
      <Navbar />

      {/* Main Product Case Study Section */}
      <main className="w-full">
        <ProductCaseStudy />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Product
