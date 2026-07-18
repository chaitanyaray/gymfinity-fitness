import React from 'react';
import { motion } from 'framer-motion';
import ProgramsGrid from '../components/Programs';

export default function Programs() {
  return (
    <div className="w-full pt-32 bg-rawBg">
      {/* Premium Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-rawPrimary/10 blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-rawPrimary uppercase mb-4 block">
            ELITE PHYSICAL PROTOCOLS
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl tracking-wider text-rawWhite">
            TRAINING PROGRAMS
          </h1>
          <p className="text-rawMuted text-base sm:text-lg max-w-2xl mx-auto mt-4 font-inter leading-relaxed">
            Our specialized curricula combine sports science telemetry, high-end mechanical equipment, and periodized blocks designed to reconstructed your genetic potential.
          </p>
        </motion.div>
      </div>

      {/* Render existing programs list grid */}
      <ProgramsGrid />
    </div>
  );
}
