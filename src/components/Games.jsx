import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
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
  // Build slides: header first if exists, then all screenshots
  const slides = [];
  if (game.images.header) {
    slides.push({ src: game.images.header, label: 'Header' });
  }
  if (game.images.screenshots?.length > 0) {
    game.images.screenshots.forEach((src) => {
      slides.push({ src, label: 'Screenshot' });
    });
  }
  const hasSlides = slides.length > 0;

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance every 5s (pause on hover)
  useEffect(() => {
    if (!hasSlides || paused || slides.length < 2) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [hasSlides, paused, slides.length, next]);

  // Reset to 0 if slides change (defensive)
  useEffect(() => {
    setCurrent(0);
  }, [slides.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative rounded-2xl overflow-hidden border border-border-subtle/50 bg-bg-secondary ${
        hasSlides ? 'grid md:grid-cols-5' : 'p-8'
      }`}
    >
      {/* Image carousel side */}
      {hasSlides && (
        <div
          className="md:col-span-2 relative overflow-hidden bg-bg-card"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative w-full h-full min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].src}
                alt={`${game.title} — ${slides[current].label}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-secondary/90 md:bg-gradient-to-l pointer-events-none" />

          {/* Navigation arrows (visible on hover) */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/80 hover:bg-black/70 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/80 hover:bg-black/70 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next screenshot"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* Dot indicators */}
          {slides.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? 'bg-white w-3'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
              {/* Pause/play indicator */}
              <button
                onClick={() => setPaused((p) => !p)}
                className="ml-2 p-0.5 rounded-full text-white/60 hover:text-white/90 transition-colors"
                aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
              >
                {paused ? <Play size={10} /> : <Pause size={10} />}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Content side */}
      <div className={`p-6 sm:p-8 flex flex-col justify-center ${hasSlides ? 'md:col-span-3' : ''}`}>
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
