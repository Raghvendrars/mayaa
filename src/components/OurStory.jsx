function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-mayaa-beige">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              OUR STORY
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              At Mayaa, we believe every child deserves the opportunity to explore, create, and learn through play. 
              Our mission is to provide thoughtfully designed activity kits that spark imagination and foster creativity.
            </p>
            <p className="text-gray-700 text-lg">
              Founded with a passion for childhood development, we curate the best educational and creative resources 
              to help children discover their unique talents and interests.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="aspect-square bg-gradient-to-br from-mayaa-orange to-yellow-200 rounded-lg flex items-center justify-center">
              <span className="text-6xl">📖</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory




