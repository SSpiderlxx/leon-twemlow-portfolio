import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Section';
import { artPacks } from '../data/projects';

export default function ArtPacks() {
  return (
    <section id="art-packs" className="relative pb-20 sm:pb-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Game art packs</h3>
            <p className="mt-1 text-sm text-text-secondary">
              Free and premium pixel art &amp; 3D packs on Itch.io and the Unity Asset Store.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {artPacks.map((pack, i) => (
            <Reveal key={pack.id} delay={i * 0.04} y={16}>
              <a
                href={pack.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block card card-hover overflow-hidden rounded-xl!"
                title={`${pack.title}: ${pack.subtitle}`}
              >
                <div className="aspect-square overflow-hidden bg-bg-card">
                  <img
                    src={pack.image}
                    alt={pack.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ imageRendering: 'pixelated' }}
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-medium leading-snug line-clamp-2 group-hover:text-text-primary">
                    {pack.title}
                  </p>
                  <span className="mt-1.5 inline-flex items-center gap-0.5 text-[11px] text-text-secondary">
                    {pack.store || 'Itch.io'} <ArrowUpRight size={11} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
