/**
 * LottieAnimation component
 *
 * Renders a Lottie animation using lottie-react Player.
 * - Accepts animationData, loop, autoplay, style, and className props.
 * - Defaults to looping and autoplay enabled.
 *
 * @example
 * <LottieAnimation animationData={data} style={{ width: 200 }} />
 */
import React from 'react';
import Player, { LottieComponentProps } from 'lottie-react';

export const LottieAnimation: React.FC<LottieComponentProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  style,
  className,
}) => {
  return (
    <Player
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
      className={className}
    />
  );
};

