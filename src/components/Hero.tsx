'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface HeroProps {
  whatsappNumber: string;
}

export default function Hero({ whatsappNumber }: HeroProps) {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tCommon('whatsappMessage'))}`;

  const statistics = [
    { number: '10k+', labelKey: 'stats.travelers' },
    { number: '500+', labelKey: 'stats.customTours' },
    { number: '5k+', labelKey: 'stats.hotelStays' },
  ] as const;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dz1qabg6g/image/upload/v1770576003/pexels-harun-15114174-20226436_yn1iyl.jpg"
          alt={t('heroAlt')}
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none text-white tracking-tight">
            {t('title')}
          </h1>
        </div>

        <div className="mt-auto pb-12 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-white">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-white/90">
                      {t(stat.labelKey)}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-white text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
                {t('tagline')}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 w-fit"
              >
                {tCommon('bookNow')}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
