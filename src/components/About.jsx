import Section, { SectionHeader, Reveal } from './Section';
import { skillGroups } from '../data/projects';

const highlights = [
  { stat: '3+', label: 'Games released' },
  { stat: '5', label: 'Asset Store products' },
  { stat: '2', label: 'Game engines built' },
  { stat: '5+', label: 'Years experience' },
];

export default function About({ first = false }) {
  return (
    <Section first={first} id="about" className="bg-bg-secondary/40 border-y border-border-subtle/60">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <SectionHeader eyebrow="About" title="Who we are" level={first ? 1 : 2} />
          <Reveal delay={0.08}>
            <p className="mt-6 text-text-secondary leading-relaxed text-lg">
              twemlow.dev is a software studio founded by Leon Twemlow, built on 5+ years of
              hands-on experience creating commercial games, reusable developer tools and custom
              engine systems.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              We develop and ship our own games and{' '}
              <span className="text-text-primary">Unity Asset Store</span> products, owning
              everything from engineering and optimisation to release, documentation, analytics
              and customer support. That same end-to-end mindset is what we bring to client work.
              Our strengths are C# and C++, gameplay architecture, graphics and rendering, AI and
              performance.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((h) => (
                <div key={h.label} className="card rounded-xl! p-4">
                  <div className="font-display text-3xl font-semibold">{h.stat}</div>
                  <div className="mt-1 text-xs text-text-secondary leading-snug">{h.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <h3 className="text-base font-semibold mb-5 lg:mt-[4.6rem]">Skills &amp; technologies</h3>
          <div className="space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-mono uppercase tracking-wider text-text-secondary/70 mb-2">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span key={skill} className="chip text-sm! px-3! py-1!">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
