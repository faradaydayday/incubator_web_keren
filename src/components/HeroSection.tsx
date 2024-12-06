import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../app/Assets/Image/iconIncu.png';
import ShinyButton from './ui/shiny-button';
import WordPullUp from './ui/word-pull-up';

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-white text-gray-800 relative overflow-hidden">

      {/* Background Decorative */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div className="w-96 h-96 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">

        {/* Icon and Title */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 ">
            <Image
              src={Icon}
              alt="Icon Incubator"

              style={{
                filter: "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))"
              }}
            />
          </div>
          <h1 className="text-xl font-semibold">Incubator</h1>
        </div>


        {/* Heading and Description */}
        <div className="text-center max-w-5xl mx-auto px-4">
          <WordPullUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Empowering <br className="sm:hidden" />
              <span className="block sm:inline lg:mr-2">Digital Bridge</span>
              <span className="block sm:inline md:inline">Future
                <span className="lg:hidden">Technology</span>
              </span>
            </h1>
          </WordPullUp>


        </div>




        {/* Button */}
        <Link href="https://linktr.ee/incubator_stelkmks">
          <ShinyButton className='py-2 px-5'>Media Sosial</ShinyButton>
        </Link>
      </div>

    </div >
  );
}

export default HeroSection;
