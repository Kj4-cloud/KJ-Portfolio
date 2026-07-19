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
                    ? 'bg-neutral-900 border-neutral-900 text-white'
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
                <GlassCard className="p-6 h-full group" tilt={false}>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-700 transition-colors duration-200 group-hover:bg-neutral-100">
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
                    {category.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + j * 0.03 }}
                        className="glass-pill"
                      >
                        {skill}
                      </motion.span>
                    ))}
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
