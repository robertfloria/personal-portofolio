/**
 * DownloadCvButton component
 *
 * Renders a button to download the CV PDF from the API.
 * - Uses useCvDownload hook for mutation and loading state.
 * - Handles file download and error notification.
 * - Accepts custom className and children.
 *
 * @example
 * <DownloadCvButton>Download CV</DownloadCvButton>
 */
import React from 'react';
import { Button } from '@/components/common';
import { useCvDownload } from '@/hooks/use-cv-download';
import { downloadFile } from '@/lib/utils';

export interface DownloadCvButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const DownloadCvButton: React.FC<DownloadCvButtonProps> = ({ className, children }) => {
  const { mutate, isPending } = useCvDownload();

  const handleDownload = () => {
    mutate(undefined, {
      onSuccess: (blob) => {
        downloadFile(blob, 'cv.pdf');
      },
      onError: () => {
        alert('Could not download CV. Please try again later.');
      },
    });
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isPending}
      className={className}
      variant="primary"
      size="lg"
    >
      {isPending ? 'Downloading...' : children || 'Download CV'}
    </Button>
  );
};
