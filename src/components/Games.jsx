import { motion } from 'framer-motion';
import ShowcaseCard from './ShowcaseCard';
import { projects } from '../data/projects';

const games = projects.filter((p) => p.category === 'game');

export default function Games() {
  return (
    <section id="games" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="neon-cyan font-mono text-lg">STAGE 02</span>
          <h2 className="section-heading mt-2">Games</h2>
          <p className="mt-3 text-text-secondary max-w-xl">
            Games I&apos;ve shipped and contributed to — from co-op sandbox adventures to souls-like RPGs.
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-12 grid gap-8">
          {games.map((game, i) => (
            <ShowcaseCard key={game.id} game={game} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
