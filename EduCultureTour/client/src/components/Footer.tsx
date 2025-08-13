import { useLanguage } from '@/hooks/useLanguage';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-heritage-brown text-white pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                alt="Tomboan Logo" 
                className="h-12 w-12 rounded-full object-cover"
                data-testid="footer-logo"
              />
              <span className="ml-3 text-2xl font-poppins font-bold" data-testid="footer-brand">Tomboan</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md" data-testid="footer-description">
              Wisata edukasi dan budaya yang menghadirkan pengalaman belajar tentang kearifan lokal 
              Situs Petirtaan Ngawonggo melalui filosofi Asah, Asih, Asuh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-colors" data-testid="social-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-colors" data-testid="social-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-colors" data-testid="social-youtube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-colors" data-testid="social-whatsapp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6" data-testid="footer-menu-title">Menu Utama</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('beranda')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-link-home"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('warisan')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-link-heritage"
                >
                  {t('nav.heritage')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('edukasi')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-link-education"
                >
                  {t('nav.education')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('kuliner')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-link-culinary"
                >
                  {t('nav.culinary')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galeri')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-link-gallery"
                >
                  {t('nav.gallery')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6" data-testid="footer-info-title">Informasi</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-start" data-testid="footer-address">
                <span className="text-golden mr-2">📍</span>
                Desa Ngawonggo, Tajinan
              </li>
              <li className="text-gray-300 flex items-start" data-testid="footer-phone">
                <span className="text-golden mr-2">📞</span>
                +62 xxx-xxxx-xxxx
              </li>
              <li className="text-gray-300 flex items-start" data-testid="footer-email">
                <span className="text-golden mr-2">✉️</span>
                info@tomboan-ngawonggo.id
              </li>
              <li className="text-gray-300 flex items-start" data-testid="footer-hours">
                <span className="text-golden mr-2">🕐</span>
                08:00 - 17:00 WIB
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0" data-testid="footer-copyright">
              © 2024 Tomboan Situs Petirtaan Ngawonggo. Dibuat dengan ❤️ untuk pelestarian budaya Indonesia.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-privacy">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-terms">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-sitemap">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
