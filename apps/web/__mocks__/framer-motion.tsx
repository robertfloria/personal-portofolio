import * as React from 'react';

const motionObj = {
  div: (props: any) => React.createElement('div', props, props.children),
  span: (props: any) => React.createElement('span', props, props.children),
  img: (props: any) => React.createElement('img', props),
  // fallback for any motion() usage
};

export const motion = motionObj;
export const AnimatePresence = ({ children }: any) =>
  React.createElement(React.Fragment, null, children);
export default motionObj;
