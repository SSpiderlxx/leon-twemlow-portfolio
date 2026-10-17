import { motion } from 'framer-motion';
import { skillGroups } from '../data/projects';
import { Code2, Gamepad2, ShoppingBag, Shovel } from 'lucide-react';

const highlights = [
  {
    icon: <Gamepad2 size={20} />,
    stat: '3+',
    label: 'Games Released',
  },
  {
    icon: <ShoppingBag size={20} />,
    stat: '5',
    label: 'Asset Store Products',
  },
  {
    icon: <Code2 size={20} />,
    stat: '2',
    label: 'Game Engines Built',
  },
  {
    icon: <Shovel size={20} />,
    stat: '5+',
    label: 'Years Experience',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="neon-cyan font-mono text-lg">STAGE 06</span>
          <h2 className="section-heading mt-2">About</h2>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-text-secondary leading-relaxed text-lg">
              I&apos;m a Unity developer and gameplay programmer with 5+ years of
              hands-on experience building commercial games, reusable developer
              tools and custom engine systems. I recently completed a BA (Hons)
              in Games Technologies.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              I independently develop and ship both games and{' '}
              <span className="text-text-primary">Unity Asset Store</span> products,
              owning everything from engineering and optimisation to release,
              documentation, analytics and customer support. My strengths are C#
              and C++, gameplay architecture, graphics and rendering, AI and
              performance. My work ranges from the{' '}
              <span className="text-text-primary">Raymarch Voxel Engine</span> to the
              tilemap tech powering{' '}
              <span className="text-text-primary">Echoes of the Hive</span>.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-bg-card border-2 border-border-subtle pixel-shadow"
                >
                  <span className="text-accent shrink-0">{h.icon}</span>
                  <div>
                    <div className="text-2xl font-mono neon-cyan leading-none">{h.stat}</div>
                    <div className="text-xs text-text-secondary">{h.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Skills &amp; Technologies</h3>
            <div className="space-y-5">
              {skillGroups.map((group, g) => (
                <div key={group.label}>
                  <p className="text-xs font-mono text-accent mb-2">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: g * 0.05 + i * 0.03 }}
                        className="px-3 py-1.5 rounded-lg bg-bg-card border border-border-subtle/50 text-sm text-text-secondary hover:border-accent/30 hover:text-accent transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
