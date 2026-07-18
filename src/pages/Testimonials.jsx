import React from 'react';
import { motion } from 'framer-motion';
import TestimonialsSlider from '../components/Testimonials';

export default function Testimonials() {
  return (
    <div className="w-full pt-32 bg-rawBg">
      {/* Premium Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-rawSecondary/10 blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-rawSecondary uppercase mb-4 block">
            VERIFIED PHYSICAL adapts
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl tracking-wider text-rawWhite">
            MEMBER RESULTS
          </h1>
          <p className="text-rawMuted text-base sm:text-lg max-w-2xl mx-auto mt-4 font-inter leading-relaxed">
            Listen to verified physical adapt stories, athletic progressions, and reviews from members who restructured their lifestyle.
          </p>
        </motion.div>
      </div>

      <TestimonialsSlider />
    </div>
  );
}
