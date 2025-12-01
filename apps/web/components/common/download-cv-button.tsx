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
import { DownloadIcon } from 'lucide-react';

export interface DownloadCvButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  textVariant?: 'default' | 'short';
}

export const DownloadCvButton: React.FC<DownloadCvButtonProps> = ({
  className,
  size = 'lg',
  textVariant = 'default',
}) => {
  const { data: cachedData, refetch, isLoading, isFetching } = useCvDownload();

  const handleDownload = async () => {
    // Use cached data if available, otherwise fetch
    if (cachedData) {
      downloadFile(cachedData, 'cv.pdf');
      return;
    }

    const result = await refetch();
    if (result.isSuccess && result.data) {
      downloadFile(result.data, 'cv.pdf');
    }
  };

  const loading = isLoading || isFetching;

  return (
    <Button
      onClick={handleDownload}
      disabled={loading}
      className={className}
      variant="outline"
      size={size}
      leftIcon={<DownloadIcon size={textVariant === 'default' ? 20 : 15} />}
    >
      {loading
        ? textVariant === 'default'
          ? 'Downloading...'
          : '...'
        : textVariant === 'default'
          ? 'Download CV'
          : 'CV'}
    </Button>
  );
};
