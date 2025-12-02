import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

function Shop() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Newborn Essentials");
  const [currentPage, setCurrentPage] = useState(1);
  const [showOnlySale, setShowOnlySale] = useState(false);

  const categories = [
    { id: 1, name: "Newborn Essentials", icon: "👶" },
    { id: 2, name: "Boys Dress", icon: "👦" },
    { id: 3, name: "Girls Dress", icon: "👧" },
    { id: 4, name: "Seasonal Specials", icon: "🍂" },
    { id: 5, name: "Sleepwear", icon: "🌙" },
    { id: 6, name: "Bestsellers", icon: "⭐" },
    { id: 7, name: "Accessories", icon: "🎀" },
  ];

  // Sample products with prices
  const products = [
    { id: 1, name: "Soft Cotton Bunny Romper", price: "$80.00", originalPrice: "$50.00", featured: true, sale: true },
    { id: 2, name: "Bunny Jumpsuit", price: "$80.00", originalPrice: "$50.00", sale: true },
    { id: 3, name: "Floral Frock", price: "$65.00", originalPrice: "$50.00", sale: false },
    { id: 4, name: "Denim Dungaree", price: "$75.00", originalPrice: "$50.00", sale: true },
    { id: 5, name: "Soft Cotton Romper", price: "$45.00", originalPrice: "$50.00", sale: false },
    { id: 6, name: "Bunny Jumpsuit", price: "$80.00", originalPrice: "$50.00", sale: true },
    { id: 7, name: "Floral Frock", price: "$70.00", originalPrice: "$50.00", sale: false },
    { id: 8, name: "Denim Dungaree", price: "$80.00", originalPrice: "$50.00", sale: true },
    { id: 9, name: "Soft Cotton Romper", price: "$55.00", originalPrice: "$50.00", sale: false },
    { id: 10, name: "Bunny Jumpsuit", price: "$80.00", originalPrice: "$50.00", sale: true },
    { id: 11, name: "Floral Frock", price: "$60.00", originalPrice: "$50.00", sale: false },
    { id: 12, name: "Denim Dungaree", price: "$80.00", originalPrice: "$50.00", sale: true },
  ];

  const filteredProducts = showOnlySale
    ? products.filter(product => product.sale)
    : products;

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Header2 />

      <main className="min-h-screen bg-[#FFE5D4]">
        {/* Hero Section */}
        <div className="bg-[#FFE5D4] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Our Collection
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Discover premium baby clothing crafted with love and care for your little ones
            </p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="py-10 bg-[#FFE5D4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Shop by Category
            </h2>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    setCurrentPage(1);
                  }}
                  className="flex flex-col items-center gap-3 group cursor-pointer transition-all duration-300"
                >
                  <div
                    className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl transition-all duration-300 flex items-center justify-center
                      ${selectedCategory === category.name
                        ? "bg-gradient-to-br from-[#EAA25A] to-[#FFB07B] shadow-lg shadow-[#EAA25A]/30 transform -translate-y-2"
                        : "bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-105"
                      }`}
                  >
                    <span className="text-2xl md:text-3xl">{category.icon}</span>
                    {selectedCategory === category.name && (
                      <div className="absolute -bottom-2 w-6 h-1 bg-[#EAA25A] rounded-full"></div>
                    )}
                  </div>
                  <span className={`text-sm font-medium transition-colors
                    ${selectedCategory === category.name
                      ? "text-[#EAA25A] font-semibold"
                      : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="sticky top-0 z-10 bg-[#FFE5D4]/95 backdrop-blur-sm border-b border-[#F5D4BC] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-5">
              {/* Left Section */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex gap-1 bg-white/80 p-1 rounded-xl">
                  <button className="p-2.5 rounded-lg bg-white shadow-sm hover:shadow transition-shadow">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </button>
                  <button className="p-2.5 rounded-lg hover:bg-white/50 transition-colors">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="3" rx="1" />
                      <rect x="3" y="10" width="18" height="3" rx="1" />
                      <rect x="3" y="16" width="18" height="3" rx="1" />
                    </svg>
                  </button>
                </div>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={showOnlySale}
                      onChange={(e) => setShowOnlySale(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-checked:bg-[#EAA25A] rounded-full transition-colors peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-md"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Show Only Products On Sale
                  </span>
                </label>
              </div>

              {/* Right Section */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EAA25A]/30 focus:border-[#EAA25A] transition-all cursor-pointer">
                      <option>Sort By Latest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Most Popular</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EAA25A]/30 focus:border-[#EAA25A] transition-all cursor-pointer">
                      <option>Show 20</option>
                      <option>Show 40</option>
                      <option>Show 60</option>
                      <option>Show All</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:border-gray-400 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EAA25A]/30 transition-all group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Show Filters
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#FFE5D4]">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-1 ${
                  product.featured
                    ? "bg-gradient-to-b from-white/80 to-white border border-[#EAA25A]/30 shadow-lg"
                    : "bg-white border border-gray-100 shadow-md hover:shadow-xl"
                }`}
              >
                {/* Sale Badge */}
                {product.sale && (
                  <div className="absolute top-3 left-3 z-20">
                    <div className="bg-gradient-to-r from-[#EAA25A] to-[#FFB07B] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      SALE
                    </div>
                  </div>
                )}

                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-3 right-3 z-20">
                    <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <span className="text-[10px]">🔥</span> HOT
                    </div>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-[#FFE5D4]/80 to-[#F5D4BC] flex items-center justify-center overflow-hidden">
                  {/* Quick Actions Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />

                  {/* Quick Action Buttons */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all hover:bg-gray-50">
                      <span className="text-lg text-gray-700 hover:text-red-500 transition-colors">❤️</span>
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all hover:bg-gray-50">
                      <span className="text-lg text-gray-700">🔄</span>
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all hover:bg-gray-50">
                      <span className="text-lg text-gray-700">👁️</span>
                    </button>
                  </div>

                  {/* Product Placeholder */}
                  <div className="relative z-10">
                    <div className="text-6xl opacity-20 mb-2">👶</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                  </div>

                  {/* Quick Add to Cart */}
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 bg-white/95 backdrop-blur-sm text-gray-900 font-medium py-2.5 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white">
                    Add to Cart
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#EAA25A] transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        {product.price}
                      </span>
                      {product.sale && (
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {product.sale && (
                      <span className="text-xs font-bold text-[#EAA25A] bg-[#EAA25A]/10 px-2 py-1 rounded">
                        SAVE 20%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg transition-all ${
                    currentPage === page
                      ? "bg-gradient-to-r from-[#EAA25A] to-[#FFB07B] text-white shadow-lg"
                      : "text-gray-700 hover:bg-white"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Results Count */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Showing {Math.min(startIndex + 1, filteredProducts.length)}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Shop;