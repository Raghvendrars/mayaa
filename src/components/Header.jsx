import { Navigate, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
    return (
      <header className="sticky top-0 z-50 bg-white">

        {/* TOP ORANGE BAR */}
        <div className="bg-[#EAA25A] py-2">
          <p className="text-center text-sm text-white font-medium">
            Free shipping above Rs 2000
          </p>
        </div>

        {/* MAIN NAV BAR */}
        <div className="bg-[#FBF2E6] border-b border-gray-300">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="grid grid-cols-3 items-center">

              {/* LEFT MENU */}
              <div className="flex gap-8 items-center">
                <a className="text-[#EAA25A] font-semibold" href="/">Home</a>
                <a className="text-gray-700 hover:text-[#EAA25A]" href="/shop">Shop</a>
                <a className="text-gray-700 hover:text-[#EAA25A]" href="/aboutus">About Us</a>
              </div>

              {/* CENTER LOGO */}
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

              {/* RIGHT SEARCH + ICONS */}
              <div className="flex items-center justify-end gap-5">

                {/* Search */}
                <div className="relative hidden md:block">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-56 bg-white border border-gray-300 py-2 pl-10 pr-4 rounded-lg text-sm"
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                {/* Icons */}
                <div className="flex gap-4">

                  {/* User */}
                  <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>

                  {/* Wishlist */}
                  <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  {/* Cart */}
                  <button onClick={()=> navigate('/cart')} className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 relative">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-[#EAA25A] text-white w-5 h-5 flex items-center justify-center text-xs rounded-full">2</span>
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CATEGORY BAR */}
        <div className="bg-[#FBF2E6] py-3">
          <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8 flex-wrap">
            {[
              "Age",
              "Baby Clothing",
              "Ethnic Wear",
              "Muslin Frocks",
              "Diaper",
              "Mom Essentials",
              "Baby Essentials",
            ].map((item) => (
              <a key={item} className="flex items-center gap-1 text-gray-700 hover:text-[#EAA25A] font-medium">
                {item}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

      </header>
    );
  }

  export default Header;