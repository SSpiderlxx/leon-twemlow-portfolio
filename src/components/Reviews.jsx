import { Star, Quote, ArrowUpRight } from 'lucide-react';
import Section, { SectionHeader, Reveal } from './Section';
import { reviews } from '../data/projects';

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={15}
          className={i < count ? 'text-accent-3 fill-accent-3' : 'text-border-subtle'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <Section id="reviews">
      <SectionHeader
        eyebrow="Reviews"
        title="What customers say"
        description="Verified reviews from developers using our tools on the Unity Asset Store."
      />

      <div className="mt-12 grid md:grid-cols-3 gap-4 sm:gap-5">
        {reviews.map((r, i) => (
          <Reveal key={r.id} delay={i * 0.07}>
            <figure className="card h-full p-6 sm:p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <Stars count={r.rating} />
                <Quote size={20} className="text-accent/40" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
              <blockquote className="mt-2 text-text-secondary leading-relaxed">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <figcaption className="mt-auto pt-6 flex items-center justify-between gap-3 text-sm">
                <div>
                  <p className="text-text-primary">Asset Store customer</p>
                  <p className="text-xs text-text-secondary mt-0.5">{r.date}</p>
                </div>
                <a
                  href={r.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip hover:text-text-primary hover:border-accent/40 transition-colors gap-1 shrink-0"
                >
                  {r.product} <ArrowUpRight size={12} />
                </a>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
