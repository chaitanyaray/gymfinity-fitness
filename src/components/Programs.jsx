import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Flame, Activity, Crosshair, Sparkles, UserCheck, ArrowRight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: 'Strength Training',
      icon: Dumbbell,
      bgImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
      desc: 'Build power, increase bone density, and sculpt your ideal physique with heavy lifts.'
    },
    {
      title: 'Weight Loss',
      icon: Flame,
      bgImage: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop',
      desc: 'High-intensity metabolic conditioning programs designed for fast, sustainable fat loss.'
    },
    {
      title: 'Cardio',
      icon: Activity,
      bgImage: 'https://images.unsplash.com/photo-1571731956672-f2b94d7db0cb?q=80&w=800&auto=format&fit=crop',
      desc: 'Boost endurance, heart health, and energy levels with state-of-the-art aerobic zones.'
    },
    {
      title: 'CrossFit',
      icon: Crosshair,
      bgImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
      desc: 'Functional physical movements executed at high intensity to prepare you for any challenge.'
    },
    {
      title: 'Yoga',
      icon: Sparkles,
      bgImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
      desc: 'Align mind, breathing, and physical flexibility in a tranquil, climate-controlled space.'
    },
    {
      title: 'Personal Training',
      icon: UserCheck,
      bgImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
      desc: '1-on-1 performance strategies curated to your biological metrics and ultimate goals.'
    },
  ];

  return (
    <section id="programs" className="relative py-24 w-full bg-rawBg border-b border-white/5">
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
            OUR PROGRAMS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-rawMuted mt-4 text-lg md:text-xl font-inter font-medium"
          >
            Choose your path to greatness.
          </motion.p>
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => {
            const IconComponent = prog.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative h-[380px] rounded-3xl overflow-hidden glass-card cursor-pointer"
              >
                {/* Background image with hover zoom */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 filter brightness-[0.7] saturate-[0.8]"
                  style={{ backgroundImage: `url(${prog.bgImage})` }}
                />
                
                {/* Custom Gradient Overlays */}
                {/* Standard Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30 transition-opacity duration-500 group-hover:opacity-0" />
                
                {/* Glowing Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rawPrimary/85 via-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow ring on borders */}
                <div className="absolute inset-0 border border-white/5 group-hover:border-rawPrimary/30 rounded-3xl transition-all duration-500 pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  {/* Top: Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-rawWhite group-hover:border-rawWhite group-hover:text-rawPrimary transition-colors duration-500 text-rawWhite">
                    <IconComponent size={28} />
                  </div>

                  {/* Bottom: Info */}
                  <div>
                    <h3 className="font-bebas text-3xl tracking-wide text-rawWhite mb-3 group-hover:text-rawWhite transition-colors duration-300">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-rawMuted group-hover:text-rawWhite/90 transition-colors duration-300 line-clamp-2 leading-relaxed">
                      {prog.desc}
                    </p>
                    
                    {/* Animated arrow button */}
                    <div className="mt-6 flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-rawWhite uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Explore Program 
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        <ArrowRight size={14} />
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
