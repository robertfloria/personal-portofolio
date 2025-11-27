import React from 'react';
import Player, { LottieComponentProps } from 'lottie-react';

const LottieAnimation: React.FC<LottieComponentProps> = ({
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

export default LottieAnimation;
