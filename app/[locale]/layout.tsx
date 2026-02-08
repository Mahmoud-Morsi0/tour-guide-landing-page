import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import type { Metadata } from 'next';
import LocaleLang from '@/src/components/LocaleLang';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Egypt Tours - Private & Group Tours with Local Expert Guide',
  description:
    'Explore Egypt with a local expert guide. Private and group tours to Pyramids, Nile River, Luxor, and more. Book directly via WhatsApp.',
  openGraph: { locale: 'en_US' },
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <LocaleLang />
      {children}
    </NextIntlClientProvider>
  );
}
