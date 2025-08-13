import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Heritage from '@/components/Heritage';
import Education from '@/components/Education';
import Food from '@/components/Food';
import Gallery from '@/components/Gallery';
import Founder from '@/components/Founder';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div className="min-h-screen" data-testid="home-page">
      <Navigation />
      <Hero />
      <About />
      <Heritage />
      <Education />
      <Food />
      <Gallery />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}
