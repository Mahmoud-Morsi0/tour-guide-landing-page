export interface Tour {
  id: number;
  name: string;
  slug: string;
  duration: string;
  price: string;
  image: string;
  images: string[];
  description: string;
  fullDescription: string;
  rating?: number;
  highlights: string[];
  itinerary: {
    time: string;
    activity: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  meetingPoint: string;
  cancellationPolicy: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    name: 'Pyramids of Giza & Sphinx',
    slug: 'pyramids-of-giza-sphinx',
    duration: 'Half Day',
    price: 'From $50',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=1200',
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200',
    ],
    description:
      'Visit the last remaining wonder of the ancient world. Explore the Great Pyramid, Sphinx, and Valley Temple.',
    fullDescription:
      'Experience the awe-inspiring Pyramids of Giza, one of the Seven Wonders of the Ancient World. This half-day tour takes you to the iconic Great Pyramid of Khufu, the Pyramid of Khafre, and the Pyramid of Menkaure. Stand before the enigmatic Sphinx, a magnificent limestone statue with the body of a lion and the head of a pharaoh. Visit the Valley Temple, where the pharaohs were mummified. Our expert guide will share fascinating stories about ancient Egyptian civilization, pharaohs, and the mysteries surrounding these incredible structures.',
    rating: 4.9,
    highlights: [
      'Visit the Great Pyramid of Khufu',
      'See the enigmatic Sphinx up close',
      'Explore the Valley Temple',
      'Learn about ancient Egyptian history',
      'Professional Egyptologist guide',
    ],
    itinerary: [
      {
        time: '08:00 AM',
        activity: 'Hotel pickup from Cairo or Giza',
      },
      {
        time: '09:00 AM',
        activity: 'Arrive at Giza Plateau, visit the Great Pyramid',
      },
      {
        time: '10:30 AM',
        activity: 'Explore the Sphinx and Valley Temple',
      },
      {
        time: '11:30 AM',
        activity: 'Photo opportunities and free time',
      },
      {
        time: '12:30 PM',
        activity: 'Return to hotel',
      },
    ],
    inclusions: [
      'Hotel pickup and drop-off',
      'Professional Egyptologist guide',
      'Entrance fees to Giza Plateau',
      'Bottled water',
      'Air-conditioned vehicle',
    ],
    exclusions: [
      'Pyramid interior tickets (optional, extra cost)',
      'Camel ride (optional, extra cost)',
      'Gratuities',
      'Lunch',
    ],
    meetingPoint: 'Your hotel in Cairo or Giza',
    cancellationPolicy:
      'Free cancellation up to 24 hours before the tour. Full refund for cancellations made at least 24 hours in advance.',
  },
  {
    id: 2,
    name: 'Nile River Cruise',
    slug: 'nile-river-cruise',
    duration: 'Full Day',
    price: 'From $80',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=1200',
      'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1200',
    ],
    description:
      'Sail along the legendary Nile River. Enjoy traditional Egyptian cuisine and breathtaking views.',
    fullDescription:
      'Embark on a memorable journey along the legendary Nile River, the lifeblood of ancient Egypt. This full-day cruise offers stunning views of the riverbanks, traditional felucca sailing, and authentic Egyptian experiences. Enjoy a delicious lunch featuring traditional Egyptian cuisine while cruising. Watch local life along the riverbanks, see traditional fishing methods, and learn about the importance of the Nile in Egyptian history and culture. This relaxing cruise is perfect for those who want to experience Egypt from a different perspective.',
    rating: 4.8,
    highlights: [
      'Traditional felucca sailing experience',
      'Traditional Egyptian lunch',
      'Stunning Nile River views',
      'Learn about Nile River history',
      'Relaxing and scenic experience',
    ],
    itinerary: [
      {
        time: '09:00 AM',
        activity: 'Hotel pickup',
      },
      {
        time: '10:00 AM',
        activity: 'Board the felucca boat',
      },
      {
        time: '10:30 AM',
        activity: 'Begin sailing along the Nile',
      },
      {
        time: '01:00 PM',
        activity: 'Traditional Egyptian lunch on board',
      },
      {
        time: '02:00 PM',
        activity: 'Continue sailing, photo opportunities',
      },
      {
        time: '04:00 PM',
        activity: 'Return to dock',
      },
      {
        time: '05:00 PM',
        activity: 'Hotel drop-off',
      },
    ],
    inclusions: [
      'Hotel pickup and drop-off',
      'Felucca boat cruise',
      'Traditional Egyptian lunch',
      'Professional guide',
      'Bottled water',
    ],
    exclusions: ['Gratuities', 'Additional beverages'],
    meetingPoint: 'Your hotel in Cairo',
    cancellationPolicy:
      'Free cancellation up to 24 hours before the tour. Full refund for cancellations made at least 24 hours in advance.',
  },
  {
    id: 3,
    name: 'Luxor & Valley of the Kings',
    slug: 'luxor-valley-of-the-kings',
    duration: '2 Days',
    price: 'From $150',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200',
      'https://images.unsplash.com/photo-1580502304784-8985b4cdfd0e?q=80&w=1200',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=1200',
    ],
    description:
      'Discover the ancient capital of Thebes. Explore royal tombs, temples, and monuments.',
    fullDescription:
      'Journey to Luxor, the ancient capital of Thebes, and explore the world\'s greatest open-air museum. This 2-day tour takes you to the magnificent Valley of the Kings, where pharaohs were buried in elaborate tombs. Visit the stunning Karnak Temple complex, one of the largest religious sites ever constructed. Explore Luxor Temple, beautifully illuminated at sunset. Discover the tombs of Tutankhamun, Ramesses VI, and other pharaohs. This comprehensive tour offers an in-depth look at ancient Egyptian burial practices, religious beliefs, and architectural achievements.',
    rating: 4.9,
    highlights: [
      'Visit Valley of the Kings',
      'Explore Karnak Temple complex',
      'See Luxor Temple',
      'Visit royal tombs',
      'Expert Egyptologist guide',
    ],
    itinerary: [
      {
        time: 'Day 1 - 06:00 AM',
        activity: 'Early morning flight to Luxor',
      },
      {
        time: '09:00 AM',
        activity: 'Arrive in Luxor, visit Valley of the Kings',
      },
      {
        time: '12:00 PM',
        activity: 'Lunch break',
      },
      {
        time: '02:00 PM',
        activity: 'Visit Hatshepsut Temple',
      },
      {
        time: '04:00 PM',
        activity: 'Colossi of Memnon',
      },
      {
        time: '06:00 PM',
        activity: 'Check-in to hotel, dinner',
      },
      {
        time: 'Day 2 - 08:00 AM',
        activity: 'Visit Karnak Temple',
      },
      {
        time: '12:00 PM',
        activity: 'Lunch',
      },
      {
        time: '02:00 PM',
        activity: 'Explore Luxor Temple',
      },
      {
        time: '05:00 PM',
        activity: 'Return flight to Cairo',
      },
    ],
    inclusions: [
      'Round-trip flights Cairo-Luxor',
      'All entrance fees',
      'Professional Egyptologist guide',
      '1-night hotel accommodation',
      'All meals',
      'Air-conditioned transportation',
    ],
    exclusions: ['Gratuities', 'Personal expenses'],
    meetingPoint: 'Cairo Airport or your hotel',
    cancellationPolicy:
      'Free cancellation up to 7 days before the tour. 50% refund for cancellations made 3-7 days in advance.',
  },
  {
    id: 4,
    name: 'Cairo City Tour',
    slug: 'cairo-city-tour',
    duration: 'Full Day',
    price: 'From $60',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1200',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=1200',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200',
    ],
    description:
      'Experience the vibrant capital. Visit the Egyptian Museum, Khan el-Khalili bazaar, and Islamic Cairo.',
    fullDescription:
      'Discover the vibrant capital city of Cairo on this comprehensive full-day tour. Visit the world-renowned Egyptian Museum, home to over 120,000 artifacts including the treasures of Tutankhamun. Explore the historic Khan el-Khalili bazaar, one of the oldest markets in the Middle East, where you can shop for souvenirs, spices, and traditional crafts. Walk through Islamic Cairo, admiring beautiful mosques and historic architecture. Visit the Citadel of Saladin and the stunning Mohamed Ali Mosque. This tour offers a perfect blend of ancient history and modern Egyptian culture.',
    rating: 4.7,
    highlights: [
      'Visit the Egyptian Museum',
      'Explore Khan el-Khalili bazaar',
      'Walk through Islamic Cairo',
      'Visit Citadel of Saladin',
      'See Mohamed Ali Mosque',
    ],
    itinerary: [
      {
        time: '08:00 AM',
        activity: 'Hotel pickup',
      },
      {
        time: '09:00 AM',
        activity: 'Visit the Egyptian Museum',
      },
      {
        time: '12:00 PM',
        activity: 'Lunch at local restaurant',
      },
      {
        time: '01:30 PM',
        activity: 'Explore Khan el-Khalili bazaar',
      },
      {
        time: '03:00 PM',
        activity: 'Visit Citadel of Saladin',
      },
      {
        time: '04:00 PM',
        activity: 'Mohamed Ali Mosque',
      },
      {
        time: '05:00 PM',
        activity: 'Return to hotel',
      },
    ],
    inclusions: [
      'Hotel pickup and drop-off',
      'Professional guide',
      'Entrance fees',
      'Lunch',
      'Bottled water',
      'Air-conditioned vehicle',
    ],
    exclusions: ['Gratuities', 'Personal shopping'],
    meetingPoint: 'Your hotel in Cairo',
    cancellationPolicy:
      'Free cancellation up to 24 hours before the tour. Full refund for cancellations made at least 24 hours in advance.',
  },
  {
    id: 5,
    name: 'Abu Simbel Temples',
    slug: 'abu-simbel-temples',
    duration: 'Full Day',
    price: 'From $120',
    image: 'https://images.unsplash.com/photo-1580502304784-8985b4cdfd0e?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1580502304784-8985b4cdfd0e?q=80&w=1200',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=1200',
    ],
    description:
      'Marvel at Ramesses II magnificent temples. A UNESCO World Heritage site of incredible scale.',
    fullDescription:
      'Journey to Abu Simbel to witness one of Egypt\'s most magnificent monuments - the Great Temple of Ramesses II. This UNESCO World Heritage site features two massive rock-cut temples built by Ramesses II in the 13th century BC. The temples were relocated in the 1960s to save them from flooding during the construction of the Aswan High Dam. Marvel at the colossal statues of Ramesses II, each standing 20 meters tall. Explore the intricate carvings and hieroglyphics that tell stories of ancient battles and pharaonic power. This is a truly awe-inspiring experience that showcases the grandeur of ancient Egyptian architecture.',
    rating: 4.8,
    highlights: [
      'See the Great Temple of Ramesses II',
      'Visit the Temple of Nefertari',
      'Marvel at colossal statues',
      'Learn about the temple relocation',
      'UNESCO World Heritage site',
    ],
    itinerary: [
      {
        time: '04:00 AM',
        activity: 'Early morning hotel pickup',
      },
      {
        time: '05:00 AM',
        activity: 'Drive to Abu Simbel (3.5 hours)',
      },
      {
        time: '08:30 AM',
        activity: 'Arrive at Abu Simbel',
      },
      {
        time: '09:00 AM',
        activity: 'Visit the Great Temple of Ramesses II',
      },
      {
        time: '10:30 AM',
        activity: 'Explore the Temple of Nefertari',
      },
      {
        time: '12:00 PM',
        activity: 'Lunch break',
      },
      {
        time: '01:00 PM',
        activity: 'Return journey to Aswan',
      },
      {
        time: '04:30 PM',
        activity: 'Hotel drop-off',
      },
    ],
    inclusions: [
      'Hotel pickup and drop-off',
      'Air-conditioned vehicle',
      'Professional guide',
      'Entrance fees',
      'Lunch',
      'Bottled water',
    ],
    exclusions: ['Gratuities', 'Personal expenses'],
    meetingPoint: 'Your hotel in Aswan',
    cancellationPolicy:
      'Free cancellation up to 48 hours before the tour. Full refund for cancellations made at least 48 hours in advance.',
  },
  {
    id: 6,
    name: 'Red Sea & Desert Safari',
    slug: 'red-sea-desert-safari',
    duration: '2 Days',
    price: 'From $180',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73ab6?q=80&w=1200',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200',
    ],
    description:
      'Combine beach relaxation with desert adventure. Snorkeling, camel rides, and Bedouin experiences.',
    fullDescription:
      'Experience the best of both worlds with this 2-day adventure combining Red Sea relaxation and desert exploration. Spend your first day snorkeling in the crystal-clear waters of the Red Sea, home to vibrant coral reefs and colorful marine life. On the second day, venture into the desert for an authentic Bedouin experience. Enjoy a camel ride across the sand dunes, watch a spectacular desert sunset, and experience traditional Bedouin hospitality with a delicious dinner under the stars. This tour offers a perfect blend of water activities and desert culture.',
    rating: 4.9,
    highlights: [
      'Snorkeling in the Red Sea',
      'Camel ride in the desert',
      'Bedouin dinner under the stars',
      'Desert sunset experience',
      'Traditional Bedouin hospitality',
    ],
    itinerary: [
      {
        time: 'Day 1 - 08:00 AM',
        activity: 'Hotel pickup',
      },
      {
        time: '09:00 AM',
        activity: 'Arrive at Red Sea resort',
      },
      {
        time: '10:00 AM',
        activity: 'Snorkeling session',
      },
      {
        time: '12:00 PM',
        activity: 'Lunch at resort',
      },
      {
        time: '02:00 PM',
        activity: 'Free time for beach activities',
      },
      {
        time: '06:00 PM',
        activity: 'Check-in to desert camp',
      },
      {
        time: 'Day 2 - 08:00 AM',
        activity: 'Desert breakfast',
      },
      {
        time: '10:00 AM',
        activity: 'Camel ride adventure',
      },
      {
        time: '12:00 PM',
        activity: 'Desert exploration',
      },
      {
        time: '06:00 PM',
        activity: 'Sunset viewing and Bedouin dinner',
      },
      {
        time: '08:00 PM',
        activity: 'Return to hotel',
      },
    ],
    inclusions: [
      'Hotel pickup and drop-off',
      'Snorkeling equipment',
      'Camel ride',
      'All meals',
      'Desert camp accommodation',
      'Professional guide',
    ],
    exclusions: ['Gratuities', 'Personal expenses', 'Additional water activities'],
    meetingPoint: 'Your hotel in Hurghada or Sharm el-Sheikh',
    cancellationPolicy:
      'Free cancellation up to 7 days before the tour. 50% refund for cancellations made 3-7 days in advance.',
  },
];

export function getTourById(id: number): Tour | undefined {
  return tours.find((tour) => tour.id === id);
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}

