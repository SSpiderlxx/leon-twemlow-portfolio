import About from '../components/About';
import Experience from '../components/Experience';
import CtaBand from '../components/CtaBand';
import usePageTitle from './usePageTitle';

export default function AboutPage() {
  usePageTitle('About');
  return (
    <>
      <About first />
      <Experience />
      <CtaBand />
    </>
  );
}
