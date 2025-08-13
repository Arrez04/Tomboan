import { useLanguage } from '@/hooks/useLanguage';

export default function Founder() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-b from-warm-cream to-white" data-testid="founder-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
              alt="Indonesian Cultural Educator Portrait" 
              className="w-80 h-80 rounded-full object-cover mx-auto lg:mx-0 shadow-2xl border-8 border-white"
              data-testid="founder-image"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-heritage-brown mb-6" data-testid="founder-name">
              {t('founder.title')}
              <span className="block text-xl text-terracotta mt-2">
                {t('founder.subtitle')}
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed" data-testid="founder-description-1">
              {t('founder.desc1')}
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed" data-testid="founder-description-2">
              {t('founder.desc2')}
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed" data-testid="founder-description-3">
              {t('founder.desc3')}
            </p>
            
            <div className="bg-terracotta text-white p-6 rounded-xl" data-testid="founder-quote">
              <blockquote className="text-lg italic mb-4">
                "{t('founder.quote')}"
              </blockquote>
              <cite className="font-poppins font-semibold">- Rahmad Yasin</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
