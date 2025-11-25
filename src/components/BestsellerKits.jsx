function BestsellerKits() {
  const kits = [
    { id: 1, name: 'Creative Art Kit', price: '$29.99', image: '🎨' },
    { id: 2, name: 'Science Explorer', price: '$34.99', image: '🔬' },
    { id: 3, name: 'Building Master', price: '$39.99', image: '🧱' },
    { id: 4, name: 'Story Adventure', price: '$24.99', image: '📚' },
  ]

  return (
    <section className="py-16 md:py-24 bg-mayaa-light-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          BESTSELLER KITS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105"
            >
              <div className="text-6xl mb-4 text-center">{kit.image}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {kit.name}
              </h3>
              <p className="text-mayaa-blue font-bold text-center">{kit.price}</p>
              <button className="w-full mt-4 bg-mayaa-orange text-gray-800 py-2 rounded-lg font-medium hover:bg-opacity-80 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellerKits




