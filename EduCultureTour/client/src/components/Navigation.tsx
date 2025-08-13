import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
              alt="Tomboan Logo" 
              className="h-10 w-10 rounded-full object-cover"
              data-testid="logo"
            />
            <span className="ml-3 text-xl font-poppins font-bold text-heritage-brown" data-testid="brand-name">
              Tomboan
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('beranda')} 
                className="text-heritage-brown hover:text-terracotta transition-colors font-medium"
                data-testid="nav-home"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('warisan')} 
                className="text-heritage-brown hover:text-terracotta transition-colors font-medium"
                data-testid="nav-heritage"
              >
                {t('nav.heritage')}
              </button>
              <button 
                onClick={() => scrollToSection('edukasi')} 
                className="text-heritage-brown hover:text-terracotta transition-colors font-medium"
                data-testid="nav-education"
              >
                {t('nav.education')}
              </button>
              <button 
                onClick={() => scrollToSection('kuliner')} 
                className="text-heritage-brown hover:text-terracotta transition-colors font-medium"
                data-testid="nav-culinary"
              >
                {t('nav.culinary')}
              </button>
              <button 
                onClick={() => scrollToSection('galeri')} 
                className="text-heritage-brown hover:text-terracotta transition-colors font-medium"
                data-testid="nav-gallery"
              >
                {t('nav.gallery')}
              </button>
              <button 
                onClick={() => scrollToSection('kontak')} 
                className="text-heritage-brown hover:text-terracotta transition-colors font-medium"
                data-testid="nav-contact"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-heritage-brown hover:text-terracotta transition-colors"
              data-testid="language-toggle"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()} | {language === 'id' ? 'EN' : 'ID'}
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-heritage-brown hover:text-terracotta"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('beranda')} 
              className="block px-3 py-2 text-heritage-brown hover:text-terracotta transition-colors font-medium w-full text-left"
              data-testid="mobile-nav-home"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('warisan')} 
              className="block px-3 py-2 text-heritage-brown hover:text-terracotta transition-colors font-medium w-full text-left"
              data-testid="mobile-nav-heritage"
            >
              {t('nav.heritage')}
            </button>
            <button 
              onClick={() => scrollToSection('edukasi')} 
              className="block px-3 py-2 text-heritage-brown hover:text-terracotta transition-colors font-medium w-full text-left"
              data-testid="mobile-nav-education"
            >
              {t('nav.education')}
            </button>
            <button 
              onClick={() => scrollToSection('kuliner')} 
              className="block px-3 py-2 text-heritage-brown hover:text-terracotta transition-colors font-medium w-full text-left"
              data-testid="mobile-nav-culinary"
            >
              {t('nav.culinary')}
            </button>
            <button 
              onClick={() => scrollToSection('galeri')} 
              className="block px-3 py-2 text-heritage-brown hover:text-terracotta transition-colors font-medium w-full text-left"
              data-testid="mobile-nav-gallery"
            >
              {t('nav.gallery')}
            </button>
            <button 
              onClick={() => scrollToSection('kontak')} 
              className="block px-3 py-2 text-heritage-brown hover:text-terracotta transition-colors font-medium w-full text-left"
              data-testid="mobile-nav-contact"
            >
              {t('nav.contact')}
            </button>
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="block px-3 py-2 text-heritage-brown hover:text-terracotta transition-colors font-medium w-full text-left justify-start"
              data-testid="mobile-language-toggle"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()} | {language === 'id' ? 'EN' : 'ID'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
