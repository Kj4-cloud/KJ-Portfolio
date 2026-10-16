import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';

/**
 * About — Clean minimal storytelling layout with info cards
 */
export function About() {
  const infoCards = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      color: 'text-neutral-700 bg-neutral-100',
    },
    {
      icon: Briefcase,
      label: 'Experience',
      value: '1 Year',
      color: 'text-neutral-700 bg-neutral-100',
    },
    {
      icon: GraduationCap,
      label: 'Focus',
      value: 'Backend',
      color: 'text-neutral-700 bg-neutral-100',
    },
  ];

  return (
    <section id="about" className="section-padding border-t border-neutral-100 bg-white">
      <SectionHeading label="About Me" title="Crafting digital experiences with precision" />

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
        {/* Text Content */}
        <div className="space-y-6">
          {[
            'I\'m a software engineer who believes in building things that matter. With over 1 year of hands-on experience, I\'ve shipped 3+ projects spanning healthcare systems, blockchain platforms, and everything in between.',
            'My approach combines the rigor of clean architecture with the creativity of modern UI engineering. Every line of code I write is intentional — designed to scale, built to last.',
            'I specialize in React ecosystems, Node.js backend architecture, and cloud infrastructure. When I\'m not coding, I\'m competing in hackathons or exploring emerging technologies like AI and blockchain.',
          ].map((paragraph, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Info Cards */}
        <div className="space-y-4">
          {infoCards.map((card, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={0.15 + i * 0.08}>
              <GlassCard className="p-5" tilt={false}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${card.color}`}>
                    <card.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-1">
                      {card.label}
                    </p>
                    <p className="text-neutral-900 font-medium">{card.value}</p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}

          {/* Availability status */}
          <ScrollReveal animation="fade-up" delay={0.4}>
            <div className="border border-neutral-200 rounded-2xl p-5 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-sm text-neutral-600 font-medium">
                  Currently available for new projects
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
