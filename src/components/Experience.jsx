import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experience, education } from '../data/projects';

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="neon-cyan font-mono text-lg">STAGE 05</span>
          <h2 className="section-heading mt-2">Experience</h2>
        </motion.div>

        <div className="mt-8 sm:mt-12 grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Work timeline */}
          <div className="lg:col-span-2 relative border-l-2 border-dashed border-border-subtle pl-6 sm:pl-8 space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[33px] sm:-left-[41px] top-1 p-1.5 rounded-none bg-bg-primary border border-accent/40 text-accent">
                  <Briefcase size={12} />
                </span>
                <p className="text-xs font-mono text-accent">{job.period}</p>
                <h3 className="text-xl font-bold tracking-tight mt-1">{job.role}</h3>
                <p className="text-sm text-text-secondary">{job.org}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                      <span className="w-1 h-1 rounded-none bg-accent shrink-0 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <GraduationCap size={18} className="text-accent" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-bg-secondary border-2 border-border-subtle pixel-shadow"
                >
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-text-secondary">{item.org}</p>
                  <p className="text-xs font-mono text-accent mt-1">{item.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
