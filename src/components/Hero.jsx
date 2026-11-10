import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2, ShoppingBag, MapPin, Clock } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const proof = [
  { icon: <Gamepad2 size={15} />, label: 'Commercial game on Steam' },
  { icon: <ShoppingBag size={15} />, label: '5 Unity Asset Store tools' },
  { icon: <Clock size={15} />, label: '5+ years shipping software' },
  { icon: <MapPin size={15} />, label: 'UK-based, working remotely' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-12 items-center">
        <div>
          <motion.div {...fade(0)}>
            <span className="inline-flex items-center gap-2.5 pl-3 pr-3.5 py-1.5 rounded-full border border-border-subtle bg-tint/[0.03] text-sm text-text-secondary">
              <span className="status-dot" />
              Taking on new client projects
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] font-semibold"
          >
            We build software &amp; tools{' '}
            <span className="text-gradient">that ship.</span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed"
          >
            Custom software and developer tools in C#, C++ and Unity, from desktop utilities
            and editor extensions to rendering and gameplay systems. We take projects from idea
            to release, with clean, documented code you can build on.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary">
              Start a project <ArrowRight size={16} />
            </Link>
            <Link to="/work" className="btn-secondary">
              See our work
            </Link>
          </motion.div>

          <motion.ul
            {...fade(0.32)}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-lg"
          >
            {proof.map((p) => (
              <li key={p.label} className="flex items-center gap-2.5 text-sm text-text-secondary">
                <span className="text-accent-2">{p.icon}</span>
                {p.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual */}
        <motion.div {...fade(0.2)} className="relative">
          <div className="absolute -inset-6 bg-accent/20 blur-3xl rounded-full opacity-40 pointer-events-none" />
          <div className="relative rounded-2xl border border-border-subtle bg-bg-secondary p-2 shadow-2xl shadow-black/60">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="w-2.5 h-2.5 rounded-full bg-tint/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-tint/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-tint/15" />
              <span className="ml-3 text-xs font-mono text-text-secondary/80 truncate">
                raymarch-voxel-engine / unity 6 urp
              </span>
            </div>
            <img
              src="/images/asset-store/raymarch-voxel-engine/key.jpg"
              alt="Raymarch Voxel Engine, a Unity Asset Store product built by twemlow.dev"
              className="w-full aspect-[16/10] object-cover rounded-xl"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-left-8 card rounded-xl! px-4 py-3 shadow-xl shadow-black/50 backdrop-blur">
            <p className="text-xs text-text-secondary">Also on the Asset Store</p>
            <p className="font-display font-semibold">Runtime CSG</p>
            <p className="text-xs text-accent-2 font-mono mt-0.5">Burst · Jobs · 0 GC</p>
          </div>
          <div className="hidden sm:block absolute -top-5 -right-4 card rounded-xl! px-4 py-3 shadow-xl shadow-black/50">
            <p className="text-xs text-text-secondary">Available on</p>
            <p className="font-display font-semibold">Unity Asset Store</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
