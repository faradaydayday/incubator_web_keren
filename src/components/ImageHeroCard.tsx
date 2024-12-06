import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Webeskul from '@/app/Assets/Image/WebEkskul.jpg'

function ImageHeroCard() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi easing untuk transisi yang lebih halus
  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const calculateTransform = (index: number) => {
    // Definisi posisi awal yang berbeda untuk setiap card
    const baseTranslations = [
      { start: '-20%', end: '0%' },
      { start: '-30%', end: '0%' },
      { start: '-45%', end: '0%' },
      { start: '-30%', end: '0%' },
      { start: '-20%', end: '0%' }
    ];

    // Gunakan scroll untuk menginterpolasi dengan tambahan easing
    const progress = Math.min(1, scrollY / (window.innerHeight * 0.7));
    const easedProgress = easeInOutQuad(progress);

    const { start, end } = baseTranslations[index];

    // Parse nilai numerik
    const startVal = parseFloat(start);
    const endVal = parseFloat(end);

    // Interpolasi dengan easing
    const currentTranslate = startVal + (endVal - startVal) * easedProgress;

    return `translate-y-[${currentTranslate}%]`;
  };

  return (
    <div className="flex items-center justify-center gap-6 h-screen w-full overflow-hidden px-4 lg:px-16 mt-5">
      {[
        { image: Webeskul },
        { image: Webeskul },
        { image: Webeskul },
        { image: Webeskul },
        { image: Webeskul }
      ].map((card, index) => (
        <div
          key={index}
          className={`
            relative grid h-[20rem] w-[18rem] flex-col items-end justify-center 
            overflow-hidden rounded-xl bg-white 
            transition-transform duration-700 ease-in-out
            ${calculateTransform(index)}
          `}
        >
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none">
            <Image
              src={card.image}
              alt={`Card ${index + 1}`}
              fill
              className="object-cover brightness-125 saturate-200 contrast-125 hue-rotate-15"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageHeroCard