import '@/styles/globals.scss';
import type {Metadata} from 'next';
import {StrictMode} from 'react';

export const metadata: Metadata = {
  title: 'Title',
  description: 'A simple description of the page',
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: Readonly<RootLayoutProps>) {
  return (
    <html lang='en'>
      <body>
        <StrictMode>{children}</StrictMode>
      </body>
    </html>
  );
}
