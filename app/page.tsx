import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import Tours from '@/src/components/Tours';
import Destinations from '@/src/components/Destinations';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import WhatsAppCTA from '@/src/components/WhatsAppCTA';
import Footer from '@/src/components/Footer';
import { WHATSAPP_NUMBER } from '@/src/config/constants';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header whatsappNumber={WHATSAPP_NUMBER} />
      <Hero whatsappNumber={WHATSAPP_NUMBER} />
      <Services />
      <Tours whatsappNumber={WHATSAPP_NUMBER} />
      <Destinations />
      <WhyChooseUs />
      <WhatsAppCTA whatsappNumber={WHATSAPP_NUMBER} />
      <Footer whatsappNumber={WHATSAPP_NUMBER} />
    </main>
  );
}
