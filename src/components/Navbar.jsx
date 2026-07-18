import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CheckCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'
  
  // Form States
  const [fullName, setFullName] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Membership', href: '/membership' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Trainers', href: '/trainers' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (activeTab === 'login') {
      setSuccessMessage(`Welcome back! Telemetry credentials authorized for ${loginEmail}. Redirecting to dashboard...`);
    } else {
      setSuccessMessage(`Account created successfully! Welcome to the GYMFINITY community, ${fullName}. Performance profile established.`);
    }
    
    setIsLoginSuccess(true);
    setTimeout(() => {
      setIsLoginSuccess(false);
      setIsLoginModalOpen(false);
      setLoginEmail('');
      setFullName('');
      setPassword('');
    }, 2500);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-500 ${
          isScrolled 
            ? 'bg-rawBg/95 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-transparent py-6 border-b border-white/0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <span className="font-bebas text-3xl tracking-wider text-rawWhite">
              GYM<span className="text-rawPrimary">FINITY</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => {
              const isLinkActive = location.pathname === link.href;
              return (
                <Link
                  key={idx}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 py-2 group ${
                    isLinkActive ? 'text-rawWhite' : 'text-rawMuted hover:text-rawWhite'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-rawPrimary transition-all duration-300 ${
                    isLinkActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => { setActiveTab('login'); setIsLoginModalOpen(true); }}
              className="px-6 py-2.5 rounded-full border border-white/20 hover:border-rawPrimary hover:text-rawWhite text-rawWhite text-sm font-semibold transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              Login
            </button>
            <Link 
              to="/membership" 
              className="px-6 py-2.5 rounded-full bg-gradient-orange text-rawWhite text-sm font-semibold hover:shadow-glow-orange hover:bg-rawPrimary/90 transition-all duration-300 text-center"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-rawWhite p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 w-full bg-rawSurface border-b border-white/5 z-30 lg:hidden px-6 py-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => {
                const isLinkActive = location.pathname === link.href;
                return (
                  <Link
                    key={idx}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors py-1 ${
                      isLinkActive ? 'text-rawPrimary font-semibold' : 'text-rawMuted hover:text-rawWhite'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="h-[1px] bg-white/5 w-full my-2" />
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setActiveTab('login'); setIsLoginModalOpen(true); }}
                className="w-full py-3 rounded-full border border-white/20 hover:border-rawPrimary text-rawWhite font-semibold text-center transition-all cursor-pointer"
              >
                Login
              </button>
              <Link 
                to="/membership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-gradient-orange text-rawWhite font-semibold text-center hover:shadow-glow-orange transition-all text-center"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Member Login & Register Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-6"
          >
            {/* Click outer to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsLoginModalOpen(false)} />

            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-[30px] w-full max-w-md relative overflow-hidden border border-white/10 z-10"
            >
              {/* Top accent glow line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-orange" />
              
              {/* Background ambient lighting */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-rawPrimary/10 blur-[40px] rounded-full pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-6 right-6 text-rawMuted hover:text-rawWhite transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <AnimatePresence mode="wait">
                {!isLoginSuccess ? (
                  <motion.div
                    key="modalContent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Switcher Tabs */}
                    <div className="flex bg-rawSurface border border-white/5 p-1 rounded-full relative mt-4">
                      <button
                        onClick={() => setActiveTab('login')}
                        className={`flex-1 py-2 text-xs font-mono font-bold tracking-widest rounded-full transition-all duration-300 relative z-10 ${
                          activeTab === 'login' ? 'text-rawWhite' : 'text-rawMuted hover:text-rawWhite'
                        }`}
                      >
                        LOGIN
                      </button>
                      <button
                        onClick={() => setActiveTab('register')}
                        className={`flex-1 py-2 text-xs font-mono font-bold tracking-widest rounded-full transition-all duration-300 relative z-10 ${
                          activeTab === 'register' ? 'text-rawWhite' : 'text-rawMuted hover:text-rawWhite'
                        }`}
                      >
                        REGISTER
                      </button>
                      {/* Active Indicator Slide Overlay */}
                      <motion.div
                        className="absolute top-1 bottom-1 bg-rawPrimary rounded-full shadow-glow-orange"
                        initial={false}
                        animate={{
                          left: activeTab === 'login' ? '4px' : '50%',
                          right: activeTab === 'login' ? '50%' : '4px',
                        }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    </div>

                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                      {/* Name input (only for register) */}
                      <AnimatePresence mode="popLayout">
                        {activeTab === 'register' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-1.5 overflow-hidden"
                          >
                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-rawMuted">FULL NAME</label>
                            <input 
                              type="text" 
                              required 
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="e.g. Liam Henderson" 
                              className="w-full bg-rawSurface border border-white/10 rounded-xl px-4 py-3 text-sm text-rawWhite placeholder-rawMuted/40 focus:border-rawPrimary focus:outline-none transition-colors" 
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-rawMuted">EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          required 
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="e.g. member@domain.in" 
                          className="w-full bg-rawSurface border border-white/10 rounded-xl px-4 py-3 text-sm text-rawWhite placeholder-rawMuted/40 focus:border-rawPrimary focus:outline-none transition-colors" 
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-rawMuted">PASSWORD</label>
                          {activeTab === 'login' && (
                            <a href="#" className="text-[10px] font-mono text-rawPrimary hover:underline">FORGOT PASSWORD?</a>
                          )}
                        </div>
                        <input 
                          type="password" 
                          required 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••" 
                          className="w-full bg-rawSurface border border-white/10 rounded-xl px-4 py-3 text-sm text-rawWhite placeholder-rawMuted/40 focus:border-rawPrimary focus:outline-none transition-colors" 
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="w-full py-4 rounded-full bg-gradient-orange text-rawWhite font-bold text-sm tracking-wide hover:shadow-glow-orange-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-4 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {activeTab === 'login' ? 'Authenticate Access' : 'Create Performance Profile'}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-rawAccent/15 border border-rawAccent/20 flex items-center justify-center text-rawAccent shadow-glow-teal animate-bounce">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-bebas text-3xl text-rawWhite tracking-wide">
                      {activeTab === 'login' ? 'WELCOME BACK' : 'REGISTRATION SUCCESS'}
                    </h3>
                    <p className="text-sm text-rawMuted max-w-xs leading-relaxed">
                      {successMessage}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
