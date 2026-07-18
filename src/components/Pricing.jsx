import React from 'react';
import { motion } from 'framer-motion';
import { Check, Flame } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Strength',
      price: '4,999',
      desc: 'Perfect for standard fitness training.',
      features: [
        'Standard equipment access',
        'Locker & shower facilities',
        '3 Gym visits per week',
        'Free high-speed WiFi',
        'Gymfinity App integration',
      ],
      popular: false,
      cta: 'Choose Basic Plan',
    },
    {
      name: 'Elite Standard',
      price: '9,999',
      desc: 'Fully loaded for maximum physical gains.',
      features: [
        'Unlimited 24/7 access',
        'Biostrength & Technogym gear',
        '2 Personal coaching sessions/mo',
        'Custom nutrition blueprints',
        'Sauna & recovery deck access',
        '10 Group classes per month',
      ],
      popular: true,
      cta: 'Become Elite Standard',
    },
    {
      name: 'Ultimate Premium',
      price: '14,999',
      desc: 'VIP tier with full biological tracking.',
      features: [
        'Global VIP gym passport',
        'Unlimited 1-on-1 coaching',
        'Biometric & VO2 max testing',
        'Private VIP recovery suite access',
        'Daily guest access pass',
        'Premium laundry & towel service',
        'All group fitness classes included',
      ],
      popular: false,
      cta: 'Go Ultimate Premium',
    },
  ];

  return (
    <section id="membership" className="relative py-24 w-full bg-rawBg border-b border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-rawPrimary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rawAccent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-5xl md:text-7xl tracking-wider text-rawWhite"
          >
            MEMBERSHIP PLANS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-rawMuted mt-4 text-lg font-inter max-w-lg mx-auto"
          >
            Invest in your longevity. Select a pricing program tailored to your goals.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className={`flex flex-col relative rounded-3xl ${
                plan.popular 
                  ? 'bg-gradient-to-b from-rawPrimary to-rawSecondary p-[1.5px] lg:scale-105 z-10 shadow-[0_20px_50px_rgba(255,90,31,0.2)]' 
                  : 'border border-white/5 bg-rawSurface z-0'
              }`}
            >
              {/* Inside Wrapper for Popular Card with gradient border */}
              <div className={`flex flex-col justify-between p-8 h-full rounded-[23px] flex-1 ${
                plan.popular ? 'bg-rawSurface' : ''
              }`}>
                
                {/* Card Header */}
                <div>
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-orange text-rawWhite text-[10px] font-mono font-bold uppercase rounded-full tracking-widest flex items-center gap-1 shadow-glow-orange">
                      <Flame size={12} fill="#fff" /> Most Popular
                    </span>
                  )}
                  
                  <h3 className="font-bebas text-3xl tracking-wide text-rawWhite mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-rawMuted font-inter mb-6 leading-relaxed">
                    {plan.desc}
                  </p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-2xl font-mono font-bold text-rawMuted">₹</span>
                    <span className="text-5xl font-mono font-extrabold text-rawWhite tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-rawMuted ml-1">/ Month</span>
                  </div>

                  <div className="h-[1px] bg-white/5 w-full mb-8" />

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-4 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-rawWhite/90 font-inter">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          plan.popular 
                            ? 'bg-rawPrimary/15 text-rawPrimary border border-rawPrimary/20' 
                            : 'bg-white/5 text-rawMuted border border-white/10'
                        }`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-xs font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button className={`w-full py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-orange text-rawWhite hover:shadow-glow-orange-lg hover:bg-rawPrimary/90' 
                    : 'bg-white/5 hover:bg-rawPrimary text-rawWhite hover:shadow-glow-orange'
                }`}>
                  {plan.cta}
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
