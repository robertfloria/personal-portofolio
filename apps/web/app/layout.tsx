import type { Metadata } from 'next';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/layout/providers';
import { Footer } from '@/components/layout/footer';
import { WelcomeModal } from '@/components/common/welcome-modal';
import { ToastContainer } from '@/components/layout/toast';
import Navbar from '@/components/layout/navbar';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
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
    title: APP_NAME,
    description: APP_DESCRIPTION,
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
