import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";

function AboutUs() {
  const navigate = useNavigate();

  const teamMembers = [
    { id: 1, name: "Priya Sharma", role: "Founder & Designer", icon: "🎨" },
    { id: 2, name: "Rajesh Kumar", role: "Product Manager", icon: "📦" },
    { id: 3, name: "Sneha Verma", role: "Operations Head", icon: "⚙️" },
    { id: 4, name: "Amit Patel", role: "Brand Strategist", icon: "📈" },
    { id: 5, name: "Divya Singh", role: "Creative Lead", icon: "🎯" },
    { id: 6, name: "Rohan Gupta", role: "Community Manager", icon: "💬" },
  ];

  return (
    <>
      <Header2 />

      <main className="min-h-screen bg-gradient-to-b from-[#FFF9F2] to-[#FBF2E6]">
        {/* Hero Section */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-6 md:p-10">
                {/* Left Image */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/80 to-orange-100/80 rounded-2xl shadow-inner"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl flex items-center justify-center">
                      <div className="text-7xl md:text-8xl opacity-20">🌈</div>
                      <div className="absolute bottom-8 left-8 text-4xl">👶</div>
                      <div className="absolute top-8 right-8 text-4xl">🌟</div>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center space-y-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Every baby deserves comfort — Mayaa Kids makes it beautifully possible.
                  </h1>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Our fabrics are soft, breathable, and designed to move with your little one. Every stitch is made with consideration for sensitive skin and growing bodies. We believe that comfort shouldn't cost extra.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="px-8 py-3.5 bg-gradient-to-r from-[#EAA25A] to-[#FFB07B] text-white font-semibold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      Read Our Story
                    </button>
                    <button
                      onClick={() => navigate('/shop')}
                      className="px-8 py-3.5 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-[#EAA25A] hover:shadow-md transition-all"
                    >
                      Shop Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Why Choose Mayaa Kids?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We combine quality, safety, and style to create the perfect clothing for your little ones
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                    🌍
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  100% Organic Certified Fabrics
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All our materials are certified organic, ensuring they're safe and gentle for your baby's delicate skin.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                    💜
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Anti-Itch, Skin-Safe Spun
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our specially treated fabrics prevent itching and irritation, providing lasting comfort throughout the day.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                    💙
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Crafted with Love & Care
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every piece is handcrafted with attention to detail, ensuring quality and durability for everyday wear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Message */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-4xl text-[#EAA25A]/30 hidden md:block">"</div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-4xl text-[#EAA25A]/30 hidden md:block">"</div>

              <div className="bg-gradient-to-r from-[#FFE5D4]/50 to-[#FFE5D4]/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-[#FFD8B5]">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic">
                  At Mayaa Kids, we don't just make clothes — we nurture comfort and happiness. We believe that quality, sustainability, and affordability can go hand-in-hand, and we're committed to making every day special for your little one.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-[#EAA25A] rounded-full"></div>
                  <div className="w-8 h-1 bg-[#EAA25A] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#EAA25A] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Meet Our Team
              </h2>
              <p className="text-gray-600 text-lg">
                Heart & Soul behind your Baby's Comfort
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-200/50"
                >
                  {/* Team Member Image */}
                  <div className="relative w-full aspect-square bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl md:text-7xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                      {member.icon}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Social Icons */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                        <span className="text-sm">📱</span>
                      </button>
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                        <span className="text-sm">💼</span>
                      </button>
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#EAA25A] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {member.role}
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#EAA25A] to-[#FFB07B] mx-auto rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#FFE5D4] to-[#FFD8B5] rounded-2xl p-8 md:p-12 text-center shadow-lg border border-[#FFD8B5]">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join Us in Our Mission
              </h2>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Every purchase supports our mission to provide comfortable, sustainable, and beautiful clothing for babies everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/shop')}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#EAA25A] to-[#FFB07B] text-white font-semibold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Shop Now
                </button>
                <button className="px-8 py-3.5 bg-white/90 backdrop-blur-sm border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-[#EAA25A] hover:shadow-md transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutUs;