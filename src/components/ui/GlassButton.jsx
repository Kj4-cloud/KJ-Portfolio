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
    primary: `liquid-glass-button`,
    outline: `glass text-neutral-600 hover:text-neutral-900`,
  };
  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.025, y: -1 }}
      whileTap={{ scale: 0.975 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
      </div>
      {Icon && <Icon size={15} className="relative z-10" />}
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
