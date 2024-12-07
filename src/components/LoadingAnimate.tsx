import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import iconIncu from "@/app/Assets/Image/aliak.jpg";

const LoadingAnimation = ({ onComplete = () => {} }) => {
  const [loadingStage, setLoadingStage] = useState('initial');

  useEffect(() => {
    const stages = [
      { stage: 'logo', delay: 500 }, // Logo muncul setelah 0.5 detik
      { stage: 'text', delay: 2500 }, // Teks muncul setelah 1.5 detik
      { stage: 'complete', delay: 3000 }, // Loading selesai setelah 3 detik
      { stage: 'exit', delay: 6500 }, // Animasi keluar selesai setelah 4.5 detik
    ];

    const timers = stages.map((item) =>
      setTimeout(() => {
        setLoadingStage(item.stage);

        if (item.stage === 'complete' && onComplete) {
          onComplete();
        }
      }, item.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const containerVariants = {
    initial: { opacity: 0 },
    logo: {
      opacity: 1,
      backgroundColor: 'rgba(0,0,0,0.8)',
      transition: { duration: 0.8, ease: "easeInOut" }, // Durasi lebih cepat
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.8, ease: "easeInOut" }, // Durasi lebih cepat
    },
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.5, rotate: -90 },
    logo: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    text: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Durasi lebih cepat
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.6, ease: "easeInOut" }, // Durasi lebih cepat
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        key="loading-container"
        initial="initial"
        animate={loadingStage}
        exit="exit"
        variants={containerVariants}
        className="fixed inset-0 flex items-center justify-center z-50 bg-black"
      >
        <motion.div
          variants={logoVariants}
          className="flex flex-col items-center space-y-6"
        >
          <Image
            src={iconIncu}
            alt="Logo"
            width={200}
            height={200}
            className="rounded-full shadow-2xl"
          />
          {loadingStage === 'text' && (
            <motion.h1
              key="loading-text"
              initial="initial"
              animate="text"
              variants={textVariants}
              className="text-white text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent"
            >
              Muhammad Fiqri
            </motion.h1>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;
