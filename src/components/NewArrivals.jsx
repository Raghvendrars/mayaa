import React from 'react'
import PrincessTulleDress from '../assets/NewArrivals/PrincessTulleDress.svg'
import FestiveKurtaSet from '../assets/NewArrivals/FestiveKurtaSet.svg'
import KnittedWinterJacket from '../assets/NewArrivals/KnittedWinterJacket.svg'
import BabyGirlFrock from '../assets/NewArrivals/BabyGirlFrock.svg'
import BlueCloud from '../assets/NewArrivals/BlueCloud.svg'
import Tortois from '../assets/NewArrivals/Tortois.svg'

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: 'Princess Tulle Dress',
      originalPrice: '$80.00',
      discountedPrice: '$50.00',
      image: PrincessTulleDress,
      bgColor: 'bg-orange-100', // Light orange/peach for first card
    },
    {
      id: 2,
      name: 'Festive Kurta Set',
      originalPrice: '$80.00',
      discountedPrice: '$50.00',
      image: FestiveKurtaSet,
      bgColor: 'bg-mayaa-beige',
    },
    {
      id: 3,
      name: 'Knitted Winter Jacket',
      originalPrice: '$80.00',
      discountedPrice: '$50.00',
      image: KnittedWinterJacket,
      bgColor: 'bg-mayaa-beige',
    },
    {
      id: 4,
      name: 'Baby Girl Frock',
      originalPrice: '$80.00',
      discountedPrice: '$50.00',
      image: BabyGirlFrock,
      bgColor: 'bg-mayaa-beige',
    },
  ]

  return (
    <section className="w-full bg-mayaa-beige py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section with Decorative Elements */}
        <div className="relative mb-8">
          {/* Left Decoration - Blue Cloud */}
          <div className="absolute left-0 top-0 hidden lg:block">
            <img src={BlueCloud} alt="Blue cloud decoration" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          {/* Center Title and Description */}
          <div className="text-center relative max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mayaa-blue uppercase mb-4">
              NEW ARRIVALS
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Etiam Placerat Nisl Vel Porta Fermentum. Vestibulum Ut Sodales Quam. Ut In Vestibulum
              Augue.
            </p>
          </div>

          {/* Right Decoration - Plant and Turtle */}
          <div className="absolute right-0 top-0 hidden lg:flex items-center gap-2">
            {/* Simple Plant SVG */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              {/* Three leaves */}
              <path
                d="M20 10 C15 15, 10 20, 20 25 C30 20, 25 15, 20 10 Z"
                fill="#4CAF50"
                stroke="#2E7D32"
                strokeWidth="1"
              />
              <path
                d="M15 20 C10 18, 8 22, 12 25 C14 23, 12 20, 15 20 Z"
                fill="#66BB6A"
                stroke="#2E7D32"
                strokeWidth="1"
              />
              <path
                d="M25 20 C30 18, 32 22, 28 25 C26 23, 28 20, 25 20 Z"
                fill="#66BB6A"
                stroke="#2E7D32"
                strokeWidth="1"
              />
              {/* Two black dots */}
              <circle cx="18" cy="22" r="2" fill="#000" />
              <circle cx="22" cy="22" r="2" fill="#000" />
            </svg>
            <img src={Tortois} alt="Turtle decoration" className="w-24 h-24 md:w-32 md:h-32" />
          </div>
        </div>

        {/* Horizontal Separator Line */}
        <div className="border-t border-gray-300 mb-12"></div>

        {/* Product Grid */}
        <div className="flex flex-col sm:flex-row gap-0">
          {products.map((product, index) => (
            <div key={product.id} className="flex-1 relative">
              {index > 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 z-10"></div>
              )}
              <div
                className={`${product.bgColor} border-2 border-dashed border-gray-400 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer h-full mx-2`}
              >
                {/* Product Image */}
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  {/* Action Icons (top-right corner) */}
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1="12" y1="2" x2="12" y2="15" />
                      </svg>
                    </div>
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals

