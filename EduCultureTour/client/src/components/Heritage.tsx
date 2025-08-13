import { useLanguage } from '@/hooks/useLanguage';
import { Clock, ArrowRight } from 'lucide-react';

export default function Heritage() {
  const { t } = useLanguage();

  const timelineData = [
    {
      period: (language: string) => language === 'id' ? 'Abad 8' : '8th Century',
      title: (language: string) => language === 'id' ? 'Masa Keemasan' : 'Golden Era',
      description: (language: string) => language === 'id' 
        ? 'Pembangunan kompleks petirtaan sebagai pusat spiritual'
        : 'Construction of petirtaan complex as spiritual center'
    },
    {
      period: (language: string) => language === 'id' ? 'Abad 15' : '15th Century',
      title: (language: string) => language === 'id' ? 'Periode Islam' : 'Islamic Period',
      description: (language: string) => language === 'id'
        ? 'Adaptasi dan pelestarian situs dengan nilai-nilai baru'
        : 'Adaptation and preservation of site with new values'
    },
    {
      period: '2020',
      title: (language: string) => language === 'id' ? 'Era Tomboan' : 'Tomboan Era',
      description: (language: string) => language === 'id'
        ? 'Revitalisasi sebagai pusat edukasi dan wisata budaya'
        : 'Revitalization as educational and cultural tourism center'
    }
  ];

  return (
    <section id="warisan" className="py-16 bg-gradient-to-b from-warm-cream to-white" data-testid="heritage-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-heritage-brown mb-4" data-testid="heritage-title">
            {t('heritage.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" data-testid="heritage-subtitle">
            {t('heritage.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-testid="heritage-card-architecture">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Ancient Indonesian Temple Ruins" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-poppins font-semibold text-xl text-heritage-brown mb-3">
                {t('heritage.architecture')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('heritage.architecture.desc')}
              </p>
              <button className="text-terracotta hover:text-heritage-brown font-semibold" data-testid="learn-more-architecture">
                {t('heritage.learnMore')} <ArrowRight className="inline ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-testid="heritage-card-history">
            <img 
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Indonesian Heritage Temple Complex" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-poppins font-semibold text-xl text-heritage-brown mb-3">
                {t('heritage.history')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('heritage.history.desc')}
              </p>
              <button className="text-terracotta hover:text-heritage-brown font-semibold" data-testid="learn-more-history">
                {t('heritage.learnMore')} <ArrowRight className="inline ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-testid="heritage-card-carvings">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Ancient Indonesian Stone Carvings" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-poppins font-semibold text-xl text-heritage-brown mb-3">
                {t('heritage.carvings')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('heritage.carvings.desc')}
              </p>
              <button className="text-terracotta hover:text-heritage-brown font-semibold" data-testid="learn-more-carvings">
                {t('heritage.learnMore')} <ArrowRight className="inline ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Interactive Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8" data-testid="heritage-timeline">
          <h3 className="font-poppins font-semibold text-2xl text-heritage-brown mb-6 text-center">
            <Clock className="inline mr-2 h-6 w-6" />
            {t('heritage.timeline')}
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center" data-testid={`timeline-item-${index}`}>
                <div className={`w-16 h-16 ${index === 0 ? 'bg-heritage-brown' : index === 1 ? 'bg-terracotta' : 'bg-golden'} rounded-full flex items-center justify-center text-white font-bold mb-3`}>
                  <span>{typeof item.period === 'function' ? item.period(useLanguage().language) : item.period}</span>
                </div>
                <h4 className="font-poppins font-semibold text-heritage-brown mb-2">
                  {typeof item.title === 'function' ? item.title(useLanguage().language) : item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {typeof item.description === 'function' ? item.description(useLanguage().language) : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
