import React, { useState } from 'react'
import BlueDressGirl from '../assets/NewArrivals/BlueDressGirl.svg'

const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState('GIRLS DRESS')

  const categories = [
    'BOYS DRESS',
    'GIRLS DRESS',
    'ACCESSORIES',
    'SEASONAL SPECIALS',
    'BEST SELLERS',
  ]

  return (
    <section className="w-full bg-mayaa-beige py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="border border-blue-400 bg-mayaa-beige overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:h-[700px]">
            {/* Left Column - Image */}
            <div className="w-full lg:w-2/5 h-[500px] lg:h-full relative overflow-hidden flex items-center justify-center bg-mayaa-beige">
              <img
                src={BlueDressGirl}
                alt="Girl in blue dress"
                className="h-full w-auto object-contain object-center"
                style={{ display: 'block' }}
              />
            </div>

            {/* Right Column - Category Menu */}
            <div className="w-full lg:w-3/5 relative bg-mayaa-beige p-8 md:p-12 lg:p-16 flex flex-col justify-center h-[400px] lg:h-full">
              {/* Decorative Orange Rectangle - Overlapping */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 rotate-12 w-24 h-32 md:w-32 md:h-40 lg:w-36 lg:h-44 bg-orange-200 rounded-lg opacity-90 z-0"></div>

              {/* Category List */}
              <div className="relative z-10">
                {categories.map((category, index) => (
                  <div key={category} className="relative">
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left py-4 md:py-5 uppercase font-bold text-sm md:text-base lg:text-lg transition-colors leading-tight ${
                        activeCategory === category
                          ? 'text-mayaa-orange'
                          : 'text-gray-900'
                      } hover:text-mayaa-orange`}
                      style={{ fontFamily: "'Baloo Bhaina 2', sans-serif", fontWeight: 700 }}
                    >
                      {category}
                    </button>
                    {index < categories.length - 1 && (
                      <div className="border-t border-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryMenu

