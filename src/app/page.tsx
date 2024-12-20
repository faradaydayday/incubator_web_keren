"use client";
import React, { useState, } from 'react';
import Navbar from '@/components/NavbarItem';
import HeroSection from '@/components/HeroSection';
import ImageHeroCard from '@/components/ImageHeroCard';
// import Incubator from '@/components/Incubator'
import { TextRevealDemo } from '@/components/TextReveal';
import BannerBottom from '@/components/BannerBottom';
import LogoClouds from '@/components/LogoClouds';
import Cards from '@/components/Cards';
import About from '@/components/About';
import LoadingAnimation from '@/components/LoadingAnimate';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import Barcode from '@/components/Barcode';
function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };


  return (
    <>
      {isLoading && (
        <LoadingAnimation
          onComplete={handleLoadingComplete}
        />
      )}
      {!isLoading && (
        <div className="animate-fade-in">
          <div>
            <Navbar />
          </div>
          <section className="">
            <HeroSection />
          </section>
          <section className="-mt-[200px]">
            <ImageHeroCard />
          </section>
          <section className="-mt-[300px]">
            <TextRevealDemo />
          </section>
          <section>
            <AboutSection />
          </section>
          <section className="absolute">
            <BannerBottom />
          </section>
          <LogoClouds />
          <Cards />
          <About />
          <section>
            <Barcode />
          </section>
          <section>
            <Footer />
          </section>
        </div>
      )}
    </>
  );
}

export default Page;