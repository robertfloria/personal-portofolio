/**
 * LottieAnimation component
 *
 * Renders a Lottie animation using lottie-react Player.
 * - Accepts animationData, loop, autoplay, speed, style, and className props.
 * - Defaults to looping and autoplay enabled, normal speed (1).
 * - Speed: 1 = normal, 2 = 2x faster, 0.5 = 0.5x slower
 *
 * @example
 * <LottieAnimation animationData={data} speed={1.5} style={{ width: 200 }} />
 */
'use client';
import React, { useRef } from 'react';
import Player, { LottieComponentProps, LottieRefCurrentProps } from 'lottie-react';
import type { AnimationEvents, AnimationEventName } from 'lottie-web';

interface LottieAnimationProps extends Omit<LottieComponentProps, 'lottieRef'> {
  speed?: number;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  speed = 1,
  style,
  className,
  onDOMLoaded,
  onComplete,
  onLoopComplete,
  onEnterFrame,
  ...props
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleDOMLoaded = (e: AnimationEvents[AnimationEventName]) => {
    if (lottieRef.current && speed !== 1) {
      lottieRef.current.setSpeed(speed);
    }
    if (onDOMLoaded) {
      onDOMLoaded(e);
    }
  };

  return (
    <Player
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
      className={className}
      onDOMLoaded={handleDOMLoaded}
      onComplete={onComplete}
      onLoopComplete={onLoopComplete}
      onEnterFrame={onEnterFrame}
      {...props}
    />
  );
};
