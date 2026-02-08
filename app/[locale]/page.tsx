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
import AnimatedSection from '@/src/components/AnimatedSection';
import { WHATSAPP_NUMBER } from '@/src/config/constants';
import { setRequestLocale } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Header whatsappNumber={WHATSAPP_NUMBER} />
      <Hero whatsappNumber={WHATSAPP_NUMBER} />
      <AnimatedSection variant="fadeUp" amount={32}>
        <Statistics />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" amount={32} delay={0.05}>
        <Tours whatsappNumber={WHATSAPP_NUMBER} />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" amount={32} delay={0.05}>
        <Services />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" amount={36} delay={0.05}>
        <Destinations />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" amount={36} delay={0.05}>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" amount={32} delay={0.05}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" amount={32} delay={0.05}>
        <TravelGallery />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" amount={28} delay={0.05}>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection variant="fadeIn" delay={0.05}>
        <WhatsAppCTA whatsappNumber={WHATSAPP_NUMBER} />
      </AnimatedSection>
      <AnimatedSection variant="fadeUp" amount={24}>
        <Footer whatsappNumber={WHATSAPP_NUMBER} />
      </AnimatedSection>
    </main>
  );
}
