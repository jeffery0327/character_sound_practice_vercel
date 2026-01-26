import '@/styles/globals.css';

import Byline from '@/ui/byline';
import { GlobalNav } from '@/ui/global-nav';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import db from '@/lib/db'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: { default: '國小生字練習', template: '%s | 國小生字練習' },
  metadataBase: new URL('https://app-router.vercel.app'),
  description:
    '專為台灣國小生設計的生字練習天地',
  openGraph: {
    title: '國小生字練習',
    description:
      '專為台灣國小生設計的生字練習天地',
    images: [`/api/og?title=Next.js Playground`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const learningTypes = db.learningType.findAll();
  return (
    <html lang="en" className="[color-scheme:light]">
      <body
        className={`overflow-y-scroll bg-bg font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-primary lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-b-0 lg:border-gray-800">
          <GlobalNav items={learningTypes} />
        </div>
        <div className="lg:pl-72 lg:pt-0 pt-10">
          <div className="mx-auto mt-12 mb-24 max-w-8xl -space-y-[1px] lg:px-8 lg:py-8">
            {children}
            <Byline />
          </div>
        </div>
      </body>
    </html>
  );
}
