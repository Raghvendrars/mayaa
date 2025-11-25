function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      text: 'My daughter absolutely loves the art kits! They keep her engaged for hours.',
      rating: 5,
    },
    {
      id: 2,
      name: 'John D.',
      text: 'Great quality products and fast shipping. Highly recommend!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily R.',
      text: 'The science kits are educational and fun. Perfect for curious kids!',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          OUR CUSTOMERS LOVE US
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-mayaa-beige rounded-lg p-6 shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

