import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function WelcomeIntro({ onEnter }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnter();
    }, 1000);
    return () => clearTimeout(timer);
  }, [onEnter]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[9999] bg-[#FFFFFF] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(79, 140, 255, 0.05) 0%, transparent 65%)',
      }}
    >
      {/* Main Content Area */}
      <div className="flex flex-col items-center max-w-2xl px-6 z-10 text-center">
        {/* Elegant Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-display font-medium text-3xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight mb-4 select-none"
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-neutral-500 font-medium text-[11px] sm:text-xs uppercase tracking-[0.25em] select-none"
        >
          Crafting Modern Digital Experiences
        </motion.p>
      </div>
    </motion.div>
  );
}
