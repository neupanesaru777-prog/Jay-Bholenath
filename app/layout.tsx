import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://bholenath-divine.vercel.app'),
  title: {
    default: 'Har Har Mahadev | Divine Bholenath',
    template: '%s | Divine Bholenath'
  },
  description:
    'A modern spiritual website dedicated to Lord Shiva, featuring teachings, stories, gallery, and devotional inspiration.',
  keywords: ['Bholenath', 'Lord Shiva', 'Har Har Mahadev', 'Maha Shivaratri', 'Om Namah Shivaya'],
  openGraph: {
    title: 'Har Har Mahadev | Divine Bholenath',
    description:
      'Experience the divine power of Bholenath through immersive visuals, stories, and teachings.',
    type: 'website',
    url: '/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Har Har Mahadev | Divine Bholenath',
    description: 'Experience the divine power of Bholenath.'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
