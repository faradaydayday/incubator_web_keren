"use client";
import React from 'react'
import BannerBottom from '@/components/BannerBottom'
import HeroSection from '@/components/HeroSection';
import Cards from '@/components/Cards';
import Navbar from '@/components/NavbarItem';
import LogoClouds from '@/components/LogoClouds';
import { AnimatedBeamDemo } from '@/components/AnimatedBeam';
import { TextRevealDemo } from '@/components/TextReveal';
import ImageHeroCard from '@/components/ImageHeroCard';
function page() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className=''  >
        <HeroSection />
      </section>
      <section className='-mt-[200px]'>
        <ImageHeroCard />
      </section>
      <section className=' -mt-[300px]'  >
        <TextRevealDemo />
      </section>

      <section className='absolute' >
        <BannerBottom />
      </section>

      <LogoClouds />
      <Cards />
    </>
  )
}

export default page
