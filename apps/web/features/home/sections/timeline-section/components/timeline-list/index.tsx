import React from 'react';
import { TimelineItem } from './components/TimelineItem';
import { TimelineItem as TimelineItemType } from '../../types/timeline-item';

interface TimelineListProps {
  timeline: TimelineItemType[];
  isMd: boolean;
  shouldReduceMotion: boolean;
}

export const TimelineList: React.FC<TimelineListProps> = ({ timeline, isMd, shouldReduceMotion }) => (
  <div className="relative w-full md:w-[70vw] md:max-w-[900px]">
    {/* Timeline Line */}
    <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary to-accent" />

    {/* Timeline Items */}
    <div className="space-y-6 sm:space-y-8">
      {timeline.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          index={index}
          isMd={isMd}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </div>
  </div>
);