import { useLanguage } from '@/hooks/useLanguage';
import { Images } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Gallery() {
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Ancient Indonesian Heritage Site Morning View",
      title: "Situs di Pagi Hari",
      description: "Keindahan arsitektur kuno saat fajar"
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Cultural Education Activities",
      title: "Kegiatan Edukasi",
      description: "Program pembelajaran untuk anak-anak"
    },
    {
      src: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Indonesian Traditional Architecture Details",
      title: "Detail Arsitektur",
      description: "Keindahan ornamen tradisional"
    },
    {
      src: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Indonesian Heritage Site with Visitors",
      title: "Kunjungan Wisatawan",
      description: "Pengalaman bersejarah yang berkesan"
    },
    {
      src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Ancient Indonesian Temple Complex Aerial View",
      title: "Pandangan Udara",
      description: "Kompleks situs dari ketinggian"
    },
    {
      src: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Indonesian Traditional Cultural Ceremony",
      title: "Upacara Tradisional",
      description: "Pelestarian budaya leluhur"
    }
  ];

  return (
    <section id="galeri" className="py-16 bg-white" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-heritage-brown mb-4" data-testid="gallery-title">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" data-testid="gallery-subtitle">
            {t('gallery.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              data-testid={`gallery-item-${index}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-poppins font-semibold">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-terracotta hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-all"
            data-testid="view-more-gallery"
          >
            <Images className="mr-2 h-5 w-5" />
            {t('gallery.viewMore')}
          </Button>
        </div>
      </div>
    </section>
  );
}
