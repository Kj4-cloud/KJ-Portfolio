import { motion } from 'framer-motion';
import { useRef } from 'react';

/**
 * GlassCard — Clean card with subtle border and hover elevation
 */
export function GlassCard({
  children,
  className = '',
  tilt = false,
  variant = 'default',
  ...props
}) {
  const cardClass = variant === 'liquid' ? 'liquid-glass-card' : 'glass-card';
  return (
    <motion.div
      whileHover={tilt ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`relative rounded-[28px] ${cardClass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
