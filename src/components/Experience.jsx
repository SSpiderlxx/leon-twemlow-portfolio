import { GraduationCap } from 'lucide-react';
import Section, { SectionHeader, Reveal } from './Section';
import { experience, education } from '../data/projects';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="Track record" />

      <div className="mt-12 grid lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2 space-y-4">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.08}>
              <div className="card p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{job.role}</h3>
                    <p className="text-sm text-text-secondary mt-0.5">{job.org}</p>
                  </div>
                  <span className="chip shrink-0 self-start font-mono">{job.period}</span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="text-sm text-text-secondary leading-relaxed flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-[0.45rem]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
            <GraduationCap size={18} className="text-accent" />
            Founder&apos;s education
          </h3>
          <div className="relative border-l border-border-subtle ml-1.5 space-y-6">
            {education.map((item) => (
              <div key={item.title} className="relative pl-6">
                <span
                  className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-bg-primary ${
                    item.current ? 'bg-accent-2' : 'bg-border-subtle'
                  }`}
                />
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-medium">{item.title}</p>
                  {item.current && (
                    <span className="px-2 py-0.5 rounded-full text-[11px] text-accent-2 border border-accent-2/30 bg-accent-2/10">
                      Ongoing
                    </span>
                  )}
                </div>
                {item.org && <p className="text-sm text-text-secondary">{item.org}</p>}
                {item.grade && <p className="mt-0.5 text-sm text-text-primary/90">Grade: {item.grade}</p>}
                {item.note && (
                  <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">{item.note}</p>
                )}
                {!item.current && (
                  <p className="text-xs font-mono text-text-secondary/70 mt-1">{item.period}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
