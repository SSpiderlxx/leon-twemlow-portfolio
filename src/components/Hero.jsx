import { motion } from 'framer-motion';
import { ArrowDown, Gamepad2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle grid background */}
      <div className="absolute inset-0 particle-grid" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-transparent to-bg-primary" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full bg-accent/10 blur-[80px] sm:blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 pt-20 pb-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-accent-dim border border-accent/20 text-accent text-xs sm:text-sm font-mono mb-6">
            <Gamepad2 size={14} />
            Unity / Gameplay Programmer
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] sm:leading-[0.9]"
        >
          Building Worlds,
          <br />
          <span className="text-gradient">One Tile at a Time</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 text-base sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          Technical game developer shipping commercial games and Unity developer tools.
          Creator of <span className="text-text-primary">Echoes of the Hive</span>, the{' '}
          <span className="text-text-primary">Raymarch Voxel Engine</span> and{' '}
          <span className="text-text-primary">Runtime CSG</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href="#asset-store"
            className="px-8 py-3 rounded-full whitespace-nowrap text-center bg-accent hover:bg-accent/90 text-white font-medium transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full whitespace-nowrap text-center border border-border-subtle hover:border-accent/50 text-text-secondary hover:text-accent font-medium transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#asset-store"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-accent transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
