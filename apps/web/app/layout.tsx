import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/layout/providers';
import { Footer } from '@/components/layout/footer';
import { WelcomeModal } from '@/components/common/welcome-modal';
import { Navbar } from '@/components/layout/navbar';
import { ToastContainer } from '@/components/layout/toast';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Robert Nicolae Floria | Full-Stack Developer',
  description:
    'Full-Stack Software Developer specializing in React, Next.js, NestJS, and .NET. Building modern, scalable web applications.',
  keywords: [
    'Full-Stack Developer',
    'React',
    'Next.js',
    'NestJS',
    'TypeScript',
    'Software Engineer',
  ],
  authors: [{ name: 'Robert Nicolae Floria' }],
  openGraph: {
    title: 'Robert Nicolae Floria | Full-Stack Developer',
    description: 'Full-Stack Software Developer specializing in modern web technologies',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Navbar />
          <WelcomeModal />
          <main className="min-h-screen gap-8 flex flex-col pt-16">{children}</main>
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
