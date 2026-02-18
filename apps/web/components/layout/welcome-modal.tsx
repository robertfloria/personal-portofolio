'use client';

import React, { useEffect, useState, forwardRef } from 'react';
import { Button, Heading, Text, Modal, LottieAnimation } from '@/components/common';
import handshakeAnimation from '../../public/lottie/handshake.json';

const SESSION_STORAGE_KEY = 'welcomeModalDismissed';

const WelcomeModalInner = () => {
  const [open, setOpen] = useState(false);
  const [handshakeAnimationPlayed, setHandshakeAnimationPlayed] = useState(false);

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

  const handleHandshakeAnimationEnd = () => {
    setHandshakeAnimationPlayed(true);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        {!handshakeAnimationPlayed && (
          <div className="flex justify-center items-center w-[80vw] md:w-[40vw] rounded-full overflow-hidden">
            <LottieAnimation
              animationData={handshakeAnimation}
              loop={false}
              speed={1.5}
              onComplete={handleHandshakeAnimationEnd}
            />
          </div>
        )}
        {handshakeAnimationPlayed && (
          <Modal.Content className="max-w-md">
            <Modal.Body className="relative overflow-hidden">
              <div className="flex flex-col gap-component items-center justify-center overflow-hidden">
                <Heading variant="h2" gradient className="z-1">
                  Welcome!
                </Heading>
                <Text variant="body" className="text-foreground text-center">
                  Thanks for visiting my portfolio.
                  <br />
                  Explore my projects, skills, and feel free to get in touch!
                </Text>
                <Button
                  onClick={handleClose}
                  variant="primary"
                  size="md"
                  className="w-full"
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
        )}
      </Modal>
    </>
  );
};

export const WelcomeModal = forwardRef(WelcomeModalInner);
WelcomeModal.displayName = 'WelcomeModal';
