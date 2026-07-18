import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-28 w-full bg-rawBg overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Banner Card */}
        <div className="relative w-full rounded-[40px] bg-gradient-orange overflow-hidden py-20 px-8 md:px-16 text-center shadow-[0_20px_50px_rgba(255,90,31,0.3)]">
          
          {/* Animated Background Lights and Blobs */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25)_0%,transparent_50%)] pointer-events-none" />
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 -left-10 w-40 h-40 rounded-full bg-white/15 backdrop-blur-md border border-white/15 pointer-events-none hidden md:block"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white/10 backdrop-blur-md border border-white/10 pointer-events-none hidden md:block"
          />

          {/* Sparkle decorative element */}
          <div className="flex justify-center mb-6 text-rawBg opacity-80">
            <Sparkles size={36} fill="#050505" />
          </div>

          {/* Massive Typography */}
          <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl xl:text-9xl leading-[0.9] tracking-wider text-rawBg mb-8 select-none">
            YOUR <br />
            BEST VERSION <br />
            STARTS TODAY
          </h2>

          <p className="text-rawBg/80 font-inter text-base sm:text-lg md:text-xl font-medium max-w-lg mx-auto mb-10 leading-relaxed">
            Stop waiting for tomorrow. Join the elite community and reconstructed performance culture at GYMFINITY.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link to="/membership" className="px-8 py-4 rounded-full bg-rawBg text-rawWhite font-bold hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 text-center">
              Join Now <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-full border border-rawBg/25 text-rawBg font-semibold hover:bg-rawBg hover:text-rawWhite transition-all duration-300 text-center">
              Book Free Trial
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
