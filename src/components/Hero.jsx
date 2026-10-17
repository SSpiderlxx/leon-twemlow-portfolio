import { motion } from 'framer-motion';
import { ArrowDown, Gamepad2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle grid background */}
      <div className="absolute inset-0 particle-grid" />

      {/* Synthwave sun + scrolling grid floor */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-[#1a0f3d] to-[#2a0f45]" />
      <div className="synth-sun absolute left-1/2 -translate-x-1/2 bottom-[22%] w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] rounded-full opacity-45" />
      <div className="absolute inset-x-0 bottom-[22%] h-px bg-accent/60 shadow-[0_0_20px_4px_rgba(255,61,154,0.5)]" />
      <div className="synth-floor" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-transparent via-75% to-bg-primary" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 pt-20 pb-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-none bg-bg-primary/70 border-2 border-accent/60 text-accent text-sm sm:text-lg font-mono whitespace-nowrap mb-6">
            <Gamepad2 size={14} />
            Unity / Gameplay Programmer
            <span className="cursor-blink">_</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] sm:leading-[0.9] drop-shadow-[4px_4px_0_rgba(0,0,0,0.6)]"
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
            className="px-8 py-3 rounded-none whitespace-nowrap text-center pixel-btn bg-accent hover:bg-accent/90 text-bg-primary font-semibold transition-all active:scale-95"
          >
            ▶ View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-none whitespace-nowrap text-center bg-bg-primary/70 backdrop-blur-sm border border-border-subtle hover:border-accent/50 text-text-secondary hover:text-accent font-medium transition-all"
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
