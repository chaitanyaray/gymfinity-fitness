import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare } from 'lucide-react';

export default function WhatsAppButton({
  phoneNumber = '918328280273',
  defaultMessage = 'Hi, I have a question about Gymfinity!',
  greetingText = 'Hi! 👋 Have any questions about Gymfinity?',
  delayMs = 3000,
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the tooltip in this session
    const isDismissed = sessionStorage.getItem('gymfinity_whatsapp_dismissed');
    if (isDismissed) return;

    // Show tooltip after delay
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const handleDismiss = (e) => {
    e.stopPropagation(); // Avoid triggering the button link click
    setShowTooltip(false);
    sessionStorage.setItem('gymfinity_whatsapp_dismissed', 'true');
  };

  const handleChatRedirect = () => {
    const encodedText = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Greeting Tooltip / Pop-up */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={handleChatRedirect}
            className="pointer-events-auto cursor-pointer max-w-[280px] sm:max-w-xs p-4 rounded-2xl glass-card bg-rawSurface/90 border border-white/10 shadow-2xl relative flex gap-3 select-none"
          >
            {/* Ambient green glow on tooltip */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-rawMuted hover:text-rawWhite hover:bg-white/15 transition-all"
              aria-label="Dismiss message"
            >
              <X size={12} />
            </button>

            {/* Avatar / Icon inside bubble */}
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
              <MessageSquare size={16} />
            </div>

            {/* Message Body */}
            <div className="pr-4">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">Concierge Support</span>
              <p className="text-xs text-rawWhite/90 mt-1 font-inter leading-relaxed">
                {greetingText}
              </p>
              <p className="text-[9px] text-rawMuted font-mono mt-1.5 uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                Online & Ready
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={handleChatRedirect}
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          boxShadow: '0 0 25px rgba(16, 185, 129, 0.6)' 
        }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center cursor-pointer shadow-lg hover:shadow-emerald-500/40 transition-shadow focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-[#050505]"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse radar background effect */}
        <span className="absolute -inset-1.5 rounded-full bg-emerald-500/30 animate-ping -z-10 opacity-75" />
        
        {/* SVG WhatsApp Logo */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-7 h-7 select-none filter drop-shadow-md"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.417 9.86-9.858.002-2.636-1.023-5.114-2.888-6.981-1.865-1.867-4.348-2.894-6.984-2.895-5.445 0-9.867 4.418-9.869 9.86-.001 1.768.463 3.49 1.345 5.021l-.998 3.645 3.731-.977zm11.308-4.48c-.287-.144-1.7-.84-1.967-.938-.268-.097-.463-.144-.658.144-.195.288-.755.938-.925 1.131-.17.194-.34.218-.627.074-1.865-.93-3.076-2.115-3.864-3.472-.208-.358.208-.333.596-1.107.12-.24.06-.45-.03-.593-.09-.144-.658-1.586-.902-2.174-.237-.57-.48-.492-.658-.501-.17-.008-.365-.01-.56-.01-.195 0-.512.074-.78.366-.268.288-1.024 1.001-1.024 2.439 0 1.438 1.047 2.827 1.193 3.023.146.195 2.059 3.144 4.986 4.409.696.302 1.24.482 1.662.616.701.223 1.34.191 1.844.116.562-.083 1.7-.695 1.943-1.367.243-.672.243-1.246.17-1.367-.073-.122-.268-.194-.555-.338z" />
        </svg>
      </motion.button>

    </div>
  );
}
