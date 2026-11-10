import { Gamepad2, Wrench, Sparkles, Code2, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section, { SectionHeader, Reveal } from './Section';

const services = [
  {
    icon: <Code2 size={20} />,
    title: 'Custom software',
    body: 'Desktop utilities, internal tools, apps and data-backed software written in C#, C++, Python or Java.',
    points: ['Desktop & internal tools', 'Android apps', 'Firebase & SQLite back-ends', 'Automation & scripting'],
  },
  {
    icon: <Wrench size={20} />,
    title: 'Tools & editor extensions',
    body: 'Custom Unity editor tooling that saves your team hours every week, built to the same standard as our Asset Store products.',
    points: ['Custom inspectors & windows', 'Content & level pipelines', 'Reusable frameworks', 'Documentation included'],
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Graphics & performance',
    body: 'Rendering features and optimisation work for projects that need to look better or run faster.',
    points: ['URP render features & HLSL', 'Compute shaders & volumetrics', 'Jobs & Burst optimisation', 'Profiling & frame-time fixes'],
  },
  {
    icon: <Gamepad2 size={20} />,
    title: 'Unity & game development',
    body: 'Gameplay features, prototypes and full builds in Unity 6, from first playable to a store release.',
    points: ['Gameplay systems & AI', 'Procedural generation', 'Multiplayer & Steamworks', 'Prototypes & vertical slices'],
  },
];

export default function Services({ first = false }) {
  return (
    <Section first={first} id="services">
      <SectionHeader
        level={first ? 1 : 2}
        eyebrow="Services"
        title="How we can help"
        description="Bring us in for a single tool, a feature, or a whole project. We work on fixed-scope projects or ongoing contracts, and we're happy to slot into an existing codebase."
        action={
          !first && (
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              How we work <ArrowRight size={14} />
            </Link>
          )
        }
      />

      <div className="mt-12 grid sm:grid-cols-2 gap-4 sm:gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div className="card card-hover h-full p-6 sm:p-7">
              <span className="inline-grid place-items-center w-11 h-11 rounded-xl bg-accent-dim text-accent border border-accent/20">
                {s.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-text-secondary leading-relaxed">{s.body}</p>
              <ul className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check size={15} className="text-accent-2 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
