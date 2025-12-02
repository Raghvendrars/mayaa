function Footer() {
  return (
    <footer className="relative bg-[#FFE5D4] text-gray-700 overflow-hidden border-t border-[#F5D4BC]">
      {/* Cloud and Sun Illustration */}
      <div className="absolute left-0 right-0 top-0 h-32 z-0">
        <svg viewBox="0 0 1440 120" className="w-full h-full">
          <path fill="#F5D4BC" d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z" />
        </svg>
        <div className="absolute left-10 top-10 text-3xl">🌞</div>
        <div className="absolute right-20 top-16 text-2xl">🌼</div>
        <div className="absolute left-1/2 top-20 text-2xl">🌤️</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Logo and Social */}
          <div className="flex justify-center">
                <h1 className="text-3xl font-bold relative flex items-center">
                  <span className="text-[#F28BB2]">माँ</span>
                  <span className="text-[#9AD09A] ml-1 relative">
                    yaa
                    <span className="absolute -top-3 left-0 text-[#EAA25A] text-xs">🦋</span>
                    <span className="absolute -top-3 left-3 text-[#EAA25A] text-xs">🦋</span>
                  </span>
                </h1>
              </div>

          {/* Useful Links */}
          <div className="md:w-1/4">
            <h4 className="font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#EAA25A]">Contact us</a></li>
              <li><a href="#" className="hover:text-[#EAA25A]">About Us</a></li>
              <li><a href="#" className="hover:text-[#EAA25A]">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#EAA25A]">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:w-1/4">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>Nehru nagar, Bangalore-560020</li>
              <li>Call Us: +91 123 456 789</li>
              <li>chocolatier@admin.com</li>
            </ul>
          </div>

          {/* Delivery */}
          <div className="md:w-1/4">
            <h4 className="font-semibold mb-4">Delivery</h4>
            <ul className="space-y-2">
              <li>Free Delivery</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#B6E2A1] py-3 px-4 text-xs text-gray-700 flex items-center justify-between">
        <span>&copy; 2023 Mayaa. All Rights Reserved.</span>
        <div className="flex gap-2">
          <img src="https://img.icons8.com/color/24/000000/visa.png" alt="Visa" />
          <img src="https://img.icons8.com/color/24/000000/mastercard.png" alt="Mastercard" />
          <img src="https://img.icons8.com/color/24/000000/paypal.png" alt="Paypal" />
          <img src="https://img.icons8.com/color/24/000000/amex.png" alt="Amex" />
        </div>
      </div>
    </footer>
  )
}

export default Footer