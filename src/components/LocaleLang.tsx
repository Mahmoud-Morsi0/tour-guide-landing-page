'use client';

import { useLocale } from 'next-intl';
import { useEffect } from 'react';

export default function LocaleLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === 'ru' ? 'ru' : 'en';
  }, [locale]);

  return null;
}
