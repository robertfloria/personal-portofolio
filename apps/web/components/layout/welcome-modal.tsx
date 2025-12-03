'use client';

import React, { useEffect, useState } from 'react';
import { Button, Heading, Text, Modal, LottieAnimation } from '@/components/common';
import handshakeAnimation from '../../public/lottie/handshake.json';

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
      <Modal.Content className="max-w-md">
        <Modal.Body className="relative">
          <div className="flex flex-col gap-6 items-center justify-center py-6 px-2 sm:px-8">
            <div className="rounded-full relative overflow-hidden ">
              <Heading
                variant="h1"
                gradient
                className="absolute w-full h-full flex items-center justify-center drop-shadow-lg z-20"
              >
                Welcome!
              </Heading>
              <LottieAnimation animationData={handshakeAnimation} className="w-60 opacity-25" />
            </div>
            <Text variant="body" className="text-foreground text-center">
              Thanks for visiting my portfolio.
              <br />
              Explore my projects, skills, and feel free to get in touch!
            </Text>
            <Button
              onClick={handleClose}
              variant="primary"
              size="md"
              className="shadow-lg w-full hover:scale-105 transition-transform"
              autoFocus
            >
              Get Started
            </Button>
            <Text variant="muted" className="text-center">
              This message will not appear again during this session.
            </Text>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
