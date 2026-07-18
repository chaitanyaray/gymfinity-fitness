import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import FAQ from '../components/FAQ';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    program: 'Standard',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', program: 'Standard', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full pt-32 bg-rawBg">
      {/* Premium Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-rawPrimary/10 blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-rawPrimary uppercase mb-4 block">
            ESTABLISH CONTACT
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl tracking-wider text-rawWhite">
            GET IN TOUCH
          </h1>
          <p className="text-rawMuted text-base sm:text-lg max-w-2xl mx-auto mt-4 font-inter leading-relaxed">
            Ready to reconstruct your physique? Book your biological assessment or drop us a message to schedule a private facility walk-through.
          </p>
        </motion.div>
      </div>

      {/* Main Grid: Form + Address Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 relative z-10">
        
        {/* Left Side: Address details */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-8">
            <h2 className="font-bebas text-3xl md:text-4xl text-rawWhite tracking-wide">
              FACILITY INFORMATION
            </h2>
            
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rawPrimary/10 border border-rawPrimary/20 flex items-center justify-center text-rawPrimary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-rawWhite">STUDIO ADDRESS</h4>
                  <p className="text-sm text-rawMuted mt-1">4th Floor, Snehapuri Colony, Moti Nagar<br />Hyderabad, Telangana - 500018</p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rawAccent/10 border border-rawAccent/20 flex items-center justify-center text-rawAccent shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-rawWhite">WHATSAPP / PHONE</h4>
                  <p className="text-sm text-rawMuted mt-1">
                    <a href="https://wa.me/918328280273" target="_blank" rel="noopener noreferrer" className="hover:text-rawPrimary transition-colors font-semibold">+91 83282 80273</a>
                    <br />Open: 5:30 AM - 10:00 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rawSecondary/10 border border-rawSecondary/20 flex items-center justify-center text-rawSecondary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-rawWhite">INQUIRIES</h4>
                  <p className="text-sm text-rawMuted mt-1">membership@gymfinity.in<br />concierge@gymfinity.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hour checklist */}
          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-rawWhite mb-4">ACCESS HOURS</h4>
            <div className="flex flex-col gap-2 text-xs font-inter text-rawMuted">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Standard Access</span>
                <span>5:30 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Elite Studio Access</span>
                <span className="text-rawAccent font-semibold">24/7 Access Enabled</span>
              </div>
              <div className="flex justify-between pt-1">
                <span>Sauna & Recovery Deck</span>
                <span>6:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
            {/* Top border glow line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-orange" />
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-rawMuted">YOUR NAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Liam Henderson"
                      className="w-full bg-rawSurface border border-white/10 rounded-xl px-4 py-3 text-sm text-rawWhite placeholder-rawMuted/50 focus:border-rawPrimary focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-rawMuted">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. liam@domain.com"
                      className="w-full bg-rawSurface border border-white/10 rounded-xl px-4 py-3 text-sm text-rawWhite placeholder-rawMuted/50 focus:border-rawPrimary focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-rawMuted">MEMBERSHIP SELECTION</label>
                    <select
                      name="program"
                      value={formState.program}
                      onChange={handleChange}
                      className="w-full bg-rawSurface border border-white/10 rounded-xl px-4 py-3 text-sm text-rawWhite focus:border-rawPrimary focus:outline-none transition-colors"
                    >
                      <option value="Basic">Basic Strength (₹4,999 / Mo)</option>
                      <option value="Standard">Elite Standard (₹9,999 / Mo)</option>
                      <option value="Premium">Ultimate Premium (₹14,999 / Mo)</option>
                      <option value="Biometrics">Standalone Biometric Assessment</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-rawMuted">YOUR MESSAGE</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your fitness objectives or inquiry details..."
                      className="w-full bg-rawSurface border border-white/10 rounded-xl px-4 py-3 text-sm text-rawWhite placeholder-rawMuted/50 focus:border-rawPrimary focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-4 rounded-full bg-gradient-orange text-rawWhite font-bold text-sm tracking-wide hover:shadow-glow-orange-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Request <Send size={14} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-rawPrimary/15 border border-rawPrimary/20 flex items-center justify-center text-rawPrimary shadow-glow-orange animate-bounce">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-bebas text-3xl text-rawWhite tracking-wide">
                    REQUEST SUBMITTED
                  </h3>
                  <p className="text-sm text-rawMuted max-w-sm leading-relaxed">
                    Thank you, <strong className="text-rawWhite">{formState.name}</strong>. Our Performance Concierge will review your request and get in touch within the next 12 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Render Accordion FAQ below */}
      <FAQ />
    </div>
  );
}
