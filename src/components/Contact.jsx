import { Mail, MapPin, ArrowRight, Briefcase, Check } from 'lucide-react';
import { Reveal } from './Section';

const email = 'leon@twemlow.dev';

const enquiryBody = [
  'Hi,',
  '',
  'What we want to build:',
  '',
  'Engine / platform:',
  '',
  'Timeline:',
  '',
  'Budget range:',
  '',
  'Links (repo, game, references):',
  '',
].join('\n');

const mailto = `mailto:${email}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(enquiryBody)}`;

const include = [
  'What you want to build and why',
  'Engine, platform or tech stack',
  'Rough timeline and budget range',
  'Any links: your repo, game or references',
];

export default function Contact({ first = false }) {
  const Heading = first ? 'h1' : 'h2';
  return (
    <section
      id="contact"
      className={`relative px-4 sm:px-6 ${first ? 'pt-32 sm:pt-40 pb-20 sm:pb-28' : 'py-20 sm:py-28'}`}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-secondary p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0 hero-glow opacity-80 pointer-events-none" />
            <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
              <div>
                <p className="eyebrow">Contact</p>
                <Heading className="section-heading mt-3">Have a project in mind?</Heading>
                <p className="mt-4 text-text-secondary leading-relaxed max-w-lg">
                  Tell us what you&apos;re building. Whether it&apos;s a custom tool, a piece of software
                  or a Unity feature, we&apos;ll let you know honestly if we&apos;re the right fit
                  and how we&apos;d approach it.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href={mailto} className="btn-primary">
                    <Mail size={16} />
                    Start a project enquiry
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/leon-twemlow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Briefcase size={16} />
                    LinkedIn
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-secondary">
                  <a href={`mailto:${email}`} className="hover:text-text-primary transition-colors">
                    {email}
                  </a>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} />
                    North Shields, UK · Remote worldwide
                  </span>
                </div>
              </div>

              <div className="card rounded-2xl! p-6 sm:p-7 bg-bg-primary/60!">
                <p className="font-semibold">Helpful to include</p>
                <ul className="mt-4 space-y-3">
                  {include.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check size={16} className="text-accent-2 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-5 border-t border-border-subtle text-sm text-text-secondary">
                  Asset Store customer? Support requests go to the same address.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
