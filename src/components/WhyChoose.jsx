import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cpu, Apple, CreditCard, Users, ShieldAlert } from 'lucide-react';

export default function WhyChoose() {
  const features = [
    {
      title: 'Certified Trainers',
      desc: 'Work with degree-backed athletes and medical-grade trainers.',
      icon: Award,
    },
    {
      title: 'Latest Equipment',
      desc: 'Train with premium Biostrength and Skillrun line Technogym systems.',
      icon: Cpu,
    },
    {
      title: 'Nutrition Guidance',
      desc: 'Customized macros and nutrition blueprints crafted by sports nutritionists.',
      icon: Apple,
    },
    {
      title: 'Flexible Membership',
      desc: 'Contract-free choices with global passport access to all raw gyms.',
      icon: CreditCard,
    },
    {
      title: 'Group Classes',
      desc: 'High energy, music-driven classes ranging from spin to powerlifting.',
      icon: Users,
    },
    {
      title: 'Personal Coaching',
      desc: 'Dedicated mentorship, progress telemetry tracking, and form corrections.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section className="relative py-24 w-full bg-rawBg overflow-hidden border-b border-white/5">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-rawPrimary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Immersive Gym Interior Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[30px] overflow-hidden border border-white/10 group"
        >
          {/* Subtle orange lighting overlay inside the image border */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src="/images/gym_interior.png"
            alt="GYMFINITY Luxury Interior"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Highlight ring */}
          <div className="absolute inset-0 border border-white/10 rounded-[30px] pointer-events-none group-hover:border-rawPrimary/30 transition-colors duration-500" />
        </motion.div>

        {/* Right Side: Features */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-rawWhite">
              WHY <span className="text-rawPrimary">GYMFINITY</span>
            </h2>
            <p className="text-rawMuted mt-4 text-lg font-inter max-w-xl">
              We provide an absolute high-tier performance ecosystem. Here is why elite fitness enthusiasts choose us to reconstruct their physical ceilings.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, idx) => {
              const IconComponent = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    borderColor: 'rgba(255, 90, 31, 0.3)',
                    boxShadow: '0 10px 25px -5px rgba(255, 90, 31, 0.1)',
                  }}
                  className="glass-card p-6 rounded-2xl flex flex-col gap-4 border border-white/5 relative overflow-hidden group"
                >
                  {/* Glowing orange icon container */}
                  <div className="w-12 h-12 rounded-xl bg-rawPrimary/10 border border-rawPrimary/20 flex items-center justify-center text-rawPrimary group-hover:bg-rawPrimary group-hover:text-rawWhite transition-all duration-300 shadow-glow-orange">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="font-bebas text-2xl tracking-wide text-rawWhite mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-rawMuted font-inter leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
