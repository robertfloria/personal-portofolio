/**
 * Loading component
 *
 * Displays a centered loading spinner and message while content is loading.
 * Utilizat pentru fallback UI în Next.js (loading state la route sau la SSR).
 *
 * @component
 * @example
 * <Loading />
 */
import { Section } from '@/components/common/section';
import { Spinner } from '@/components/common/spinner';
import { Heading, Text } from '@/components/common/typography';

export default function Loading() {
  return (
    <Section className="flex flex-col items-center justify-center min-h-screen p-section md:p-section-md lg:p-section-lg">
      <Heading variant="h2">Loading...</Heading>
      <Spinner size={48} className="my-4" />
      <Text variant="body">Please wait while we load your content.</Text>
    </Section>
  );
}
