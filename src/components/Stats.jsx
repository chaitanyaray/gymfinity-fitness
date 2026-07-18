import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ value, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    // Total duration of count
    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
    
    let timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  // Format count with commas if large
  const formatCount = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <span ref={ref} className="font-mono">
      {formatCount(count)}{suffix}
    </span>
  );
}

export default function Stats() {
  const statItems = [
    { value: '5000', suffix: '+', label: 'Members', desc: 'Active high-performing members' },
    { value: '20', suffix: '+', label: 'Expert Trainers', desc: 'Certified fitness specialists' },
    { value: '50', suffix: '+', label: 'Machines', desc: 'Premium Technogym gear' },
    { value: '15', suffix: '', label: 'Training Zones', desc: 'Dedicated exercise arenas' },
  ];

  return (
    <section className="relative py-24 w-full bg-rawBg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ 
                scale: 1.03,
                borderColor: 'rgba(255, 90, 31, 0.4)',
                boxShadow: '0 20px 40px -10px rgba(255, 90, 31, 0.15)',
              }}
              className="glass-card group flex flex-col justify-between p-8 rounded-3xl relative overflow-hidden"
            >
              {/* Card top gradient indicator */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-orange opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Background ambient lighting */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-rawPrimary/5 blur-2xl group-hover:bg-rawPrimary/15 transition-all duration-500" />

              <div className="mb-4">
                <span className="text-4xl lg:text-5xl font-extrabold tracking-tight text-rawWhite block font-mono">
                  <Counter value={item.value} suffix={item.suffix} />
                </span>
                <span className="text-lg font-bebas tracking-widest text-rawPrimary mt-2 block uppercase">
                  {item.label}
                </span>
              </div>
              <p className="text-sm text-rawMuted font-inter leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
