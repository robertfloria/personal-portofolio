import React from 'react';
// Simple mock for LottieAnimation component
interface LottieAnimationProps {
  [key: string]: unknown;
}
const LottieAnimation = (props: LottieAnimationProps) => (
  <div data-testid="mock-lottie-animation" {...props} />
);
export default LottieAnimation;
export const Player = LottieAnimation;
export const LottieComponentProps = {};
