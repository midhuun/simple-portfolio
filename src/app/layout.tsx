import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import Script from 'next/script';
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CFFEDK5ER9"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CFFEDK5ER9');
        `}
        </Script>
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
