import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-[#0B1522] text-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex min-h-screen">
        {/* Left Side - Content */}
        <div className="w-1/2 flex flex-col justify-center p-12 ml-12">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">Welcome to Easybiznus</h1>
            <p className="text-xl text-gray-300 mb-8">
              Your one-stop solution for business management and growth.
            </p>

            <div className="flex gap-6">
              <Link
                to="/login"
                className="flex items-center justify-center  bg-white text-[#1a2634] py-4 px-8 rounded-xl font-semibold hover:bg-[#2a3644] active:bg-[#3a4654] transition-colors shadow-lg"
              >
                LOGIN
              </Link>
              <Link
                to="/signup"
                className="flex items-center justify-center border-2 border-gray-600 text-white py-4 px-8 rounded-xl font-semibold hover:bg-[#1a2634] transition-colors"
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 bg-[#1a2634] flex items-center justify-center p-12">
          <div className="relative w-full h-full max-w-2xl">
            <img
              src="https://file.aiquickdraw.com/imgcompressed/img/compressed_44909a2e5cf110ed53a486ffe779c7a8.webp"
              alt="Business Illustration"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2634] to-transparent opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen flex flex-col px-6 py-8">
        <div className="text-center mb-12 mt-12 ">
          <h1 className="text-4xl font-bold mb-3">Easybiznus</h1>
          <p className="text-lg text-gray-300">Lets Grow Solid</p>
        </div>

        <div className="flex-1 flex items-center justify-center mb-12">
          <div className="relative w-full max-w-sm">
            <img
              src="https://file.aiquickdraw.com/imgcompressed/img/compressed_44909a2e5cf110ed53a486ffe779c7a8.webp"
              alt="Business Illustration"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1522] to-transparent opacity-50"></div>
          </div>
        </div>

        <div className="mb-12 flex gap-4 w-full justify-evenly items-center">
          <Link
            to="/login"
            className="flex items-center justify-center w-1/2 bg-white text-[#1a2634] py-4 rounded-xl font-semibold hover:bg-[#2a3644] active:bg-[#3a4654] transition-colors"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="flex items-center w-1/2 justify-center border-2 border-gray-600 text-white py-4 rounded-xl font-semibold hover:bg-[#1a2634] transition-colors"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
