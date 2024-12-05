"use client";

import React from 'react'
import BannerBottom from '@/components/BannerBottom'
import HeroSection from '@/components/HeroSection';
function page() {
  return (
    <div>
      <section className=''  >
        <HeroSection />
      </section>

      <section className='absolute' >
        <BannerBottom />
      </section>
    </div>
  )
}

export default page
