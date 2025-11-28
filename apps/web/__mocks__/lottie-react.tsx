import React from 'react';
// Simple mock for LottieAnimation component
const LottieAnimation = ({ animationData, ...props }: any) => (
  <div data-testid="mock-lottie-animation" {...props} />
);
export default LottieAnimation;
export const Player = LottieAnimation;
export const LottieComponentProps = {};
