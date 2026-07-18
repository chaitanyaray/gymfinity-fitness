import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { UserPlus, Activity, ShieldAlert, Award } from 'lucide-react';

export default function Timeline() {
  const containerRef = useRef(null);

  // Track scroll position of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      title: 'Join',
      subtitle: 'STEP 01',
      icon: UserPlus,
      desc: 'Seamless onboarding. Register your biometric profile, synchronize your fitness apps, and establish your high-tier training credentials.',
      color: 'bg-rawPrimary/15 border-rawPrimary/20 text-rawPrimary'
    },
    {
      title: 'Assessment',
      subtitle: 'STEP 02',
      icon: Activity,
      desc: 'Biological mapping. Our coaches conduct medical-grade body composition scans, posture alignment evaluations, and baseline strength threshold testing.',
      color: 'bg-rawAccent/15 border-rawAccent/20 text-rawAccent'
    },
    {
      title: 'Training',
      subtitle: 'STEP 03',
      icon: ShieldAlert,
      desc: 'Customized progression. Execute periodized, science-backed workout programs built around your metabolic footprint and mechanical goals.',
      color: 'bg-rawPrimary/15 border-rawPrimary/20 text-rawPrimary'
    },
    {
      title: 'Transformation',
      subtitle: 'STEP 04',
      icon: Award,
      desc: 'Physiological upgrades. Every 30 days we measure fat loss, lean muscle hyper-trophy, metabolic adaptations, and celebrate elite benchmarks.',
      color: 'bg-rawSecondary/15 border-rawSecondary/20 text-rawSecondary font-bold'
    },
  ];

  return (
    <section ref={containerRef} className="relative py-24 w-full bg-rawBg border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-rawWhite">
            TRAINING EXPERIENCE
          </h2>
          <p className="text-rawMuted mt-4 text-lg font-inter max-w-lg mx-auto">
            Our systematic timeline designed to safely bring you to peak human condition.
          </p>
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line (Base) */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5" />

          {/* Scrolling Filled Line */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-rawPrimary via-rawAccent to-rawSecondary shadow-glow-orange origin-top"
          />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Left Content / Space */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 text-left md:text-right ${isEven ? 'md:block' : 'md:invisible md:h-0 md:p-0 md:pointer-events-none'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-xs font-mono font-bold tracking-widest text-rawPrimary">{step.subtitle}</span>
                        <h3 className="font-bebas text-3xl text-rawWhite mt-1 mb-3">{step.title}</h3>
                        <p className="text-sm text-rawMuted leading-relaxed">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Icon Node in center */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border bg-rawBg flex items-center justify-center z-20">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.2, 1] }}
                      viewport={{ once: true }}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center ${step.color}`}
                    >
                      <IconComponent size={14} />
                    </motion.div>
                  </div>

                  {/* Right Content / Space */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-16 text-left ${!isEven ? 'md:block' : 'md:invisible md:h-0 md:p-0 md:pointer-events-none'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-xs font-mono font-bold tracking-widest text-rawAccent">{step.subtitle}</span>
                        <h3 className="font-bebas text-3xl text-rawWhite mt-1 mb-3">{step.title}</h3>
                        <p className="text-sm text-rawMuted leading-relaxed">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
