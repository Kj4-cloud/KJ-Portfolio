import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

/**
 * SectionHeading — Clean section header with animated word reveal
 */
export function SectionHeading({
  label,
  title,
  align = 'left',
  className = '',
}) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const words = title.split(' ');

  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <div ref={ref} className={`mb-10 sm:mb-14 md:mb-18 max-w-3xl ${alignClasses[align]} ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="inline-block text-[11px] sm:text-xs font-medium uppercase tracking-[0.15em] text-neutral-400 mb-2 sm:mb-3"
      >
        {label}
      </motion.span>

      <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl leading-[1.15] sm:leading-[1.1] tracking-tight text-neutral-900">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.05 + i * 0.06,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </div>
  );
}
