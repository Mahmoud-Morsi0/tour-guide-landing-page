import Image from 'next/image';

interface HeroProps {
  whatsappNumber: string;
}

export default function Hero({ whatsappNumber }: HeroProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I would like to book a tour in Egypt.')}`;

  const statistics = [
    { number: '10k+', label: 'Happy Travelers' },
    { number: '500+', label: 'Custom Tours' },
    { number: '5k+', label: 'Hotel Stays Arranged' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=2070"
          alt="Pyramids of Giza, Egypt"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col">
        {/* Main Title - Large EGYPT text */}
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none text-white tracking-tight">
            EGYPT
          </h1>
        </div>

        {/* Bottom Section with Statistics and CTA */}
        <div className="mt-auto pb-12 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            {/* Left Side - Statistics and CTA */}
            <div className="space-y-6">
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-white">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-white/90">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tagline */}
              <p className="text-white text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
                Journey across continents, cultures, and landscapes—because every
                path leads to new discoveries.
              </p>

              {/* Book Now Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 w-fit"
              >
                Book Now
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

            {/* Right Side - Camel Image */}
            <div className="hidden lg:flex justify-end items-end">
              <div className="relative w-64 h-80 xl:w-80 xl:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1509316975852-ffd9c3c5e08e?q=80&w=800"
                  alt="Camel in Egyptian desert"
                  fill
                  className="object-contain object-bottom"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
