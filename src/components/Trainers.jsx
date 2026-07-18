import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const InstagramIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const TwitterIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Trainers() {
  const trainers = [
    {
      name: 'Marcus Vance',
      role: 'Head Strength Coach',
      experience: '12+ Years Experience',
      spec: 'Powerlifting & Hypertrophy',
      certs: 'CSCS, USAW-L2',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Elena Rostova',
      role: 'Mobility Director',
      experience: '8 Years Experience',
      spec: 'Kinetic Mechanics & Yoga',
      certs: 'FMS-Level 2, RYT-500',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Jordan Croft',
      role: 'Athletic Conditioning',
      experience: '10 Years Experience',
      spec: 'HIIT & Sports Performance',
      certs: 'NASM-PES, Kettlebell Specialist',
      image: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Cardio & Endurance Specialist',
      experience: '7 Years Experience',
      spec: 'Metabolic Conditioning',
      certs: 'ACE-GFI, Precision Nutrition L1',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=500&auto=format&fit=crop',
    },
  ];

  return (
    <section id="trainers" className="relative py-24 w-full bg-rawBg border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-rawPrimary/5 blur-[120px] pointer-events-none" />

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
            ELITE COACHES
          </motion.h2>
          <p className="text-rawMuted mt-4 text-lg font-inter max-w-lg mx-auto">
            Train with world-class experts dedicated to engineering your absolute peak condition.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((coach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group glass-card rounded-[24px] overflow-hidden flex flex-col h-[480px] cursor-pointer"
            >
              {/* Photo Container */}
              <div className="relative flex-grow overflow-hidden h-[300px]">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover filter saturate-[0.25] group-hover:saturate-[1] group-hover:scale-105 transition-all duration-500 ease-out"
                />
                
                {/* Floating Cert Badges */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[9px] font-mono tracking-widest text-rawAccent uppercase">
                  <Award size={10} /> {coach.certs.split(',')[0]}
                </div>
              </div>

              {/* Info Container */}
              <div className="p-6 bg-rawSurface flex flex-col justify-between border-t border-white/5 relative">
                {/* Bottom orange gradient hover border */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <h3 className="font-bebas text-2xl tracking-wide text-rawWhite group-hover:text-rawPrimary transition-colors duration-300">
                    {coach.name}
                  </h3>
                  <p className="text-xs text-rawMuted font-mono uppercase tracking-widest mt-1">
                    {coach.role}
                  </p>
                  
                  {/* Detailed specs */}
                  <div className="mt-4 flex flex-col gap-1 text-[11px] font-inter text-rawMuted">
                    <p><strong className="text-rawWhite font-normal">Spec:</strong> {coach.spec}</p>
                    <p><strong className="text-rawWhite font-normal">Exp:</strong> {coach.experience}</p>
                  </div>
                </div>

                {/* Social media icons */}
                <div className="mt-6 flex items-center gap-4 text-rawMuted group-hover:text-rawWhite transition-colors duration-300">
                  <span className="hover:text-rawPrimary transition-colors duration-200">
                    <InstagramIcon size={16} />
                  </span>
                  <span className="hover:text-rawPrimary transition-colors duration-200">
                    <TwitterIcon size={16} />
                  </span>
                  <span className="hover:text-rawPrimary transition-colors duration-200">
                    <LinkedinIcon size={16} />
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
