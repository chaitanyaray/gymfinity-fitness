import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const InstagramIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const TwitterIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const YoutubeIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" /><polygon points="10 15 15 12 10 9" /></svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-rawSurface border-t border-white/5 pt-20 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-1">
              <span className="font-bebas text-3xl tracking-wider text-rawWhite">
                GYM<span className="text-rawPrimary">FINITY</span>
              </span>
            </Link>
            <p className="text-xs text-rawMuted font-inter leading-relaxed max-w-sm">
              GYMFINITY is a high-tier performance ecosystem in Hyderabad. We build custom fitness spaces and periodized, science-backed protocols for elite body conditioning.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 text-rawMuted mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-rawPrimary hover:text-rawWhite flex items-center justify-center border border-white/5 hover:border-rawPrimary transition-all duration-300">
                <InstagramIcon size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-rawPrimary hover:text-rawWhite flex items-center justify-center border border-white/5 hover:border-rawPrimary transition-all duration-300">
                <TwitterIcon size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-rawPrimary hover:text-rawWhite flex items-center justify-center border border-white/5 hover:border-rawPrimary transition-all duration-300">
                <YoutubeIcon size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-rawPrimary hover:text-rawWhite flex items-center justify-center border border-white/5 hover:border-rawPrimary transition-all duration-300">
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-rawWhite uppercase">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#home" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Home</a>
              <a href="#programs" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Programs</a>
              <a href="#membership" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Membership</a>
              <a href="#gallery" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Gallery</a>
              <a href="#trainers" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Trainers</a>
            </div>
          </div>

          {/* Column 3: Programs */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-rawWhite uppercase">
              Programs
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#programs" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Strength Training</a>
              <a href="#programs" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Weight Loss Conditioning</a>
              <a href="#programs" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Endurance Cardio</a>
              <a href="#programs" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Power CrossFit</a>
              <a href="#programs" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Flexibility Yoga</a>
            </div>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-rawWhite uppercase">
              Support
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#contact" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Contact Us</a>
              <a href="#contact" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">FAQs Portal</a>
              <a href="#" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Billing Support</a>
              <a href="#" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Privacy Policy</a>
              <a href="#" className="text-xs text-rawMuted hover:text-rawPrimary transition-colors duration-250">Terms of Service</a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-mono tracking-widest text-rawMuted">
            &copy; 2026 GYMFINITY. ALL RIGHTS RESERVED. TRANSFORMING LIVES IN HYDERABAD.
          </p>
          
          {/* Scroll to top button */}
          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-rawPrimary border border-white/5 hover:border-rawPrimary flex items-center justify-center text-rawWhite hover:shadow-glow-orange transition-all duration-300"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
