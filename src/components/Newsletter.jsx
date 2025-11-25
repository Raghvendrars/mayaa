function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-mayaa-light-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            JOIN OUR NEWSLETTER
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Stay updated with our latest collections, special offers, and creative tips!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mayaa-orange focus:border-transparent"
            />
            <button className="bg-mayaa-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter




