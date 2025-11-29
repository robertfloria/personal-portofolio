import React from 'react';
import Image from 'next/image';
import { Modal } from '@/components/common';

interface ProjectImageModalProps {
  image: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectImageModalComponent: React.FC<ProjectImageModalProps> = ({
  image,
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    {image && (
      <Modal.Content>
        <Modal.Header showClose onClose={onClose}>
          <h2 className="text-lg font-semibold text-foreground">Image Preview</h2>
        </Modal.Header>
        <Modal.Body>
          <div className="relative w-full h-[60vh] flex items-center justify-center">
            <Image
              src={image}
              alt="Full preview"
              fill
              className="object-contain rounded-lg bg-[hsl(var(--card)/1)]"
            />
          </div>
        </Modal.Body>
      </Modal.Content>
    )}
  </Modal>
);

export const ProjectImageModal = React.memo(ProjectImageModalComponent);
