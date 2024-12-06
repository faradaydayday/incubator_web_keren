"use client";
import React from 'react'
import BannerBottom from '@/components/BannerBottom'
import HeroSection from '@/components/HeroSection';
import Cards from '@/components/Cards';
import Navbar from '@/components/NavbarItem';
import LogoClouds from '@/components/LogoClouds';

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
      
      <LogoClouds/>
      <Cards/>
    </>
  )
}

export default page
