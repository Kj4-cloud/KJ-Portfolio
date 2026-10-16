import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useInView } from '@/hooks/useInView';
import { timelineEvents } from '@/data/timeline';
import { Trophy, Code, Rocket } from 'lucide-react';

/**
 * Timeline — Minimalist vertical timeline
 */

const typeIcons = {
  hackathon: Trophy,
  project: Code,
  education: Rocket,
};

const badgeClasses = 'text-neutral-700 border-neutral-200 bg-neutral-100';

export function Timeline() {
  const { ref: lineRef, isInView: lineInView } = useInView({ threshold: 0.1 });

  return (
    <section id="timeline" className="section-padding border-t border-neutral-100 bg-neutral-50/50">
      <SectionHeading
        label="Journey"
        title="Milestones along the way"
        align="center"
      />

      {/* Timeline container */}
      <div className="relative max-w-3xl mx-auto" ref={lineRef}>
        {/* Connecting line */}
        <motion.div
          className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 w-[2px] bg-neutral-200"
          initial={{ height: 0 }}
          animate={lineInView ? { height: '100%' } : { height: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {/* Events */}
        <div className="space-y-12">
          {timelineEvents.map((event, i) => {
            const Icon = typeIcons[event.type] || Code;
            const isLeft = i % 2 === 0;

            return (
              <ScrollReveal
                key={event.id}
                animation={isLeft ? 'fade-right' : 'fade-left'}
                delay={i * 0.08}
                className="relative"
              >
                <div
                  className={`
                    flex flex-col md:flex-row items-start gap-4 md:gap-8
                    ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
                    pl-10 sm:pl-12 md:pl-0
                  `}
                >
                  {/* Content card */}
                  <div className={`w-full flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card rounded-2xl p-4 sm:p-5 md:p-6 w-full md:w-auto inline-block text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${badgeClasses}`}>
                          <Icon size={12} />
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                        <span className="text-xs text-neutral-400">{event.year}</span>
                      </div>

                      <h3 className="text-neutral-900 font-semibold text-base mb-1">
                        {event.title}
                      </h3>

                      {event.subtitle && (
                        <p className="text-neutral-500 text-sm mb-2">{event.subtitle}</p>
                      )}

                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 top-4 md:top-6 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                      className="w-7 h-7 rounded-full bg-white border-2 border-neutral-300
                               flex items-center justify-center z-10"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                    </motion.div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
