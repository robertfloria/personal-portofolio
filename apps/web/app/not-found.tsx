/**
 * NotFound component
 *
 * Afișează o pagină 404 pentru rute inexistente sau mutate.
 * Include un mesaj informativ și un link către homepage.
 * Utilizat ca fallback în Next.js pentru pagini neidentificate.
 *
 * @component
 * @example
 * <NotFound />
 */
import { Button, Heading, Text } from '@/components/common';
import { Section } from '@/components/common/section';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <Section className="flex flex-col items-center justify-center min-h-screen p-section md:p-section-md lg:p-section-lg">
      <div className="text-center max-w-md mx-auto">
        {/* Large 404 Number */}
        <div className="mb-6">
          <span className="text-8xl md:text-9xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </span>
        </div>

        <Heading variant="h2" className="mb-4">
          Page Not Found
        </Heading>

        <Text variant="body" className="mb-8 text-muted-foreground">
          Sorry, the page you are looking for does not exist or has been moved. Let&apos;s get you
          back on track.
        </Text>

        <div className="flex flex-col sm:flex-row gap-component justify-center">
          <Link href="/">
            <Button variant="primary" leftIcon={<Home className="w-4 h-4" />}>
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
