import Services from '../components/Services';
import Process from '../components/Process';
import CtaBand from '../components/CtaBand';
import usePageTitle from './usePageTitle';

export default function ServicesPage() {
  usePageTitle('Services');
  return (
    <>
      <Services first />
      <Process />
      <div className="pt-20 sm:pt-28" />
      <CtaBand />
    </>
  );
}
