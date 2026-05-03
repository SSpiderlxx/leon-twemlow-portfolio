import { motion } from 'framer-motion';
import { skills } from '../data/projects';
import { Code2, Gamepad2, Palette, Shovel } from 'lucide-react';

const highlights = [
  {
    icon: <Gamepad2 size={20} />,
    stat: '3+',
    label: 'Games Released',
  },
  {
    icon: <Code2 size={20} />,
    stat: '3',
    label: 'Game Engines Built',
  },
  {
    icon: <Palette size={20} />,
    stat: '6',
    label: 'Art Packs Published',
  },
  {
    icon: <Shovel size={20} />,
    stat: '10+',
    label: 'Years Building',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-mono text-sm">04</span>
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
              I&apos;m an indie game developer and software engineer who builds
              everything from the ground up — game engines, procedural world
              generators, pixel art, and full games. I love the craft of
              building systems that feel alive.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              My work spans C# and Unity through to C++ engines, Android
              development, and game art. The{' '}
              <span className="text-text-primary">TileMapEngine</span> is my
              largest project — a tile-based framework powering
              <span className="text-text-primary"> Echoes of the Hive</span>.
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
                  className="flex items-center gap-3 p-3 rounded-lg bg-bg-card border border-border-subtle/30"
                >
                  <span className="text-accent shrink-0">{h.icon}</span>
                  <div>
                    <div className="text-lg font-bold">{h.stat}</div>
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
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="px-4 py-2 rounded-lg bg-bg-card border border-border-subtle/50 text-sm text-text-secondary hover:border-accent/30 hover:text-accent transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
