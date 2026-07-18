import React from 'react';
import { motion } from 'framer-motion';
import Pricing from '../components/Pricing';
import Transformation from '../components/Transformation';

export default function Membership() {
  return (
    <div className="w-full pt-32 bg-rawBg">
      {/* Premium Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-rawAccent/10 blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-rawAccent uppercase mb-4 block">
            INVEST IN YOUR PERFORMANCE
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl tracking-wider text-rawWhite">
            GYM MEMBERSHIP
          </h1>
          <p className="text-rawMuted text-base sm:text-lg max-w-2xl mx-auto mt-4 font-inter leading-relaxed">
            Choose an elite tier to unlock global passport access, advanced biomechanical diagnostic testing, and private coaching blocks.
          </p>
        </motion.div>
      </div>

      <Pricing />
      <Transformation />
    </div>
  );
}
