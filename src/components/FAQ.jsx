import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is included in the Elite Standard Membership?',
      a: 'The Elite Standard membership grants unlimited 24/7 access to our premium facilities, including all high-tech Technogym Biostrength equipment. It also features 2 personal coaching sessions per month, custom nutrition macro plans, sauna & recovery deck access, and up to 10 group classes monthly.',
    },
    {
      q: 'Can I freeze or cancel my membership at any time?',
      a: 'Yes. All our monthly recurring plans are contract-free. You can freeze your account for up to 3 months per calendar year or cancel with a simple 10-day notice via your Gymfinity biometric portal.',
    },
    {
      q: 'Are personal coaching sessions customized for rehabilitation?',
      a: 'Absolutely. Our coaching team holds accredited degrees (CSCS, PES, Kinesiology). We conduct comprehensive biological mapping (FMS assessment, VO2 Max) to design safe progression models tailored to recovery, injury prevention, and athletic performance.',
    },
    {
      q: 'Do you offer biological mapping and VO2 max scans separately?',
      a: 'Yes, members and non-members can book standalone sports science assessments. This includes full body scans, resting metabolic rate measurements, VO2 max testing, and functional movement screening.',
    },
    {
      q: 'Can I bring guest visitors with my passport access?',
      a: 'Ultimate Premium members receive 1 complimentary guest pass per gym visit. Guests must sign in at the front concierge desk and can access all open training zones.',
    },
  ];

  return (
    <section id="contact" className="relative py-24 w-full bg-rawBg border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rawPrimary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-5xl md:text-7xl tracking-wider text-rawWhite"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
          <p className="text-rawMuted mt-4 text-lg font-inter max-w-lg mx-auto">
            Got questions? We have compiled responses to our most common inquiries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div
                key={idx}
                className="glass-card rounded-[20px] overflow-hidden border border-white/5 transition-all duration-300"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-inter font-semibold text-rawWhite transition-colors duration-300 hover:text-rawPrimary"
                >
                  <span className="text-base md:text-lg">{faq.q}</span>
                  
                  {/* Rotating Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${
                      isOpen 
                        ? 'border-rawPrimary text-rawPrimary bg-rawPrimary/10' 
                        : 'border-white/10 text-rawMuted'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                {/* Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-sm text-rawMuted font-inter leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
