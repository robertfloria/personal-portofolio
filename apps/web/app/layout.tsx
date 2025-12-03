import type { Metadata, Viewport } from 'next';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navbar, Providers, Toast, WelcomeModal } from '@/components/layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  preload: true,
});

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1117' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | Robert Nicolae Floria`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'Full-Stack Developer',
    'React',
    'Next.js',
    'NestJS',
    'TypeScript',
    'Software Engineer',
    'React Native',
    'Node.js',
    'AI Integration',
    'Portfolio',
    'Robert Nicolae Floria',
    'Cluj-Napoca',
    'Romania',
  ],
  authors: [{ name: 'Robert Nicolae Floria', url: 'https://github.com/robertfloria' }],
  creator: 'Robert Nicolae Floria',
  publisher: 'Robert Nicolae Floria',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    type: 'website',
    locale: 'en_US',
    siteName: 'Robert Nicolae Floria Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    creator: '@robertfloria',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://web-production-26d4.up.railway.app',
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
          <main className="min-h-screen gap-10 flex flex-col pt-16">{children}</main>
          <Footer />
          <Toast />
        </Providers>
      </body>
    </html>
  );
}
