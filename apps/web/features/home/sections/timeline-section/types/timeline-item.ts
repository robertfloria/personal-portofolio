export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate?: string;
  type: 'education' | 'work' | 'certificate';
  location?: string;
  current?: boolean;
}
