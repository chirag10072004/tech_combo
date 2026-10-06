import React, { useEffect } from 'react'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import ProductCaseStudy from '../Components/Product/ProductCaseStudy'

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#f1f6fc] text-slate-800 overflow-x-hidden font-sans">
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
