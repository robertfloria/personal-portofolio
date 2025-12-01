import React from 'react';

// Props that are specific to lottie-react and should not be passed to DOM elements
const LOTTIE_PROPS = [
  'animationData',
  'loop',
  'autoplay',
  'initialSegment',
  'onComplete',
  'onLoopComplete',
  'onEnterFrame',
  'onSegmentStart',
  'onConfigReady',
  'onDataReady',
  'onDataFailed',
  'onLoadedImages',
  'onDOMLoaded',
  'onDestroy',
  'lottieRef',
  'renderer',
  'rendererSettings',
  'audioFactory',
  'assetsPath',
  'path',
  'interactivity',
] as const;

type LottieProp = (typeof LOTTIE_PROPS)[number];

// Filter out lottie-specific props before passing to DOM
function filterLottieProps<T extends Record<string, unknown>>(props: T): Omit<T, LottieProp> {
  const filtered = { ...props };
  for (const prop of LOTTIE_PROPS) {
    delete (filtered as Record<string, unknown>)[prop];
  }
  return filtered as Omit<T, LottieProp>;
}

// Simple mock for LottieAnimation component
interface LottieAnimationProps {
  [key: string]: unknown;
}

const LottieAnimation = (props: LottieAnimationProps) => (
  <div data-testid="mock-lottie-animation" {...filterLottieProps(props)} />
);

export default LottieAnimation;
export const Player = LottieAnimation;
export const LottieComponentProps = {};
export const useLottie = () => ({
  View: <div data-testid="mock-lottie-view" />,
  play: () => {},
  stop: () => {},
  pause: () => {},
  setSpeed: () => {},
  goToAndStop: () => {},
  goToAndPlay: () => {},
  setDirection: () => {},
  playSegments: () => {},
  setSubframe: () => {},
  getDuration: () => 0,
  destroy: () => {},
  animationLoaded: false,
  animationItem: null,
});
