import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

function ProductDetails() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("XS");
  const [selectedColor, setSelectedColor] = useState("Brown");

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
    colors: ["Brown", "Black", "White", "Navy"],
    details: [
      "Premium organic cotton fabric",
      "Comfortable fit for all-day wear",
      "Machine washable and durable",
      "Available in multiple sizes and colors",
      "Eco-friendly production process",
    ],
  };

  const relatedProducts = [
    { id: 1, name: "Soft Cotton Set", price: "$34.99", image: "👕" },
    { id: 2, name: "Denim Collection", price: "$44.99", image: "👖" },
    { id: 3, name: "Casual Wear", price: "$39.99", image: "👗" },
    { id: 4, name: "Party Outfit", price: "$49.99", image: "👔" },
  ];

  return (
    <>
      <Header2 />

      <main className="min-h-screen bg-[#FBF2E6]">
        {/* Product Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Product Images */}
              <div>
                {/* Main Image */}
                <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center border-4 border-[#4DB8E8] overflow-hidden">
                  <div className="text-7xl opacity-40">👕</div>
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((_, idx) => (
                    <div
                      key={idx}
                      className="aspect-square bg-yellow-100 rounded-lg flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow border-2 border-gray-200"
                    >
                      <span className="text-2xl opacity-30">📸</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-2xl text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          selectedSize === size
                            ? "bg-[#EAA25A] text-white border-2 border-[#EAA25A]"
                            : "bg-white border-2 border-gray-300 text-gray-700 hover:border-[#EAA25A]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Select Color
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${
                          selectedColor === color
                            ? "bg-[#EAA25A] text-white border-2 border-[#EAA25A]"
                            : "bg-white border-2 border-gray-300 text-gray-700 hover:border-[#EAA25A]"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-300 rounded-lg w-fit">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-gray-700 font-bold hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="px-6 py-2 border-l border-r border-gray-300 font-semibold">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-gray-700 font-bold hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-gray-600">
                      {quantity > 5 ? "Limited stock available" : "In stock"}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-8">
                  <button className="flex-1 px-6 py-3 bg-[#EAA25A] text-white font-semibold rounded-lg hover:bg-[#D99246] transition-colors">
                    Add to Cart
                  </button>
                  <button className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    ♡ Wishlist
                  </button>
                </div>

                {/* Product Features */}
                <div className="space-y-3 pt-8 border-t border-gray-200">
                  {product.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-[#EAA25A] text-lg">✓</span>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-lg p-8 mb-12">
              <div className="border-b border-gray-200 mb-6">
                <div className="flex gap-8">
                  <button className="pb-4 border-b-2 border-[#EAA25A] text-[#EAA25A] font-semibold">
                    Description
                  </button>
                  <button className="pb-4 text-gray-600 font-semibold hover:text-[#EAA25A]">
                    Specifications
                  </button>
                  <button className="pb-4 text-gray-600 font-semibold hover:text-[#EAA25A]">
                    Reviews
                  </button>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 mb-4">
                  Our Trendy Teen Set is crafted with premium organic cotton that's incredibly soft and breathable. Perfect for active lifestyles, this set combines style with comfort in a way that teens love.
                </p>
                <p className="text-gray-700">
                  Each piece is thoughtfully designed with attention to detail, ensuring durability and a perfect fit. Whether it's school, weekend outings, or casual hangouts, this versatile set works for every occasion.
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <section className="bg-white rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Trendy Garments For Your Kids At The Best Designs.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                    🌱
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    100% Organic Material
                  </h4>
                  <p className="text-sm text-gray-600">
                    Made from certified organic fabrics
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                    🛡️
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Safe For Kids
                  </h4>
                  <p className="text-sm text-gray-600">
                    Hypoallergenic and skin-friendly
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                    ♻️
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Eco-Friendly
                  </h4>
                  <p className="text-sm text-gray-600">
                    Sustainable production process
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                    💚
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Made With Love
                  </h4>
                  <p className="text-sm text-gray-600">
                    Crafted with care for comfort
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors">
                  Shop Collection
                </button>
              </div>
            </section>

            {/* Related Products */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                RELATED PRODUCTS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden border-2 border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="w-full aspect-square bg-yellow-50 flex items-center justify-center text-5xl">
                      {product.image}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
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
            <section className="bg-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Follow Instagram @Mayaa_kids
              </h2>
              <p className="text-gray-600 mb-6">
                Join our community and see how our customers style Mayaa products
              </p>
              <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors">
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
