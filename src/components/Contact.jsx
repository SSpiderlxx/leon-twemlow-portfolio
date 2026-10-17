import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="neon-cyan font-mono text-lg">STAGE 07</span>
          <h2 className="section-heading mt-2">Get in Touch</h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            Hiring for a Unity or gameplay programming role, need help with an Asset Store tool, or want to collaborate?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="rounded-2xl border-2 border-border-subtle bg-bg-secondary p-6 sm:p-8 text-center pixel-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-none bg-accent-dim border border-accent/20 mb-6">
              <Mail className="text-accent" size={28} />
            </div>

            <p className="text-lg font-medium mb-2">Send me an email</p>
            <p className="text-text-secondary text-sm mb-6">
              For roles, contract work, asset support or collaboration requests.
            </p>

            <a
              href="mailto:leon@twemlow.dev"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none pixel-btn bg-accent hover:bg-accent/90 text-bg-primary font-semibold transition-all active:scale-95"
            >
              leon@twemlow.dev
              <ArrowRight size={16} />
            </a>

            <div className="mt-6 pt-6 border-t border-border-subtle/30 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} />
                North Shields, UK
              </span>
              <a
                href="https://www.linkedin.com/in/leon-twemlow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Briefcase size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
