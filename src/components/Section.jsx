import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, className = '', y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, description, action, center = false, level = 2 }) {
  const Heading = level === 1 ? 'h1' : 'h2';
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        center ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between'
      }`}
    >
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Heading className={`section-heading mt-3 ${level === 1 ? 'page-heading' : ''}`}>{title}</Heading>
        {description && (
          <p className="mt-4 text-text-secondary leading-relaxed">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}

export default function Section({ id, children, className = '', first = false }) {
  return (
    <section
      id={id}
      className={`relative px-4 sm:px-6 ${first ? 'pt-32 sm:pt-40 pb-20 sm:pb-28' : 'py-20 sm:py-28'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
