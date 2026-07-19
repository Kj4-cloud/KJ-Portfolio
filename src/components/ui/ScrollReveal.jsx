import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

/**
 * ScrollReveal — Reusable wrapper for scroll-triggered entrance animations
 * Supports fade, slide-up, scale, and blur reveal effects with stagger
 */

const presets = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  'blur-up': {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  ...props
}) {
  const { ref, isInView } = useInView({ threshold: 0.1, once });
  const preset = presets[animation] || presets['fade-up'];

  return (
    <motion.div
      ref={ref}
      initial={preset.hidden}
      animate={isInView ? preset.visible : preset.hidden}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
