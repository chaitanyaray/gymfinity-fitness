import React from 'react';
import { motion } from 'framer-motion';

export default function TrustedBy() {
  const brands = [
    { name: 'NIKE', style: 'font-extrabold tracking-tight italic' },
    { name: 'GYMSHARK', style: 'font-black tracking-tighter' },
    { name: 'TECHNOGYM', style: 'font-semibold tracking-wide font-mono' },
    { name: 'ADIDAS', style: 'font-bold tracking-widest text-xs uppercase' },
    { name: 'MUSCLEBLAZE', style: 'font-black tracking-normal uppercase' },
    { name: 'PUMA', style: 'font-bold tracking-wider italic uppercase' },
    { name: 'ROGUE', style: 'font-extrabold tracking-normal uppercase font-mono' },
    { name: 'ON RUNNING', style: 'font-light tracking-[0.3em] uppercase' },
  ];

  // Double the list for infinite marquee effect
  const marqueeItems = [...brands, ...brands];

  return (
    <section className="py-16 w-full bg-rawBg border-y border-white/5 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-6 mb-4 md:px-12 w-full text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-rawMuted font-semibold font-mono mb-8">
          TRUSTED BY ELITE ATHLETES AND GLOBAL BRANDS
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex overflow-x-hidden">
        {/* Left and Right fade gradient overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-rawBg to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-rawBg to-transparent z-10 pointer-events-none" />

        {/* Moving track */}
        <motion.div 
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
          className="flex gap-20 shrink-0 items-center justify-around min-w-full"
        >
          {marqueeItems.map((brand, idx) => (
            <div 
              key={idx} 
              className={`text-2xl md:text-3xl text-rawMuted/30 hover:text-rawPrimary transition-colors duration-300 font-sans cursor-pointer whitespace-nowrap ${brand.style}`}
            >
              {brand.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
