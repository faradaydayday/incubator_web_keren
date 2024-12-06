import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../app/Assets/Image/iconIncu.png';

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <div className="w-32 mb-8 text-center">
        <Image
          src={Icon}
          alt="Icon Incubator"
          style={{
            filter: "drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.8))"
          }}
        />
        <h1 className=" text-lg font-semibold text-gray-800">Incubator</h1>
      </div>


      <h1 className="text-4xl font-bold text-center mb-4">
        Selamat Datang di Incubator
      </h1>

      <p className="text-xl text-center mb-8">
        Incubator adalah salah satu ekskul yang ada di SMK Telkom Makassar.
        <br />
        Scroll untuk tahu lebih banyak.
      </p>

      <Link href="https://linktr.ee/incubator_stelkmks">
      
      </Link>
    </div>
  );
}

export default HeroSection;