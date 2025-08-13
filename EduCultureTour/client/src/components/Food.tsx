import { useLanguage } from '@/hooks/useLanguage';
import { Leaf, Heart, Ban, Sprout, Recycle, Utensils } from 'lucide-react';

export default function Food() {
  const { t } = useLanguage();

  const foods = [
    {
      name: t('food.jemblem'),
      description: t('food.jemblem.desc'),
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: t('food.ongol'),
      description: t('food.ongol.desc'),
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: t('food.apem'),
      description: t('food.apem.desc'),
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: t('food.wedang'),
      description: t('food.wedang.desc'),
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section id="kuliner" className="py-16 bg-gradient-to-b from-warm-cream to-white" data-testid="food-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-heritage-brown mb-4" data-testid="food-title">
            {t('food.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" data-testid="food-subtitle">
            {t('food.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {foods.map((food, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              data-testid={`food-card-${index}`}
            >
              <img 
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-lg text-heritage-brown mb-2">
                  {food.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {food.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-terracotta font-semibold">{t('food.kotakAsih')}</span>
                  <Heart className="h-5 w-5 text-golden" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Zero Waste Philosophy */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-terracotta" data-testid="zero-waste-philosophy">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-poppins font-bold text-2xl text-heritage-brown mb-4">
                <Leaf className="inline mr-3 h-8 w-8 text-terracotta" />
                {t('food.zeroWasteTitle')}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('food.zeroWaste.desc1')}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('food.zeroWaste.desc2')}
              </p>
              <div className="flex space-x-4">
                <div className="text-center" data-testid="zero-waste-no-plastic">
                  <Ban className="h-8 w-8 text-red-500 mb-2 mx-auto" />
                  <p className="text-sm text-gray-600">No Plastic</p>
                </div>
                <div className="text-center" data-testid="zero-waste-natural">
                  <Sprout className="h-8 w-8 text-green-500 mb-2 mx-auto" />
                  <p className="text-sm text-gray-600">Natural Ingredients</p>
                </div>
                <div className="text-center" data-testid="zero-waste-sustainable">
                  <Recycle className="h-8 w-8 text-blue-500 mb-2 mx-auto" />
                  <p className="text-sm text-gray-600">Sustainable</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-terracotta text-white p-8 rounded-xl" data-testid="kotak-asih-system">
                <Utensils className="h-16 w-16 mb-4 mx-auto" />
                <h4 className="font-poppins font-semibold text-xl mb-2">Kotak Asih System</h4>
                <p className="text-lg">{t('food.kotakAsih.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
