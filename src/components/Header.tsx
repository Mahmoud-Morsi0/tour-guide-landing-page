'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from '@/src/i18n/navigation';
import { Link } from '@/src/i18n/navigation';

interface HeaderProps {
  whatsappNumber: string;
}

export default function Header({ whatsappNumber }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('header');
  const tCommon = useTranslations('common');

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tCommon('whatsappMessage'))}`;

  const navItems = [
    { labelKey: 'nav.home', href: '/' },
    { labelKey: 'nav.destination', href: '#destinations', hasDropdown: true },
    { labelKey: 'nav.review', href: '#testimonials' },
    { labelKey: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold text-white hover:text-gray-200 transition-colors"
            >
              {t('brand')}
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {navItems.map((item) => (
              <a
                key={item.labelKey}
                href={item.href}
                className="relative px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all font-medium text-sm lg:text-base"
              >
                {t(item.labelKey)}
                {item.hasDropdown && (
                  <svg
                    className="inline-block w-4 h-4 ml-1"
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
                )}
              </a>
            ))}
            <LocaleSwitcher />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg text-sm lg:text-base"
            >
              {tCommon('bookNow')}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LocaleSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-gray-200 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.labelKey}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all font-medium"
                >
                  {t(item.labelKey)}
                  {item.hasDropdown && (
                    <svg
                      className="inline-block w-4 h-4 ml-1"
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
                  )}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg mt-2"
              >
                {tCommon('bookNow')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const isEn = locale === 'en';
  const isRu = locale === 'ru';

  const activeClass = 'bg-white text-gray-900 font-semibold shadow-sm';
  const inactiveClass = 'text-white hover:bg-white/20 font-medium';

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/10 p-1">
      <Link
        href={pathname}
        locale="en"
        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${isEn ? activeClass : inactiveClass}`}
        aria-current={isEn ? 'true' : undefined}
      >
        EN
      </Link>
      <Link
        href={pathname}
        locale="ru"
        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${isRu ? activeClass : inactiveClass}`}
        aria-current={isRu ? 'true' : undefined}
      >
        RU
      </Link>
    </div>
  );
}
