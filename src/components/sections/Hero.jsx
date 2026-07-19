import { motion } from 'framer-motion';
import { personal } from '@/data/personal';
import { GlassButton } from '@/components/ui/GlassButton';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Github, Linkedin, ArrowDown, Mail } from 'lucide-react';

/**
 * Hero — Clean minimal hero with large typography, profile photo, and stats
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center"
    >
      <div className="relative z-10 px-6 md:px-12 lg:px-20 xl:px-32 pt-24 pb-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
              {personal.role}
            </span>
          </motion.div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8 text-neutral-900">
            {['Building', 'resilient', 'systems', 'for the', 'modern', 'web.'].map(
              (word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`inline-block mr-[0.25em] ${
                    i >= 4 ? 'text-neutral-400' : ''
                  }`}
                >
                  {word}
                </motion.span>
              )
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-base sm:text-lg text-neutral-500 leading-relaxed mb-10 max-w-lg"
          >
            {personal.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <GlassButton
              variant="primary"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </GlassButton>
            <GlassButton
              variant="primary"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              icon={Mail}
            >
              Get in Touch
            </GlassButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: Github, href: personal.social.github, label: 'GitHub' },
              { icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticButton key={label} strength={0.15}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg
                           border border-neutral-200 text-neutral-400
                           hover:text-neutral-900 hover:border-neutral-300
                           transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.035, y: -5 }}
          transition={{ 
            type: "spring", 
            stiffness: 600, 
            damping: 22,
            // default: { duration: 0.5, delay: 0.4 }                                                                                     -mt-[12%] sm:-mt-[16%] lg:-mt-[20%]                 
          }}
          className="relative flex-shrink-0 lg:ml-auto w-full max-w-[350px] sm:max-w-[440px] md:max-w-[530px] lg:max-w-[620px] cursor-pointer group lg:self-start -mt-[5%] sm:-mt-[10%] lg:-mt-[7%]"
        >
          <img
            src="/karanPfp.png"
            alt="Karan Jadhav — Software Engineer"
            className="w-full h-auto object-cover transition-all duration-300 group-hover:brightness-[1.03] group-hover:contrast-[1.01]"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            }}
            loading="eager"
          />
          {/* Diagonal Glass Shine sweep overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden"
               style={{
                 maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
               }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[700ms] ease-out" />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="relative z-10 px-6 md:px-12 lg:px-20 xl:px-32 pb-12"
      >
        <div className="border border-neutral-200 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {personal.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-display font-bold text-3xl md:text-4xl text-neutral-900"
                />
                <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-neutral-300 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-neutral-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
