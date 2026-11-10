import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Section, { SectionHeader } from './Section';
import ShowcaseCard from './ShowcaseCard';
import { assetStoreProducts, assetStoreUrl, projects } from '../data/projects';

const tabs = [
  {
    id: 'tools',
    label: 'Unity tools',
    items: assetStoreProducts,
    note: 'Commercial developer tools we design, build, ship and support on the Unity Asset Store.',
  },
  {
    id: 'games',
    label: 'Games',
    items: projects.filter((p) => p.category === 'game'),
    note: 'Games we\'ve shipped independently or contributed to under contract.',
  },
];

export default function Work({ first = false }) {
  const [active, setActive] = useState('tools');
  const tab = tabs.find((t) => t.id === active);

  return (
    <Section first={first} id="work">
      <SectionHeader
        level={first ? 1 : 2}
        eyebrow="Selected work"
        title="Shipped, used and supported"
        description="Every product here is live and in people's hands. The same standards apply to client work: performance, clean architecture and proper documentation."
        action={
          <a
            href={assetStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Asset Store publisher page <ExternalLink size={13} />
          </a>
        }
      />

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
        <div role="tablist" className="inline-flex p-1 rounded-xl border border-border-subtle bg-bg-secondary self-start">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === t.id
                  ? 'bg-white/[0.08] text-text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {t.label}
              <span className="ml-2 text-xs text-text-secondary/70">{t.items.length}</span>
            </button>
          ))}
        </div>
        <p className="text-sm text-text-secondary max-w-md">{tab.note}</p>
      </div>

      <div key={active} className="mt-8 grid gap-6">
        {tab.items.map((item, i) => (
          <ShowcaseCard key={item.id} game={item} index={i} />
        ))}
      </div>
    </Section>
  );
}
