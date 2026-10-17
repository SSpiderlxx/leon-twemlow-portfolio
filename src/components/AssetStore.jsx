import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ShowcaseCard from './ShowcaseCard';
import { assetStoreProducts, assetStoreUrl } from '../data/projects';

export default function AssetStore() {
  return (
    <section id="asset-store" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="neon-cyan font-mono text-lg">STAGE 01</span>
            <h2 className="section-heading mt-2">Unity Asset Store</h2>
            <p className="mt-3 text-text-secondary max-w-xl">
              Commercial developer tools I design, build, ship and support: rendering
              tech, runtime geometry and editor tooling for Unity 6.
            </p>
          </div>
          <a
            href={assetStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 font-mono transition-colors shrink-0"
          >
            View publisher page <ExternalLink size={12} />
          </a>
        </motion.div>

        <div className="mt-8 sm:mt-12 grid gap-8">
          {assetStoreProducts.map((product, i) => (
            <ShowcaseCard key={product.id} game={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
