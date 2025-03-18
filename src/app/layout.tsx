import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/navbar';
import AnimatedBackground from '@/components/Navbar/animatedBackground';
import Footer from '@/components/Footer/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { IoDownload } from 'react-icons/io5';
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
        <a
          href="/Midhun_Kumar_SDE.pdf"
          className="fixed p-3 bg-white rounded-full cursor-pointer bottom-7 right-7"
        >
          <IoDownload className="md:h-10 md:w-10 h-5 w-5 text-blue-500" />
        </a>
        <Footer />
      </body>
    </html>
  );
}
