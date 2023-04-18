import 'reflect-metadata';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import BaseLayout from '@c/layout';
import '@nm/swiper/modules/pagination/pagination.min.css';
import '@nm/swiper/modules/effect-fade/effect-fade.min.css';
import '@nm/swiper/swiper.min.css';

export const metadata: Metadata = {
  title: {
    default: 'INDIGG',
    template: '%s | INDIGG',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      follow: false,
      index: false,
    },
  },
  description: 'Gaming community for Indian gamers',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  appLinks: {
    web: {
      url: 'https://indigg.vercel.app',
      should_fallback: false,
    },
  },
  themeColor: 'black',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
};

export default RootLayout;