import Image from 'next/image';

interface Tour {
  id: number;
  name: string;
  duration: string;
  price?: string;
  image: string;
  description: string;
}

interface ToursProps {
  whatsappNumber: string;
}

const tours: Tour[] = [
  {
    id: 1,
    name: 'Pyramids of Giza & Sphinx',
    duration: 'Half Day',
    price: 'From $50',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=800',
    description:
      'Visit the last remaining wonder of the ancient world. Explore the Great Pyramid, Sphinx, and Valley Temple.',
  },
  {
    id: 2,
    name: 'Nile River Cruise',
    duration: 'Full Day',
    price: 'From $80',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800',
    description:
      'Sail along the legendary Nile River. Enjoy traditional Egyptian cuisine and breathtaking views.',
  },
  {
    id: 3,
    name: 'Luxor & Valley of the Kings',
    duration: '2 Days',
    price: 'From $150',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800',
    description:
      'Discover the ancient capital of Thebes. Explore royal tombs, temples, and monuments.',
  },
  {
    id: 4,
    name: 'Cairo City Tour',
    duration: 'Full Day',
    price: 'From $60',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=800',
    description:
      'Experience the vibrant capital. Visit the Egyptian Museum, Khan el-Khalili bazaar, and Islamic Cairo.',
  },
  {
    id: 5,
    name: 'Abu Simbel Temples',
    duration: 'Full Day',
    price: 'From $120',
    image: 'https://images.unsplash.com/photo-1580502304784-8985b4cdfd0e?q=80&w=800',
    description:
      'Marvel at Ramesses II magnificent temples. A UNESCO World Heritage site of incredible scale.',
  },
  {
    id: 6,
    name: 'Red Sea & Desert Safari',
    duration: '2 Days',
    price: 'From $180',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800',
    description:
      'Combine beach relaxation with desert adventure. Snorkeling, camel rides, and Bedouin experiences.',
  },
];

export default function Tours({ whatsappNumber }: ToursProps) {
  const whatsappUrl = (tourName: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to book the ${tourName} tour.`)}`;

  return (
    <section id="tours" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular Tours
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our curated selection of unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    {tour.duration}
                  </span>
                  {tour.price && (
                    <span className="text-lg font-bold text-gray-900">
                      {tour.price}
                    </span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {tour.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                <a
                  href={whatsappUrl(tour.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center bg-[#25D366] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

