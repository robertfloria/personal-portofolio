import type { Metadata } from 'next';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navbar, Providers, Toast, WelcomeModal } from '@/components/layout';
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

/**
 * RootLayout component
 *
 * Layout global pentru aplicația Next.js. Include providers, navbar, footer, toast și modal de bun venit.
 * Wrapping pentru toate paginile și rutele aplicației.
 *
 * @component
 * @param {Readonly<{ children: React.ReactNode }>} props - Conținutul paginii/rutei
 * @example
 * <RootLayout>
 *   <PageComponent />
 * </RootLayout>
 */
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
          <Toast />
        </Providers>
      </body>
    </html>
  );
}
