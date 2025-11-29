import React from 'react';
import { TimelineItem as TimelineItemType } from '../../types/timeline-item';
import { TimelineItem } from './components';

interface TimelineListProps {
  timeline: TimelineItemType[];
}

const TimelineListComponent: React.FC<TimelineListProps> = ({ timeline }) => (
  <div className="relative w-full md:w-[70vw] md:max-w-[900px]">
    {/* Timeline Line */}
    <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary to-accent" />

    {/* Timeline Items */}
    <div className="space-y-6 sm:space-y-8">
      {timeline.map((item, index) => (
        <TimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  </div>
);

export const TimelineList = React.memo(TimelineListComponent);
