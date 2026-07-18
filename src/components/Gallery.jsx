import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
      title: 'Powerlifting Base',
    },
    {
      src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop',
      title: 'Cardio Core',
    },
    {
      src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
      title: 'Recovery Session',
    },
    {
      src: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600&auto=format&fit=crop',
      title: 'Heavy Rowing',
    },
    {
      src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop',
      title: 'Free Weights Deck',
    },
    {
      src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600&auto=format&fit=crop',
      title: 'Advanced Conditioning',
    },
  ];

  return (
    <section id="gallery" className="relative py-24 w-full bg-rawBg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-rawWhite">
            LUXURY GALLERY
          </h2>
          <p className="text-rawMuted mt-4 text-lg font-inter max-w-lg mx-auto">
            A glimpse inside our premium training spaces, equipment, and elite athletes.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-[24px] border border-white/5 bg-rawSurface shadow-2xl group cursor-pointer break-inside-avoid"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-rawPrimary flex items-center justify-center text-rawWhite shadow-glow-orange"
                >
                  <Eye size={20} />
                </motion.div>
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-rawWhite">
                  View Photo
                </span>
                <span className="text-lg font-bebas text-rawPrimary tracking-wide mt-1">
                  {img.title}
                </span>
              </div>

              {/* Glow accent */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-rawPrimary/30 rounded-[24px] transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
