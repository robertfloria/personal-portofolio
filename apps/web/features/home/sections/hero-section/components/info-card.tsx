import React from 'react';
import { Card, IconBadge } from '@/components/common';

interface InfoCardProps {
  label: string;
  value: string;
  iconKey: string;
  animated?: boolean;
  animationDelay?: number;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  label,
  value,
  iconKey,
  animated,
  animationDelay,
}) => (
  <Card
    hover="glow"
    padding="md"
    animated={animated}
    animationDelay={animationDelay}
    className="group"
  >
    <Card.Content className="flex gap-4">
      <IconBadge
        iconKey={iconKey}
        variant="solid"
        size="md"
        className="group-hover:scale-110 transition-transform shrink-0"
      />
      <div>
        <Card.Header className="text-lg font-semibold">{label}</Card.Header>
        <Card.Description>{value}</Card.Description>
      </div>
    </Card.Content>
  </Card>
);
