import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import ImageCarousel from '@/src/components/ImageCarousel';
import TourHeroCarousel from '@/src/components/TourHeroCarousel';
import { getTourBySlug, tours } from '@/src/data/tours';
import { WHATSAPP_NUMBER } from '@/src/config/constants';

interface TourDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: TourDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: 'Tour Not Found',
    };
  }

  return {
    title: `${tour.name} - Egypt Tours | ${tour.duration}`,
    description: tour.fullDescription,
    openGraph: {
      title: `${tour.name} - Egypt Tours`,
      description: tour.description,
      images: [tour.image],
    },
  };
}

export default async function TourDetailsPage({
  params,
}: TourDetailsPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I would like to book the ${tour.name} tour.`)}`;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id={`half-${tour.id}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${tour.id})`}
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-gray-300 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        <span className="ml-2 text-lg font-medium text-gray-700">
          {rating}
        </span>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white">
      <Header whatsappNumber={WHATSAPP_NUMBER} />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="#tours"
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              Tours
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{tour.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Image Carousel */}
      <TourHeroCarousel
        images={tour.images}
        mainImage={tour.image}
        tourName={tour.name}
        duration={tour.duration}
        price={tour.price}
        rating={tour.rating}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {tour.fullDescription}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Highlights
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <svg
                      className="w-6 h-6 text-amber-600 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Itinerary
              </h2>
              <div className="space-y-4">
                {tour.itinerary.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="shrink-0 w-24 font-semibold text-amber-600">
                      {item.time}
                    </div>
                    <div className="text-gray-700">{item.activity}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery Carousel */}
            {tour.images.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Photo Gallery
                </h2>
                <ImageCarousel images={tour.images} alt={tour.name} />
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {tour.price}
                  </div>
                  <div className="text-gray-600">per person</div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Book via WhatsApp
                </a>

                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Duration
                    </h3>
                    <p className="text-gray-600">{tour.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Meeting Point
                    </h3>
                    <p className="text-gray-600">{tour.meetingPoint}</p>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {tour.inclusions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-green-600 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              {tour.exclusions.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Not Included
                  </h3>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <svg
                          className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Cancellation Policy */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Cancellation Policy
                </h3>
                <p className="text-sm text-gray-600">
                  {tour.cancellationPolicy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer whatsappNumber={WHATSAPP_NUMBER} />
    </main>
  );
}

