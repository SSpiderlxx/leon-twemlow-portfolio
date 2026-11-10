import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedWork from '../components/FeaturedWork';
import Reviews from '../components/Reviews';
import CtaBand from '../components/CtaBand';
import usePageTitle from './usePageTitle';

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <Services />
      <FeaturedWork />
      <Reviews />
      <CtaBand />
    </>
  );
}
