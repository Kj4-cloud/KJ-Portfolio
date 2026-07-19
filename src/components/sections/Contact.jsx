import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { personal } from '@/data/personal';
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle } from 'lucide-react';

/**
 * Contact — Minimal contact form with animated inputs, floating labels, and info panel
 */
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  const inputClasses = `
    w-full bg-neutral-50 border border-neutral-200 rounded-xl
    px-4 py-3.5 text-sm text-neutral-900 placeholder-transparent
    focus:outline-none focus:border-neutral-800 focus:bg-white
    transition-all duration-200 peer
  `;

  const labelClasses = (field) => `
    absolute left-4 transition-all duration-200 pointer-events-none
    ${
      focused === field || formState[field]
        ? 'top-1 text-[10px] text-neutral-900'
        : 'top-3.5 text-sm text-neutral-400'
    }
  `;

  return (
    <section id="contact" className="section-padding border-t border-neutral-100 bg-neutral-50/50">
      <SectionHeading
        label="Get in Touch"
        title="Let's work together"
        align="center"
      />

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 max-w-5xl mx-auto">
        {/* Info panel */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-6">
            <p className="text-neutral-600 text-base leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's build something
              amazing together.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: personal.email, href: personal.social.email },
                { icon: MapPin, label: 'Location', value: personal.location },
              ].map((item, i) => (
                <GlassCard key={i} className="p-4" tilt={false}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-100 text-neutral-700">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-neutral-900 text-sm hover:text-neutral-700 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-900 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Github, href: personal.social.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg
                           bg-white border border-neutral-200
                           text-neutral-500 hover:text-neutral-900 hover:border-neutral-300
                           transition-all duration-200 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-neutral-600 font-medium">
                Available for freelance work
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact form */}
        <ScrollReveal animation="fade-up">
          <GlassCard className="p-6 sm:p-8" tilt={false}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  className={inputClasses}
                  required
                  aria-label="Your name"
                />
                <label htmlFor="contact-name" className={labelClasses('name')}>
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  className={inputClasses}
                  required
                  aria-label="Your email"
                />
                <label htmlFor="contact-email" className={labelClasses('email')}>
                  Your Email
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  id="contact-message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  required
                  aria-label="Your message"
                />
                <label htmlFor="contact-message" className={labelClasses('message')}>
                  Your Message
                </label>
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2
                         px-6 py-3.5 rounded-xl font-medium text-sm
                         bg-neutral-900 border border-neutral-900 text-white
                         hover:bg-neutral-800 transition-all duration-200
                         cursor-pointer shadow-sm"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={15} className="text-emerald-400" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
