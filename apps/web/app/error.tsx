/**
 * Error component
 *
 * Afișează un mesaj de eroare și un buton pentru retry/reset.
 * Folosit ca error boundary în Next.js pentru a gestiona erorile runtime la nivel de pagină sau layout.
 *
 * @component
 * @param {Object} props
 * @param {() => void} props.reset - Funcție pentru resetarea boundary-ului de eroare (retry).
 * @example
 * <Error reset={resetFunction} />
 */
'use client';
import { Button } from '@/components/common';
import { Section } from '@/components/common/section';
import { Heading, Text } from '@/components/common/typography';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <Section className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 lg:p-8">
      <div className="text-center max-w-md mx-auto">
        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-destructive" />
          </div>
        </div>

        <Heading variant="h2" className="mb-4">
          Something went wrong
        </Heading>

        <Text variant="body" className="mb-8 text-muted-foreground">
          An unexpected error occurred. Please try again or contact support if the issue persists.
        </Text>

        {/* Error details (only in development) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mb-6 p-4 bg-card rounded-lg border border-border text-left">
            <Text variant="small" className="text-muted-foreground font-mono break-all">
              {error.message}
            </Text>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            variant="primary"
            leftIcon={<RefreshCw className="w-4 h-4" />}
            onClick={() => reset()}
          >
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" leftIcon={<Home className="w-4 h-4" />}>
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
