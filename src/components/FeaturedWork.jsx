import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section, { SectionHeader, Reveal } from './Section';
import { assetStoreProducts, projects } from '../data/projects';

const pick = (list, id) => list.find((p) => p.id === id);

const featured = [
  { item: pick(assetStoreProducts, 'raymarch-voxel-engine'), kind: 'Unity tool' },
  { item: pick(assetStoreProducts, 'runtime-csg'), kind: 'Unity tool' },
  { item: pick(projects, 'echoes-of-the-hive'), kind: 'Game · Steam' },
].filter((f) => f.item);

export default function FeaturedWork() {
  return (
    <Section id="featured-work">
      <SectionHeader
        eyebrow="Selected work"
        title="Shipped, used and supported"
        description="A few highlights. Every product is live and in people's hands."
        action={
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            View all work <ArrowRight size={14} />
          </Link>
        }
      />

      <div className="mt-12 grid md:grid-cols-3 gap-4 sm:gap-5">
        {featured.map(({ item, kind }, i) => (
          <Reveal key={item.id} delay={i * 0.07}>
            <Link to="/work" className="group card card-hover block h-full overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-bg-card">
                <img
                  src={item.images.header}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <span className="chip">{kind}</span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{item.tagline}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
