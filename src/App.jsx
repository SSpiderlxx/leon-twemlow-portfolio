import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AssetStore from './components/AssetStore';
import Games from './components/Games';
import Projects from './components/Projects';
import ArtPacks from './components/ArtPacks';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AssetStore />
      <Games />
      <Projects />
      <ArtPacks />
      <Experience />
      <About />
      <Contact />
      <Footer />
      <div className="crt-overlay" aria-hidden="true" />
    </>
  );
}
