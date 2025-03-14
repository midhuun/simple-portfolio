import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/navbar';
import AnimatedBackground from '@/components/Navbar/animatedBackground';
import Footer from '@/components/Footer/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata: Metadata = {
  title: 'Midhun Kumar',
  description:
    'Midhun Kumar. T – Full Stack Developer specializing in React, Next.js, and the MERN Stack. Expert in building high-performance, scalable web applications with a focus on UI/UX, backend efficiency, and optimization',
};
const syneFont = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syneFont.variable}`}>
        <SpeedInsights />
        <Navbar />
        <AnimatedBackground />
        {children}
        <Footer />
      </body>
    </html>
  );
}
