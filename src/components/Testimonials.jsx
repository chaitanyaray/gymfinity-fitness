import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderTimer = useRef(null);

  const testimonials = [
    {
      name: 'Liam Henderson',
      role: 'Investment Partner',
      quote: 'GYMFINITY reconstructed my entire mindset around physical limits. The 1-on-1 biological tracking and custom macro plans are unparalleled. Best investment in my longevity.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      videoThumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Clara Dupont',
      role: 'Creative Director',
      quote: 'The environment is absolute luxury. You feel like you are training in a private space engineered for elite athletes. The sauna and recovery suite are world-class.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      videoThumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'David Kincaid',
      role: 'Tech Founder',
      quote: 'State-of-the-art Technogym gear, contract-free plans, and elite coaching support. It is precisely the friction-free, premium experience I wanted. Highly recommended.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      videoThumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400&auto=format&fit=crop',
    },
  ];

  const resetTimer = () => {
    if (sliderTimer.current) clearInterval(sliderTimer.current);
    sliderTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (sliderTimer.current) clearInterval(sliderTimer.current);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  };

  return (
    <section id="testimonials" className="relative py-24 w-full bg-rawBg border-b border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rawPrimary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-5xl md:text-7xl tracking-wider text-rawWhite"
          >
            MEMBER TESTIMONIALS
          </motion.h2>
          <p className="text-rawMuted mt-4 text-lg font-inter max-w-lg mx-auto">
            Read stories of transformation, luxury training experiences, and elite results.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Column: Testimonial details (glass quote card) */}
          <div className="lg:col-span-7 relative z-10 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-8 md:p-12 rounded-[30px] border border-white/5 relative overflow-hidden"
              >
                {/* Large background Quote decoration */}
                <div className="absolute -top-4 -right-4 text-white/5 pointer-events-none">
                  <Quote size={120} />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-rawSecondary mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFC107" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg md:text-xl font-medium font-inter text-rawWhite leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* User Details */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-rawPrimary/30"
                  />
                  <div>
                    <h4 className="text-base font-bold text-rawWhite leading-none">
                      {testimonials[activeIndex].name}
                    </h4>
                    <span className="text-xs text-rawMuted font-mono uppercase tracking-widest mt-1 block">
                      {testimonials[activeIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-rawPrimary flex items-center justify-center text-rawWhite bg-white/5 hover:bg-rawPrimary/10 transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-rawPrimary flex items-center justify-center text-rawWhite bg-white/5 hover:bg-rawPrimary/10 transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2 ml-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveIndex(idx);
                      resetTimer();
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? 'w-6 bg-rawPrimary' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Video Play Preview */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group"
              >
                {/* Background image preview */}
                <img
                  src={testimonials[activeIndex].videoThumbnail}
                  alt="Video interview thumbnail"
                  className="w-full h-full object-cover filter brightness-[0.6] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-rawPrimary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Central Play Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-rawPrimary text-rawWhite flex items-center justify-center shadow-glow-orange-lg hover:scale-110 active:scale-95 transition-all duration-300">
                  <Play size={24} fill="#fff" className="ml-1" />
                </button>

                {/* Accent labels */}
                <div className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[9px] font-mono tracking-widest text-rawWhite uppercase border border-white/10">
                  Play Transformation Story
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
