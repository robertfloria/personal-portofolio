import React from 'react';
import { Card, Text, Badge, IconBadge } from '@/components/common';
import { TimelineItem as TimelineItemType } from '../../../types/timeline-item';

const typeColors: Record<TimelineItemType['type'], string> = {
  education: 'from-primary to-accent',
  work: 'from-secondary to-accent',
  certificate: 'from-accent to-primary',
};

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const iconKey =
    item.type === 'education'
      ? 'GraduationCap'
      : item.type === 'work'
        ? 'Briefcase'
        : item.type === 'certificate'
          ? 'Award'
          : '';

  const colorClass = typeColors[item.type as TimelineItemType['type']];

  return (
    <div key={item.id} className="relative">
      {/* Icon (positioned relative to timeline container) */}
      <div
        className={`absolute left-4 sm:left-8 top-4 -translate-x-1/2 rounded-full bg-linear-to-br ${colorClass} flex items-center justify-center shadow-lg`}
      >
        <IconBadge iconKey={iconKey} size="md" variant="gradient" />
      </div>

      {/* Card shifted to the right of the line */}
      <Card
        animationDelay={index * 0.05}
        hover="glow"
        className="ml-12 sm:ml-20 border-2 group p-3 sm:p-10 md:p-6"
      >
        {/* Content */}
        <Card.Content>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <Card.Title className="text-base sm:text-lg md:text-xl group-hover:text-primary transition-colors">
                {item.title}
              </Card.Title>
              <div className="flex items-center gap-2">
                <Badge variant="primary" size="sm">
                  {item.startDate} {item.endDate ? `- ${item.endDate}` : ''}
                </Badge>
                {item.current && (
                  <Badge variant="success" size="sm">
                    Current
                  </Badge>
                )}
              </div>
            </div>
            <Text variant="body" className="font-semibold">
              {item.organization}
            </Text>
            {item.location && <Text variant="small">📍 {item.location}</Text>}
            <Card.Description className="leading-relaxed">{item.description}</Card.Description>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};
