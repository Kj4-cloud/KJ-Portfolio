import { motion } from 'framer-motion';
import { useRef } from 'react';

/**
 * GlassCard — Clean card with subtle border and hover elevation
 */
export function GlassCard({
  children,
  className = '',
  tilt = false,
  ...props
}) {
  return (
    <motion.div
      whileHover={tilt ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`relative rounded-2xl glass-card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
