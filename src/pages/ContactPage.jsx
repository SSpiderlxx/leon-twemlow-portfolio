import Contact from '../components/Contact';
import usePageTitle from './usePageTitle';

export default function ContactPage() {
  usePageTitle('Contact');
  return <Contact first />;
}
