import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Webeskul from '@/app/Assets/Image/WebEkskul.jpg';
import gambar2 from '@/app/Assets/Image/pertemuan 3.jpg'
import gambar3 from '@/app/Assets/Image/gambar4.jpg'
import gambar4 from '@/app/Assets/Image/NetworkBelajar.jpg'
import gambar5 from '@/app/Assets/Image/NetworkEkskul.jpg'


function ImageHeroCard() {
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    let ticking = false; // Control the requestAnimationFrame

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const checkScreenSize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial screen size check
    checkScreenSize();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Smooth easing function for a smooth transition
  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const calculateTransform = (index: number) => {
    // Define different starting positions for each card
    const baseTranslations = [
      { start: '-20%', end: '0%' },
      { start: '-30%', end: '0%' },
      { start: screenWidth <= 1000 ? '-20%' : '-45%', end: '0%' },
      { start: '-30%', end: '0%' },
      { start: '-20%', end: '0%' },
    ];

    // Interpolate based on scroll position with easing
    const progress = Math.min(1, scrollY / (window.innerHeight * 0.9));
    const easedProgress = easeInOutQuad(progress);

    const { start, end } = baseTranslations[index];

    // Parse the start and end values
    const startVal = parseFloat(start);
    const endVal = parseFloat(end);

    // Interpolate with easing
    const currentTranslate = startVal + (endVal - startVal) * easedProgress;

    return `translateY(${currentTranslate}%)`; // Use CSS transform
  };

  const getCardConfiguration = () => {
    if (screenWidth <= 1000) {
      return {
        cards: [
          { image: Webeskul },
          { image: Webeskul },
          { image: Webeskul },
        ],
        renderStrategy: (index: number) => {
          if (index === 1) {
            return {
              width: 'w-[18rem]',
              opacity: 'opacity-100',
              scale: 'scale-100',
            };
          }
          return {
            width: 'w-[9rem]',
            opacity: 'opacity-90',
            scale: 'scale-90',
          };
        },
      };
    }

    return {
      cards: [
        { image: Webeskul },
        { image: gambar2 },
        { image: gambar3 },
        { image: gambar4 },
        { image: gambar5 },
      ],
      renderStrategy: () => ({
        width: 'w-[18rem]',
        opacity: 'opacity-100',
        scale: 'scale-100',
      }),
    };
  };

  const { cards, renderStrategy } = getCardConfiguration();

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-6 mt-6 h-screen w-full overflow-hidden px-4 lg:px-16">
      {cards.map((card, index) => {
        const cardStyle = renderStrategy(index);

        return (
          <div
            key={index}
            className={`relative grid h-[20rem] flex-col items-end justify-center
              overflow-hidden rounded-xl bg-white transition-all duration-300 ease-out
              ${cardStyle.width} ${cardStyle.opacity} ${cardStyle.scale}`}
            style={{
              transform: calculateTransform(index),
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out', // smooth transition
            }}
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
        );
      })}
    </div>
  );
}

export default ImageHeroCard;
