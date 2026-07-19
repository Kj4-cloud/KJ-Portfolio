import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { skillCategories } from '@/data/skills';
import { Monitor, Server, Cloud, Wrench } from 'lucide-react';

/**
 * Skills — Minimalist card grid with category filtering
 */

const iconMap = {
  Monitor,
  Server,
  Cloud,
  Wrench,
};

const brandColors = {
  // Frontend
  'React': { color: 'rgba(97, 218, 251, 0.85)', glow: 'rgba(97, 218, 251, 0.3)' },
  'Next.js': { color: 'rgba(0, 0, 0, 0.7)', glow: 'rgba(0, 0, 0, 0.15)' },
  'TypeScript': { color: 'rgba(49, 120, 198, 0.85)', glow: 'rgba(49, 120, 198, 0.3)' },
  'Tailwind CSS': { color: 'rgba(6, 182, 212, 0.85)', glow: 'rgba(6, 182, 212, 0.3)' },
  'Framer Motion': { color: 'rgba(240, 36, 182, 0.85)', glow: 'rgba(240, 36, 182, 0.3)' },
  'Zustand': { color: 'rgba(69, 49, 36, 0.85)', glow: 'rgba(69, 49, 36, 0.25)' },
  'React Query': { color: 'rgba(255, 65, 84, 0.85)', glow: 'rgba(255, 65, 84, 0.3)' },

  // Backend
  'Node.js': { color: 'rgba(51, 153, 51, 0.85)', glow: 'rgba(51, 153, 51, 0.25)' },
  'Express.js': { color: 'rgba(53, 53, 53, 0.85)', glow: 'rgba(53, 53, 53, 0.15)' },
  'Django': { color: 'rgba(9, 46, 32, 0.85)', glow: 'rgba(9, 46, 32, 0.25)' },
  'Flask': { color: 'rgba(0, 0, 0, 0.7)', glow: 'rgba(0, 0, 0, 0.15)' },
  'PostgreSQL': { color: 'rgba(51, 103, 145, 0.85)', glow: 'rgba(51, 103, 145, 0.3)' },
  'REST APIs': { color: 'rgba(0, 150, 136, 0.85)', glow: 'rgba(0, 150, 136, 0.3)' },

  // DevOps
  'Docker': { color: 'rgba(36, 150, 237, 0.85)', glow: 'rgba(36, 150, 237, 0.3)' },
  'Kubernetes': { color: 'rgba(50, 108, 229, 0.85)', glow: 'rgba(50, 108, 229, 0.3)' },
  'Jenkins': { color: 'rgba(210, 73, 57, 0.85)', glow: 'rgba(210, 73, 57, 0.25)' },
  'Vercel': { color: 'rgba(0, 0, 0, 0.7)', glow: 'rgba(0, 0, 0, 0.15)' },
  'AWS': { color: 'rgba(255, 153, 0, 0.85)', glow: 'rgba(255, 153, 0, 0.25)' },

  // Tools
  'Git': { color: 'rgba(240, 80, 50, 0.85)', glow: 'rgba(240, 80, 50, 0.3)' },
  'GitHub': { color: 'rgba(24, 23, 23, 0.85)', glow: 'rgba(24, 23, 23, 0.2)' },
  'VS Code': { color: 'rgba(0, 122, 204, 0.85)', glow: 'rgba(0, 122, 204, 0.3)' },

  // Extra/Other typical techs
  'Supabase': { color: 'rgba(62, 207, 142, 0.85)', glow: 'rgba(62, 207, 142, 0.3)' }
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="section-padding border-t border-neutral-100 bg-neutral-50/50">
      <SectionHeading
        label="Technical Arsenal"
        title="Tools I work with every day"
      />

      {/* Category filter tabs */}
      <ScrollReveal animation="fade-up" delay={0.1} className="mb-12">
        <div className="flex flex-wrap gap-2">
          {[{ id: 'all', title: 'All' }, ...skillCategories].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                px-4 py-2 rounded-xl text-sm font-medium
                transition-all duration-200 cursor-pointer
                border
                ${
                  activeCategory === cat.id
                    ? 'liquid-glass-button border-transparent'
                    : 'bg-white border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300'
                }
              `}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Skills grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category, i) => {
            const Icon = iconMap[category.icon] || Monitor;
            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
              >
                <GlassCard className="p-6 h-full group" variant="liquid" tilt={false}>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-white/45 border border-white/50 text-neutral-800 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/60 group-hover:border-white/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-neutral-900 font-semibold text-sm">
                        {category.title}
                      </h3>
                      <p className="text-neutral-500 text-xs mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => {
                      const brand = brandColors[skill] || { color: 'rgba(255, 255, 255, 0.85)', glow: 'rgba(255, 255, 255, 0.1)' };
                      return (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 + j * 0.03 }}
                          className="glass-pill"
                          style={{
                            '--hover-color': brand.color,
                            '--hover-glow': brand.glow,
                          }}
                        >
                          {skill}
                        </motion.span>
                      );
                    })}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
