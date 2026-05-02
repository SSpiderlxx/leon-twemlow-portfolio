import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { artPacks } from '../data/projects';

export default function ArtPacks() {
  return (
    <section id="art-packs" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-mono text-sm">03</span>
          <h2 className="section-heading mt-2">Game Art Packs</h2>
          <p className="mt-3 text-text-secondary max-w-xl">
            Free and premium pixel art &amp; 3D asset packs available on Itch.io.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {artPacks.map((pack, i) => (
            <motion.a
              key={pack.id}
              href={pack.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative rounded-xl border border-border-subtle/50 bg-bg-secondary p-5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Itch embed placeholder */}
              <div className="aspect-video rounded-lg bg-bg-card border border-border-subtle/30 mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                  🎮
                </span>
              </div>

              <h3 className="text-base font-bold group-hover:text-accent transition-colors">
                {pack.title}
              </h3>
              <p className="text-sm text-text-secondary mt-1">{pack.subtitle}</p>

              <span className="mt-3 inline-flex items-center gap-1 text-xs text-accent font-mono">
                View on Itch.io <ExternalLink size={10} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
