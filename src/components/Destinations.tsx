'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import AnimatedCard from '@/src/components/AnimatedCard';

const destinationKeys = [
  'cairo',
  'luxor',
  'aswan',
  'alexandria',
  'redSea',
  'sinai',
] as const;

const images = [
  'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770578049/pexels-zakh-33481470_ouwsrt.jpg',
  'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770577246/pexels-axp-photography-500641970-18934596_sbmpex.jpg',
  'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770576387/pexels-omar-167169385-25070513_s6unsl.jpg',
  'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770577823/pexels-ali-salah-photographie-157747-15501969_oeuuab.jpg',
  'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800',
  'https://res.cloudinary.com/dz1qabg6g/image/upload/v1770578210/pexels-muhammed-ragab-850521-2787212_gy5enq.jpg',
];

export default function Destinations() {
  const t = useTranslations('destinations');

  return (
    <section id="destinations" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinationKeys.map((key, index) => (
            <AnimatedCard key={key} index={index} staggerDelay={0.08}>
              <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={images[index]}
                  alt={t(`items.${key}.name`)}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {t(`items.${key}.name`)}
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
