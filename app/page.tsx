import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import Statistics from '@/src/components/Statistics';
import Tours from '@/src/components/Tours';
import Destinations from '@/src/components/Destinations';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import Testimonials from '@/src/components/Testimonials';
import TravelGallery from '@/src/components/TravelGallery';
import FAQ from '@/src/components/FAQ';
import WhatsAppCTA from '@/src/components/WhatsAppCTA';
import Footer from '@/src/components/Footer';
import { WHATSAPP_NUMBER } from '@/src/config/constants';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header whatsappNumber={WHATSAPP_NUMBER} />
      <Hero whatsappNumber={WHATSAPP_NUMBER} />
      <Statistics />
      <Tours whatsappNumber={WHATSAPP_NUMBER} />
      <Services />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <TravelGallery />
      <FAQ />
      <WhatsAppCTA whatsappNumber={WHATSAPP_NUMBER} />
      <Footer whatsappNumber={WHATSAPP_NUMBER} />
    </main>
  );
}
