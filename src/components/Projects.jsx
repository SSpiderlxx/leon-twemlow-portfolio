import { ExternalLink, Smartphone, GitBranch, Blocks } from 'lucide-react';
import Section, { SectionHeader, Reveal } from './Section';
import { projects } from '../data/projects';

const other = projects.filter(
  (p) => p.category === 'opensource' || p.category === 'app' || p.category === 'engine'
);

const categoryIcons = {
  opensource: <GitBranch size={16} />,
  app: <Smartphone size={16} />,
  engine: <Blocks size={16} />,
};

const statusTone = {
  'In Development': 'text-accent-3 border-accent-3/30 bg-accent-3/10',
  Active: 'text-accent-2 border-accent-2/30 bg-accent-2/10',
};

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Engineering"
        title="Engines, frameworks & apps"
        description="The deeper technical work behind the products: game engines, reusable frameworks and software outside of games."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {other.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.06}>
            <div className="card card-hover h-full p-6 flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-grid place-items-center w-9 h-9 rounded-lg bg-accent-dim text-accent">
                  {categoryIcons[project.category] || <GitBranch size={16} />}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs border ${
                    statusTone[project.status] || 'text-text-secondary border-border-subtle bg-white/[0.03]'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-text-secondary mt-0.5">{project.tagline}</p>

              {project.description && (
                <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              )}

              <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:text-text-primary transition-colors"
                >
                  <GitBranch size={14} />
                  View on GitHub
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
