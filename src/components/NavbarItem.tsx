import React, { useState, useEffect } from "react";
import AnimatedGradientText from "./ui/animated-gradient-text";
import Incu from "@/app/Assets/Image/logo-telkom-schools.png"
import { motion } from "framer-motion";
import Link from "next/link";
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
                className="block lg:hidden focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <span
                  className={` bg-black block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                  className={`bg-black block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-1 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                  className={`bg-black block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : "translate-y-0.5"
                    }`}
                ></span>
              </button>
            </div>

            {/* Desktop Menu */}
            
            <div className="hidden lg:flex space-x-8">
              <Link href='https://ppdb.telkomschools.sch.id/'>
              <AnimatedGradientText> 😎 Join Us</AnimatedGradientText>
              </Link>
            </div>
          </div>
        </div>
      </nav>



      {mobileMenuOpen && (
        <motion.div
          className="fixed bottom-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-2xl rounded-t-lg"
          initial={{ opacity: 0, y: "100%" }}  // Mulai dengan opacity 0 dan di bawah layar
          animate={{ opacity: 1, y: 0 }}       // Ketika muncul, opacity 1 dan posisi di atas
          exit={{ opacity: 0, y: "100%" }}    // Ketika keluar, opacity 0 dan posisi di bawah
          transition={{ duration: 0.5, ease: "easeInOut" }}  // Durasi 500ms dan easing
        >
          <div className="flex flex-col items-center space-y-4 py-6 px-4">
            {/* Logo dan Teks */}
            <div className="flex items-center space-x-4">
              <Image
                src={Incu}
                alt="logo incubator"
                className="w-12 h-12 mb-4 object-contain" // Ukuran gambar kecil
              />
              <h2 className="text-xl font-bold text-gray-800 mb-4">SMK Telkom Makassar</h2>
            </div>

            {/* Tombol Join Us */}
            <Link href='https://ppdb.telkomschools.sch.id/'>
            <button
              className="w-full max-w-xs py-3 bg-red-500 text-white rounded-full text-lg font-medium hover:bg-red-600 shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
            </button>
            </Link>
          </div>
        </motion.div>
      )}



    </>
  );
};

export default Navbar;
