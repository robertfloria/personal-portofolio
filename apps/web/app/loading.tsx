import { Section } from '@/components/common/section';
import { Spinner } from '@/components/common/spinner';
import { Heading, Text } from '@/components/common/typography';

export default function Loading() {
  return (
    <Section className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 lg:p-8">
      <Heading variant="h2">Loading...</Heading>
      <Spinner size={48} className="my-4" />
      <Text variant="body">Please wait while we load your content.</Text>
    </Section>
  );
}
