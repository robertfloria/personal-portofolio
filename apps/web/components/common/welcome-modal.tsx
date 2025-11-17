'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button, Heading, Text, Modal } from '@/components/common';

export const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only show if not dismissed before
    const dismissed = localStorage.getItem('welcomeModalDismissed');
    if (!dismissed) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('welcomeModalDismissed', 'true');
  };

  return (
    <Modal isOpen={open} onClose={handleClose}>
      <Modal.Content>
        <Modal.Header showClose onClose={handleClose} />
        <Modal.Body>
          <div className="text-center">
            <Heading variant="h2" className="mb-2 text-primary">
              Welcome!
            </Heading>
            <Text variant="body" className="text-muted-foreground mb-4">
              Thanks for visiting my portfolio. Explore my projects, skills, and feel free to get in
              touch!
            </Text>
            <Button onClick={handleClose} variant="primary" size="lg" className="mt-4">
              Get Started
            </Button>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
