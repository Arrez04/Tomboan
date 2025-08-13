import { useLanguage } from '@/hooks/useLanguage';
import { GraduationCap, Heart, Shield, CheckCircle } from 'lucide-react';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="edukasi" className="py-16 bg-white" data-testid="education-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-heritage-brown mb-4" data-testid="education-title">
            {t('education.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" data-testid="education-subtitle">
            {t('education.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Cultural Education Activities" 
              className="rounded-xl shadow-lg w-full"
              data-testid="education-image-asah"
            />
          </div>
          <div>
            <h3 className="text-2xl font-poppins font-bold text-heritage-brown mb-6" data-testid="education-asah-title">
              <GraduationCap className="inline mr-3 h-8 w-8 text-terracotta" />
              {t('education.asah.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3" data-testid="education-asah-point-1">
                <CheckCircle className="h-5 w-5 text-terracotta mt-1" />
                <p className="text-gray-700">{t('education.asah.point1')}</p>
              </div>
              <div className="flex items-start space-x-3" data-testid="education-asah-point-2">
                <CheckCircle className="h-5 w-5 text-terracotta mt-1" />
                <p className="text-gray-700">{t('education.asah.point2')}</p>
              </div>
              <div className="flex items-start space-x-3" data-testid="education-asah-point-3">
                <CheckCircle className="h-5 w-5 text-terracotta mt-1" />
                <p className="text-gray-700">{t('education.asah.point3')}</p>
              </div>
              <div className="flex items-start space-x-3" data-testid="education-asah-point-4">
                <CheckCircle className="h-5 w-5 text-terracotta mt-1" />
                <p className="text-gray-700">{t('education.asah.point4')}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-poppins font-bold text-heritage-brown mb-6" data-testid="education-asih-title">
              <Heart className="inline mr-3 h-8 w-8 text-golden" />
              {t('education.asih.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3" data-testid="education-asih-point-1">
                <CheckCircle className="h-5 w-5 text-golden mt-1" />
                <p className="text-gray-700">{t('education.asih.point1')}</p>
              </div>
              <div className="flex items-start space-x-3" data-testid="education-asih-point-2">
                <CheckCircle className="h-5 w-5 text-golden mt-1" />
                <p className="text-gray-700">{t('education.asih.point2')}</p>
              </div>
              <div className="flex items-start space-x-3" data-testid="education-asih-point-3">
                <CheckCircle className="h-5 w-5 text-golden mt-1" />
                <p className="text-gray-700">{t('education.asih.point3')}</p>
              </div>
              <div className="flex items-start space-x-3" data-testid="education-asih-point-4">
                <CheckCircle className="h-5 w-5 text-golden mt-1" />
                <p className="text-gray-700">{t('education.asih.point4')}</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Cultural Education Family Activities" 
              className="rounded-xl shadow-lg w-full"
              data-testid="education-image-asih"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Cultural Education Workshop" 
              className="rounded-xl shadow-lg w-full"
              data-testid="education-image-asuh"
            />
          </div>
          <div>
            <h3 className="text-2xl font-poppins font-bold text-heritage-brown mb-6" data-testid="education-asuh-title">
              <Shield className="inline mr-3 h-8 w-8 text-heritage-brown" />
              {t('education.asuh.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3" data-testid="education-asuh-point-1">
                <CheckCircle className="h-5 w-5 text-heritage-brown mt-1" />
                <p className="text-gray-700">{t('education.asuh.point1')}</p>
              </div>
              <div className="flex items-start space-x-3" data-testid="education-asuh-point-2">
                <CheckCircle className="h-5 w-5 text-heritage-brown mt-1" />
                <p className="text-gray-700">{t('education.asuh.point2')}</p>
              </div>
              <div className="flex items-start space-x-3" data-testid="education-asuh-point-3">
                <CheckCircle className="h-5 w-5 text-heritage-brown mt-1" />
                <p className="text-gray-700">{t('education.asuh.point3')}</p>
              </div>
              <div className="flex items-start space-x-3" data-testid="education-asuh-point-4">
                <CheckCircle className="h-5 w-5 text-heritage-brown mt-1" />
                <p className="text-gray-700">{t('education.asuh.point4')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
