'use client';

import { useState } from 'react';

interface ContactProps {
  whatsappNumber: string;
}

export default function Contact({ whatsappNumber }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, my name is ${name}. Please call me at ${phone}.`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatPhoneNumber = (phone: string) => {
    if (phone.startsWith('20')) {
      return `+${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5, 9)} ${phone.slice(9)}`;
    }
    return phone;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Contact us
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Phone:</span>{' '}
                  <a
                    href={`tel:${whatsappNumber}`}
                    className="text-orange-500 hover:text-orange-600"
                  >
                    {formatPhoneNumber(whatsappNumber)}
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Email:</span>{' '}
                  <a
                    href="mailto:info@egypttours.com"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    info@egypttours.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Address:</span> El-tahrir
                  Square, Cairo, Egypt
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Working hours:</span> Mon-Fri:
                  from 8:30 a.m. to 5:00 p.m. Saturday: from 10:00 to 16:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form in Diamond */}
          <div className="relative">
            <div className="bg-orange-500 diamond-shape p-8 md:p-12 text-white shadow-2xl min-h-[400px] flex items-center justify-center">
              <form onSubmit={handleSubmit} className="space-y-6 diamond-content w-full max-w-sm">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-semibold">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Your phone number"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

