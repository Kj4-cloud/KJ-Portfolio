import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, motion, useInView } from 'framer-motion';

/**
 * AnimatedCounter — Spring-physics number counting animation
 * Triggers when the element scrolls into view
 */
export function AnimatedCounter({ value, suffix = '', duration = 2, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  const displayRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      <span ref={displayRef}>0{suffix}</span>
    </motion.span>
  );
}
