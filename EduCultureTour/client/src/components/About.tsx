import { useLanguage } from '@/hooks/useLanguage';
import { Brain, Heart, HandHeart, Leaf } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-heritage-brown mb-6" data-testid="about-title">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed" data-testid="about-description-1">
              {t('about.description1')}
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed" data-testid="about-description-2">
              {t('about.description2')}
            </p>
            
            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-warm-cream rounded-lg border-l-4 border-terracotta" data-testid="pillar-asah">
                <Brain className="h-12 w-12 text-terracotta mb-3 mx-auto" />
                <h3 className="font-poppins font-semibold text-heritage-brown mb-2">{t('about.asah')}</h3>
                <p className="text-sm text-gray-600">{t('about.asah.desc')}</p>
              </div>
              
              <div className="text-center p-6 bg-warm-cream rounded-lg border-l-4 border-golden" data-testid="pillar-asih">
                <Heart className="h-12 w-12 text-golden mb-3 mx-auto" />
                <h3 className="font-poppins font-semibold text-heritage-brown mb-2">{t('about.asih')}</h3>
                <p className="text-sm text-gray-600">{t('about.asih.desc')}</p>
              </div>
              
              <div className="text-center p-6 bg-warm-cream rounded-lg border-l-4 border-heritage-brown" data-testid="pillar-asuh">
                <HandHeart className="h-12 w-12 text-heritage-brown mb-3 mx-auto" />
                <h3 className="font-poppins font-semibold text-heritage-brown mb-2">{t('about.asuh')}</h3>
                <p className="text-sm text-gray-600">{t('about.asuh.desc')}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
              alt="Traditional Indonesian Village" 
              className="rounded-xl shadow-lg w-full"
              data-testid="about-image"
            />
            
            <div className="bg-terracotta text-white p-6 rounded-xl" data-testid="zero-waste-info">
              <h3 className="font-poppins font-semibold text-xl mb-3">
                <Leaf className="inline mr-2 h-6 w-6" />
                {t('about.zeroWaste')}
              </h3>
              <p className="leading-relaxed">
                {t('about.zeroWaste.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
