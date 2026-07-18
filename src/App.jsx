import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Component & Page Imports
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import Programs from './pages/Programs';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Trainers from './pages/Trainers';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Loading animation simulation
  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // fade out gap
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-center items-center select-none"
          >
            {/* Ambient background glow */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-rawPrimary/20 blur-[100px] pointer-events-none" />

            <div className="flex flex-col items-center gap-4 text-center z-10">
              {/* Logo */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="font-bebas text-5xl sm:text-6xl tracking-widest text-rawWhite mb-2"
              >
                GYM<span className="text-rawPrimary">FINITY</span>
              </motion.div>

              {/* Loader percentage */}
              <div className="font-mono text-5xl sm:text-6xl font-extrabold text-rawWhite tracking-tighter">
                {loadProgress}%
              </div>

              {/* Progress Line */}
              <div className="w-[180px] sm:w-[240px] h-[2px] bg-white/10 rounded-full overflow-hidden relative mt-4">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-orange shadow-glow-orange rounded-full"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>

              <div className="text-[10px] font-mono tracking-widest text-rawMuted uppercase mt-2">
                ESTABLISHING PERFORMANCE TELEMETRY
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Layout with Routing */}
      {!loading && (
        <BrowserRouter>
          <div className="relative min-h-screen bg-rawBg flex flex-col items-center overflow-x-hidden">
            {/* Scroll reset utility */}
            <ScrollToTop />

            {/* Global custom cursor */}
            <CustomCursor />

            {/* Floating WhatsApp button */}
            <WhatsAppButton />

            {/* Navbar Shell */}
            <Navbar />

            {/* Route Content pages */}
            <main className="w-full flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}
