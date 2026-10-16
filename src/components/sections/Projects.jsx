import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { projects } from '@/data/projects';
import { Github, ExternalLink, Calendar, User, GitBranch, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

/**
 * Projects — Minimalist project showcase
 */
export function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-neutral-100 bg-white">
      <SectionHeading
        label="Selected Work"
        title="Projects that define my craft"
      />

      <div className="space-y-8">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} animation="fade-up" delay={i * 0.1}>
            <GlassCard
              className="p-6 sm:p-8 md:p-10 group"
              tilt={false}
            >
              <div className="flex flex-col lg:grid lg:grid-cols-[200px_1fr] gap-6 sm:gap-8">
                {/* Metadata sidebar */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pb-4 border-b border-neutral-100 lg:border-b-0 lg:pb-0 lg:grid-cols-1 lg:space-y-5">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-neutral-400 text-xs uppercase tracking-wider mb-1">
                      <Calendar size={12} />
                      Year
                    </div>
                    <p className="text-neutral-800 font-medium text-sm sm:text-base">{project.year}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-neutral-400 text-xs uppercase tracking-wider mb-1">
                      <User size={12} />
                      Role
                    </div>
                    <p className="text-neutral-800 font-medium text-sm sm:text-base">{project.role}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-neutral-400 text-xs uppercase tracking-wider mb-1">
                      <GitBranch size={12} />
                      Scale
                    </div>
                    <p className="text-neutral-800 font-medium text-xs sm:text-sm">{project.scale}</p>
                  </div>
                </div>

                {/* Main content */}
                <div>
                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-neutral-900 mb-4 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="mb-6 space-y-2">
                      {project.highlights.map((highlight, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 text-sm text-neutral-700"
                        >
                          <Sparkles size={12} className="text-neutral-400 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="glass-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    <MagneticButton strength={0.15}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                                 bg-neutral-10 border border-neutral-20
                                 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-950
                                 transition-all duration-200 text-sm font-medium"
                      >
                        <Github size={15} />
                        Source Code
                      </a>
                    </MagneticButton>

                    <MagneticButton strength={0.15}>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                                 liquid-glass-button transition-all duration-200 text-sm font-medium"
                      >
                        <ExternalLink size={15} />
                        Live Preview
                      </a>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
