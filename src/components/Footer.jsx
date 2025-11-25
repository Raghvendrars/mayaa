function Footer() {
  return (
    <footer className="relative bg-mayaa-blue text-white overflow-hidden">
      {/* Moon and Stars Illustration */}
      <div className="absolute top-8 right-8 text-6xl opacity-20">🌙</div>
      <div className="absolute top-16 right-16 text-3xl opacity-20">⭐</div>
      <div className="absolute top-12 right-32 text-2xl opacity-20">✨</div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mayaa</h3>
            <p className="text-gray-300">
              Nurturing creativity and imagination in every child.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Collections</a></li>
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Bestsellers</a></li>
              <li><a href="#" className="hover:text-white">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:scale-110 transition-transform">📘</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">📷</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">🐦</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">📌</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Mayaa. All rights reserved.</p>
        </div>
      </div>

      {/* Wave Pattern */}
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"
            fill="white"
            opacity="0.3"
          />
          <path
            d="M0,80 C300,120 600,40 900,80 C1050,100 1150,60 1200,80 L1200,120 L0,120 Z"
            fill="white"
            opacity="0.5"
          />
          <path
            d="M0,100 C300,140 600,60 900,100 C1050,120 1150,80 1200,100 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </footer>
  )
}

export default Footer




