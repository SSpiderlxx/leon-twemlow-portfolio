import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Games from './components/Games';
import Projects from './components/Projects';
import ArtPacks from './components/ArtPacks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Games />
      <Projects />
      <ArtPacks />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
