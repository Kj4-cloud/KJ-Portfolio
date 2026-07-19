import { motion } from 'framer-motion';

/**
 * GlassButton — Clean minimal button
 * Primary: dark fill. Outline: light border.
 */
export function GlassButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  ...props
}) {
  const Component = href ? motion.a : motion.button;

  const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    px-5 py-2.5 rounded-xl font-medium text-sm
    transition-all duration-200 cursor-pointer
  `;

  const variants = {
    primary: `bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm`,
    outline: `glass text-neutral-600 hover:text-neutral-900`,
  };

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={15} />}
      <span>{children}</span>
    </Component>
  );
}
