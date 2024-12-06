import React, { useState, useEffect } from "react";
import AnimatedGradientText from "./ui/animated-gradient-text";
import Incu from "@/app/Assets/Image/iconIncu.png"
import Image from "next/image";
const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`shadow-md py-2 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isScrollingDown ? "-translate-y-full" : "translate-y-0"
          } bg-white/30 backdrop-blur-md`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Branding */}
            <div className="flex-shrink-0">
              <span className="font-bold text-xl text-gray-900">INCUBATORS</span>
            </div>

            {/* Burger Button */}
            <div className="lg:hidden">
              <button
                className="text-gray-900 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open Menu</span>
                <div className="space-y-2">
                  <div className="w-6 h-0.5 bg-gray-900"></div>
                  <div className="w-6 h-0.5 bg-gray-900"></div>
                  <div className="w-6 h-0.5 bg-gray-900"></div>
                </div>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">

              <AnimatedGradientText> 😎 Join Us</AnimatedGradientText>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed bottom-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-2xl rounded-t-lg transition-transform duration-500 ease-out ${mobileMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
          <div className="flex flex-col items-center space-y-4 py-6 px-4">
            {/* Logo dan Teks */}
            <div className="flex items-center space-x-4">
              <Image
                src={Incu}
                alt="logo incubator"
                className="w-12 h-12 object-contain" // Ukuran gambar kecil
              />
              <h2 className="text-xl font-bold text-gray-800">INCUBATORS</h2>
            </div>

            {/* Tombol Join Us */}
            <button
              className="w-full max-w-xs py-3 bg-red-500 text-white rounded-full text-lg font-medium hover:bg-red-600 shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
            </button>
          </div>

        </div>
      )}

    </>
  );
};

export default Navbar;
