function ExploreCollections() {
  const collections = [
    {
      id: 1,
      title: 'Art & Craft',
      description: 'Unleash creativity with colors and textures',
      image: '🎨',
    },
    {
      id: 2,
      title: 'Science Kits',
      description: 'Explore the wonders of science',
      image: '🔬',
    },
    {
      id: 3,
      title: 'Building Blocks',
      description: 'Build, create, and imagine',
      image: '🧱',
    },
    {
      id: 4,
      title: 'Story Books',
      description: 'Journey through magical stories',
      image: '📚',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Collections
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            {/* Child on Swing Illustration */}
            <div className="text-6xl">👶</div>
            <div className="text-4xl">🎈</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="bg-mayaa-beige rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105"
            >
              <div className="text-5xl mb-4 text-center">{collection.image}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {collection.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {collection.description}
              </p>
            </div>
          ))}
        </div>

        {/* Colorful Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🌈</div>
            <h3 className="font-semibold text-gray-800">Colorful Adventures</h3>
            <p className="text-sm text-gray-700 mt-2">Bright and vibrant experiences</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">☀️</div>
            <h3 className="font-semibold text-gray-800">Sunny Days</h3>
            <p className="text-sm text-gray-700 mt-2">Fun outdoor activities</p>
          </div>
          <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🌿</div>
            <h3 className="font-semibold text-gray-800">Nature Explorer</h3>
            <p className="text-sm text-gray-700 mt-2">Discover the natural world</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreCollections




