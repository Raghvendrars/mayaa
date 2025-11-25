import React from 'react'

const ComfyClothesSection = () => {
  return (
    <section className="w-full py-16 md:py-24" style={{backgroundColor:"#FDE6C5"}}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{fontFamily:"'Baloo Bhaina 2', sans-serif"}}>
            COMFY CLOTHES FOR THE
            <br />
            NAUGHTY KIDS
          </h2>

          {/* Description Text */}
          <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed">
            Etiam Placerat Nisl Vel Porta Fermentum. Vestibulum Ut Sodales Quam. Ut In Vestibulum
            Augue.
          </p>

          {/* SHOP NOW Button */}
          <button className="bg-teal-400 hover:bg-teal-500 text-white uppercase font-semibold px-8 py-3 md:px-10 md:py-4 rounded-lg transition-colors text-sm md:text-base" style={{background:"#84C2CF", borderRadius: '50px'}}>
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default ComfyClothesSection

