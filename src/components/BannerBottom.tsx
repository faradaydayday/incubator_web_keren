import Link from 'next/link';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BannerBottom: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 transform lg:max-w-7xl lg:left-1/2 lg:-translate-x-1/2 lg:px-16 lg:mb-6 z-50 sm:mb-3">
          <div className="bg-gray-800 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-none sm:rounded-lg flex items-center justify-between w-full">
            <span className="text-xs sm:text-sm md:text-base pr-2 sm:pr-4 font-semibold">
              Ingin Hal Menarik Lainya
              <span className="text-red-500 inline-flex items-center ml-1">
                <Link href="https://ppdb.telkomschools.sch.id/welcome">
                  Yuk Join Di SMK TELKOM MAKASSAR
                </Link>
                <ArrowRight className="ml-1" />
              </span>
            </span>

            <button
              className="text-white hover:text-gray-300 focus:outline-none flex-shrink-0"
              onClick={handleCloseClick}
              aria-label="Close banner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

      )}
    </>
  );
};

export default BannerBottom;
