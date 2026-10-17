import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Pause, Play, Film, ShoppingBag, CirclePlay, GitBranch } from 'lucide-react';

const linkTypes = [
  { key: 'assetStore', title: 'View on the Unity Asset Store', icon: <ShoppingBag size={18} /> },
  { key: 'steam', title: 'View on Steam', icon: <ExternalLink size={18} /> },
  { key: 'itch', title: 'View on Itch.io', icon: <ExternalLink size={18} /> },
  { key: 'youtube', title: 'Watch on YouTube', icon: <CirclePlay size={18} /> },
  { key: 'github', title: 'View on GitHub', icon: <GitBranch size={18} /> },
];

export default function ShowcaseCard({ game, index }) {
  // Build slides: header first, then screenshots, then videos
  const slides = [];
  if (game.images.header) {
    slides.push({ type: 'img', src: game.images.header, label: 'Header' });
  }
  if (game.images.screenshots?.length > 0) {
    game.images.screenshots.forEach((src) => {
      slides.push({ type: 'img', src, label: 'Screenshot' });
    });
  }
  if (game.videos?.length > 0) {
    game.videos.forEach((v) => {
      slides.push({ type: 'video', src: v.src, poster: v.poster, label: v.label });
    });
  }
  const hasSlides = slides.length > 0;

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef({});
  const touchX = useRef(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Pause/play video when current slide changes
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([idx, el]) => {
      if (!el) return;
      if (Number(idx) === current && slides[current]?.type === 'video') {
        el.currentTime = 0;
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [current, slides]);

  // Auto-advance every 5s (pause on hover, skip if video playing)
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
      className={`group relative rounded-2xl overflow-hidden border-2 border-border-subtle bg-bg-secondary pixel-shadow ${
        hasSlides ? 'grid md:grid-cols-5 lg:grid-cols-2' : 'p-8'
      }`}
    >
      {/* Image carousel side */}
      {hasSlides && (
        <div
          className="md:col-span-2 lg:col-span-1 relative overflow-hidden bg-bg-card md:p-4 lg:p-5 md:flex md:flex-col md:gap-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Blurred backdrop of the current slide */}
          <AnimatePresence>
            <motion.img
              key={`bg-${current}`}
              src={slides[current].type === 'video' ? slides[current].poster : slides[current].src}
              alt=""
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl pointer-events-none"
            />
          </AnimatePresence>

          {/* Main slide */}
          <div
            className="relative w-full aspect-[16/10] overflow-hidden bg-black/20 md:rounded-xl md:shadow-2xl md:shadow-black/50"
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) < 40) return;
              setPaused(true);
              if (dx < 0) next(); else prev();
            }}
          >
            <AnimatePresence mode="wait">
              {slides[current].type === 'video' ? (
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <video
                    ref={(el) => { if (el) videoRefs.current[current] = el; }}
                    src={slides[current].src}
                    poster={slides[current].poster}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-none bg-black/50 text-white/80 text-[10px] font-mono flex items-center gap-1">
                    <Film size={10} />
                    Demo
                  </div>
                </motion.div>
              ) : (
                <motion.img
                  key={current}
                  src={slides[current].src}
                  alt={`${game.title} — ${slides[current].label}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                />
              )}
            </AnimatePresence>

            {/* Navigation arrows (always visible on touch, on hover for desktop) */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-none bg-black/50 text-white/80 hover:bg-black/70 hover:text-white transition-all md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-none bg-black/50 text-white/80 hover:bg-black/70 hover:text-white transition-all md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            {/* Dot indicators (mobile — desktop uses the thumbnail strip) */}
            {slides.length > 1 && (
              <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-none bg-black/45 backdrop-blur-sm">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-none transition-all ${
                      i === current
                        ? 'bg-white w-3'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
                <button
                  onClick={() => setPaused((p) => !p)}
                  className="ml-2 p-0.5 rounded-none text-white/60 hover:text-white/90 transition-colors"
                  aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
                >
                  {paused ? <Play size={10} /> : <Pause size={10} />}
                </button>
              </div>
            )}
          </div>

          {/* Thumbnail strip (desktop) */}
          {slides.length > 1 && (
            <div className="relative hidden md:grid grid-cols-4 lg:grid-cols-5 gap-2">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`relative aspect-video rounded-md overflow-hidden bg-black/40 ring-2 transition-all ${
                    i === current
                      ? 'ring-accent opacity-100'
                      : 'ring-transparent opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Show ${slide.type === 'video' ? 'video' : 'screenshot'} ${i + 1}`}
                >
                  <img
                    src={slide.type === 'video' ? slide.poster : slide.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {slide.type === 'video' && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
                      <Play size={14} />
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Content side */}
      <div className={`p-5 sm:p-8 flex flex-col justify-center ${hasSlides ? 'md:col-span-3 lg:col-span-1' : ''}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 rounded-none text-xs font-mono bg-accent-dim text-accent border border-accent/20">
                {game.status}
              </span>
              {game.price && (
                <span className="inline-block px-3 py-1 rounded-none text-xs font-mono bg-bg-card text-text-secondary border border-border-subtle">
                  {game.price}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-3xl font-bold mt-3 tracking-tight">
              {game.title}
            </h3>
            <p className="text-accent font-mono text-sm mt-1">{game.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex gap-2 shrink-0">
            {linkTypes
              .filter((l) => game.links[l.key])
              .map((l) => (
                <a
                  key={l.key}
                  href={game.links[l.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg-card hover:bg-accent-dim border border-border-subtle hover:border-accent/30 transition-all text-text-secondary hover:text-accent"
                  title={l.title}
                >
                  {l.icon}
                </a>
              ))}
          </div>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed">{game.description}</p>

        {game.features.length > 0 && (
          <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {game.features.map((f, i) => (
              <li
                key={f}
                className={`text-sm text-text-secondary items-start gap-2 ${i >= 4 ? 'hidden sm:flex' : 'flex'}`}
              >
                <span className="w-1 h-1 rounded-none bg-accent shrink-0 mt-2" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {game.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-none bg-bg-card text-text-secondary border border-border-subtle"
            >
              {tech}
            </span>
          ))}
        </div>

        {game.links.assetStore && (
          <a
            href={game.links.assetStore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 self-stretch sm:self-start inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-2 rounded-none pixel-btn bg-accent hover:bg-accent/90 text-bg-primary text-sm font-semibold transition-all active:scale-95"
          >
            <ShoppingBag size={14} />
            View on the Asset Store
          </a>
        )}
      </div>
    </motion.div>
  );
}
