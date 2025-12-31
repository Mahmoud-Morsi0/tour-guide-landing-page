import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Egypt Tours - Private & Group Tours with Local Expert Guide',
  description:
    'Explore Egypt with a local expert guide. Private and group tours to Pyramids, Nile River, Luxor, and more. Book directly via WhatsApp. Authentic Egyptian experiences.',
  keywords: [
    'Egypt tours',
    'private tours Egypt',
    'group tours Egypt',
    'Egypt travel guide',
    'Pyramids tours',
    'Nile River cruise',
    'Luxor tours',
    'Cairo tours',
    'Egypt tour guide',
    'WhatsApp tours Egypt',
  ],
  authors: [{ name: 'Egypt Tours' }],
  openGraph: {
    title: 'Egypt Tours - Private & Group Tours with Local Expert Guide',
    description:
      'Explore Egypt with a local expert guide. Private and group tours to Pyramids, Nile River, Luxor, and more.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Egypt Tours - Private & Group Tours with Local Expert Guide',
    description:
      'Explore Egypt with a local expert guide. Private and group tours to Pyramids, Nile River, Luxor, and more.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
