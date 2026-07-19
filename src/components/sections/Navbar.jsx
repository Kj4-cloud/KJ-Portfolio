import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { personal } from '@/data/personal';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const { progress } = useScrollProgress();
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.05, rootMargin: '-20% 0px -55% 0px' }
    );

    const observedIds = ['hero', ...navLinks.map(({ id }) => id)];
    observedIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] z-[60] origin-left bg-neutral-900"
        style={{ scaleX: progress }}
      />

      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed top-4 left-1/2 z-50 w-[95%] max-w-4xl"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="glass-strong rounded-3xl px-4 sm:px-6 py-[14px] flex items-center justify-between shadow-sm relative">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display font-semibold text-base tracking-tight cursor-pointer bg-transparent border-none text-neutral-900"
          >
            KARAN<span className="text-neutral-400">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {navLinks.map(({ id, label }) => (
              <MagneticButton key={id} strength={0.1}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`
                    relative px-3 py-1.5 text-[13px] font-medium rounded-lg
                    transition-all duration-200 cursor-pointer bg-transparent border-none
                    ${activeSection === id
                      ? 'text-neutral-900'
                      : 'text-neutral-400 hover:text-neutral-700'
                    }
                  `}
                >
                  {activeSection === id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-neutral-100"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              </MagneticButton>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-500 hover:text-neutral-900 transition-colors bg-transparent border-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border border-black/[0.06] rounded-2xl mt-2 px-4 py-3 shadow-sm overflow-hidden"
            >
              {navLinks.map(({ id, label }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(id)}
                  className={`
                    block w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg
                    transition-colors duration-200 cursor-pointer bg-transparent border-none
                    ${activeSection === id
                      ? 'text-neutral-900 bg-neutral-50'
                      : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                    }
                  `}
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
