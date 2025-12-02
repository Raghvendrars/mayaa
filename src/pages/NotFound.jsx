import React from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFE5D4] flex flex-col">
      <Header2 />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="relative w-full flex flex-col items-center">
          <h1 className="text-[8rem] md:text-[12rem] font-extrabold text-[#F5D4BC] leading-none select-none mb-0">404</h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            {/* Mascot SVG or image */}
            <img src="https://img.icons8.com/color/160/000000/maintenance.png" alt="Mascot" className="w-40 h-40 mb-4" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4 text-center">Opps ! The Page Not Found.</h2>
        <p className="text-gray-600 text-center max-w-xl mb-8">
          Vestibulum in ipsum velit. Aliquam libero sem, ardis aut rutrum eu, sollicitudin ut. Vehicula a erat. Phasellus arc som sed erat fos sequam dignissim. Mauris feugiat.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-[#EAA25A] text-white font-semibold rounded-lg shadow hover:bg-[#FFB07B] transition-colors"
        >
          BACK TO HOME
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;