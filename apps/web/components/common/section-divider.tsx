/**
 * SectionDivider component
 *
 * Renders a decorative SVG divider for sections.
 * - Supports 'top' and 'bottom' variants for different shapes.
 * - Accepts custom className for styling.
 * - Non-interactive, aria-hidden for accessibility.
 *
 * @example
 * <SectionDivider variant="bottom" />
 */
import React from 'react';

export type SectionDividerProps = {
  variant?: 'top' | 'bottom';
  className?: string;
};

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'top',
  className = '',
}) => {
  const topPath =
    'M0,288L0,128L90,128L90,32L180,32L180,128L270,128L270,32L360,32L360,128L450,128L450,224L540,224L540,288L630,288L630,192L720,192L720,128L810,128L810,96L900,96L900,288L990,288L990,128L1080,128L1080,192L1170,192L1170,256L1260,256L1260,64L1350,64L1350,224L1440,224L1440,0L1350,0L1350,0L1260,0L1260,0L1170,0L1170,0L1080,0L1080,0L990,0L990,0L900,0L900,0L810,0L810,0L720,0L720,0L630,0L630,0L540,0L540,0L450,0L450,0L360,0L360,0L270,0L270,0L180,0L180,0L90,0L90,0L0,0L0,0Z';
  const bottomPath =
    'M0,288L0,128L90,128L90,32L180,32L180,128L270,128L270,32L360,32L360,128L450,128L450,224L540,224L540,288L630,288L630,192L720,192L720,128L810,128L810,96L900,96L900,288L990,288L990,128L1080,128L1080,192L1170,192L1170,256L1260,256L1260,64L1350,64L1350,224L1440,224L1440,320L1350,320L1350,320L1260,320L1260,320L1170,320L1170,320L1080,320L1080,320L990,320L990,320L900,320L900,320L810,320L810,320L720,320L720,320L630,320L630,320L540,320L540,320L450,320L450,320L360,320L360,320L270,320L270,320L180,320L180,320L90,320L90,320L0,320L0,320Z';
  const path = variant === 'bottom' ? bottomPath : topPath;
  return (
    <svg
      className={`w-full h-20 ${className}`}
      viewBox="0 0 1440 320"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path className="divider-bg" d={path} />
    </svg>
  );
};
