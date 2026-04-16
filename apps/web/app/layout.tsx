import type { Metadata, Viewport } from 'next';
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Footer, Navbar, Providers, Toast } from '@/components/layout';

const manrope = Manrope({
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
    { media: '(prefers-color-scheme: light)', color: '#f2f3fb' },
    { media: '(prefers-color-scheme: dark)', color: '#09090f' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | Robert Floria`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'Full-Stack Engineer',
    'React',
    'Next.js',
    'NestJS',
    'TypeScript',
    'Software Engineer',
    'Contractor',
    'B2B Services',
    'Full-Time',
    'Cloud Engineering',
    'Node.js',
    'AI Integration',
    'RAG',
    'pgvector',
    'Portfolio',
    'Robert Floria',
    'Cluj-Napoca',
    'Romania',
  ],
  authors: [{ name: 'Robert Floria', url: 'https://github.com/robertfloria' }],
  creator: 'Robert Floria',
  publisher: 'Robert Floria',
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
    siteName: 'Robert Floria Portfolio',
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
    canonical: 'https://www.rbx-soft.tech',
  },
};

/**
 * RootLayout component
 *
 * Layout global pentru aplicația Next.js. Include providers, navbar, footer și toast.
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
      <body className={`${manrope.className} antialiased`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen flex flex-col pt-16">{children}</main>
          <Footer />
          <Toast />
        </Providers>
      </body>
    </html>
  );
}
