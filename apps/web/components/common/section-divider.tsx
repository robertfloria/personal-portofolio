import React from 'react';

export type SectionDividerProps = {
  variant?: 'top' | 'bottom';
  className?: string;
};

/** @deprecated Section dividers are no longer used. Returns null. */
export const SectionDivider: React.FC<SectionDividerProps> = () => null;
