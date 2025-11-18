import * as React from 'react';

const motionObj = {
  div: (props: React.ComponentProps<'div'>) => React.createElement('div', props, props.children),
  span: (props: React.ComponentProps<'span'>) => React.createElement('span', props, props.children),
  img: (props: React.ComponentProps<'img'>) => React.createElement('img', props),
  // fallback for any motion() usage
};

export const motion = motionObj;
export const AnimatePresence = ({ children }: { children?: React.ReactNode }) =>
  React.createElement(React.Fragment, null, children);
export default motionObj;
