import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-accent font-mono text-sm">05</span>
          <h2 className="section-heading mt-2">Get in Touch</h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            Interested in collaboration, press inquiries, or just want to say hi?
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
          <div className="rounded-2xl border border-border-subtle/50 bg-bg-secondary p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-dim border border-accent/20 mb-6">
              <Mail className="text-accent" size={28} />
            </div>

            <p className="text-lg font-medium mb-2">Send me an email</p>
            <p className="text-text-secondary text-sm mb-6">
              For business inquiries, press kits, or collaboration requests.
            </p>

            <a
              href="mailto:leon@twemlow.dev"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent/90 text-white font-medium transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95"
            >
              leon@example.com
              <ArrowRight size={16} />
            </a>

            <div className="mt-6 pt-6 border-t border-border-subtle/30 flex items-center justify-center gap-2 text-sm text-text-secondary">
              <MapPin size={14} />
              <span>United Kingdom</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
