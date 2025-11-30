import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sapphire Serenity Maxi Dress",
      size: "Size / 7L",
      price: 59.99,
      total: 59.99,
      quantity: 1,
      image: "https://via.placeholder.com/100?text=Sapphire",
    },
    {
      id: 2,
      name: "Night Sequin Dress",
      size: "Size / 7L",
      price: 59.99,
      total: 59.99,
      quantity: 1,
      image: "https://via.placeholder.com/100?text=Sequin",
    },
    {
      id: 3,
      name: "Noir Cocktail Dress",
      size: "Size / 7L",
      price: 59.99,
      total: 59.99,
      quantity: 1,
      image: "https://via.placeholder.com/100?text=Noir",
    },
  ]);

  const [saveForLater, setSaveForLater] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity, total: item.price * newQuantity }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <>
      <Header2 />
      <main className="min-h-screen bg-[#FBF2E6]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-1 bg-[#EAA25A]"></div>
              <div className="w-4 h-4 rounded-full bg-[#EAA25A]"></div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Congratulations! You've got {cartItems.length} items
            </p>
          </div>

          {/* Cart Title */}
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Your Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cartItems.length > 0 ? (
                <div className="space-y-6">
                  {/* Table Header - Desktop */}
                  <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 text-sm font-semibold text-gray-700">
                    <div className="col-span-5">Product</div>
                    <div className="col-span-2">Quantity</div>
                    <div className="col-span-2">Price</div>
                    <div className="col-span-2">Total</div>
                    <div className="col-span-1"></div>
                  </div>

                  {/* Cart Items */}
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="md:hidden mb-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-9l-1 1H5v2h14V4z" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-sm text-gray-600">{item.size}</p>
                      </div>

                      <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                        {/* Product */}
                        <div className="col-span-5 flex gap-4">
                          <div className="w-24 h-24 bg-yellow-100 rounded-lg flex-shrink-0"></div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">{item.size}</p>
                          </div>
                        </div>

                        {/* Quantity */}
                        <div className="col-span-2">
                          <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="px-2 py-1 text-gray-600 hover:text-gray-900"
                            >
                              −
                            </button>
                            <span className="px-3 py-1 border-l border-r border-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="px-2 py-1 text-gray-600 hover:text-gray-900"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-gray-700">
                          ${item.price.toFixed(2)}
                        </div>

                        {/* Total */}
                        <div className="col-span-2 font-semibold text-gray-900">
                          ${item.total.toFixed(2)}
                        </div>

                        {/* Delete */}
                        <div className="col-span-1 flex justify-center">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-9l-1 1H5v2h14V4z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Mobile Quantity and Price */}
                      <div className="md:hidden mt-4">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <p className="text-sm text-gray-600">Quantity</p>
                            <div className="flex items-center border border-gray-300 rounded-lg w-fit mt-1">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="px-2 py-1 text-gray-600"
                              >
                                −
                              </button>
                              <span className="px-3 py-1 border-l border-r border-gray-300">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="px-2 py-1 text-gray-600"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">Total</p>
                            <p className="text-lg font-semibold text-gray-900">
                              ${item.total.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Save for Later Checkbox */}
                  <div className="flex items-center mt-6">
                    <input
                      type="checkbox"
                      id="save-later"
                      checked={saveForLater}
                      onChange={(e) => setSaveForLater(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                    />
                    <label
                      htmlFor="save-later"
                      className="ml-2 text-sm text-gray-700 cursor-pointer"
                    >
                      Please save your purchases for later?
                    </label>
                  </div>

                  {/* Special Instructions */}
                  <div className="mt-6">
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      Notes, Special Instruction
                    </label>
                    <textarea
                      placeholder="Add any special notes or instructions for your order..."
                      className="w-full px-4 py-3 border border-yellow-200 rounded-lg bg-yellow-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EAA25A]"
                      rows="4"
                    />
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="text-green-600">
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-[#EAA25A] text-white font-semibold py-3 rounded-lg hover:bg-[#D99246] transition-colors mb-3">
                  RETURN TO SHOP
                </button>

                <button className="w-full bg-white border-2 border-gray-900 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
                  EMPTY CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cart;