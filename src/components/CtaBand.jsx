import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Section';

export default function CtaBand({
  title = 'Have a project in mind?',
  body = "Tell us what you're building and we'll let you know honestly how we'd approach it.",
}) {
  return (
    <section className="px-4 sm:px-6 pb-20 sm:pb-28">
      <Reveal className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-secondary px-6 py-10 sm:px-12 sm:py-12">
          <div className="absolute inset-0 hero-glow opacity-80 pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
              <p className="mt-2 text-text-secondary">{body}</p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0 self-start md:self-auto">
              Start a project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
