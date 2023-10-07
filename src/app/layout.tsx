import './globals.scss';

import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
// const matter = localFont({ src: './assets/fonts/matter.ttf' });
// const inter = Inter({ subsets: ['latin'] });

import Script from 'next/script';
import { RootStyleRegistry } from './WoozDesign';

export const metadata: Metadata = {
  title: 'WoozLabs | Blog',
  description: 'Make Imagination True.',
  openGraph: {
    description: 'Make Imagination True.',
    title: 'WoozLabs | Blog',
    images: '/assets/images/og.png',
    url: `https://blog.woozlabs.com`,
    type: 'website',
  },
  twitter: {
    images: '/assets/images/og.png',
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <link rel="icon" href="/favicon.png" />
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-4GNQY03971" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-4GNQY03971');
        `}
      </Script> */}
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
