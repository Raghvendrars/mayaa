import React from "react";
import LoginBackground from "../assets/Login/LoginBackground.svg";

function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${LoginBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FAEDD8",
      }}
    >
      {/* Outer Dotted Border Box */}
      <div className="border-4 border-dashed border-black p-6 sm:p-10 bg-[#FAEDD8] w-[92%] max-w-3xl">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-[#1C2750] text-center mb-2 tracking-wide">
          LOG IN TO COSMIC REALM!
        </h1>

        {/* Subtitle */}
        <p className="text-md text-gray-700 text-center mb-10">
          Nulla Id Mollis Metus, Eu Ma Ligula. Etiplacerat Placerat.
        </p>

        {/* Email Input */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 bg-[#FAE5C8] border-4 border-black outline-none text-gray-800 placeholder-gray-600"
            style={{ boxShadow: "4px 4px 0px black" }}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-[#FAE5C8] border-4 border-black outline-none text-gray-800 placeholder-gray-600"
            style={{ boxShadow: "4px 4px 0px black" }}
          />
        </div>

        {/* Terms & Forgot Password */}
        <div className="flex justify-between items-center mb-6 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 border-black" />
            <span className="text-gray-800">
              I agree with the{" "}
              <a href="#" className="underline font-semibold">
                terms & conditions
              </a>
            </span>
          </label>

          <a href="#" className="underline text-gray-800 font-medium">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          className="w-full py-3 bg-[#F0A764] border-4 border-black text-black font-bold tracking-wider uppercase"
          style={{ boxShadow: "4px 4px 0px black" }}
        >
          LOG IN
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-black"></div>
          <span className="px-4 text-gray-700">Or login with</span>
          <div className="flex-grow border-t border-black"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-5 justify-center mb-8">
          {/* Apple */}
          <button
            className="flex items-center justify-center gap-2 bg-white px-6 py-3 border-4 border-black"
            style={{ boxShadow: "4px 4px 0px black" }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" className="w-5" />
            <span className="font-medium">Apple</span>
          </button>

          {/* Google */}
          <button
            className="flex items-center justify-center gap-2 bg-white px-6 py-3 border-4 border-black"
            style={{ boxShadow: "4px 4px 0px black" }}
          >
            <img src="https://img.icons8.com/color/48/google-logo.png" className="w-5" />
            <span className="font-medium">Google</span>
          </button>

          {/* Facebook */}
          <button
            className="flex items-center justify-center gap-2 bg-white px-6 py-3 border-4 border-black"
            style={{ boxShadow: "4px 4px 0px black" }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" className="w-5" />
            <span className="font-medium">Facebook</span>
          </button>
        </div>

        {/* Create Account */}
        <p className="text-center text-gray-800 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="underline font-semibold">
            Create an account
          </a>
        </p>
      </div>

      {/* Footer Text */}
      <p className="absolute bottom-6 text-2xl font-bold text-black">
        Follow Instagram @Maaya_kids
      </p>
    </div>
  );
}

export default Login;
