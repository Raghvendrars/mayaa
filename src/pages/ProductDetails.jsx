import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

function ProductDetails() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("XS");
  const [selectedColor, setSelectedColor] = useState("Brown");
  const [activeImage, setActiveImage] = useState(0);

  // Sample product data
  const product = {
    id: 1,
    name: "Trendy Teen Set",
    price: 45.99,
    originalPrice: 65.99,
    rating: 4.5,
    reviews: 128,
    description:
      "Experience ultimate comfort with our Trendy Teen Set. Perfect for everyday wear, this versatile outfit features premium quality fabric that's gentle on skin. The perfect combination of style and comfort for active teens.",
    images: [
      "https://via.placeholder.com/400?text=Product+1",
      "https://via.placeholder.com/400?text=Product+2",
      "https://via.placeholder.com/400?text=Product+3",
      "https://via.placeholder.com/400?text=Product+4",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Brown", value: "#8B4513" },
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Navy", value: "#000080" },
    ],
    details: [
      "Premium organic cotton fabric",
      "Comfortable fit for all-day wear",
      "Machine washable and durable",
      "Available in multiple sizes and colors",
      "Eco-friendly production process",
    ],
  };

  const relatedProducts = [
    { id: 1, name: "Soft Cotton Set", price: "$34.99", image: "👕", sale: true },
    { id: 2, name: "Denim Collection", price: "$44.99", image: "👖", sale: false },
    { id: 3, name: "Casual Wear", price: "$39.99", image: "👗", sale: true },
    { id: 4, name: "Party Outfit", price: "$49.99", image: "👔", sale: false },
  ];

  return (
    <>
      <Header2 />

      <main className="min-h-screen bg-gradient-to-b from-[#FFF9F2] to-[#FBF2E6]">
        {/* Product Section */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8">
              <nav className="flex items-center text-sm text-gray-600">
                <button onClick={() => navigate(-1)} className="hover:text-[#EAA25A] transition-colors">
                  ← Back to Shop
                </button>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium">{product.name}</span>
              </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Product Images */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl md:text-8xl opacity-20">👕</div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-[#EAA25A] to-[#FFB07B] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      SALE 30%
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all">
                      <span className="text-xl">❤️</span>
                    </button>
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                        activeImage === idx
                          ? "ring-2 ring-[#EAA25A] ring-offset-2"
                          : "hover:ring-2 hover:ring-[#EAA25A]/50"
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                        <span className="text-2xl opacity-30">📸</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xl ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}>
                          ★
                        </span>
                      ))}
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600 text-sm">
                      {product.reviews} reviews
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-semibold">
                      <span className="text-red-500">▼</span>
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      🚚 Free shipping
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="py-4 border-y border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Color Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-900">
                    Color: <span className="font-normal text-gray-700">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className="group flex flex-col items-center gap-2"
                      >
                        <div
                          className={`w-10 h-10 rounded-full border-2 transition-all ${
                            selectedColor === color.name
                              ? "border-[#EAA25A] ring-2 ring-[#EAA25A]/30"
                              : "border-gray-300 group-hover:border-[#EAA25A]/50"
                          }`}
                          style={{ backgroundColor: color.value }}
                        />
                        <span className="text-xs text-gray-600">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-900">
                    Size: <span className="font-normal text-gray-700">{selectedSize}</span>
                    <button className="ml-2 text-sm text-[#EAA25A] hover:underline">
                      Size guide
                    </button>
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-3 rounded-lg font-medium transition-all ${
                          selectedSize === size
                            ? "bg-gradient-to-r from-[#EAA25A] to-[#FFB07B] text-white shadow-lg"
                            : "bg-white border border-gray-300 text-gray-700 hover:border-[#EAA25A] hover:shadow-md"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Actions */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-900">
                        Quantity
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-fit">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          −
                        </button>
                        <span className="px-6 py-2.5 border-x border-gray-300 font-semibold min-w-[60px] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className={`text-sm font-medium px-4 py-2 rounded-lg ${
                        quantity > 5
                          ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                          : "bg-green-50 text-green-700 border border-green-200"
                      }`}>
                        {quantity > 5 ? "⚠️ Limited stock available" : "✓ In stock • Ready to ship"}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button className="px-6 py-3.5 bg-gradient-to-r from-[#EAA25A] to-[#FFB07B] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                      <span>🛒</span>
                      Add to Cart
                    </button>
                    <button className="px-6 py-3.5 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-[#EAA25A] hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                      <span>❤️</span>
                      Add to Wishlist
                    </button>
                  </div>
                </div>

                {/* Product Features */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    {product.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#EAA25A]/20 flex items-center justify-center mt-0.5">
                          <span className="text-[#EAA25A] text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 mb-12 overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="flex gap-8 px-6">
                  <button className="py-5 border-b-2 border-[#EAA25A] text-[#EAA25A] font-semibold relative">
                    Description
                    <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-[#EAA25A] to-[#FFB07B]"></div>
                  </button>
                  <button className="py-5 text-gray-600 font-medium hover:text-[#EAA25A] transition-colors">
                    Specifications
                  </button>
                  <button className="py-5 text-gray-600 font-medium hover:text-[#EAA25A] transition-colors">
                    Reviews ({product.reviews})
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 mb-4">
                    Our Trendy Teen Set is crafted with premium organic cotton that's incredibly soft and breathable. Perfect for active lifestyles, this set combines style with comfort in a way that teens love.
                  </p>
                  <p className="text-gray-700">
                    Each piece is thoughtfully designed with attention to detail, ensuring durability and a perfect fit. Whether it's school, weekend outings, or casual hangouts, this versatile set works for every occasion.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-sm border border-gray-200/50">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Trendy Garments For Your Kids At The Best Designs
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-white hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
                    🌱
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    100% Organic Material
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Made from certified organic fabrics that are gentle on skin
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
                    🛡️
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Safe For Kids
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Hypoallergenic and skin-friendly materials tested for safety
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-white hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
                    ♻️
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Eco-Friendly
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Sustainable production with minimal environmental impact
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-white hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
                    💚
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Made With Love
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Crafted with care and attention to detail for maximum comfort
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigate('/shop')}
                  className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Shop Collection
                </button>
              </div>
            </section>

            {/* Related Products */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  RELATED PRODUCTS
                </h2>
                <button
                  onClick={() => navigate('/shop')}
                  className="text-[#EAA25A] font-medium hover:underline"
                >
                  View all →
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <div className="relative aspect-square bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center">
                      {product.sale && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-[#EAA25A] to-[#FFB07B] text-white text-xs font-bold px-2 py-1 rounded-full">
                          SALE
                        </div>
                      )}
                      <div className="text-5xl opacity-30 group-hover:scale-110 transition-transform">
                        {product.image}
                      </div>
                      <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        ❤️
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-lg font-bold text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Instagram Section */}
            <section className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 text-center border border-pink-200/50">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Follow Instagram @Mayaa_kids
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Join our community and see how our customers style Mayaa products. Share your photos with #MayaaKids for a chance to be featured!
              </p>
              <button className="px-8 py-3.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-2">
                <span>📷</span>
                Follow Us
              </button>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;