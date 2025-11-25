function GiftCards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-mayaa-orange to-orange-200 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            GIFT CARDS
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Give the gift of creativity! Perfect for birthdays, holidays, or any special occasion.
          </p>
          <button className="bg-mayaa-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
            Purchase Gift Card
          </button>
        </div>
      </div>
    </section>
  )
}

export default GiftCards




