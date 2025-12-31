import Image from 'next/image';
import Link from 'next/link';
import { tours } from '@/src/data/tours';

interface ToursProps {
  whatsappNumber: string;
}

export default function Tours({ whatsappNumber }: ToursProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              fill="url(#half)"
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        <span className="ml-1 text-sm font-medium text-gray-700">
          {rating}
        </span>
      </div>
    );
  };

  return (
    <section id="tours" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose your tour
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Explore hidden gems and authentic experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Rating Badge */}
                {tour.rating && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-xs font-bold text-gray-900">
                      {tour.rating}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  {tour.name}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">{tour.duration}</span>
                  {tour.price && (
                    <span className="text-lg font-bold text-gray-900">
                      {tour.price}
                    </span>
                  )}
                </div>
                {tour.rating && (
                  <div className="mb-4">{renderStars(tour.rating)}</div>
                )}
                <Link
                  href={`/tours/${tour.slug}`}
                  className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors group"
                >
                  More details
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
