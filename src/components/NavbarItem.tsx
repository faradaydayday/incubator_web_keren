import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavItem = ({ to, children }) => (
  <Link href={to} className="text-gray-700 hover:text-blue-500">
    {children}
  </Link>
);

const Navbar = () => {

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <>
      <nav
        className={`shadow-md py-2 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isScrollingDown ? "-translate-y-full" : "translate-y-0"
          } bg-white/30 backdrop-blur-md`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Navbar Branding Text */}
            <div className="flex-shrink-0">
              <span className="font-bold text-xl text-gray-900">INCUBATORS</span>
            </div>

            <div className="flex items-center">
              <div className="relative">

              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
