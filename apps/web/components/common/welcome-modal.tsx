'use client';

import React, { useEffect, useState } from 'react';
import { Button, Heading, Text, Modal } from '@/components/common';

export const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only show if not dismissed before
    const dismissed = localStorage.getItem('welcomeModalDismissed');
    if (!dismissed) {
      setTimeout(() => setOpen(true), 0);
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
          <div
            className="flex flex-col gap-4 items-center justify-center py-6 px-2 sm:px-8"
            style={{ minWidth: 320 }}
          >
            {/* Illustration / Icon */}
            <div>
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <span className="text-3xl">👋</span>
              </div>
            </div>
            <Heading variant="h2" className="text-primary font-extrabold tracking-tight">
              Welcome!
            </Heading>
            <Text variant="lead" className="text-muted-foreground text-center">
              Thanks for visiting my portfolio.
              <br />
              Explore my projects, skills, and feel free to get in touch!
            </Text>
            <Button
              onClick={handleClose}
              variant="primary"
              size="lg"
              className="shadow-lg hover:scale-105 transition-transform"
              autoFocus
            >
              Get Started
            </Button>
            <Text variant="muted" className="text-xs opacity-70">
              This message only appears once. Enjoy exploring!
            </Text>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
