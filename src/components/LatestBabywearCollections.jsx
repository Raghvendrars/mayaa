import React, { useState } from 'react'
import BabyBoyRomper from '../assets/HomeLatestCollection/BabyBoyRamper.svg'
import BabyGirlFrock from '../assets/HomeLatestCollection/BabyGirlFrock.svg'
import CottonOnesieSet from '../assets/HomeLatestCollection/CottonOnesiaSet.svg'
import KnittedWinterJacket from '../assets/HomeLatestCollection/KnittedWinterJacket.svg'
import FestiveKurtaSet from '../assets/HomeLatestCollection/FestiveKurtaSet.svg'
import Monkey from '../assets/HomeLatestCollection/Monkey.svg'
import MonkeyBGDot from '../assets/HomeLatestCollection/MonkeyBGDot.svg'
import Cat from '../assets/HomeLatestCollection/Cat.svg'
import CatBgPlant from '../assets/HomeLatestCollection/CatBgPlant.svg'
import Rainbow from '../assets/HomeLatestCollection/Rainbow.svg'

const LatestBabywearCollections = () => {
  const [activeFilter, setActiveFilter] = useState('SHOW ALL')

  const filters = ['SHOW ALL', 'NEWBORN (0-6M)', 'INFANT (6-12M)', 'TODDLER (1-2Y)', 'ACCESSORIES']

  const products = [
    {
      id: 1,
      name: 'Baby Boy Romper',
      originalPrice: '$80.00',
      discountedPrice: '$50.00',
      image: BabyBoyRomper,
    },
    {
      id: 2,
      name: 'Cotton Onesie Set',
      originalPrice: '$75.00',
      discountedPrice: '$45.00',
      image: CottonOnesieSet,
    },
    {
      id: 3,
      name: 'Knitted Winter Jacket',
      originalPrice: '$90.00',
      discountedPrice: '$60.00',
      image: KnittedWinterJacket,
    },
    {
      id: 4,
      name: 'Baby Girl Frock',
      originalPrice: '$85.00',
      discountedPrice: '$55.00',
      image: BabyGirlFrock,
    },
    {
      id: 5,
      name: 'Festive Kurta Set',
      originalPrice: '$95.00',
      discountedPrice: '$65.00',
      image: FestiveKurtaSet,
    },
    {
      id: 6,
      name: 'Cotton Onesie Set',
      originalPrice: '$75.00',
      discountedPrice: '$45.00',
      image: CottonOnesieSet,
    },
    {
      id: 7,
      name: 'Knitted Winter Jacket',
      originalPrice: '$90.00',
      discountedPrice: '$60.00',
      image: KnittedWinterJacket,
    },
    {
      id: 8,
      name: 'Baby Girl Frock',
      originalPrice: '$85.00',
      discountedPrice: '$55.00',
      image: BabyGirlFrock,
    },
  ]

  return (
    <section className="w-full bg-mayaa-beige py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section with Decorative Elements */}
        <div className="relative mb-12">
          {/* Left Decoration - Monkey */}
          <div className="absolute left-0 top-0 hidden lg:block">
            <div className="relative">
              <img src={MonkeyBGDot} alt="Monkey background dots" className="absolute inset-0" />
              <img src={Monkey} alt="Monkey decoration" className="relative z-10" />
            </div>
          </div>

          {/* Center Title with Rainbow */}
          <div className="text-center relative">
            <div className="flex justify-center mb-4">
              <img src={Rainbow} alt="Rainbow decoration" className="w-16 h-8 md:w-20 md:h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Latest Babywear Collections
            </h2>
          </div>

          {/* Right Decoration - Cat/Leopard */}
          <div className="absolute right-0 top-0 hidden lg:block">
            <div className="relative">
              <img src={CatBgPlant} alt="Cat background plants" className="absolute inset-0" />
              <img src={Cat} alt="Cat decoration" className="relative z-10" />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                filter === 'SHOW ALL'
                  ? 'bg-mayaa-orange text-white'
                  : 'bg-white text-gray-800 border-2 border-gray-800 hover:bg-gray-50'
              } ${
                activeFilter === filter && filter !== 'SHOW ALL'
                  ? 'bg-gray-100 border-gray-900'
                  : ''
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-mayaa-beige border-2 border-dashed border-gray-400 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg object-cover"
                />
                {/* Action Icons (top-right corner) */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer">
                    <span className="text-xs">👁</span>
                  </div>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer">
                    <span className="text-xs">♡</span>
                  </div>
                </div>
              </div>

              {/* Product Name */}
              <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-2 text-center">
                {product.name}
              </h3>

              {/* Price Information */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm md:text-base text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="text-base md:text-lg font-bold text-gray-800">
                  {product.discountedPrice}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center">
          <button className="bg-mayaa-orange text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base uppercase hover:bg-opacity-90 transition-all transform hover:scale-105">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  )
}

export default LatestBabywearCollections

