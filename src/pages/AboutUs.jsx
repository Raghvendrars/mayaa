import Footer from "../components/Footer";
import Header2 from "../components/Header2";

function AboutUs() {
  const teamMembers = [
    { id: 1, name: "Priya Sharma", role: "Founder & Designer" },
    { id: 2, name: "Rajesh Kumar", role: "Product Manager" },
    { id: 3, name: "Sneha Verma", role: "Operations Head" },
    { id: 4, name: "Amit Patel", role: "Brand Strategist" },
    { id: 5, name: "Divya Singh", role: "Creative Lead" },
    { id: 6, name: "Rohan Gupta", role: "Community Manager" },
  ];

  return (
    <>
      <Header2 />

      <main className="min-h-screen bg-[#FBF2E6]">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className=" rounded-lg border-4 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
                {/* Left Image */}
                <div className="flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg aspect-square md:aspect-auto">
                  <div className="text-6xl opacity-30">🌈</div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    Every baby deserves comfort — Mayaa Kids makes it beautifully possible.
                  </h1>

                  <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                    Our fabrics are soft, breathable, and designed to move with your little one. Every stitch is made with consideration for sensitive skin and growing bodies. We believe that comfort shouldn't cost extra.
                  </p>

                  <button className="w-fit px-8 py-3 bg-[#EAA25A] text-white font-semibold rounded-full hover:bg-[#D99246] transition-colors">
                    Read Our Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl">
                    🌍
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  100% Organic Certified Fabrics
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All our materials are certified organic, ensuring they're safe and gentle for your baby's delicate skin.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                    💜
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Anti-Itch, Skin-Safe Spun
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our specially treated fabrics prevent itching and irritation, providing lasting comfort throughout the day.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    💙
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Crafted with Love & Care
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every piece is handcrafted with attention to detail, ensuring quality and durability for everyday wear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Message */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
              At Mayaa Kids, we don't just make clothes — we nurture comfort and happiness. We believe that quality, sustainability, and affordability can go hand-in-hand, and we're committed to making every day special for your little one.
            </p>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Meet Our Team
              </h2>
              <p className="text-gray-600">
                Heart & Soul behind your Baby's Comfort
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  {/* Team Member Image */}
                  <div className="w-full aspect-square bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                    <div className="text-6xl opacity-40">👶</div>
                  </div>

                  {/* Team Member Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#FBF2E6]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Us in Our Mission
            </h2>
            <p className="text-gray-700 mb-8">
              Every purchase supports our mission to provide comfortable, sustainable, and beautiful clothing for babies everywhere.
            </p>
            <button className="px-8 py-3 bg-[#EAA25A] text-white font-semibold rounded-full hover:bg-[#D99246] transition-colors">
              Shop Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutUs;