import { Heading, Text } from '@/components/common';
import { Section } from '@/components/common/section';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Section className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 lg:p-8">
      <Heading variant="h2">404 - Page Not Found</Heading>
      <Text variant="body">
        Sorry, the page you are looking for does not exist or has been moved.
      </Text>
      <Link
        href="/"
        className="px-4 py-2 bg-primary rounded hover:bg-[hsl(var(--primary)/0.8)] transition"
      >
        Go Home
      </Link>
    </Section>
  );
}
