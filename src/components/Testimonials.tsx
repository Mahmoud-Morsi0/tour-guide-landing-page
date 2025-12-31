'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatar: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anna Taylor',
    title: 'Traveler',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    quote:
      'Planning my first trip to Egypt felt overwhelming, but the tour guide made it easy. I discovered amazing places and felt confident every step of the way! The Pyramids tour was absolutely incredible.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Anderson',
    title: 'Traveler',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    quote:
      'The shared routes and tips saved me so much time while planning our family vacation. We found hidden gems in Egypt, from tranquil Nile cruises to lively markets. Every recommendation felt perfectly tailored to our group!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Liam Walker',
    title: 'Traveler',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    quote:
      'I love exploring off the beaten path, and the shared itineraries were perfect for my style. Everything was detailed, making my adventure stress-free and unforgettable. The Valley of the Kings was breathtaking!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ethan Miller',
    title: 'Traveler',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150',
    quote:
      'The insights from other travelers gave me so much inspiration for my trip to Egypt. I discovered serene temples, vibrant markets, and stunning historical sites with ease. It truly was a dream trip!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Mia Robinson',
    title: 'Traveler',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150',
    quote:
      'This tour guide helped me uncover hidden gems in Egypt that I wouldn\'t have found on my own. The Abu Simbel temples tour turned out to be one of the best trips I\'ve ever taken!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Sophia Carter',
    title: 'Traveler',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150',
    quote:
      'Thanks to the detailed planning, I found cozy cafes, scenic views, and hidden viewpoints in Cairo. The stunning architecture and charming markets made every moment feel like a postcard. It was an unforgettable experience!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, testimonials.length - itemsPerPage)
        : prev - itemsPerPage
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from real travelers who explored Egypt with us
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full transition-colors ${
                currentIndex === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
              aria-label="Previous testimonials"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= testimonials.length}
              className={`p-2 rounded-full transition-colors ${
                currentIndex + itemsPerPage >= testimonials.length
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
              aria-label="Next testimonials"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Quote Icon */}
                <div className="text-4xl text-gray-800 mb-4">"</div>

                {/* Rating */}
                <div className="mb-3">{renderStars(testimonial.rating)}</div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? 'bg-amber-600 w-8'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

