import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const games = projects.filter((p) => p.category === 'game');

export default function Games() {
  return (
    <section id="games" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-mono text-sm">01</span>
          <h2 className="section-heading mt-2">Published Games</h2>
          <p className="mt-3 text-text-secondary max-w-xl">
            Games I&apos;ve built and released — from souls-like RPGs to sandbox adventures.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8">
          {games.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GameCard({ game, index }) {
  const hasImage = game.images.header || game.images.screenshots?.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative rounded-2xl overflow-hidden border border-border-subtle/50 bg-bg-secondary ${
        hasImage ? 'grid md:grid-cols-5' : 'p-8'
      }`}
    >
      {/* Image side */}
      {hasImage && (
        <div className="md:col-span-2 relative overflow-hidden">
          {game.images.header ? (
            <img
              src={game.images.header}
              alt={game.title}
              className="w-full h-full object-cover min-h-[250px] group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          ) : game.images.screenshots?.[0] ? (
            <img
              src={game.images.screenshots[0]}
              alt={game.title}
              className="w-full h-full object-cover min-h-[250px] group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-secondary/90 md:bg-gradient-to-l" />
        </div>
      )}

      {/* Content side */}
      <div className={`p-6 sm:p-8 flex flex-col justify-center ${hasImage ? 'md:col-span-3' : ''}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-accent-dim text-accent border border-accent/20">
              {game.status}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-3 tracking-tight">
              {game.title}
            </h3>
            <p className="text-accent font-mono text-sm mt-1">{game.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex gap-2 shrink-0">
            {game.links.steam && (
              <a
                href={game.links.steam}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-bg-card hover:bg-accent-dim border border-border-subtle hover:border-accent/30 transition-all text-text-secondary hover:text-accent"
                title="View on Steam"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {game.links.itch && (
              <a
                href={game.links.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-bg-card hover:bg-accent-dim border border-border-subtle hover:border-accent/30 transition-all text-text-secondary hover:text-accent"
                title="View on Itch.io"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {game.links.github && (
              <a
                href={game.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-bg-card hover:bg-accent-dim border border-border-subtle hover:border-accent/30 transition-all text-text-secondary hover:text-accent"
                title="View on GitHub"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">{game.description}</p>

        {game.features.length > 0 && (
          <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {game.features.map((f) => (
              <li key={f} className="text-sm text-text-secondary flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {game.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-full bg-bg-card text-text-secondary border border-border-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
