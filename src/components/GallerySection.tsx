import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import gallery images
import firstLiturgy from '@/assets/gallery/first-liturgy.jpg';
import service1 from '@/assets/gallery/service-1.jpg';
import service2 from '@/assets/gallery/service-2.jpg';
import service3 from '@/assets/gallery/service-3.jpg';
import sanctification1 from '@/assets/gallery/sanctification-1.jpg';
import sanctification2 from '@/assets/gallery/sanctification-2.jpg';
import community1 from '@/assets/gallery/community-1.jpg';
import lunch from '@/assets/gallery/lunch.png';
import recent1 from '@/assets/gallery/recent-1.jpg';
import recent2 from '@/assets/gallery/recent-2.jpg';
import throne from '@/assets/gallery/throne.jpg';
import interior from '@/assets/gallery/interior.jpg';

const GallerySection = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: firstLiturgy,
      captionEn: 'First Divine Liturgy',
      captionRu: 'Первая Божественная Литургия',
    },
    {
      src: service1,
      captionEn: 'Divine Liturgy',
      captionRu: 'Божественная Литургия',
    },
    {
      src: service2,
      captionEn: 'Prayer service',
      captionRu: 'Богослужение',
    },
    {
      src: sanctification1,
      captionEn: 'Sanctification ceremony',
      captionRu: 'Освящение',
    },
    {
      src: sanctification2,
      captionEn: 'Blessing of water',
      captionRu: 'Водосвятие',
    },
    {
      src: throne,
      captionEn: 'Holy Throne',
      captionRu: 'Святой Престол',
    },
    {
      src: community1,
      captionEn: 'Our community',
      captionRu: 'Наша община',
    },
    {
      src: lunch,
      captionEn: 'Community meal',
      captionRu: 'Трапеза общины',
    },
    {
      src: service3,
      captionEn: 'Feast day celebration',
      captionRu: 'Праздничное богослужение',
    },
    {
      src: interior,
      captionEn: 'Church interior',
      captionRu: 'Интерьер храма',
    },
    {
      src: recent1,
      captionEn: 'Recent service',
      captionRu: 'Недавнее богослужение',
    },
    {
      src: recent2,
      captionEn: 'Parish life',
      captionRu: 'Приходская жизнь',
    },
  ];

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-cream-dark cross-pattern">
      <div className="container-orthodox">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
            {t('gallery.title')}
          </h2>
          <div className="divider-orthodox max-w-xs mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={language === 'en' ? image.captionEn : image.captionRu}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-body text-sm text-cream">
                  {language === 'en' ? image.captionEn : image.captionRu}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-deep-blue/95 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
            >
              <X size={24} />
            </button>

            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <div className="max-w-4xl w-full">
              <img
                src={images[selectedImage].src}
                alt={language === 'en' ? images[selectedImage].captionEn : images[selectedImage].captionRu}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center mt-4 font-body text-lg text-cream">
                {language === 'en' ? images[selectedImage].captionEn : images[selectedImage].captionRu}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
