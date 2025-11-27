'use client';

import React, { useEffect, useState } from 'react';
import { Button, Heading, Text, Modal } from '@/components/common';
import LottieAnimation from '../common/lottie-animation';

const SESSION_STORAGE_KEY = 'welcomeModalDismissed';

export const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only show if not dismissed before
    const dismissed = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!dismissed) {
      setTimeout(() => setOpen(true), 0);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
  };

  return (
    <Modal isOpen={open} onClose={handleClose}>
      <Modal.Content>
        <Modal.Body className="relative">
          <div className="flex flex-col gap-4 items-center justify-center py-6 px-2 sm:px-8">
            <Heading variant="h2" gradient className="font-extrabold tracking-tight">
              Welcome!
            </Heading>
            <LottieAnimation
              animationData={require('../../public/lottie/handshake.json')}
              style={{ width: 250 }}
            />
            <Text variant="body" className="text-muted-foreground text-center">
              Thanks for visiting my portfolio.
              <br />
              Explore my projects, skills, and feel free to get in touch!
            </Text>
            <Button
              onClick={handleClose}
              variant="primary"
              size="md"
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
