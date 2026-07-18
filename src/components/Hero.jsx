import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Shield, Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden bg-rawBg pt-20">
      {/* Background Lighting & Particles */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-rawPrimary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-rawPrimary/20 blur-[150px] pointer-events-none z-0" />
      
      {/* Subtle particle accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-12">
        {/* Left Typography Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-rawAccent shadow-glow-teal animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-rawAccent font-mono font-semibold">
              The Luxury Fitness Experience
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="font-bebas text-7xl sm:text-8xl xl:text-9xl leading-[0.9] tracking-wider text-rawWhite select-none"
          >
            UNLEASH <br />
            YOUR <br />
            <span className="outline-glow-text font-bebas">POWER</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="mt-6 text-lg sm:text-xl text-rawMuted font-inter max-w-lg leading-relaxed"
          >
            Train Hard. <br className="sm:hidden" />
            Build Strength. <br className="sm:hidden" />
            Become Legendary.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4 items-center">
            <Link to="/membership" className="px-8 py-4 rounded-full bg-gradient-orange text-rawWhite font-bold hover:shadow-glow-orange-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 text-center">
              Join Membership <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-full border border-white/20 hover:border-rawPrimary text-rawWhite font-semibold hover:bg-white/5 transition-all duration-300 text-center">
              Book Free Trial
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Athlete Image & Floating Cards */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[50vh] lg:min-h-[70vh]">
          {/* Glowing radial background lighting directly behind athlete */}
          <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-rawPrimary/30 blur-[80px] z-0 animate-pulse-slow" />

          {/* Athlete image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative z-10 w-full max-w-[420px] aspect-[4/5] overflow-visible"
          >
            <img
              src="/images/hero_athlete.png"
              alt="Gymfinity Elite Athlete"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </motion.div>

          {/* Floating glass statistic cards around the athlete */}
          {/* Card 1: 5000+ Members */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute top-10 -right-4 sm:-right-8 z-25 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float-1 max-w-[170px]"
          >
            <div className="p-2.5 rounded-xl bg-rawPrimary/10 border border-rawPrimary/20 text-rawPrimary">
              <Star size={20} fill="#FF5A1F" />
            </div>
            <div>
              <p className="font-mono text-lg font-bold leading-none text-rawWhite">5000+</p>
              <p className="text-[11px] uppercase tracking-wider text-rawMuted mt-1">Elite Members</p>
            </div>
          </motion.div>

          {/* Card 2: 20 Trainers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="absolute top-1/3 -left-4 sm:-left-12 z-25 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float-2 max-w-[170px]"
          >
            <div className="p-2.5 rounded-xl bg-rawAccent/10 border border-rawAccent/20 text-rawAccent">
              <Shield size={20} />
            </div>
            <div>
              <p className="font-mono text-lg font-bold leading-none text-rawWhite">20</p>
              <p className="text-[11px] uppercase tracking-wider text-rawMuted mt-1">Expert Trainers</p>
            </div>
          </motion.div>

          {/* Card 3: 4.9 Rating */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-12 -left-2 sm:-left-6 z-25 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float-3 max-w-[160px]"
          >
            <div className="p-2.5 rounded-xl bg-rawSecondary/10 border border-rawSecondary/20 text-rawSecondary">
              <Star size={20} fill="#FFC107" />
            </div>
            <div>
              <p className="font-mono text-lg font-bold leading-none text-rawWhite">4.9</p>
              <p className="text-[11px] uppercase tracking-wider text-rawMuted mt-1">Google Rating</p>
            </div>
          </motion.div>

          {/* Card 4: 15+ Training Zones */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-20 -right-2 sm:-right-8 z-25 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float-1 max-w-[180px]"
          >
            <div className="p-2.5 rounded-xl bg-rawPrimary/10 border border-rawPrimary/20 text-rawPrimary">
              <Play size={20} fill="#FF5A1F" />
            </div>
            <div>
              <p className="font-mono text-lg font-bold leading-none text-rawWhite">15+</p>
              <p className="text-[11px] uppercase tracking-wider text-rawMuted mt-1">Training Zones</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none z-10">
        <span className="text-[10px] uppercase tracking-widest text-rawMuted font-mono">Scroll Down</span>
        <div className="w-[20px] h-[34px] rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <motion.div 
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1.5 bg-rawPrimary rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
