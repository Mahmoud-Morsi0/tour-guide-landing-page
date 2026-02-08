'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import AnimatedCard from '@/src/components/AnimatedCard';

interface GalleryImage {
  id: number;
  src: string;
  altKey: string;
  tourKey?: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770576003/pexels-harun-15114174-20226436_yn1iyl.jpg', altKey: 'pyramids', tourKey: 'pyramidsTour' },
  { id: 2, src: 'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770576863/pexels-indu-bikash-sarker-116278202-32286115_iffoed.jpg', altKey: 'nile', tourKey: 'nileTour' },
  { id: 3, src: 'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770577245/pexels-clioseye-35506463_fmdsju.jpg', altKey: 'luxor', tourKey: 'luxorTour' },
  { id: 4, src: 'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770577993/pexels-mariacamila-7435827_cfactz.jpg', altKey: 'cairo', tourKey: 'cairoTour' },
  { id: 5, src: 'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770576867/pexels-girlvsglobe86-300284270-32044045_fwqf7z.jpg', altKey: 'abuSimbel', tourKey: 'abuSimbelTour' },
  { id: 6, src: 'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770577993/pexels-mariacamila-7435827_cfactz.jpg', altKey: 'redSea', tourKey: 'redSeaTour' },
  { id: 7, src: 'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770577847/pexels-moaznegm-25323298_rzjvad.jpg', altKey: 'alexandria', tourKey: 'alexandriaTour' },
  { id: 8, src: 'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770578049/pexels-zakh-33481470_ouwsrt.jpg', altKey: 'museum', tourKey: 'cairoTour' },
];

export default function TravelGallery() {
  const t = useTranslations('travelGallery');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <AnimatedCard key={image.id} index={index} staggerDelay={0.06}>
              <div
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                src={image.src}
                alt={t(`alts.${image.altKey}`)}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center px-4">
                  {image.tourKey && (
                    <p className="font-semibold text-sm">{t(`tours.${image.tourKey}`)}</p>
                  )}
                </div>
              </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={t(`alts.${selectedImage.altKey}`)}
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              {selectedImage.tourKey && (
                <div className="text-white text-center mt-4">
                  <p className="text-lg font-semibold">{t(`tours.${selectedImage.tourKey}`)}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
