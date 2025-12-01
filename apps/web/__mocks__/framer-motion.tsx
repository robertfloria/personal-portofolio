import * as React from 'react';

// Props that are specific to framer-motion and should not be passed to DOM elements
const MOTION_PROPS = [
  'initial',
  'animate',
  'exit',
  'whileHover',
  'whileTap',
  'whileInView',
  'whileFocus',
  'whileDrag',
  'variants',
  'transition',
  'viewport',
  'drag',
  'dragConstraints',
  'dragElastic',
  'dragMomentum',
  'dragTransition',
  'dragPropagation',
  'dragControls',
  'dragListener',
  'dragDirectionLock',
  'onDrag',
  'onDragStart',
  'onDragEnd',
  'onDirectionLock',
  'onDragTransitionEnd',
  'layout',
  'layoutId',
  'layoutDependency',
  'onLayoutAnimationStart',
  'onLayoutAnimationComplete',
  'onViewportEnter',
  'onViewportLeave',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onPan',
  'onPanStart',
  'onPanEnd',
  'onPanSessionStart',
  'onTap',
  'onTapStart',
  'onTapCancel',
  'onHoverStart',
  'onHoverEnd',
  'transformTemplate',
  'custom',
  'inherit',
] as const;

// Filter out motion-specific props before passing to DOM
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function filterMotionProps(props: any): Record<string, unknown> {
  const filtered = { ...props };
  for (const prop of MOTION_PROPS) {
    delete filtered[prop];
  }
  return filtered;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createMotionComponent = (tag: string) => (props: any) =>
  React.createElement(tag, filterMotionProps(props), props.children);

const motionObj = {
  div: createMotionComponent('div'),
  span: createMotionComponent('span'),
  img: createMotionComponent('img'),
  p: createMotionComponent('p'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
  h3: createMotionComponent('h3'),
  section: createMotionComponent('section'),
  article: createMotionComponent('article'),
  ul: createMotionComponent('ul'),
  li: createMotionComponent('li'),
  button: createMotionComponent('button'),
  a: createMotionComponent('a'),
  nav: createMotionComponent('nav'),
  header: createMotionComponent('header'),
  footer: createMotionComponent('footer'),
  main: createMotionComponent('main'),
  aside: createMotionComponent('aside'),
  form: createMotionComponent('form'),
  input: createMotionComponent('input'),
  textarea: createMotionComponent('textarea'),
  label: createMotionComponent('label'),
  svg: createMotionComponent('svg'),
  path: createMotionComponent('path'),
  circle: createMotionComponent('circle'),
};

export const motion = motionObj;
export const AnimatePresence = ({ children }: { children?: React.ReactNode }) =>
  React.createElement(React.Fragment, null, children);
export const useInView = () => true;
export const useAnimation = () => ({});
export const useScroll = () => ({ scrollY: { get: () => 0 }, scrollYProgress: { get: () => 0 } });
export const useTransform = () => 0;
export const useMotionValue = () => ({ get: () => 0, set: () => {} });
export const useSpring = () => ({ get: () => 0 });
export default motionObj;
