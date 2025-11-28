import React from 'react';
import { Card, IconBadge } from '@/components/common';

interface ContactMethod {
  label: string;
  value: string;
  iconKey: string;
  href?: string;
  gradient?: string;
  border?: string;
}

interface ContactMethodCardProps {
  method: ContactMethod;
}

export const ContactMethodCard: React.FC<ContactMethodCardProps> = ({ method }) => {
  const isLink = !!method.href;
  const iconBadge = (
    <IconBadge
      iconKey={method.iconKey}
      size="md"
      variant="gradient"
      className="group-hover:scale-110 transition-transform ring-1 ring-white/10"
    />
  );
  const cardContent = (
    <Card.Content className="flex flex-col items-center text-center p-0 gap-2">
      {iconBadge}
      <Card.Title className="text-sm font-medium text-foreground">{method.label}</Card.Title>
      <Card.Description className="text-sm font-semibold text-muted-foreground text-center break-all">
        {method.value}
      </Card.Description>
    </Card.Content>
  );
  const cardClass = `flex flex-col h-full items-center text-center ${method.gradient} border ${method.border} group`;
  return isLink ? (
    <a key={method.label} href={method.href}>
      <Card padding="lg" hover="glow" className={cardClass}>
        {cardContent}
      </Card>
    </a>
  ) : (
    <Card key={method.label} padding="lg" hover="glow" className={cardClass}>
      {cardContent}
    </Card>
  );
};
