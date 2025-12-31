'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I book a tour?',
    answer:
      'Booking is simple! Just click any "Book via WhatsApp" button on our website, and you\'ll be connected directly to our guide. No forms, no hassle—just chat and book your perfect Egyptian adventure.',
  },
  {
    question: 'Are the tours suitable for beginners or first-time travelers?',
    answer:
      'Absolutely! Our tours are designed for travelers of all experience levels. We provide detailed guidance, comfortable transportation, and expert local knowledge to ensure everyone has an amazing experience, whether it\'s your first time in Egypt or your tenth visit.',
  },
  {
    question: "What's included in the tour price?",
    answer:
      'Tour inclusions vary by package, but typically include professional guide services, transportation, entrance fees to major attractions, and sometimes meals. Each tour listing specifies exactly what\'s included. Feel free to ask us on WhatsApp for detailed information about any specific tour.',
  },
  {
    question: 'Is it safe to travel to these destinations?',
    answer:
      'Yes, Egypt is a safe destination for tourists. We work with experienced local guides who know the areas well and prioritize your safety. We stay updated on local conditions and provide guidance to ensure a secure and enjoyable experience.',
  },
  {
    question: 'Can I customize my itinerary or join a private tour?',
    answer:
      'Definitely! We specialize in both private and customized tours. Whether you want to adjust an existing tour or create a completely personalized itinerary, just let us know your preferences via WhatsApp, and we\'ll design the perfect experience for you.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods including cash, bank transfer, and digital payments. Payment details are discussed when you book via WhatsApp. We offer flexible payment options to suit your needs.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Got questions? We've got answers
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Find all the essential info here — and travel with confidence!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-600 shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 md:px-8 pb-5 md:pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

