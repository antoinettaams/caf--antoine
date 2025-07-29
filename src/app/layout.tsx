// src/app/layout.tsx
import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

import { News_Cycle, Amatic_SC } from 'next/font/google';

const newsCycle = News_Cycle({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-news',
  display: 'swap', 
});


const amaticSC = Amatic_SC({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-amatic',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Café-Antoine',
  description: 'La Cafette qui rassemble',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${newsCycle.variable} ${amaticSC.variable}`}>
      <head>
       
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow ">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}