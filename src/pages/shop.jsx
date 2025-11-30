import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

function Shop() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Newborn Essentials");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: 1, name: "Newborn Essentials" },
    { id: 2, name: "Boys Dress" },
    { id: 3, name: "Girls Dress" },
    { id: 4, name: "Seasonal Specials" },
    { id: 5, name: "Sleepwear" },
    { id: 6, name: "Bestsellers" },
    { id: 7, name: "Accessories" },
  ];

  // Sample products with prices
  const products = [
    { id: 1, name: "Soft Cotton Bunny Romper", price: "$80.00", originalPrice: "$50.00", featured: true },
    { id: 2, name: "Bunny Jumpsuit", price: "$80.00", originalPrice: "$50.00" },
    { id: 3, name: "Floral Frock", price: "$80.00", originalPrice: "$50.00" },
    { id: 4, name: "Denim Dungaree", price: "$80.00", originalPrice: "$50.00" },
    { id: 5, name: "Soft Cotton Romper", price: "$80.00", originalPrice: "$50.00" },
    { id: 6, name: "Bunny Jumpsuit", price: "$80.00", originalPrice: "$50.00" },
    { id: 7, name: "Floral Frock", price: "$80.00", originalPrice: "$50.00" },
    { id: 8, name: "Denim Dungaree", price: "$80.00", originalPrice: "$50.00" },
    { id: 9, name: "Soft Cotton Romper", price: "$80.00", originalPrice: "$50.00" },
    { id: 10, name: "Bunny Jumpsuit", price: "$80.00", originalPrice: "$50.00" },
    { id: 11, name: "Floral Frock", price: "$80.00", originalPrice: "$50.00" },
    { id: 12, name: "Denim Dungaree", price: "$80.00", originalPrice: "$50.00" },
  ];

  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Header2 />

      <main className="min-h-screen bg-[#FBF2E6]">
        {/* Circular Categories Section */}
        <div className="bg-[#FBF2E6] py-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Category Circles */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    setCurrentPage(1);
                  }}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  {/* Circle */}
                  <div
                    className={`w-24 h-24 md:w-28 md:h-28 rounded-full transition-all ${
                      selectedCategory === category.name
                        ? "bg-[#EAA25A] shadow-lg ring-2 ring-[#EAA25A] ring-offset-2"
                        : "bg-yellow-100 group-hover:shadow-md"
                    }`}
                  />
                  {/* Label */}
                  <span className="text-xs md:text-sm text-gray-700 text-center font-medium">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-[#FBF2E6] px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6">
              {/* Grid View Toggle and Filters */}
              <div className="flex items-center gap-4">
                {/* Grid View Icons */}
                <div className="flex gap-2">
                  <button className="p-2 rounded border border-gray-300 hover:bg-gray-100">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button className="p-2 rounded border border-gray-300 hover:bg-gray-100">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="3" />
                      <rect x="3" y="10" width="18" height="3" />
                      <rect x="3" y="16" width="18" height="3" />
                    </svg>
                  </button>
                </div>

                {/* Checkbox */}
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span>Show Only Products On Sale</span>
                </label>
              </div>

              {/* Sort and Show */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort By Latest</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Show 20</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Filters Button */}
                <button className="flex items-center gap-2 px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <span className="text-sm">Show Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className={`rounded-xl overflow-hidden transition-all group cursor-pointer ${
                  product.featured
                    ? "border-2 border-[#EAA25A] bg-yellow-50"
                    : "border-2 border-dashed border-gray-400 bg-white"
                }`}
              >
                {/* Product Image Area */}
                <div className="w-full aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative">
                  {/* Featured Badge */}
                  {product.featured && (
                    <div className="absolute top-3 right-3 bg-[#EAA25A] text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                      ON
                    </div>
                  )}

                  {/* Like Buttons (right side) */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                      <span className="text-lg">♡</span>
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                      <span className="text-lg">⊕</span>
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                      <span className="text-lg">👁</span>
                    </button>
                  </div>

                  {/* Placeholder */}
                  <div className="text-center">
                    <div className="text-5xl opacity-20">👶</div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 text-center">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 mt-12 pb-8">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              ‹
            </button>

            {/* Page Dots */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPage === page
                    ? "bg-[#EAA25A] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${page}`}
              />
            ))}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              ›
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Shop;
