import '@/styles/globals.scss';
import type {Metadata} from 'next';
import {type ReactNode, StrictMode} from 'react';
import {Montserrat} from 'next/font/google';
import Navbar from '@/components/navbar';

// !Fonts
const montserrat = Montserrat({
  weight: ['500', '700'],
  style: 'normal',
  subsets: ['latin'],
});

// !Metadata
export const metadata: Metadata = {
  title: "IBK's store",
  description: 'A simple description of the page',
  icons: {
    icon: [
      {url: '/images/favicons/favicon.ico', type: 'image/x-icon', sizes: '48x48'},
      {url: '/images/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16'},
      {url: '/images/favicons/favicon-32x32.png', type: 'image/png', sizes: '32x32'},
      {
        url: '/images/favicons/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
    apple: [
      {
        url: '/images/favicons/apple-touch-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  },
};

// !Page Layout Props
export interface RootLayoutProps {
  children: ReactNode;
}

// !Page Layout
export default function RootLayout({children}: Readonly<RootLayoutProps>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <StrictMode>
          <Navbar />
          {children}
        </StrictMode>
      </body>
    </html>
  );
}
