import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { personal } from '@/data/personal';
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      const formData = new FormData(e.target);
      formData.append('access_key', accessKey);
      formData.append('subject', `Portfolio message from ${formState.name}`);
      formData.append('from_name', formState.name || 'Portfolio Visitor');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(data.message || 'Error submitting form');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        `Unable to send message right now. Please email directly at ${personal.email}`
      );
    } finally {
      setIsSubmitting(false);
    }
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
                          className="text-neutral-900 text-sm hover:text-neutral-700 transition-colors break-all sm:break-normal"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-900 text-sm break-all sm:break-normal">{item.value}</p>
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
          <GlassCard className="p-5 sm:p-6 md:p-8" tilt={false}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Anti-spam honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  required
                  aria-label="Your message"
                />
                <label htmlFor="contact-message" className={labelClasses('message')}>
                  Your Message
                </label>
              </div>

              {/* Error notice */}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50/80 border border-red-200 text-red-700 text-xs"
                >
                  <AlertCircle size={15} className="mt-0.5 shrink-0 text-red-500" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                whileHover={!isSubmitting && !submitted ? { scale: 1.01 } : undefined}
                whileTap={!isSubmitting && !submitted ? { scale: 0.99 } : undefined}
                className="w-full flex items-center justify-center gap-2
                         px-6 py-3.5 rounded-xl font-medium text-sm
                         liquid-glass-button transition-all duration-200
                         cursor-pointer shadow-sm disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={15} className="animate-spin text-neutral-600" />
                    Sending Message...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle size={15} className="text-emerald-500" />
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
