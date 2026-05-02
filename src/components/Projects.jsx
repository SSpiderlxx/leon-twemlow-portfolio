import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, GitBranch } from 'lucide-react';
import { projects } from '../data/projects';

const oss = projects.filter(
  (p) => p.category === 'opensource' || p.category === 'app'
);

const categoryIcons = {
  opensource: <GitBranch size={16} />,
  app: <Smartphone size={16} />,
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-mono text-sm">02</span>
          <h2 className="section-heading mt-2">Open Source &amp; Projects</h2>
          <p className="mt-3 text-text-secondary max-w-xl">
            Game engines, plugins, tools, and apps I&apos;ve built.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {oss.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-xl border border-border-subtle/50 bg-bg-secondary p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-lg bg-accent-dim text-accent">
                  {categoryIcons[project.category] || <GitBranch size={16} />}
                </span>
                <span className="text-xs font-mono text-text-secondary">
                  {project.status}
                </span>
              </div>

              <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
              <p className="text-sm text-text-secondary mt-1">{project.tagline}</p>

              {project.description && (
                <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              )}

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-bg-card text-text-secondary border border-border-subtle/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  <GitBranch size={14} />
                  View on GitHub
                  <ExternalLink size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
