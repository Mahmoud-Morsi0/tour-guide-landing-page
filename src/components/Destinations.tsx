import Image from 'next/image';

interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Cairo',
    description:
      'The bustling capital city, home to the Pyramids of Giza, Egyptian Museum, and vibrant Khan el-Khalili bazaar.',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=800',
  },
  {
    id: 2,
    name: 'Luxor',
    description:
      'The world\'s greatest open-air museum, featuring the Valley of the Kings, Karnak Temple, and Luxor Temple.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800',
  },
  {
    id: 3,
    name: 'Aswan',
    description:
      'A serene city on the Nile, gateway to Abu Simbel and home to the beautiful Philae Temple and Nubian culture.',
    image: 'https://images.unsplash.com/photo-1580502304784-8985b4cdfd0e?q=80&w=800',
  },
  {
    id: 4,
    name: 'Alexandria',
    description:
      'The Mediterranean jewel, featuring the Bibliotheca Alexandrina, Qaitbay Citadel, and beautiful coastal views.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800',
  },
  {
    id: 5,
    name: 'Red Sea Coast',
    description:
      'Paradise for divers and beach lovers, with world-class resorts, coral reefs, and crystal-clear waters.',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800',
  },
  {
    id: 6,
    name: 'Sinai Peninsula',
    description:
      'Mount Sinai, St. Catherine\'s Monastery, and stunning desert landscapes perfect for adventure seekers.',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800',
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              EXPLORE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Destinations around Egypt
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Select a place you love and explore all the adventures we offer
              there
            </p>
          </div>
          <a
            href="#destinations"
            className="hidden md:block text-amber-600 hover:text-amber-700 font-medium"
          >
            Discover more →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
