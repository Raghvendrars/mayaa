import React from 'react';
import Background from '../assets/Background.svg';
import HeroChildrens from '../assets/HeroChildrens.svg';
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-orange-50 to-peach-50 py-16 md:py-24 min-h-[600px] md:min-h-[700px]" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Organic Wavy Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 right-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0,200 Q300,150 600,200 T1200,200 L1200,800 L0,800 Z"
            fill="url(#waveGradient)"
            className="opacity-30"
          />
          <path
            d="M0,300 Q400,250 800,300 T1200,300 L1200,800 L0,800 Z"
            fill="url(#waveGradient2)"
            className="opacity-20"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE5D4" />
              <stop offset="100%" stopColor="#FFD4B3" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD4B3" />
              <stop offset="100%" stopColor="#FFE5D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* Vertical Social Media Labels */}
            <div className="absolute left-0 top-0 flex flex-col gap-20 -ml-8 md:-ml-12">
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-medium transform -rotate-90 origin-center whitespace-nowrap">
                Linkedin
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-medium transform -rotate-90 origin-center whitespace-nowrap">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-medium transform -rotate-90 origin-center whitespace-nowrap">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-medium transform -rotate-90 origin-center whitespace-nowrap">
                Facebook
              </a>
            </div>

            {/* Main Content */}
            <div className="ml-8 md:ml-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Make Your Child&apos;s Wardrobe Brighter With Us.
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <button className="border-2 bg-white text-gray-800 px-8 py-3 font-semibold text-lg hover:bg-mayaa-orange hover:text-white transition-all transform hover:scale-105 mb-12" style={{borderRadius: '50px',color:"#F1B475", borderColor:"#000"}}>
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Right Content - Children Images */}
          <div className="relative">
            {/* Decorative Elements */}
            {/* Sun - Top Right */}
            <div className="absolute top-0 right-0 text-5xl md:text-6xl z-20">☀️</div>
            
            {/* Cloud - Top Center */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl z-20">☁️</div>

            {/* Children Images Container */}
            <div className="relative z-10 flex items-end justify-center gap-6 mt-20">
              {/* Boy with Orange Hoodie */}
              <div className="relative">
                <img src={HeroChildrens} alt="Boy with Orange Hoodie" className="w-full h-full object-cover" />
              </div>

            
            </div>

            {/* Dashed Lines and Rectangular Shapes - Bottom Right */}
            <div className="absolute bottom-0 right-0 flex items-end gap-2 z-10">
              <div className="flex flex-col gap-2">
                <div className="w-8 h-2 border-2 border-dashed border-gray-400"></div>
                <div className="w-6 h-2 border-2 border-dashed border-gray-400"></div>
                <div className="w-4 h-2 border-2 border-dashed border-gray-400"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-3 h-8 bg-gray-300 rounded"></div>
                <div className="w-3 h-6 bg-gray-400 rounded"></div>
                <div className="w-3 h-4 bg-gray-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

