"use client";
import React from 'react'
import BannerBottom from '@/components/BannerBottom'
import HeroSection from '@/components/HeroSection';

import Navbar from '@/components/NavbarItem';

function page() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className='py-10'  >
        <HeroSection />
      </section>

      <section className='absolute' >
        <BannerBottom />
      </section>

    </>
  )
}

export default page
