import React, { useState } from 'react'
import BoyFashion from '../assets/HomeMarque/BoyFashion.svg'
import Cloud from '../assets/HomeMarque/Cloud.svg'
import LeftArrow from '../assets/HomeMarque/LeftArrow.svg'
import RightArrow from '../assets/HomeMarque/RightArrow.svg'
import Rainbow from '../assets/HomeMarque/Rainbow.svg'
import Sun from '../assets/HomeMarque/Sun.svg'

const HomeCollectionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories = [
    { name: 'BOY FASHION', icon: BoyFashion },
    { name: 'GIRLS FASHION', icon: Sun },
    { name: 'FOOTWEAR', icon: Cloud },
    { name: 'EASY TO ASSEMBLE', icon: Rainbow },
    { name: 'DIAPERING', icon: Sun },
    { name: 'GEAR', icon: Cloud },
    { name: 'FEEDING', icon: Rainbow },
    { name: 'NEW PRODUCTS', icon: Sun },
  ]

  const products = [
    'Special Products',
    'Rompers',
    'Onesies',
    'New Products',
    'Dresses',
    'Others',
  ]

  const productsPerView = 6
  const maxIndex = Math.max(0, products.length - productsPerView)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section className="w-full bg-white" style={{width: '100vw'}}>
      {/* Top Navigation Bar */}
      <div className="border-t-2 border-mayaa-orange bg-mayaa-beige pt-2">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="text-sm md:text-base font-semibold text-gray-800">
                  {category.name}
                </span>
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Product Carousel */}
      <div className="bg-mayaa-beige py-8">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center" style={{borderTop: '1px solid #000', borderBottom: '1px solid #000', padding: '0px 0'}}>
            {/* Left Navigation Arrow */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex-shrink-0 w-12 h-32 md:h-40 bg-mayaa-orange flex items-center justify-center cursor-pointer transition-opacity ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
              }`}
              aria-label="Previous products"
              style={{padding: '0px 0'}}
            >
              <img src={LeftArrow} alt="Previous" className="w-6 h-6" />
            </button>

            {/* Product Cards */}
            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / productsPerView)}%)`,
                }}
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / productsPerView}%` }}
                  >
                    <div
                      className={`bg-mayaa-beige h-full flex flex-col items-center justify-center py-4 ${
                        index < products.length - 1 ? 'border-r border-gray-300' : ''
                      }`}
                    >
                      {/* Product Image Placeholder */}
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-orange-200 mb-4 flex items-center justify-center">
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-orange-300"></div>
                      </div>
                      {/* Product Label */}
                      <p className="text-sm md:text-base font-medium text-gray-800 text-center">
                        {product}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`flex-shrink-0 w-12 h-32 md:h-40 bg-mayaa-orange flex items-center justify-center cursor-pointer transition-opacity ${
                currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
              }`}
              aria-label="Next products"
            >
              <img src={RightArrow} alt="Next" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCollectionCarousel