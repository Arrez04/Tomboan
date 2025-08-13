import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Compass, Play, ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToHeritage = () => {
    const element = document.getElementById('warisan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center bg-batik-pattern" data-testid="hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.7)), url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight" data-testid="hero-title">
          {t('hero.title')}
          <span className="block text-golden text-3xl md:text-4xl mt-2" data-testid="hero-subtitle">
            {t('hero.subtitle')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToHeritage}
            className="bg-terracotta hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
            data-testid="button-explore"
          >
            <Compass className="mr-2 h-5 w-5" />
            {t('hero.explore')}
          </Button>
          
          <Button 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-heritage-brown px-8 py-4 rounded-full font-semibold transition-all"
            data-testid="button-video"
          >
            <Play className="mr-2 h-5 w-5" />
            {t('hero.watchVideo')}
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" data-testid="scroll-indicator">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
