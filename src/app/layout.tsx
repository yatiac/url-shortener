import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FaGithub } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yatiac URL Shortener',
  description: 'Shorten your long URLs with ease',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <div className="flex-grow min-h-screen">{children}</div>
        
      </body>
    </html>
  );
}
