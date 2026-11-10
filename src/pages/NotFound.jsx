import { Link } from 'react-router-dom';
import usePageTitle from './usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="px-4 sm:px-6 pt-40 pb-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-heading page-heading mt-3">Page not found</h1>
      <p className="mt-4 text-text-secondary">That page doesn&apos;t exist or has moved.</p>
      <Link to="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  );
}
