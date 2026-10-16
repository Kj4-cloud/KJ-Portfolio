import { motion } from 'framer-motion';
import { personal } from '@/data/personal';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

/**
 * Footer — Minimalist footer with social links and back-to-top
 */
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: personal.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: personal.social.email, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-neutral-200 bg-white" role="contentinfo">
      <div className="section-padding py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="font-display font-semibold text-lg tracking-tight cursor-default text-neutral-900"
            >
              KARAN<span className="text-neutral-400">.</span>
            </motion.div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <MagneticButton key={label} strength={0.15}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg
                             bg-white border border-neutral-200
                             text-neutral-500 hover:text-neutral-900 hover:border-neutral-300
                             transition-all duration-200 shadow-sm"
                  >
                    <Icon size={16} />
                  </a>
                </MagneticButton>
              ))}
            </div>

            {/* Back to top */}
            <MagneticButton strength={0.15}>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                         bg-white border border-neutral-200
                         text-neutral-500 hover:text-neutral-900 hover:border-neutral-300
                         transition-all duration-200 text-xs font-medium cursor-pointer shadow-sm"
                aria-label="Scroll back to top"
              >
                <ArrowUp size={13} />
                Back to top
              </button>
            </MagneticButton>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-neutral-100 text-center">
            <p className="text-xs text-neutral-400">
              © {new Date().getFullYear()} Karan Jadhav.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
