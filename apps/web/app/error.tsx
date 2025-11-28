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

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Section className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 lg:p-8">
      <Heading variant="h2">Something went wrong</Heading>
      <Text variant="body">
        An unexpected error occurred. Please try again or contact support if the issue persists.
      </Text>
      <Button onClick={() => reset()}>Retry</Button>
    </Section>
  );
}
