import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { personal } from '@/data/personal';
import { Trophy, Star, GitPullRequest, Code2 } from 'lucide-react';

/**
 * Achievements — Stats and recognition highlights
 */
export function Achievements() {
  const highlights = [
    {
      icon: Trophy,
      title: 'Hackathon Wins',
      value: 2,
      suffix: '+',
      description: 'Competitive hackathon projects recognized for innovation',
    },
    {
      icon: Code2,
      title: 'Projects Built',
      value: 40,
      suffix: '+',
      description: 'Production-grade applications shipped and maintained',
    },
    {
      icon: GitPullRequest,
      title: 'Open Source',
      value: 50,
      suffix: '+',
      description: 'Contributions across various repositories',
    },
    {
      icon: Star,
      title: 'Awards',
      value: 5,
      suffix: '+',
      description: 'Recognition for excellence in engineering and design',
    },
  ];

  return (
    <section id="achievements" className="section-padding border-t border-neutral-100 bg-white">
      <SectionHeading
        label="Recognition"
        title="Achievements & milestones"
        align="center"
      />

      {/* Achievement cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {highlights.map((item, i) => (
          <ScrollReveal key={i} animation="fade-up" delay={i * 0.08}>
            <GlassCard className="p-6 text-center h-full" tilt={false}>
              <div className="inline-flex p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-700 mb-4">
                <item.icon size={20} />
              </div>

              <AnimatedCounter
                value={item.value}
                suffix={item.suffix}
                className="block font-display font-bold text-3xl text-neutral-900 mb-2"
              />

              <h3 className="text-neutral-800 font-semibold text-sm mb-2">
                {item.title}
              </h3>

              <p className="text-neutral-500 text-xs leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      {/* GitHub CTA */}
      <ScrollReveal animation="fade-up" delay={0.4} className="text-center mt-12">
        <a
          href={personal.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                   bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50
                   transition-all duration-200 text-sm font-medium shadow-sm"
        >
          <Code2 size={15} />
          View GitHub Profile
        </a>
      </ScrollReveal>
    </section>
  );
}
