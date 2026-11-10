import { MessageSquare, FileText, GitBranch, PackageCheck, ShieldCheck, BookOpen, Gauge, Handshake } from 'lucide-react';
import Section, { SectionHeader, Reveal } from './Section';

const steps = [
  {
    icon: <MessageSquare size={18} />,
    title: 'Discovery call',
    body: 'A quick chat about what you want to build, your timeline and any constraints. No cost, no commitment.',
  },
  {
    icon: <FileText size={18} />,
    title: 'Scope & estimate',
    body: 'A clear written scope with milestones and a price, so you know exactly what you are getting before work starts.',
  },
  {
    icon: <GitBranch size={18} />,
    title: 'Build in milestones',
    body: 'Regular builds and progress updates, with the work in your Git repository so you can see it take shape.',
  },
  {
    icon: <PackageCheck size={18} />,
    title: 'Handover & support',
    body: 'Clean, documented source and a walkthrough of how it works, plus support after delivery.',
  },
];

const values = [
  { icon: <ShieldCheck size={18} />, title: 'End-to-end ownership', body: 'We take products from idea to release, then support and update them.' },
  { icon: <Gauge size={18} />, title: 'Performance first', body: 'Jobs, Burst, compute shaders and profiling are part of how we work, not an afterthought.' },
  { icon: <BookOpen size={18} />, title: 'Documented code', body: 'Readable, well-structured C# your team can maintain after we hand it over.' },
  { icon: <Handshake size={18} />, title: 'Clear communication', body: 'Straight answers on scope, timelines and trade-offs, with no surprises.' },
];

export default function Process({ first = false }) {
  return (
    <Section first={first} id="process" className="bg-bg-secondary/40 border-y border-border-subtle/60">
      <SectionHeader
        level={first ? 1 : 2}
        eyebrow="Process"
        title="Working together"
        description="A simple, transparent process whether it's a two-week feature or a longer engagement."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <div className="card h-full p-6">
              <div className="flex items-center justify-between">
                <span className="inline-grid place-items-center w-10 h-10 rounded-xl bg-accent-dim text-accent border border-accent/20">
                  {s.icon}
                </span>
                <span className="font-mono text-sm text-text-secondary/60">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.05}>
            <div className="flex gap-3">
              <span className="text-accent-2 mt-0.5 shrink-0">{v.icon}</span>
              <div>
                <h4 className="font-semibold">{v.title}</h4>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">{v.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
