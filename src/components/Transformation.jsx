import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';

export default function Transformation() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  const stats = [
    { value: '18 lbs', label: 'Weight Lost' },
    { value: '-12%', label: 'Body Fat' },
    { value: '+6 lbs', label: 'Muscle Gain' },
    { value: '42k+', label: 'Calories Burned' },
  ];

  return (
    <section className="relative py-24 w-full bg-rawBg border-b border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rawPrimary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Stats and Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-rawWhite">
              90-DAY <span className="text-rawPrimary">TRANSFORMATION</span>
            </h2>
            <p className="text-rawMuted mt-4 text-lg font-inter">
              Drag the interactive slider to view the transformation results of our elite members. Hard work meets scientific programming.
            </p>
          </motion.div>

          {/* Metric Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-orange" />
                <span className="font-mono text-3xl font-extrabold text-rawWhite tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-rawMuted font-semibold mt-2 block font-mono">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Before-After Interactive Drag Slider */}
        <div className="lg:col-span-7 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[550px] aspect-[4/5] rounded-[30px] overflow-hidden border border-white/10 select-none shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-ew-resize"
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Base Layer - visible on right side) */}
            <img
              src="/images/after_transformation.png"
              alt="After transformation shredded athlete"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute bottom-6 right-6 z-20 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-mono font-bold tracking-widest text-rawAccent uppercase">
              AFTER
            </div>

            {/* Before Image (Top Layer - visible on left side) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Ensure image remains same size as the container */}
              <img
                src="/images/before_transformation.png"
                alt="Before transformation out of shape client"
                className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{ width: containerRef.current?.getBoundingClientRect().width }}
              />
              <div className="absolute bottom-6 left-6 z-20 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-mono font-bold tracking-widest text-rawPrimary uppercase">
                BEFORE
              </div>
            </div>

            {/* Draggable Divider Bar */}
            <div
              className="absolute inset-y-0 z-30 w-[2px] bg-gradient-orange shadow-glow-orange pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-rawSurface border border-rawPrimary shadow-[0_0_20px_rgba(255,90,31,0.5)] flex items-center justify-center text-rawPrimary">
                <ArrowLeftRight size={18} />
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
