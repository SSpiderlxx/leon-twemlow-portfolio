import Work from '../components/Work';
import Projects from '../components/Projects';
import ArtPacks from '../components/ArtPacks';
import Reviews from '../components/Reviews';
import CtaBand from '../components/CtaBand';
import usePageTitle from './usePageTitle';

export default function WorkPage() {
  usePageTitle('Work');
  return (
    <>
      <Work first />
      <Reviews />
      <Projects />
      <ArtPacks />
      <CtaBand title="Want something built to this standard?" />
    </>
  );
}
