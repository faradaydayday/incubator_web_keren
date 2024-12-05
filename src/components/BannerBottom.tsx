

import React, { useState } from 'react';

const BannerBottom: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 w-full px-4 sm:px-8 md:px-12 lg:px-16  mb-6 z-50">
          <div className="bg-gray-800 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg flex items-center justify-between max-w-7xl mx-auto">
            <span className="text-xs sm:text-sm md:text-base pr-2 sm:pr-4">
              Yuk Join Di <span className='text-red-400' ><a href="smktelkom-mks.sch.id">SMK TELKOM MAKASSAR</a></span> untuk hal menarik laninya yuk
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