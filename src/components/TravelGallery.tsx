'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  tour?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=800',
    alt: 'Pyramids of Giza',
    tour: 'Pyramids of Giza & Sphinx',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800',
    alt: 'Nile River Cruise',
    tour: 'Nile River Cruise',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800',
    alt: 'Luxor Temple',
    tour: 'Luxor & Valley of the Kings',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=800',
    alt: 'Cairo City',
    tour: 'Cairo City Tour',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1580502304784-8985b4cdfd0e?q=80&w=800',
    alt: 'Abu Simbel Temples',
    tour: 'Abu Simbel Temples',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800',
    alt: 'Red Sea',
    tour: 'Red Sea & Desert Safari',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800',
    alt: 'Alexandria',
    tour: 'Alexandria Tour',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=800',
    alt: 'Egyptian Museum',
    tour: 'Cairo City Tour',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=800',
    alt: 'Sphinx',
    tour: 'Pyramids of Giza & Sphinx',
  },
];

export default function TravelGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Travel Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments from our amazing journeys across Egypt
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center px-4">
                  {image.tour && (
                    <p className="font-semibold text-sm">{image.tour}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
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
                <svg
                  className="w-8 h-8"
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
              </button>
              <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              {selectedImage.tour && (
                <div className="text-white text-center mt-4">
                  <p className="text-lg font-semibold">{selectedImage.tour}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

