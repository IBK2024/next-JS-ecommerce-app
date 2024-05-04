import Footer from '@/components/footer';
import NavigationBar from '@/components/navigationBar';
import '@/styles/globals.scss';
import type {Metadata} from 'next';
import {Montserrat} from 'next/font/google';
import {type ReactNode, StrictMode} from 'react';

// !Fonts
const montserrat = Montserrat({
  weight: ['500', '700'],
  style: 'normal',
  subsets: ['latin'],
});

// !Metadata
export const metadata: Metadata = {
  title: "IBK's store",
  description: 'Quality products at affordable prices',
  icons: {
    icon: [
      {url: '/images/favicon.ico', type: 'image/x-icon', sizes: '48x48'},
      {url: '/images/favicon-16x16.png', type: 'image/png', sizes: '16x16'},
      {url: '/images/favicon-32x32.png', type: 'image/png', sizes: '32x32'},
    ],
    apple: [
      {
        url: '/images/apple-touch-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  },
};

// !Page layout props
interface RootLayoutProps {
  children: ReactNode;
}

// !Page layout
export default function RootLayout({children}: Readonly<RootLayoutProps>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <StrictMode>
          <NavigationBar />
          {children}
          <Footer />
        </StrictMode>
      </body>
    </html>
  );
}
